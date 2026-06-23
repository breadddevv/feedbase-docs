import { Check, Copy, Database, Lock, Server, ArrowRight } from "lucide-react"

const points = [
  {
    icon: Lock,
    title: "Your data, your rules",
    description: "Everything lives in your PostgreSQL. No third party ever sees it.",
  },
  {
    icon: Server,
    title: "Deploy anywhere",
    description: "Docker, docker-compose, Railway or Vercel — one click each.",
  },
  {
    icon: Database,
    title: "Next.js + Prisma",
    description: "A familiar modern stack that's easy to fork and extend.",
  },
]

const stack = ["Next.js", "better-auth", "PostgreSQL", "Prisma", "Tailwind CSS", "Docker"]

export function SelfHost() {
  return (
    <section id="self-host" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-primary">Self-hosted</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Up and running in minutes
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Clone the repo, fill in your environment variables, and bring it up
            with Docker. No SaaS subscriptions, no per-seat pricing, no limits.
          </p>

          <ul className="mt-8 flex flex-col gap-5">
            {points.map((p) => (
              <li key={p.title} className="flex gap-4 group">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary transition-colors">
                  <p.icon className="size-5 group-hover:text-white" />
                </span>
                <div>
                  <p className="font-medium">{p.title}</p>
                  <p className="text-sm text-muted-foreground">{p.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            {stack.map((s) => (
              <span
                key={s}
                className="rounded-sm border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* terminal card */}
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/40">
          <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-muted-foreground/30" />
              <span className="size-3 rounded-full bg-muted-foreground/30" />
              <span className="size-3 rounded-full bg-muted-foreground/30" />
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Copy className="size-3.5" />
              bash
            </span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-sm leading-7">
            <code>
              <span className="text-muted-foreground"># 1. Clone &amp; configure</span>
              {"\n"}
              <span className="text-primary">$</span> git clone github.com/breadddevv/feedbase
              {"\n"}
              <span className="text-primary">$</span> cp .env.example .env
              {"\n\n"}
              <span className="text-muted-foreground"># 2. Launch with Docker</span>
              {"\n"}
              <span className="text-primary">$</span> docker compose up -d
              {"\n\n"}
              <span className="inline-flex items-center gap-1.5 text-emerald-400">
                <Check className="inline size-4" /> Live at localhost:3000
              </span>
            </code>
          </pre>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href="https://github.com/breadddevv/feedbase"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-primary/90 px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary"
        >
          Read the docs
          <ArrowRight className="size-4" />
        </a>
        <a
          href="https://github.com/breadddevv/feedbase"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-transparent px-5 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
        >
          One-click deploy
        </a>
      </div>
    </section>
  )
}