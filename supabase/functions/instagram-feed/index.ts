const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Simple in-memory cache (per isolate) to stay well inside Instagram rate limits.
let cache: { at: number; payload: unknown } | null = null;
const TTL_MS = 15 * 60 * 1000;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  try {
    const token = Deno.env.get("INSTAGRAM_ACCESS_TOKEN");
    if (!token) {
      return json({ connected: false, items: [], reason: "missing_token" });
    }

    if (cache && Date.now() - cache.at < TTL_MS) {
      return json(cache.payload);
    }

    const fields = "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp";
    const url = `https://graph.instagram.com/me/media?fields=${fields}&limit=12&access_token=${token}`;
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
      console.error("Instagram API error", res.status, JSON.stringify(data));
      return json({ connected: false, items: [], reason: "api_error" });
    }

    const items = (data?.data ?? []).map((m: Record<string, string>) => ({
      id: m.id,
      caption: m.caption ?? "",
      permalink: m.permalink,
      timestamp: m.timestamp,
      mediaType: m.media_type,
      image: m.media_type === "VIDEO" ? m.thumbnail_url : m.media_url,
    })).filter((m: { image?: string }) => !!m.image);

    const payload = { connected: true, items };
    cache = { at: Date.now(), payload };
    return json(payload);
  } catch (e) {
    console.error("instagram-feed failed", e);
    return json({ connected: false, items: [], reason: "unexpected_error" });
  }
});
