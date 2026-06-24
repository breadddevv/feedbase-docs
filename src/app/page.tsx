"use client"

import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Features } from "@/components/features"
import { Roadmap } from "@/components/roadmap"
import { SelfHost } from "@/components/selfhost"
import { Faq } from "@/components/faq"
import { Cta } from "@/components/cta"
import { useState } from "react"
import { WaitlistModal } from "@/components/waitlist-modal"

export default function Page() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen text-foreground">
      <main>
        <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
        <Hero waitlistmodal={() => setWaitlistOpen(true)} />
        <Stats />
        <Features />
        <Roadmap />
        <SelfHost />
        <Faq />
        <Cta waitlistmodal={() => setWaitlistOpen(true)}/>
      </main>
    </div>
  )
}
