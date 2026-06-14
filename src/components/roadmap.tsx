import { cn } from "@/lib/utils"
import { ChevronUp } from "lucide-react"

type Column = {
  title: string
  accent: string
  items: { title: string; votes: number }[]
}

const columns: Column[] = [
  {
    title: "Planned",
    accent: "bg-blue-400",
    items: [
      { title: "Slack integration", votes: 187 },
      { title: "REST API + API keys", votes: 121 },
      { title: "Custom domains per board", votes: 64 },
    ],
  },
  {
    title: "In Progress",
    accent: "bg-amber-400",
    items: [
      { title: "Dark mode for roadmaps", votes: 248 },
      { title: "GitHub Issues sync", votes: 96 },
    ],
  },
  {
    title: "Complete",
    accent: "bg-emerald-400",
    items: [
      { title: "Threaded comments", votes: 312 },
      { title: "Email notifications", votes: 204 },
    ],
  },
]

export function Roadmap() {
  return (
    <section
      id="roadmap"
      className="border-y border-border bg-card/30 py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">Built in the open</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Show users exactly what you&apos;re building
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            A shareable roadmap keeps everyone in the loop. Drag suggestions
            across statuses and your public board updates instantly.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {columns.map((col) => (
            <div
              key={col.title}
              className="rounded-2xl border border-border bg-background/60 p-4"
            >
              <div className="mb-4 flex items-center gap-2">
                <span className={cn("size-2 rounded-full", col.accent)} />
                <p className="text-sm font-medium">{col.title}</p>
                <span className="ml-auto text-xs text-muted-foreground">
                  {col.items.length}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {col.items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-border bg-card p-3"
                  >
                    <p className="text-sm font-medium leading-snug">
                      {item.title}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1 rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground">
                      <ChevronUp className="size-3.5 text-primary" />
                      {item.votes}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
