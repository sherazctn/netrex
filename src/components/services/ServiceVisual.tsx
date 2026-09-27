import { Check, GitCommit, Hammer, FlaskConical, Rocket, Globe, Server, Database, Shield, Cloud, Sparkles, Search, TrendingUp, BarChart3, Blocks, FileCode2 } from "lucide-react";

/**
 * Illustrations for services that have no single client project to show.
 * Built from HTML/SVG so they stay sharp on every screen and match the site theme.
 */

function Frame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col bg-gradient-to-br from-secondary/60 via-background to-primary/10 p-6 md:p-8">
      <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-3 truncate text-xs font-medium text-muted-foreground">{title}</span>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-5 p-5">{children}</div>
      </div>
    </div>
  );
}

function Bars({ values, className = "" }: { values: number[]; className?: string }) {
  const max = Math.max(...values);
  return (
    <div className={`flex h-28 items-end gap-2 ${className}`}>
      {values.map((v, i) => (
        <div key={i} className="flex-1 rounded-t-md bg-primary/80" style={{ height: `${(v / max) * 100}%`, opacity: 0.45 + (i / values.length) * 0.55 }} />
      ))}
    </div>
  );
}

function Line({ points }: { points: number[] }) {
  const w = 300;
  const h = 90;
  const max = Math.max(...points);
  const step = w / (points.length - 1);
  const d = points.map((p, i) => `${i ? "L" : "M"}${(i * step).toFixed(1)},${(h - (p / max) * (h - 8)).toFixed(1)}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-24 w-full" preserveAspectRatio="none" aria-hidden="true">
      <path d={`${d} L${w},${h} L0,${h} Z`} className="fill-primary/10" />
      <path d={d} className="stroke-primary" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Kpi({ label, value, trend }: { label: string; value: string; trend?: string }) {
  return (
    <div className="rounded-xl border border-border bg-background p-3">
      <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1 font-display text-xl font-bold">{value}</div>
      {trend && <div className="text-xs font-semibold text-emerald-600">{trend}</div>}
    </div>
  );
}

function Marketing() {
  return (
    <Frame title="Campaign performance · last 90 days">
      <div className="grid grid-cols-3 gap-3">
        <Kpi label="Leads" value="▲" trend="month on month" />
        <Kpi label="Cost / lead" value="▼" trend="month on month" />
        <Kpi label="Organic traffic" value="▲" trend="month on month" />
      </div>
      <Line points={[12, 18, 15, 24, 22, 31, 29, 38, 42, 40, 51, 58]} />
      <div className="space-y-2">
        {[["Google Ads", 78], ["SEO", 64], ["Meta Ads", 52], ["Email", 35]].map(([n, v]) => (
          <div key={n as string} className="flex items-center gap-3 text-sm">
            <span className="w-24 shrink-0 text-muted-foreground">{n}</span>
            <div className="h-2 flex-1 rounded-full bg-secondary"><div className="h-2 rounded-full bg-primary" style={{ width: `${v}%` }} /></div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function Geo() {
  return (
    <Frame title="AI assistant">
      <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-primary px-4 py-3 text-sm text-primary-foreground">
        Which company should I hire for this in my city?
      </div>
      <div className="flex gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Sparkles className="h-4 w-4" /></span>
        <div className="space-y-2 text-sm leading-relaxed">
          <p>Here are well-reviewed options. <strong>Your Brand</strong> stands out for its verified reviews, clear pricing and case studies.</p>
          <div className="flex flex-wrap gap-2">
            {["yourbrand.com", "Google reviews", "Industry directory"].map((s) => (
              <span key={s} className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">{s}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2 rounded-xl border border-border bg-background p-3 text-sm"><Search className="h-4 w-4 text-primary" /> Entity & schema</div>
        <div className="flex items-center gap-2 rounded-xl border border-border bg-background p-3 text-sm"><TrendingUp className="h-4 w-4 text-primary" /> Citations tracked</div>
      </div>
    </Frame>
  );
}

function CloudArch() {
  const Node = ({ icon: Icon, label }: { icon: typeof Globe; label: string }) => (
    <div className="flex flex-col items-center gap-1.5">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-primary shadow-sm"><Icon className="h-5 w-5" /></span>
      <span className="text-center text-[11px] font-medium text-muted-foreground">{label}</span>
    </div>
  );
  const Arrow = () => <div className="mx-auto h-6 w-px bg-primary/40" />;
  return (
    <Frame title="Cloud architecture · AWS / Azure / Google Cloud">
      <div className="flex justify-center"><Node icon={Globe} label="Users · CDN" /></div>
      <Arrow />
      <div className="flex justify-center"><Node icon={Shield} label="Firewall · Load balancer" /></div>
      <Arrow />
      <div className="rounded-xl border border-dashed border-primary/40 p-3">
        <div className="mb-2 text-center text-[11px] font-semibold uppercase tracking-wider text-primary">Auto-scaling app</div>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((i) => <Node key={i} icon={Server} label={`Instance ${i}`} />)}
        </div>
      </div>
      <Arrow />
      <div className="grid grid-cols-2 gap-3">
        <Node icon={Database} label="Managed database" />
        <Node icon={Cloud} label="Backups · storage" />
      </div>
    </Frame>
  );
}

function DevOps() {
  const steps = [
    { icon: GitCommit, label: "Commit" },
    { icon: Hammer, label: "Build" },
    { icon: FlaskConical, label: "Test" },
    { icon: Rocket, label: "Deploy" },
  ];
  return (
    <Frame title="CI/CD pipeline · main">
      <div className="flex items-center justify-between">
        {steps.map((s, i) => (
          <div key={s.label} className="flex flex-1 items-center">
            <div className="flex flex-col items-center gap-1.5">
              <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
                <Check className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-emerald-500 p-0.5 text-white" />
              </span>
              <span className="text-xs font-medium">{s.label}</span>
            </div>
            {i < steps.length - 1 && <div className="mx-1 h-px flex-1 bg-primary/40" />}
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-[#111827] p-4 font-mono text-[11px] leading-6 text-slate-300">
        <div><span className="text-emerald-400">✓</span> install dependencies</div>
        <div><span className="text-emerald-400">✓</span> lint &amp; type-check</div>
        <div><span className="text-emerald-400">✓</span> unit &amp; e2e tests</div>
        <div><span className="text-emerald-400">✓</span> docker build · push image</div>
        <div><span className="text-emerald-400">✓</span> terraform plan · apply</div>
        <div><span className="text-emerald-400">✓</span> rolling deploy to kubernetes</div>
        <div className="text-sky-300">→ health checks passing · zero downtime</div>
      </div>
    </Frame>
  );
}

function Chain() {
  return (
    <Frame title="Smart contract · Token.sol">
      <div className="flex items-center justify-between gap-2">
        {["#1024", "#1025", "#1026"].map((b, i) => (
          <div key={b} className="flex flex-1 items-center">
            <div className="flex-1 rounded-xl border border-border bg-background p-3 text-center">
              <Blocks className="mx-auto h-5 w-5 text-primary" />
              <div className="mt-1 text-xs font-semibold">Block {b}</div>
              <div className="font-mono text-[10px] text-muted-foreground">0x{(9 + i).toString(16)}f3…a{i}c</div>
            </div>
            {i < 2 && <div className="h-px w-3 bg-primary/40" />}
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-[#111827] p-4 font-mono text-[11px] leading-6 text-slate-300">
        <div className="text-slate-500">// SPDX-License-Identifier: MIT</div>
        <div><span className="text-sky-300">contract</span> Token <span className="text-sky-300">is</span> ERC20, Ownable {"{"}</div>
        <div className="pl-4"><span className="text-sky-300">function</span> <span className="text-amber-300">mint</span>(address to, uint256 amount)</div>
        <div className="pl-8">external onlyOwner {"{"}</div>
        <div className="pl-12">_mint(to, amount);</div>
        <div className="pl-8">{"}"}</div>
        <div>{"}"}</div>
      </div>
      <div className="flex items-center gap-2 text-xs font-medium text-emerald-600"><FileCode2 className="h-4 w-4" /> Tests passing · ready for audit</div>
    </Frame>
  );
}

function Analytics() {
  return (
    <Frame title="Business dashboard">
      <div className="grid grid-cols-3 gap-3">
        <Kpi label="Revenue" value="▲" trend="vs last month" />
        <Kpi label="Orders" value="▲" trend="vs last month" />
        <Kpi label="Churn" value="▼" trend="vs last month" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-border bg-background p-3">
          <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-muted-foreground"><BarChart3 className="h-3.5 w-3.5" /> Sales by region</div>
          <Bars values={[34, 52, 41, 66, 58, 74]} />
        </div>
        <div className="rounded-xl border border-border bg-background p-3">
          <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-muted-foreground"><TrendingUp className="h-3.5 w-3.5" /> Forecast</div>
          <Line points={[20, 26, 24, 33, 36, 35, 44, 49, 55]} />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 text-center text-[11px] text-muted-foreground">
        {["CRM", "Ads", "Store", "ERP"].map((s) => (
          <span key={s} className="rounded-lg border border-border bg-background py-1.5">{s}</span>
        ))}
      </div>
    </Frame>
  );
}

const VISUALS: Record<string, () => JSX.Element> = {
  "digital-marketing": Marketing,
  geo: Geo,
  "cloud-solutions": CloudArch,
  devops: DevOps,
  blockchain: Chain,
  "data-analytics": Analytics,
};

export function hasServiceVisual(slug?: string) {
  return !!slug && slug in VISUALS;
}

export function ServiceVisual({ slug }: { slug: string }) {
  const V = VISUALS[slug];
  return V ? <V /> : null;
}
