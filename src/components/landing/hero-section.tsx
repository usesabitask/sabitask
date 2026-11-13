import { ArrowRight } from "lucide-react";

import { CtaLink } from "./cta-link";

export function HeroSection() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="container-page relative flex flex-col items-center pb-24 pt-16 text-center sm:pt-24 lg:pb-32 lg:pt-28">
        <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
          <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
          Student-powered academic support
        </p>

        <h1
          id="hero-title"
          className="animate-fade-up mt-8 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground [animation-delay:80ms] sm:text-6xl lg:text-7xl"
        >
          Academic Support, <span className="text-primary">Powered by Students.</span>
        </h1>

        <p className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground [animation-delay:160ms] sm:text-xl">
          Get the academic guidance you need from talented student experts. Learn better, grow
          together and make every academic challenge easier.
        </p>

        <div className="animate-fade-up mt-10 [animation-delay:240ms]">
          <CtaLink href="#find-expert" className="group">
            Find a SabiExpert
            <ArrowRight aria-hidden="true" className="size-5 transition-transform group-hover:translate-x-0.5" />
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
