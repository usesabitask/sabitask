import { CheckCircle2, Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./brand-icons";
import { ctaVariants } from "./cta-link";

const copy = {
  student: {
    title: "Find a SabiExpert",
    intro: "Tell us what you need help with and we'll match you with the right SabiExpert.",
    url: siteConfig.forms.findExpert,
    doneTitle: "Request received!",
    doneText:
      "Thanks for reaching out. We'll review your request and connect you with a SabiExpert on WhatsApp.",
  },
  expert: {
    title: "Become a SabiExpert",
    intro: "Share a little about yourself and the areas you can help fellow students with.",
    url: siteConfig.forms.becomeExpert,
    doneTitle: "Application received!",
    doneText:
      "Thanks for applying. We'll review your application and reach out to you on WhatsApp.",
  },
} as const;

type Props = { open: boolean; onOpenChange: (open: boolean) => void; kind: keyof typeof copy };

export function FormModal({ open, onOpenChange, kind }: Props) {
  const c = copy[kind];
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const loads = useRef(0);

  useEffect(() => {
    if (open) {
      loads.current = 0;
      setLoading(true);
      setSubmitted(false);
    }
  }, [open]);

  // Google Forms reloads the iframe after submission: the 2nd load means "submitted".
  const handleLoad = () => {
    loads.current += 1;
    if (loads.current === 1) setLoading(false);
    else setSubmitted(true);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[92dvh] w-[calc(100%-1.5rem)] max-w-2xl flex-col gap-0 overflow-hidden rounded-3xl p-0">
        {submitted ? (
          <div className="flex flex-col items-center px-6 py-12 text-center sm:px-12">
            <div className="flex size-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 aria-hidden="true" className="size-9 text-primary" />
            </div>
            <DialogTitle className="mt-6 text-2xl font-extrabold sm:text-3xl">{c.doneTitle}</DialogTitle>
            <DialogDescription className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
              {c.doneText} While you wait, join our WhatsApp channel for updates.
            </DialogDescription>
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={siteConfig.whatsappChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(ctaVariants(), "w-full sm:w-auto")}
              >
                <WhatsAppIcon className="size-5" />
                Join WhatsApp Channel
              </a>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className={cn(ctaVariants({ variant: "outline" }), "w-full sm:w-auto")}
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="border-b border-border px-6 pb-4 pt-6 pr-12">
              <DialogTitle className="text-xl font-extrabold sm:text-2xl">{c.title}</DialogTitle>
              <DialogDescription className="mt-1 text-sm text-muted-foreground">{c.intro}</DialogDescription>
            </div>
            <div className="relative min-h-[60dvh] flex-1 overflow-y-auto bg-background">
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center gap-2 text-muted-foreground">
                  <Loader2 aria-hidden="true" className="size-5 animate-spin text-primary" />
                  Loading form…
                </div>
              )}
              {open && (
                <iframe
                  title={c.title}
                  src={c.url}
                  onLoad={handleLoad}
                  className={cn("h-[2100px] w-full border-0 transition-opacity", loading ? "opacity-0" : "opacity-100")}
                />
              )}
            </div>
            <div className="border-t border-border px-6 py-3 text-center text-sm text-muted-foreground">
              Already submitted?{" "}
              <button type="button" onClick={() => setSubmitted(true)} className="font-semibold text-primary hover:underline">
                Continue
              </button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
