import { createElement, type HTMLAttributes, type ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLElement> {
  /** Render a different element, e.g. "article" | "section" | "a". */
  as?: "div" | "article" | "section" | "a";
  href?: string;
  target?: string;
  rel?: string;
  /** Background image shown at low opacity behind the content. */
  image?: string;
  imageOpacity?: "opacity-25" | "opacity-30";
  /** Darkening overlay on top of the background image. */
  overlay?: "bg-bg/70" | "bg-bg/75";
  /** Hover accent: top gradient line, accent border, group for children. */
  hover?: boolean;
  /** Padding class for the variant you need. Defaults to p-6. */
  paddingClassName?: string;
  children: ReactNode;
}

export default function Card({
  as = "div",
  href,
  target,
  rel,
  image,
  imageOpacity = "opacity-30",
  overlay = "bg-bg/70",
  hover = false,
  paddingClassName = "p-6",
  className = "",
  children,
  ...rest
}: CardProps) {
  const cls = `relative h-full overflow-hidden rounded-xl border border-border bg-surface transition-colors duration-200 ${paddingClassName} ${hover ? "group hover:border-accent" : ""} ${className}`.trim();

  const body = (
    <>
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className={`pointer-events-none absolute inset-0 h-full w-full object-cover ${imageOpacity}`}
          />
          <div className={`pointer-events-none absolute inset-0 ${overlay}`} aria-hidden="true" />
        </>
      )}
      {hover && (
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-accent to-accent3 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        />
      )}
      <div className="relative">{children}</div>
    </>
  );

  return createElement(as, { ...rest, ...(as === "a" ? { href, target, rel } : {}), className: cls }, body);
}
