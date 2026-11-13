import { cn } from "@/lib/utils";

/** Text-based SabiTask wordmark. `tone="light"` for dark backgrounds. */
export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xl font-extrabold tracking-tight",
        tone === "dark" ? "text-foreground" : "text-surface-dark-foreground",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="grid size-8 place-items-center rounded-lg bg-primary text-base font-extrabold text-primary-foreground"
      >
        S
      </span>
      <span>
        Sabi<span className={tone === "dark" ? "text-primary" : "text-accent"}>Task</span>
      </span>
    </span>
  );
}
