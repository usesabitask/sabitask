import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes } from "react";

import { linkProps } from "@/config/site";
import { cn } from "@/lib/utils";

export const ctaVariants = cva(
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-base font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-cta hover:-translate-y-0.5 hover:bg-primary-hover focus-visible:ring-ring focus-visible:ring-offset-background",
        outline:
          "border-2 border-primary text-primary hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground focus-visible:ring-ring focus-visible:ring-offset-background",
        light:
          "bg-card text-primary hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground focus-visible:ring-accent focus-visible:ring-offset-primary",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

type CtaLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof ctaVariants> & { href: string };

export function CtaLink({ href, variant, className, children, ...rest }: CtaLinkProps) {
  return (
    <a {...linkProps(href)} className={cn(ctaVariants({ variant }), className)} {...rest}>
      {children}
    </a>
  );
}
