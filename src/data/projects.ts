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
    emoji: "🤖",
    title: "Multi-Agent Study Assistant",
    description:
      "Production-style agentic AI application demonstrating the complete GenAI stack — LLM reasoning, embeddings, RAG, agent loop, multi-agent orchestration, and memory. Specialized agents coordinate to plan, retrieve, and answer complex study queries with source attribution.",
    tags: ["Python", "LLMs", "RAG", "Multi-Agent", "Orchestration", "Memory"],
    github: "https://github.com/ghanendrasahu/Multi-Agent-Study-Assistant",
  },
  {
    id: 2,
    emoji: "📉",
    title: "Customer Churn Prediction",
    description:
      "End-to-end ML inference pipeline on a 7,043-row Telco dataset (23.1% churn rate). Engineered domain features — tenure group, charge-per-service, contract flag — achieving 87%+ accuracy with Random Forest optimized via ROC-AUC and F1-Score. Containerized FastAPI endpoint for real-time churn probability serving.",
    tags: ["Python", "Random Forest", "FastAPI", "Streamlit", "Docker", "REST API"],
    github: "https://github.com/ghanendrasahu/customer_churn_project",
    demo: "https://huggingface.co/spaces/Sahu06/customer_churn",
  },
  {
    id: 3,
    emoji: "🔍",
    title: "Local RAG Assistant",
    description:
      "Offline RAG pipeline for low-latency Q&A over enterprise TXT/PDF documents. Features document ingestion, chunking, TF-IDF semantic retrieval, and persistent vector indexing — zero external API dependency. CLI interface with top-k source-attributed results and relevance scoring.",
    tags: ["RAG Architecture", "TF-IDF", "Semantic Search", "Vector Retrieval", "PDF Parsing"],
    github: "https://github.com/ghanendrasahu/local-rag-assistant",
  },
  {
    id: 4,
    emoji: "⚡",
    title: "RAG Assistant API",
    description:
      "FastAPI-based PDF RAG backend using ChromaDB embeddings and Groq-powered answer generation. Exposes dedicated ingest/query endpoints with structured logging for production observability — a deployable document-intelligence service rather than a script.",
    tags: ["Python", "FastAPI", "ChromaDB", "Embeddings", "Groq", "REST API"],
    github: "https://github.com/ghanendrasahu/RAG_ASSISTANT_API",
  },
  {
    id: 5,
    emoji: "💳",
    title: "Credit Risk & Loan Default Prediction",
    description:
      "Binary classification pipeline benchmarking Logistic Regression vs. Random Forest on loan features (income, credit history, employment length, interest rate). Threshold tuning maximized recall on high-risk defaults, minimizing false negatives. Streamlit model-serving app with real-time default probability.",
    tags: ["Logistic Regression", "Random Forest", "Threshold Tuning", "Streamlit", "Model Serving"],
    github: "https://github.com/ghanendrasahu/credit-risk-project",
  },
  {
    id: 6,
    emoji: "📈",
    title: "Finance Forecast LSTM",
    description:
      "Deep learning time-series forecasting using LSTM networks to predict future closing prices from historical market data. Full train/evaluate/export workflow with MAE/RMSE evaluation metrics and automated CSV export of forecasts and model metadata.",
    tags: ["Python", "PyTorch", "LSTM", "Time-Series", "Deep Learning", "MAE / RMSE"],
    github: "https://github.com/ghanendrasahu/finance-forecast-lstm",
  },
];

export default projects;
