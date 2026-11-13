import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "./brand-icons";
import { CtaLink } from "./cta-link";

export function WhatsAppCTASection() {
  return (
    <section id="whatsapp" aria-labelledby="whatsapp-title" className="section-y">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12 lg:py-20">
          <div aria-hidden="true" className="absolute -right-16 -top-16 size-56 rounded-full border-[28px] border-accent/25" />
          <div aria-hidden="true" className="absolute -bottom-20 -left-10 size-48 rounded-full bg-primary-hover" />

          <div className="relative mx-auto max-w-2xl">
            <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-primary-foreground/10">
              <WhatsAppIcon className="size-7 text-accent" />
            </span>
            <h2 id="whatsapp-title" className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Stay Connected with SabiTask.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-primary-foreground/85">
              Get updates, academic opportunities, learning resources and exciting announcements
              from the SabiTask community.
            </p>
            <CtaLink href={siteConfig.whatsappChannelUrl} variant="light" className="mt-9 w-full sm:w-auto">
              Join Our WhatsApp Channel
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
