export interface Education {
  id: number;
  emoji: string;
  degree: string;
  institution: string;
  period: string;
  detail?: string;
}

export const education: Education[] = [
  {
    id: 1,
    emoji: "🎓",
    degree: "Data Science & ML Training (Full-Time)",
    institution: "Besant Technologies · Bengaluru",
    period: "Sep 2025 – May 2026",
  },
  {
    id: 2,
    emoji: "🏛️",
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Krupanidhi Degree College · Bangalore North University",
    period: "2022 – 2025 · CGPA: 9.15 / 10",
    detail:
      "Coursework: Machine Learning, Statistics, DBMS, Data Structures, Python, Data Visualization",
  },
];

export default education;
