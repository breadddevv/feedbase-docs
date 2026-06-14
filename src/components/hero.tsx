"use client"

import { BoardMockup } from "@/components/board-mockup"
import { ArrowRight, CopyIcon, CheckIcon, MailIcon } from "lucide-react"
import { TbBrandGithubFilled } from "react-icons/tb";
import { useEffect, useState } from "react";

interface props {
  waitlistmodal: () => void
}

export function Hero({waitlistmodal}: props) {
  const [copied, isCopied] = useState(false)

  useEffect((() => {
    if (!copied) return;
    setTimeout(() => {
      isCopied(false)
    }, 1500)
  }  
  ), [copied])

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-40 -z-10 h-144 w-xl -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[48px_48px] opacity-40 mask-[radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <a
            href="https://github.com/breadddevv/feedbase"
            target="_blank"
            rel="noreferrer"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="flex size-1.5 rounded-full bg-primary" />
            Open source · MIT licensed · Self-hosted
            <ArrowRight className="size-3" />
          </a>

          <h1 className="text-white/90 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Feedback boards your users will{" "}
            <span className="text-primary">actually use</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Feedbase is the open-source, self-hosted home for ideas, bug
            reports, and roadmaps. No SaaS subscriptions. No vendor lock-in.
            Your data stays yours.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <button className="px-5 py-3 rounded-xl bg-primary/90 font-semibold flex gap-2 justify-center" onClick={waitlistmodal}>
              Join our waitlist <MailIcon />
            </button>
            <button
              className="gap-2 bg-transparent text-white flex px-5 py-3 rounded-xl hover:bg-white/10"
            >
              <TbBrandGithubFilled className="size-4 my-auto" />
                Star on GitHub
            </button>
          </div>

          <div className="hidden mt-6 md:flex items-center gap-3 rounded-lg border border-border bg-card/60 px-4 py-2.5 font-mono text-sm">
            <code className="text-muted-foreground">
              <span className="text-white">$</span> git clone https://github.com/breadddevv/feedbase
            </code>
            {
              copied ? <CheckIcon className="text-green-700 w-4" /> : <CopyIcon className="text-white/40 w-4 hover:text-white hover:cursor-pointer transition-colors" onClick={() => { 
                isCopied(true); 
                navigator.clipboard.writeText("git clone https://github.com/breadddevv/feedbase")
              }}/>
            }
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-10 -top-10 bottom-0 -z-10 rounded-[2rem] bg-primary/10 blur-3xl"
          />
          <BoardMockup />
        </div>
      </div>
    </section>
  )
}
