import { cn } from "@/lib/utils";

import logoSrc from "@/assets/sabitask-logo.png";
import logoLightSrc from "@/assets/sabitask-logo-light.png";

/**
 * SabiTask logo. `tone="light"` swaps in the white version for dark backgrounds.
 * Bundled with the app (not CDN-hosted) so it always ships with each publish.
 */
export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <img
      src={tone === "dark" ? logoSrc : logoLightSrc}
      alt="SabiTask"
      width={900}
      height={198}
      draggable={false}
      className={cn("h-8 w-auto select-none sm:h-9", className)}
    />
  );
}
