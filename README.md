# Ghanendra Sahu â€” Portfolio

Personal portfolio website for **Ghanendra Sahu**, Data Scientist & GenAI Engineer.

Live: [ghanendrasahu.netlify.app](https://ghanendrasahu.netlify.app)

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- React Router 7

## Featured work

The projects listed first on the site are the ones worth opening first:

| Project | Why it leads |
|---|---|
| **JobHunter AI** | The most complete product: agent pipeline, durable job store, auth, rate limits, coverage gate, hardened image, CI with dependency audit |
| **WorldView VR** | The deepest deployment story - eight services, Helm, ArgoCD canaries, Terraform, SAST and image scanning |
| **V-Call** | The strictest engineering gates - pyright strict, a Python matrix, Alembic drift checks, 78% coverage on an 83% codebase |
| **Industrial Predictive Maintenance** | Telemetry to a maintenance decision: anomaly detection, calibrated failure probability and remaining useful life |
| **AI Content Factory** | End-to-end content automation with a LangGraph pipeline and real resumable YouTube publishing |

Earlier learning repositories (notebooks, first FastAPI experiments, the
Kitsunecart spec) were retired and their content folded into the projects
above, so this portfolio lists only work that is current.

## Sections

- **Home** â€” intro, contact card, core expertise
- **Experience** â€” ML/AI engineering roles timeline
- **Projects** â€” production-grade ML, RAG, and classification pipelines with GitHub links
- **Skills** â€” categorized stack across ML, GenAI, MLOps, and Cloud/BI
- **Education** â€” academics and certifications

## Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build to dist/
npm run lint     # eslint
```

## Deployment

Configured for Netlify via `netlify.toml` (build: `npm run build`, publish: `dist`, SPA redirects included).
