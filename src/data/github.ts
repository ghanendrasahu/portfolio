export interface GitHubRepo {
  name: string;
  repo: string;
  description: string;
  language: string;
  url: string;
}

export const githubRepos: GitHubRepo[] = [
  {
    name: "Multi-Agent Study Assistant",
    repo: "Multi-Agent-Study-Assistant",
    description:
      "Production-style Agentic AI application demonstrating the full GenAI stack: LLM → Embeddings → RAG → Agent Loop → Multi-Agent Orchestration → Memory.",
    language: "Python",
    url: "https://github.com/ghanendrasahu/Multi-Agent-Study-Assistant",
  },
  {
    name: "RAG Assistant API",
    repo: "RAG_ASSISTANT_API",
    description:
      "FastAPI-based PDF RAG backend using ChromaDB embeddings and Groq-powered answer generation, with ingest/query endpoints and structured logging.",
    language: "Python",
    url: "https://github.com/ghanendrasahu/RAG_ASSISTANT_API",
  },
  {
    name: "Local RAG Assistant",
    repo: "local-rag-assistant",
    description:
      "Interview-ready Retrieval-Augmented Generation project answering questions over local TXT/PDF files with config-driven ingestion and persistent indexing.",
    language: "Python",
    url: "https://github.com/ghanendrasahu/local-rag-assistant",
  },
  {
    name: "Agentic Coding Agent V2",
    repo: "AGENTIC-CODING-AGENT-V2",
    description:
      "Agentic coding assistant with planning, execution, and validation workflows.",
    language: "TypeScript",
    url: "https://github.com/ghanendrasahu/AGENTIC-CODING-AGENT-V2",
  },
  {
    name: "Customer Churn Prediction",
    repo: "customer_churn_project",
    description:
      "End-to-end ML pipeline, FastAPI inference API, and Streamlit dashboard to assess churn risk and suggest retention actions.",
    language: "Python",
    url: "https://github.com/ghanendrasahu/customer_churn_project",
  },
  {
    name: "Credit Risk & Loan Default Prediction",
    repo: "credit-risk-project",
    description:
      "Binary classification pipeline predicting loan default risk from applicant features.",
    language: "Python",
    url: "https://github.com/ghanendrasahu/credit-risk-project",
  },
  {
    name: "Finance Forecast LSTM",
    repo: "finance-forecast-lstm",
    description:
      "LSTM-based finance time-series forecasting in Python that predicts future closing prices, evaluates with MAE/RMSE, and exports forecasts and metrics to CSV.",
    language: "Python",
    url: "https://github.com/ghanendrasahu/finance-forecast-lstm",
  },
  {
    name: "Llama 3.2 1B Local Chat",
    repo: "LLAMA_1B_LOCAL_CHAT",
    description:
      "Lightweight Generative AI demo using Hugging Face Transformers with a 4-bit quantized Llama 3.2 1B model, optimized for low-RAM laptops (8GB).",
    language: "Python",
    url: "https://github.com/ghanendrasahu/LLAMA_1B_LOCAL_CHAT",
  },
  {
    name: "Social Status Prediction",
    repo: "STATUS-PRED",
    description:
      "Simulates a population of 10,000 people and uses a Random Forest model to predict wealth quintile from socioeconomic features.",
    language: "Python",
    url: "https://github.com/ghanendrasahu/STATUS-PRED",
  },
  {
    name: "Student Attendance Prediction",
    repo: "student-attendance",
    description:
      "Data science project on student attendance prediction using factors that affect attendance.",
    language: "Jupyter Notebook",
    url: "https://github.com/ghanendrasahu/student-attendance",
  },
  {
    name: "LeetCode DSA",
    repo: "LeetCode-DSA",
    description:
      "Data Structures & Algorithms solutions in Python.",
    language: "Python",
    url: "https://github.com/ghanendrasahu/LeetCode-DSA",
  },
  {
    name: "Worldview Monorepo",
    repo: "worldview-monorepo",
    description:
      "Personal monorepo experiments.",
    language: "Python",
    url: "https://github.com/ghanendrasahu/worldview-monorepo",
  },
  {
    name: "AI Chat Bot",
    repo: "ai_chat_bot",
    description:
      "JavaScript chat bot application.",
    language: "JavaScript",
    url: "https://github.com/ghanendrasahu/ai_chat_bot",
  },
  {
    name: "KODEBASE",
    repo: "KODEBASE",
    description:
      "Code practice repository.",
    language: "JavaScript",
    url: "https://github.com/ghanendrasahu/KODEBASE",
  },
  {
    name: "Power BI Projects",
    repo: "POWER-BI",
    description:
      "Power BI dashboards and visualization projects.",
    language: "—",
    url: "https://github.com/ghanendrasahu/POWER-BI",
  },
  {
    name: "DOM Tasks",
    repo: "dom_tasks",
    description:
      "DOM manipulation practice tasks.",
    language: "JavaScript",
    url: "https://github.com/ghanendrasahu/dom_tasks",
  },
  {
    name: "Git Practice",
    repo: "git-practice",
    description:
      "Git workflow practice repository.",
    language: "Python",
    url: "https://github.com/ghanendrasahu/git-practice",
  },
  {
    name: "Portfolio Website",
    repo: "portfolio",
    description:
      "This portfolio website — React, TypeScript, Tailwind CSS, deployed on Netlify.",
    language: "TypeScript",
    url: "https://github.com/ghanendrasahu/portfolio",
  },
];

export default githubRepos;
