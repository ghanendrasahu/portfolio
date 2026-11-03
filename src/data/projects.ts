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
    emoji: "🦊",
    title: "Kitsunecart - Autonomous Listing Platform",
    description:
      "Product photo plus rough specs become a marketplace-ready listing: image attribute extraction, competitor research, a defensible price band, multilingual copy (English, Hindi, regional), a validation gate and a reviewable publish step. Ports and adapters, SQLite with migrations, idempotency and a full audit trail.",
    tags: ["FastAPI", "LLM", "Vision", "E-commerce", "Multilingual", "Audit Trail"],
    github: "https://github.com/ghanendrasahu/kitsunecart",
    demo: "https://kitsunecart.onrender.com/docs",
  },
  {
    id: 8,
    emoji: "🎯",
    title: "JobHunter AI",
    description:
      "Resume-driven job-search agent: upload a PDF, and a LangGraph pipeline searches, scores and tracks applications. Production surface - API-key auth, slowapi rate limits, a durable SQLite job store, a 60% coverage gate, CI with pip-audit and a non-root container image.",
    tags: ["Python", "LangGraph", "FastAPI", "Playwright", "SQLite", "CI/CD"],
    github: "https://github.com/ghanendrasahu/jobhunter-ai",
    demo: "https://jobhunter-ai-h73m.onrender.com",
  },
  {
    id: 9,
    emoji: "🌐",
    title: "WorldView VR (onepiece)",
    description:
      "Eight-service FastAPI platform with a gateway, Helm charts, ArgoCD canaries and Terraform. The portfolio's deepest deployment story: bandit SAST, Trivy scanning, Alembic migrations and an explicit CORS allowlist behind a Redis-backed rate limiter.",
    tags: ["Kubernetes", "Helm", "ArgoCD", "Terraform", "FastAPI", "Microservices"],
    github: "https://github.com/ghanendrasahu/onepiece",
    demo: "https://onepiece-identity.onrender.com/docs",
  },
  {
    id: 10,
    emoji: "🎙️",
    title: "V-Call Meeting Intelligence",
    description:
      "Async FastAPI service for meeting intelligence on SQLAlchemy 2.0 + Alembic, with Celery/Redis dead-lettering. Strict pyright, a 3.11/3.12 matrix, an Alembic drift check and a 78% coverage gate on an 83% codebase.",
    tags: ["Python", "FastAPI", "SQLAlchemy", "Celery", "LangGraph", "Docker"],
    github: "https://github.com/ghanendrasahu/v-call",
    demo: "https://v-call-mpy2.onrender.com/docs",
  },
  {
    id: 23,
    emoji: "🥷",
    title: "Kage - AI Outreach Platform",
    description:
      "Multi-tenant B2B outreach copilot: seven AI agents research companies, score buying signals and draft personalized email/LinkedIn outreach - but never auto-send. Next.js 15 + Drizzle on PostgreSQL, BullMQ/Redis queues, Google OAuth, Stripe billing and a full audit trail.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "AI Agents", "SaaS"],
    github: "https://github.com/ghanendrasahu/kage",
    demo: "https://kage-f9sc.onrender.com",
  },
  {
    id: 11,
    emoji: "🏭",
    title: "Industrial Predictive Maintenance",
    description:
      "Telemetry to maintenance decision: a seeded simulator with degradation physics feeds rolling-window features, an IsolationForest anomaly detector, a calibrated failure model and an RUL regressor. Reports failure probability, days remaining and the sensors driving them.",
    tags: ["Machine Learning", "Time Series", "Anomaly Detection", "RUL", "FastAPI"],
    github: "https://github.com/ghanendrasahu/industrial-predictive-maintenance",
    demo: "https://industrial-predictive-maintenance-we44.onrender.com/docs",
  },
  {
    id: 12,
    emoji: "🎬",
    title: "AI Content Factory",
    description:
      "YouTube-automation pipeline: download, transcribe, detect clips, write the content pack with an LLM, render 9:16, burn captions and publish. LangGraph orchestration with conditional stages, real resumable YouTube uploads, a thumbnail studio and a dark-mode dashboard.",
    tags: ["LangGraph", "FFmpeg", "Whisper", "YouTube API", "Streamlit", "FastAPI"],
    github: "https://github.com/ghanendrasahu/ai-content-factory",
    demo: "https://ai-content-factory-k9cv.onrender.com",
  },
  {
    id: 1,
    emoji: "🤖",
    title: "Multi-Agent Study Assistant",
    description:
      "Production-style agentic AI application demonstrating the complete GenAI stack — LLM reasoning, embeddings, RAG, agent loop, multi-agent orchestration, and memory. Specialized agents coordinate to plan, retrieve, and answer complex study queries with source attribution.",
    tags: ["Python", "LLMs", "RAG", "Multi-Agent", "Orchestration", "Memory"],
    github: "https://github.com/ghanendrasahu/Multi-Agent-Study-Assistant",
    demo: "https://multi-agent-study-assistant-app.onrender.com",
  },
  {
    id: 2,
    emoji: "📉",
    title: "Customer Churn Prediction",
    description:
      "End-to-end ML inference pipeline on a 7,043-row Telco dataset (23.1% churn rate). Engineered domain features — tenure group, charge-per-service, contract flag — achieving 87%+ accuracy with Random Forest optimized via ROC-AUC and F1-Score. Containerized FastAPI endpoint for real-time churn probability serving.",
    tags: ["Python", "Random Forest", "FastAPI", "Streamlit", "Docker", "REST API"],
    github: "https://github.com/ghanendrasahu/customer_churn_project",
    demo: "https://customer-churn-app-1jyq.onrender.com",
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
    demo: "https://rag-assistant-api-393o.onrender.com/docs",
  },
  {
    id: 5,
    emoji: "💳",
    title: "Credit Risk & Loan Default Prediction",
    description:
      "Binary classification pipeline benchmarking Logistic Regression vs. Random Forest on loan features (income, credit history, employment length, interest rate). Threshold tuning maximized recall on high-risk defaults, minimizing false negatives. Streamlit model-serving app with real-time default probability.",
    tags: ["Logistic Regression", "Random Forest", "Threshold Tuning", "Streamlit", "Model Serving"],
    github: "https://github.com/ghanendrasahu/credit-risk-project",
    demo: "https://credit-risk-app-92s8.onrender.com",
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
  {
    id: 14,
    emoji: "💬",
    title: "AI Chat Bot",
    description:
      "Full-stack conversational assistant: a React (Vite) frontend served by a Node-Express API that streams OpenAI replies, with graceful degradation to a fail-safe page when no API key is configured.",
    tags: ["Node.js", "Express", "React", "OpenAI API", "Streaming"],
    github: "https://github.com/ghanendrasahu/ai-chat-bot",
    demo: "https://ai-chat-bot-tmov.onrender.com",
  },
  {
    id: 15,
    emoji: "📊",
    title: "RAG Evaluation Platform",
    description:
      "RAG QA platform with a built-in evaluation suite: PDF question answering alongside APIs that grade retrieval and answer quality across RAG configurations, so pipeline changes are measured, not guessed.",
    tags: ["FastAPI", "RAG", "Evaluation", "ChromaDB", "Groq"],
    github: "https://github.com/ghanendrasahu/rag-eval-platform",
    demo: "https://rag-eval-platform.onrender.com/docs",
  },
  {
    id: 16,
    emoji: "🛡️",
    title: "Fraud Detection Engine",
    description:
      "Real-time transaction fraud scoring: imbalanced-learning-aware training of XGBoost/LightGBM/CatBoost ensembles exported to ONNX for fast inference, exposed through FastAPI health and prediction endpoints.",
    tags: ["XGBoost", "LightGBM", "CatBoost", "ONNX", "FastAPI"],
    github: "https://github.com/ghanendrasahu/fraud-detection-engine",
    demo: "https://fraud-detection-engine-s5k7.onrender.com/docs",
  },
  {
    id: 17,
    emoji: "🧑‍💻",
    title: "AI Integrated Coding Agent",
    description:
      "Agentic coding service that plans and executes programming tasks with streaming (SSE) progress updates and structured final reports, shipped as a Flask API.",
    tags: ["Flask", "Agentic AI", "SSE Streaming", "Python"],
    github: "https://github.com/ghanendrasahu/ai-integrate-coding",
    demo: "https://ai-integrate-coding.onrender.com",
  },
  {
    id: 18,
    emoji: "⚙️",
    title: "Bankai OS",
    description:
      "Personal autonomous-agent platform: a Node/TypeScript monorepo pairing a server-side orchestrator with a web dashboard for launching and observing agent sessions.",
    tags: ["TypeScript", "Node.js", "Monorepo", "Agent Orchestrator"],
    github: "https://github.com/ghanendrasahu/bankai-os",
    demo: "https://bankai-os.onrender.com",
  },
  {
    id: 19,
    emoji: "⚖️",
    title: "LegalLens India",
    description:
      "AI contract literacy for startups, freelancers, employees, landlords/tenants and small businesses. The phase-1 API is live, with the PostgreSQL/Redis phase-2 build-out next.",
    tags: ["FastAPI", "LegalTech", "AI", "API-First"],
    github: "https://github.com/ghanendrasahu/sharingan",
    demo: "https://legal-lens-india.onrender.com/docs",
  },
  {
    id: 20,
    emoji: "🚚",
    title: "Supply Chain Digital Twin",
    description:
      "Simulation-first supply-chain digital twin: demand forecasting, inventory policy simulation and disruption-scenario analysis in an interactive Streamlit control panel.",
    tags: ["Digital Twin", "Simulation", "Forecasting", "Streamlit"],
    github: "https://github.com/ghanendrasahu/ai-supply-chain-digital-twin",
    demo: "https://supply-chain-digital-twin-app.onrender.com",
  },
  {
    id: 21,
    emoji: "🧠",
    title: "AI Data Science Team",
    description:
      "Autonomous multi-agent data-science team: LLM agents run end-to-end EDA, modeling and reporting workflows, with a FastAPI brain and a Streamlit cockpit for control and observation.",
    tags: ["Multi-Agent", "LLMs", "FastAPI", "Streamlit", "EDA"],
    github: "https://github.com/ghanendrasahu/ai-data-science-team",
    demo: "https://ai-data-science-team-ui.onrender.com",
  },
  {
    id: 22,
    emoji: "🧑‍💼",
    title: "Workforce Intelligence",
    description:
      "Workforce decision intelligence: predicts employee attrition, explains the drivers behind each prediction and simulates what-if retention scenarios — inference API plus an analytics dashboard.",
    tags: ["Attrition Prediction", "Explainability", "What-if Simulation", "FastAPI", "Streamlit"],
    github: "https://github.com/ghanendrasahu/workforce-intelligence",
    demo: "https://workforce-intelligence-ui.onrender.com",
  },
];

export default projects;
