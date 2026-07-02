export interface Project {
  id: number;
  emoji: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    emoji: "📉",
    title: "Customer Churn Prediction",
    description:
      "End-to-end ML inference pipeline on a 7,043-row Telco dataset (23.1% churn rate). Engineered domain features — tenure group, charge-per-service, contract flag — achieving 87%+ accuracy with Random Forest optimized via ROC-AUC and F1-Score. Containerized FastAPI endpoint for real-time churn probability serving.",
    tags: ["Python", "Random Forest", "FastAPI", "Streamlit", "Docker", "REST API"],
    github: "https://github.com/ghanendrasahu/customer_churn_project",
    demo: "https://huggingface.co/spaces/Sahu06/customer_churn",
  },
  {
    id: 2,
    emoji: "🔍",
    title: "Local RAG Assistant",
    description:
      "Offline RAG pipeline for low-latency Q&A over enterprise TXT/PDF documents. Features document ingestion, chunking, TF-IDF semantic retrieval, and persistent vector indexing — zero external API dependency. CLI interface with top-k source-attributed results and relevance scoring.",
    tags: ["RAG Architecture", "TF-IDF", "Semantic Search", "Vector Retrieval", "PDF Parsing"],
    github: "https://github.com/ghanendrasahu/local-rag-assistant",
  },
  {
    id: 3,
    emoji: "💳",
    title: "Credit Risk & Loan Default Prediction",
    description:
      "Binary classification pipeline benchmarking Logistic Regression vs. Random Forest on loan features (income, credit history, employment length, interest rate). Threshold tuning maximized recall on high-risk defaults, minimizing false negatives. Streamlit model-serving app with real-time default probability.",
    tags: ["Logistic Regression", "Random Forest", "Threshold Tuning", "Streamlit", "Model Serving"],
    github: "https://github.com/ghanendrasahu/credit-risk-project",
  },
];

export default projects;
