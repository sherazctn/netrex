const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "AI is not configured yet." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { business, audience, service, tone, language } = await req.json();

    if (!business || typeof business !== "string") {
      return new Response(JSON.stringify({ error: "Please describe your business." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const prompt = `You are a senior conversion copywriter and SEO strategist.

Business: ${business}
Primary service / offer: ${service || "not specified"}
Target audience: ${audience || "general business buyers"}
Tone of voice: ${tone || "professional and confident"}
Output language: ${language || "English"}

Produce website copy and SEO assets in this EXACT markdown structure, with no preamble:

## SEO Title
One title, max 60 characters, keyword-first.

## Meta Description
One description, max 155 characters, with a clear benefit and call to action.

## Hero Headline
Three headline options, each on its own bullet, max 10 words each.

## Hero Subheadline
Two options, each one sentence.

## Value Propositions
Four bullets, each a short benefit statement with a concrete outcome.

## Primary Keywords
Eight comma-separated keywords real buyers would search.

## Call To Action Buttons
Three short button labels.`;

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Lovable-API-Key": apiKey,
        "X-Lovable-AIG-SDK": "fetch",
      },
      body: JSON.stringify({
        model: "google/gemini-3.6-flash",
        messages: [
          { role: "system", content: "You write high-converting website copy and SEO metadata. Be specific, never generic." },
          { role: "user", content: prompt },
        ],
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      const status = res.status === 429 || res.status === 402 ? res.status : 502;
      const message =
        res.status === 429
          ? "Too many requests right now. Please try again in a moment."
          : res.status === 402
          ? "AI usage limit reached. Please try again later."
          : "The AI service could not complete this request.";
      console.error("AI gateway error", res.status, detail);
      return new Response(JSON.stringify({ error: message }), {
        status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await res.json();
    const content = data?.choices?.[0]?.message?.content ?? "";

    return new Response(JSON.stringify({ content }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("ai-copy-generator failed", error);
    return new Response(JSON.stringify({ error: "Unexpected error. Please try again." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
