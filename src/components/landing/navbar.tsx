import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navLinks } from "@/config/site";
import { CtaLink } from "./cta-link";
import { Logo } from "./logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled || open ? "border-border bg-background" : "border-transparent bg-background/0"
      }`}
    >
      <nav aria-label="Main" className="container-page flex h-18 items-center justify-between py-4">
        <a
          href="#top"
          aria-label="SabiTask home"
          className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md text-sm font-medium text-foreground/80 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <CtaLink href="#find-expert" className="min-h-11 px-6 text-sm">
            Find a SabiExpert
          </CtaLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-11 place-items-center rounded-full text-foreground transition-colors hover:bg-primary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background lg:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-primary-soft hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <CtaLink href="#find-expert" onClick={close} className="w-full">
                Find a SabiExpert
              </CtaLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
