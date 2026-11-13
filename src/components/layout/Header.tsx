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
            src="/brand-mark.svg"
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 rounded-[10px] bg-accent sm:h-[52px] sm:w-[52px] sm:rounded-xl"
          />
          <div>
            <h1 className="font-display text-xl font-bold tracking-tight sm:text-[22px]">{profile.fullName}</h1>
            <p className="mt-0.5 flex items-start gap-1.5 text-[13px] text-tsecondary">
              <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-accent2" aria-hidden="true" />
              {profile.availability} · {profile.location}
            </p>
          </div>
        </div>

        <nav className="-mb-px grid grid-cols-3 sm:flex sm:flex-nowrap">
          {tabs.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.end}
              className={({ isActive }) =>
                `flex items-center justify-center whitespace-nowrap border-b-2 px-1 py-2.5 text-[13px] font-medium transition-colors sm:justify-start sm:px-[18px] sm:text-[13.5px] ${
                  isActive
                    ? "border-accent text-accent"
                    : "border-transparent text-tsecondary hover:text-tprimary"
                }`
              }
            >
              <tab.Icon size={14} strokeWidth={2} className="mr-1 shrink-0 sm:mr-1.5" aria-hidden="true" />
              {tab.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
