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
    id: 13,
    emoji: "U+1F98A",
    title: "Kitsunecart - Autonomous Listing Platform",
    description:
      "Product photo plus rough specs become a marketplace-ready listing: image attribute extraction, competitor research, a defensible price band, multilingual copy (English, Hindi, regional), a validation gate and a reviewable publish step. Ports and adapters, SQLite with migrations, idempotency and a full audit trail.",
    tags: ["FastAPI", "LLM", "Vision", "E-commerce", "Multilingual", "Audit Trail"],
    github: "https://github.com/ghanendrasahu/kitsunecart",
  },  {
    id: 8,
    emoji: "🎯",
    title: "JobHunter AI",
    description:
      "Resume-driven job-search agent: upload a PDF, and a LangGraph pipeline searches, scores and tracks applications. Production surface - API-key auth, slowapi rate limits, a durable SQLite job store, a 60% coverage gate, CI with pip-audit and a non-root container image.",
    tags: ["Python", "LangGraph", "FastAPI", "Playwright", "SQLite", "CI/CD"],
    github: "https://github.com/ghanendrasahu/jobhunter-ai",
  },
  {
    id: 9,
    emoji: "🌐",
    title: "WorldView VR (onepiece)",
    description:
      "Eight-service FastAPI platform with a gateway, Helm charts, ArgoCD canaries and Terraform. The portfolio's deepest deployment story: bandit SAST, Trivy scanning, Alembic migrations and an explicit CORS allowlist behind a Redis-backed rate limiter.",
    tags: ["Kubernetes", "Helm", "ArgoCD", "Terraform", "FastAPI", "Microservices"],
    github: "https://github.com/ghanendrasahu/onepiece",
  },
  {
    id: 10,
    emoji: "🎙️",
    title: "V-Call Meeting Intelligence",
    description:
      "Async FastAPI service for meeting intelligence on SQLAlchemy 2.0 + Alembic, with Celery/Redis dead-lettering. Strict pyright, a 3.11/3.12 matrix, an Alembic drift check and a 78% coverage gate on an 83% codebase.",
    tags: ["Python", "FastAPI", "SQLAlchemy", "Celery", "LangGraph", "Docker"],
    github: "https://github.com/ghanendrasahu/v-call",
  },
  {
    id: 11,
    emoji: "🏭",
    title: "Industrial Predictive Maintenance",
    description:
      "Telemetry to maintenance decision: a seeded simulator with degradation physics feeds rolling-window features, an IsolationForest anomaly detector, a calibrated failure model and an RUL regressor. Reports failure probability, days remaining and the sensors driving them.",
    tags: ["Machine Learning", "Time Series", "Anomaly Detection", "RUL", "FastAPI"],
    github: "https://github.com/ghanendrasahu/industrial-predictive-maintenance",
  },
  {
    id: 12,
    emoji: "🎬",
    title: "AI Content Factory",
    description:
      "YouTube-automation pipeline: download, transcribe, detect clips, write the content pack with an LLM, render 9:16, burn captions and publish. LangGraph orchestration with conditional stages, real resumable YouTube uploads, a thumbnail studio and a dark-mode dashboard.",
    tags: ["LangGraph", "FFmpeg", "Whisper", "YouTube API", "Streamlit", "FastAPI"],
    github: "https://github.com/ghanendrasahu/ai-content-factory",
  },
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
