import {
  ArrowUpCircle,
  Bell,
  GitBranch,
  KanbanSquare,
  LockIcon,
  MessageCircle,
  ScrollText,
  ShieldCheck,
  UnlockIcon,
  Webhook,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type Feature = {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

const features: Feature[] = [
  {
    icon: ArrowUpCircle,
    title: "Feedback boards",
    description:
      "Public or private boards per project, with upvotes and threaded comments so the best ideas rise to the top.",
    className: "md:col-span-2",
  },
  {
    icon: KanbanSquare,
    title: "Public roadmap",
    description:
      "A kanban-style roadmap your users can follow in real time.",
  },
  {
    icon: ScrollText,
    title: "Changelog",
    description:
      "Publish release notes tied to the suggestions you shipped.",
  },
  {
    icon: Webhook,
    title: "Discord integration",
    description:
      "Webhooks on new posts and slash commands to update statuses right from Discord.",
    className: "md:col-span-2",
  },
  {
    icon: Bell,
    title: "Email notifications",
    description:
      "Notify every voter the moment a suggestion changes status.",
  },
  {
    icon: ShieldCheck,
    title: "Roles & permissions",
    description:
      "Owner, Admin, Member and Viewer roles with an admin panel.",
  },
  {
    icon: MessageCircle,
    title: "Custom statuses",
    description:
      "Under Review, Planned, In Progress, Done, Won't Do — your call.",
  },
  {
    icon: GitBranch,
    title: "MIT licensed",
    description:
      "Fork it, modify it, ship it. The whole thing is yours.",
      className: "md:col-span-2",
  },
  {
    icon: UnlockIcon,
    title: "No vendor lock-in",
    description:
      "Your feedback, users and roadmap stay yours. Export your data anytime.",
  },
  {
    icon: GitBranch,
    title: "Self-hosted",
    description:
      "Deploy it wherever you want — Docker, Kubernetes, your VPS or your favorite cloud.",
  },
  {
    icon: ShieldCheck,
    title: "You own it",
    description:
      "Full access to the source code and database. Customize every part of the experience.",
  },
  {
    icon: ArrowUpCircle,
    title: "Unlimited feedback",
    description:
      "No seat limits, vote caps or hidden paywalls. Grow without restrictions.",
  },
  {
    icon: MessageCircle,
    title: "Bring your own branding",
    description:
      "Use your own logo, colors and custom domain to make it truly yours.",
    className: "md:col-span-2",
  },
  {
    icon: Webhook,
    title: "API-first",
    description:
      "Integrate with your existing tools using webhooks and a documented API.",
  },
  {
    icon: ScrollText,
    title: "Data portability",
    description:
      "Import from other platforms and export whenever you need.",
  },
  {
    icon: Bell,
    title: "Privacy by default",
    description:
      "Choose between public communities, private workspaces or invite-only access.",
    className: "md:col-span-2",
  },
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-primary">Everything included</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          A complete <span className="gap-1 bg-primary/20 p-1 rounded-lg leading-14">feedback platform</span>,<br/><span className="text-white/25">not a widget.</span>
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          Boards, roadmaps, changelogs and integrations — open source and
          running on your own infrastructure.
        </p>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 rounded-[48] divide-x divide-y border border-border overflow-hidden">
        {features.map((feature) => (
          <div
            key={feature.title}
            className={cn(
              "group bg-card p-6 border border-border transition-colors hover:bg-primary/1",
              feature.className,
            )}
          >
            <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <feature.icon className="size-5" />
            </span>
            <h3 className="mt-4 text-base font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
