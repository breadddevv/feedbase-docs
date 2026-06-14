import { ArrowRight, MailIcon } from "lucide-react"
import { TbBrandGithubFilled } from "react-icons/tb";

interface props {
  waitlistmodal: () => void
}

export function Cta({waitlistmodal}: props) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 z-0 h-64 w-160 -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]"
        />
        <div className="relative z-10 mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
            Free & open source
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Own your feedback loop
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Give your users a real say in what you build next — without handing
            their data to a SaaS. Deploy Feedbase in minutes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={waitlistmodal}
              className="inline-flex items-center gap-2 rounded-xl cursor-pointer bg-primary/90 px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary"
            >
              Join our waitlist
              <MailIcon className="size-4" />
            </button>
            <a
              href="https://github.com/breadddevv/feedbase"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-transparent px-5 py-3 cursor-pointer text-sm font-semibold transition-colors hover:bg-white/10"
            >
              <TbBrandGithubFilled className="size-4" />
              View source
            </a>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            MIT licensed · No credit card required · Self-hosted
          </p>
        </div>
      </div>
    </section>
  )
}