import { linkProps, siteConfig } from "@/config/site";
import { InstagramIcon, LinkedInIcon, TikTokIcon, WhatsAppIcon, XIcon } from "./brand-icons";
import { Logo } from "./logo";

const socials = [
  { label: "Instagram", href: siteConfig.social.instagram, Icon: InstagramIcon },
  { label: "X (Twitter)", href: siteConfig.social.x, Icon: XIcon },
  { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: LinkedInIcon },
  { label: "TikTok", href: siteConfig.social.tiktok, Icon: TikTokIcon },
];

const exploreLinks = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Community", href: "#whatsapp" },
];

const linkClass =
  "rounded text-surface-dark-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark text-surface-dark-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <a href="#top" aria-label="SabiTask home" className="inline-block rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            <Logo tone="light" />
          </a>
          <p className="mt-4 leading-relaxed text-surface-dark-muted">
            A student-powered academic support marketplace connecting university students with
            talented student experts.
          </p>
          <ul className="mt-6 flex gap-3" aria-label="SabiTask on social media">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  {...linkProps(href)}
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-full bg-surface-dark-foreground/10 text-surface-dark-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-bold uppercase tracking-[0.14em]">Explore</h2>
          <ul className="mt-5 space-y-3">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em]">Get started</h2>
          <ul className="mt-5 space-y-3">
            <li>
              <a href="#find-expert" className={linkClass}>Find a SabiExpert</a>
            </li>
            <li>
              <a href="#become-expert" className={linkClass}>Become a SabiExpert</a>
            </li>
            <li>
              <a {...linkProps(siteConfig.whatsappChannelUrl)} className={`${linkClass} inline-flex items-center gap-2`}>
                <WhatsAppIcon className="size-4" />
                WhatsApp Channel
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-surface-dark-foreground/10">
        <p className="container-page py-6 text-sm text-surface-dark-muted">
          © {year} SabiTask. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
