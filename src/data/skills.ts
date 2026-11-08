export type SkillColor = "blue" | "green" | "purple" | "orange";

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

export default skillGroups;
