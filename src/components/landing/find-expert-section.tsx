import findExpertImg from "@/assets/find-expert.jpg";
import { siteConfig } from "@/config/site";
import { FeatureSection } from "./feature-section";

export function FindExpertSection() {
  return (
    <FeatureSection
      id="find-expert"
      eyebrow="Find a SabiExpert"
      title="Find the Right SabiExpert for You."
      description="Connect with talented students who can help you understand difficult concepts, improve your skills and navigate academic challenges with confidence."
      benefits={[
        "Find support that matches your academic needs.",
        "Connect with talented and verified student experts.",
        "Get guidance at student-friendly prices.",
        "Learn at your own pace.",
      ]}
      cta={{ label: "Find a SabiExpert", href: siteConfig.findExpertUrl }}
      image={{
        src: findExpertImg,
        alt: "Two university students studying together in a library, one explaining notes while the other smiles",
      }}
      imagePosition="right"
    />
  );
}
