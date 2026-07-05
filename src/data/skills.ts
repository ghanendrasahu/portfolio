export type SkillColor = "blue" | "green" | "purple" | "orange";
export type PillTone = SkillColor | "default";

export interface SkillGroup {
  id: number;
  title: string;
  color: SkillColor;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 1,
    title: "Languages & Databases",
    color: "blue",
    skills: ["Python", "SQL (MySQL)", "PostgreSQL", "Bash", "DSA"],
  },
  {
    id: 2,
    title: "ML / Algorithms & Eval",
    color: "green",
    skills: [
      "Regression",
      "Classification",
      "Random Forest",
      "XGBoost",
      "KNN",
      "Linear SVC",
      "Feature Engineering",
      "Cross-Validation",
      "ROC-AUC",
      "F1-Score",
      "A/B Testing",
    ],
  },
  {
    id: 3,
    title: "AI / NLP / GenAI / Agentic",
    color: "purple",
    skills: [
      "NLP",
      "TF-IDF",
      "Semantic Search",
      "RAG Pipelines",
      "LLMs",
      "Embeddings",
      "Prompt Engineering",
      "LangChain",
      "LlamaIndex",
      "CrewAI",
      "AutoGen",
      "Multi-Agent",
    ],
  },
  {
    id: 4,
    title: "Libraries",
    color: "blue",
    skills: ["Pandas", "NumPy", "Scikit-learn", "PyTorch", "Matplotlib", "Seaborn"],
  },
  {
    id: 5,
    title: "Deployment & MLOps",
    color: "orange",
    skills: [
      "FastAPI",
      "Streamlit",
      "Docker",
      "CI/CD",
      "Git / GitHub",
      "Pytest",
      "Model Serving",
      "Artifact Versioning",
    ],
  },
  {
    id: 6,
    title: "Cloud & BI",
    color: "green",
    skills: [
      "AWS EC2",
      "AWS S3",
      "AWS Lambda",
      "Power BI",
      "Tableau",
      "Excel",
      "ETL",
      "KPI Dashboards",
    ],
  },
];

export interface ExpertisePill {
  label: string;
  tone: PillTone;
}

export const coreExpertise: ExpertisePill[] = [
  { label: "ML / Deep Learning", tone: "blue" },
  { label: "Python", tone: "blue" },
  { label: "FastAPI", tone: "blue" },
  { label: "Docker", tone: "blue" },
  { label: "RAG Pipelines", tone: "green" },
  { label: "LLMs", tone: "green" },
  { label: "LangChain", tone: "green" },
  { label: "Agentic AI", tone: "green" },
  { label: "CrewAI", tone: "purple" },
  { label: "AutoGen", tone: "purple" },
  { label: "NLP", tone: "purple" },
  { label: "AWS", tone: "default" },
  { label: "SQL", tone: "default" },
  { label: "Power BI", tone: "default" },
];

export default skillGroups;
