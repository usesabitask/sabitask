import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-sm font-bold uppercase tracking-[0.14em] text-primary", className)}>
      {children}
    </p>
  );
}
