import { useEffect, useState } from "react";

const ROLES = [
  "Data Scientist",
  "AI/ML Engineer",
  "GenAI Engineer",
  "Agentic AI Engineer",
  "Python Developer",
  "LLM Engineer",
  "RAG Engineer",
  "Data Analyst",
];

export default function RoleRotator({
  roles = ROLES,
  interval = 3000,
}: {
  roles?: string[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const [reduceMotion] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
  );

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % roles.length), interval);
    return () => window.clearInterval(id);
  }, [reduceMotion, roles.length, interval]);

  return (
    <span className="role-cycle-mask" aria-hidden="true">
      <span
        key={roles[index]}
        className="role-cycle block text-accent"
      >
        {roles[index]}
      </span>
    </span>
  );
}
