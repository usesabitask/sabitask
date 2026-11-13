import { CheckCircle2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { CtaLink } from "./cta-link";
import { Eyebrow } from "./section-heading";

type FeatureSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  benefits: string[];
  cta: { label: string; href: string; variant?: "primary" | "outline" };
  image: { src: string; alt: string };
  /** "right" = text left, image right. "left" = image left, text right. Mobile always stacks text first. */
  imagePosition: "left" | "right";
  className?: string;
};

export function FeatureSection({
  id,
  eyebrow,
  title,
  description,
  benefits,
  cta,
  image,
  imagePosition,
  className,
}: FeatureSectionProps) {
  const titleId = `${id}-title`;
  const imageLeft = imagePosition === "left";

  return (
    <section id={id} aria-labelledby={titleId} className={cn("section-y", className)}>
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className={cn(imageLeft && "lg:order-2")}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 id={titleId} className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{description}</p>

          <ul className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <CheckCircle2 aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-accent" strokeWidth={2.2} />
                <span className="text-base font-medium leading-relaxed text-foreground">{benefit}</span>
              </li>
            ))}
          </ul>

          <CtaLink href={cta.href} variant={cta.variant} className="mt-10 w-full sm:w-auto">
            {cta.label}
          </CtaLink>
        </div>

        <div className={cn("relative", imageLeft && "lg:order-1")}>
          <div
            aria-hidden="true"
            className={cn(
              "absolute -bottom-4 size-full rounded-3xl bg-primary-soft",
              imageLeft ? "-left-4" : "-right-4",
            )}
          />
          <img
            src={image.src}
            alt={image.alt}
            width={1024}
            height={1280}
            loading="lazy"
            decoding="async"
            className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-card"
          />
        </div>
      </div>
    </section>
  );
}
