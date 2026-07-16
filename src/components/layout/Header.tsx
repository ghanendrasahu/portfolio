import { NavLink } from "react-router-dom";
import profile from "../../data/profile";

const tabs = [
  { name: "Home", to: "/", emoji: "🏠", end: true },
  { name: "Experience", to: "/experience", emoji: "💼", end: false },
  { name: "Projects", to: "/projects", emoji: "🚀", end: false },
  { name: "Skills", to: "/skills", emoji: "⚡", end: false },
  { name: "GitHub", to: "/github", emoji: "📦", end: false },
  { name: "Education", to: "/education", emoji: "🎓", end: false },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-md">
      <div className="mx-auto max-w-[1000px] px-5 pt-6 sm:px-7 sm:pt-7">
        <div className="mb-4 flex items-center gap-4 sm:mb-5">
          <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent3 font-display text-xl font-bold text-white">
            {profile.initials}
          </div>
          <div>
            <h1 className="font-display text-xl font-bold tracking-tight sm:text-[22px]">{profile.fullName}</h1>
            <p className="mt-0.5 flex items-center gap-1.5 text-[13px] text-tsecondary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent2" />
              {profile.availability} · {profile.location}
            </p>
          </div>
        </div>

        <nav className="-mb-px flex gap-0.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {tabs.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.end}
              className={({ isActive }) =>
                `whitespace-nowrap border-b-2 px-3 py-2.5 text-[13.5px] font-medium transition-colors sm:px-[18px] ${
                  isActive
                    ? "border-accent text-accent"
                    : "border-transparent text-tsecondary hover:text-tprimary"
                }`
              }
            >
              <span className="mr-1.5">{tab.emoji}</span>
              {tab.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
