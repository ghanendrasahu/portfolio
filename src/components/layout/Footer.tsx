import profile from "../../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center justify-between gap-3 px-5 py-6 text-[13px] text-tmuted sm:flex-row sm:px-7">
        <p>© 2026 {profile.fullName}</p>
        <div className="flex gap-5">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-tprimary"
          >
            GitHub
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-tprimary"
          >
            LinkedIn
          </a>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="transition-colors hover:text-tprimary">
            Resume
          </a>
          <a href={profile.social.email} className="transition-colors hover:text-tprimary">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
