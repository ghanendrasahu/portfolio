export interface Experience {
  id: number;
  role: string;
  company: string;
  note?: string;
  location?: string;
  startDate: string;
  endDate: string;
  current: boolean;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Data Science with AI Apprentice",
    company: "BDreamz Global Solutions Pvt. Ltd.",
    note: "via Besant Technologies",
    startDate: "Oct 2025",
    endDate: "Mar 2026",
    current: false,
    bullets: [
      "Collected, cleaned, and organized large-scale datasets; built and validated ML/AI models under the guidance of a Senior Data Scientist.",
      "Collaborated on real-time data science and AI projects to identify trends and predictive insights.",
      "Performed data validation, preprocessing, and feature engineering; used visualization techniques to present findings with clear technical documentation.",
    ],
  },
  {
    id: 2,
    role: "Data Science Intern",
    company: "Prinston Smart Engineers",
    location: "Bengaluru",
    startDate: "Jan 2025",
    endDate: "Feb 2025",
    current: false,
    bullets: [
      "Developed an ML pipeline for workforce attendance forecasting using Linear Regression, KNN, and Linear SVC on a 1,000-record dataset; Linear SVC achieved 89% classification accuracy.",
      "Executed full preprocessing — encoding, train-test split, scaling — and evaluated models via R-Squared, F1-Score, and confusion matrix.",
      "Presented findings and model recommendations to senior engineers.",
    ],
  },
];

export default experiences;
