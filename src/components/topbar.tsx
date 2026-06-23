"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaDiscord } from "react-icons/fa6";
import fb from "@/../public/fb.svg";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Self-host", href: "#self-host" },
  { label: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 ${!open ? "border-b" : ""} border-border/60 bg-background/80 backdrop-blur-xl`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="/" aria-label="Feedbase home" className="shrink-0">
            <Image src={fb} alt="FB" width={2} height={2} className="w-12 h-9" />
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://discord.gg/aYYFyfJSJC"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <FaDiscord className="size-4" />
            </a>
            <a
              href="https://github.com/breadddevv/feedbase"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <TbBrandGithubFilled className="size-4" />
            </a>
            <a
              href="https://github.com/breadddevv/feedbase"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary/90 px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary"
            >
              Deploy now
              <ArrowRight className="size-3.5" />
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex size-9 items-center justify-center rounded-md text-foreground"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile dropdown is now a sibling, not nested inside the blurred header */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 border-border/60 bg-background/80 backdrop-blur-xl px-4 py-4 md:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-border/60 pt-3">
                <a
                  href="https://discord.gg/aYYFyfJSJC"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                >
                  <FaDiscord className="size-4" />
                  Discord Server
                </a>
                <a
                  href="https://github.com/breadddevv/feedbase"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                >
                  <TbBrandGithubFilled className="size-4" />
                  GitHub
                </a>
                <a
                  href="https://github.com/breadddevv/feedbase"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary/90 px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary"
                >
                  Deploy now
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-16" />
    </>
  );
}