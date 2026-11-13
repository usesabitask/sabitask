/**
 * SabiTask site configuration.
 * Replace the placeholder values below with the real URLs before launch.
 * A value of "#" (or an in-page anchor) keeps links working until real URLs exist.
 */
export const siteConfig = {
  name: "SabiTask",
  description:
    "SabiTask is a student-powered academic support marketplace connecting university students with talented student experts — SabiExperts.",

  /** TODO: replace with the official SabiTask WhatsApp channel URL. */
  whatsappChannelUrl: "#",

  /**
   * Where the "Find a SabiExpert" / "Become a SabiExpert" buttons inside their sections lead.
   * TODO: point these at the real sign-up flows. Until then they lead to the WhatsApp section.
   */
  findExpertUrl: "#whatsapp",
  becomeExpertUrl: "#whatsapp",

  /** TODO: replace "#" with real profile URLs. Footer icons link to "#" until then. */
  social: {
    instagram: "#",
    x: "#",
    linkedin: "#",
    tiktok: "#",
  },
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Find a SabiExpert", href: "#find-expert" },
  { label: "Become a SabiExpert", href: "#become-expert" },
  { label: "Community", href: "#whatsapp" },
] as const;

/** Opens external links in a new tab; keeps anchors in-page. */
export function linkProps(href: string) {
  return href.startsWith("http")
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };
}
