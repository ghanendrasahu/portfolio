import { FileText, Mail, MapPin, Phone } from "lucide-react";
import profile from "../data/profile";
import { GithubIcon, LinkedinIcon } from "../components/icons/Brand";
import RoleRotator from "../components/ui/RoleRotator";

const contactItems = [
  { Icon: MapPin, label: profile.location },
  { Icon: Phone, label: profile.phone, href: profile.phoneHref },
  { Icon: Mail, label: profile.email, href: profile.social.email },
  { Icon: LinkedinIcon, label: "linkedin.com/in/ghanendrasahu", href: profile.social.linkedin },
  { Icon: GithubIcon, label: "github.com/ghanendrasahu", href: profile.social.github },
];

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden rounded-xl">
        <video
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          src="/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-bg/80" aria-hidden="true" />

        <section className="relative grid grid-cols-1 gap-10 p-5 sm:p-7 lg:grid-cols-[1fr_280px] lg:items-start">
        <div>
          <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-accent2/25 bg-accent2/[0.08] px-3 py-1 text-xs font-medium text-accent2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent2" />
            {profile.availabilityBadge}
          </div>

          <h2
            aria-label="Data Scientist and AI/ML Engineer"
            className="font-display text-[28px] font-bold leading-[1.15] tracking-tight sm:text-[40px]"
          >
            <RoleRotator />
          </h2>

          <p className="mt-4 max-w-[540px] text-[15.5px] leading-relaxed text-tsecondary text-pretty">
            {profile.heroDescription}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href={profile.social.email} className="btn-primary">
              <Mail size={15} strokeWidth={2} aria-hidden="true" /> Get in Touch
            </a>
            <a href={profile.social.github} target="_blank" rel="noreferrer" className="btn-ghost">
              <GithubIcon size={15} aria-hidden="true" /> GitHub
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">
              <LinkedinIcon size={15} aria-hidden="true" /> LinkedIn
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-ghost">
              <FileText size={15} strokeWidth={2} aria-hidden="true" /> Resume
            </a>
          </div>
        </div>

        <aside className="rounded-xl border border-border/50 bg-bg/60 p-6 backdrop-blur-sm">
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-tsecondary">
            Contact
          </h3>
          <ul>
            {contactItems.map((item) => (
              <li key={item.label} className="flex items-center gap-2.5 border-b border-border py-2 text-[13.5px] text-tsecondary last:border-none">
                <span className="flex w-5 shrink-0 justify-center text-accent"><item.Icon size={15} strokeWidth={1.8} aria-hidden="true" /></span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="text-[13px] text-accent hover:underline"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span>{item.label}</span>
                )}
              </li>
            ))}
          </ul>
        </aside>
      </section>
      </div>
    </>
  );
}
