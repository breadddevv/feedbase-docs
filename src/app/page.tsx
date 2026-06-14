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
  const [waitlistopen, setWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <WaitlistModal open={waitlistopen} onClose={() => setWaitlistOpen(!waitlistopen)}  />
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
