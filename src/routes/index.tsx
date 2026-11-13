import { createFileRoute } from "@tanstack/react-router";

import { BecomeExpertSection } from "@/components/landing/become-expert-section";
import { FindExpertSection } from "@/components/landing/find-expert-section";
import { Footer } from "@/components/landing/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { Navbar } from "@/components/landing/navbar";
import { ServicesSection } from "@/components/landing/services-section";
import { WhatsAppCTASection } from "@/components/landing/whatsapp-cta-section";

const title = "SabiTask — Academic Support, Powered by Students";
const description =
  "Get academic guidance from talented student experts. Find a SabiExpert for tutoring, research and data analysis support — or become one and earn by helping others learn.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <HeroSection />
        <ServicesSection />
        <FindExpertSection />
        <BecomeExpertSection />
        <WhatsAppCTASection />
      </main>
      <Footer />
    </>
  );
}
