"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronUp, Plus } from "lucide-react"
import Image from "next/image"
import fb from "@/../public/fb.svg"

type Column = {
  key: string
  title: string
  dot: string
}

type Card = {
  id: string
  column: string
  title: string
  votes: number
}

const columns: Column[] = [
  { key: "planned", title: "Planned", dot: "bg-blue-400" },
  { key: "progress", title: "In Progress", dot: "bg-amber-400" },
  { key: "complete", title: "Complete", dot: "bg-emerald-400" },
]

const initialCards: Card[] = [
  { id: "1", column: "planned", title: "Slack integration for new feedback", votes: 187 },
  { id: "2", column: "planned", title: "Custom domains per board", votes: 64 },
  { id: "3", column: "progress", title: "Dark mode for public roadmap", votes: 248 },
  { id: "4", column: "progress", title: "GitHub Issues two-way sync", votes: 96 },
  { id: "5", column: "complete", title: "Threaded comments on posts", votes: 312 },
]

const navLinks = ["Roadmap", "Feedback", "Support Cases", "Bug Reports", "Changelogs"]

export function BoardMockup() {
  const [cards, setCards] = useState(initialCards)
  const [voted, setVoted] = useState<Record<string, boolean>>({})

  function toggleVote(id: string) {
    setVoted((prev) => {
      const isVoted = prev[id]
      setCards((c) =>
        c.map((card) =>
          card.id === id ? { ...card, votes: card.votes + (isVoted ? -1 : 1) } : card,
        ),
      )
      return { ...prev, [id]: !isVoted }
    })
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-2xl shadow-black/40">
      <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-6">
        <Image src={fb} alt="FB" width={2} height={2} className="w-7" />
        <nav className="hidden items-center gap-5 text-xs font-medium text-muted-foreground md:flex">
          {navLinks.map((link, i) => (
            <span key={link} className={cn(i === 0 && "text-foreground")}>
              {link}
            </span>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <span className="flex size-5 items-center justify-center rounded-full bg-primary/20 text-[10px] font-semibold text-primary">
            b
          </span>
          <span className="text-xs font-medium text-muted-foreground">bread</span>
        </div>
      </div>

      {/* roadmap body */}
      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold tracking-tight sm:text-2xl">Roadmap</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              See what the community is stepping towards
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-primary px-2.5 py-1.5 text-xs font-medium text-primary-foreground">
            <Plus className="size-3.5" />
            New
          </span>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {columns.map((col) => {
            const colCards = cards.filter((c) => c.column === col.key)
            return (
              <div
                key={col.key}
                className="rounded-xl border border-border bg-card/40 p-3"
              >
                <div className="flex items-center gap-2 border-b border-dashed border-border pb-2">
                  <span className={cn("size-2 rounded-full", col.dot)} />
                  <p className="text-xs font-semibold">{col.title}</p>
                  <span className="ml-auto text-[11px] text-muted-foreground">
                    {colCards.length}
                  </span>
                </div>

                <div className="mt-3 flex flex-col gap-2">
                  {colCards.map((card) => (
                    <div
                      key={card.id}
                      className="flex items-start gap-2 rounded-lg border border-border bg-background p-2.5"
                    >
                      <button
                        type="button"
                        onClick={() => toggleVote(card.id)}
                        aria-pressed={!!voted[card.id]}
                        aria-label={`Upvote ${card.title}`}
                        className={cn(
                          "flex min-w-9 flex-col items-center rounded-md border px-1.5 py-1 text-xs font-semibold transition-colors",
                          voted[card.id]
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border text-foreground hover:border-primary/60",
                        )}
                      >
                        <ChevronUp className="size-3.5" />
                        {card.votes}
                      </button>
                      <p className="mt-0.5 text-xs font-medium leading-snug">
                        {card.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
