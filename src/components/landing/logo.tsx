import { cn } from "@/lib/utils";

import logoAsset from "@/assets/sabiotask-logo.png.asset.json";
import logoLightAsset from "@/assets/sabiotask-logo-light.png.asset.json";

/**
 * SabiTask logo. `tone="light"` swaps in the white version for dark backgrounds.
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
      src={tone === "dark" ? logoAsset.url : logoLightAsset.url}
      alt="SabiTask"
      width={1451}
      height={874}
      draggable={false}
      className={cn("h-11 w-auto select-none", className)}
    />
  );
}
