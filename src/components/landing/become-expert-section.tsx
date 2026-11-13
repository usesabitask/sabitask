import becomeExpertImg from "@/assets/become-expert.jpg";
import { siteConfig } from "@/config/site";
import { FeatureSection } from "./feature-section";

export function BecomeExpertSection() {
  return (
    <FeatureSection
      id="become-expert"
      eyebrow="Become a SabiExpert"
      title="Turn Your Knowledge into Opportunity."
      description="Are you good at explaining difficult concepts? Share your knowledge, support fellow students and earn by helping others learn."
      benefits={[
        "Earn from your academic strengths.",
        "Build your reputation as a SabiExpert.",
        "Help fellow students succeed.",
        "Grow your skills and experience.",
      ]}
      cta={{ label: "Become a SabiExpert", href: siteConfig.becomeExpertUrl, variant: "outline" }}
      image={{
        src: becomeExpertImg,
        alt: "A confident student mentor explaining ideas on a whiteboard to a group of fellow students",
      }}
      imagePosition="left"
      className="bg-card"
    />
  );
}
