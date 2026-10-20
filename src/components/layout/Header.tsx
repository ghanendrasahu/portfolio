import { Briefcase, GraduationCap, Home, Rocket, Zap } from "lucide-react";
import { NavLink } from "react-router-dom";
import profile from "../../data/profile";
import { GithubIcon } from "../icons/Brand";

const tabs = [
  { name: "Home", to: "/", Icon: Home, end: true },
  { name: "Experience", to: "/experience", Icon: Briefcase, end: false },
  { name: "Projects", to: "/projects", Icon: Rocket, end: false },
  { name: "Skills", to: "/skills", Icon: Zap, end: false },
  { name: "GitHub", to: "/github", Icon: GithubIcon, end: false },
  { name: "Education", to: "/education", Icon: GraduationCap, end: false },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-md">
      <div className="mx-auto max-w-[1000px] px-5 pt-6 sm:px-7 sm:pt-7">
        <div className="mb-4 flex items-center gap-4 sm:mb-5">
          <img
            src="/images/avatar-128.jpg"
            alt="Ghanendra Sahu"
            width={52}
            height={52}
            className="h-[52px] w-[52px] shrink-0 rounded-full border border-border object-cover"
          />
          <div>
            <h1 className="font-display text-xl font-bold tracking-tight sm:text-[22px]">{profile.fullName}</h1>
            <p className="mt-0.5 flex items-center gap-1.5 text-[13px] text-tsecondary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent2" />
              {profile.availability} · {profile.location}
            </p>
          </div>
        </div>

        <nav className="-mb-px flex flex-wrap gap-x-0.5 sm:flex-nowrap">
          {tabs.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.end}
              className={({ isActive }) =>
                `flex items-center whitespace-nowrap border-b-2 px-3 py-2.5 text-[13.5px] font-medium transition-colors sm:px-[18px] ${
                  isActive
                    ? "border-accent text-accent"
                    : "border-transparent text-tsecondary hover:text-tprimary"
                }`
              }
            >
              <tab.Icon size={14} strokeWidth={2} className="mr-1.5 shrink-0" aria-hidden="true" />
              {tab.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
