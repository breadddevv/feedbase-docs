"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    q: "Is Feedbase really free?",
    a: "Yes. Feedbase is MIT licensed and fully open source. There are no paid tiers, seat limits, or feature gates — you host it yourself and use everything.",
  },
  {
    q: "Where is my data stored?",
    a: "In your own PostgreSQL database. Feedbase never phones home and no third party has access to your users' feedback.",
  },
  {
    q: "How do I deploy it?",
    a: "The fastest path is Docker — clone the repo, copy the example env file, and run docker compose up -d. There are also one-click deploy buttons for Railway and Vercel.",
  },
  {
    q: "Can I customize the look and feel?",
    a: "Absolutely. It's a Next.js app styled with Tailwind CSS, so you can fork it and change anything. The MIT license lets you modify and ship it however you like.",
  },
  {
    q: "Does it integrate with Discord?",
    a: "Yes — webhooks fire on new posts and you can update suggestion statuses with slash commands directly from Discord. Slack and GitHub Issues sync are on the roadmap.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(-1)

  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <div className="text-center">
        <p className="text-sm font-medium text-primary">FAQ</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Questions, answered
        </h2>
      </div>

      <div className="mt-12 flex flex-col gap-3">
        {faqs.map((faq, i) => {
          const isOpen = open === i
          return (
            <div
              key={faq.q}
              className="rounded-2xl border border-border bg-card"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-medium">{faq.q}</span>
                <ChevronDown
                  className={cn(
                    "size-5 shrink-0 text-muted-foreground transition-transform",
                    isOpen && "rotate-180 text-white",
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-200",
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
