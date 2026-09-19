export const PORTFOLIO = {
  name: "Pavan Raj",
  role: "ML Researcher & Software Engineer",
  basedIn: "India",
  email: "pavanraj.pala@gmail.com",
  githubUrl: "https://github.com/Pvnn",
  githubUsername: "Pvnn",
  linkedinUrl: "https://www.linkedin.com/in/pavan-raj-in/",
  about: [
    "I'm a passionate ML Researcher and Software Engineer specializing in Deep Learning, NLP, and Full-Stack Systems.",
    "My work is driven by building rigorous evaluation harnesses, developing efficient RAG architectures, and crafting autonomous LLM agents that solve complex engineering problems.",
    "I'm currently looking for interesting roles in AI Research, ML Engineering, and product development where I can leverage my experience across research methodology and scalable systems."
  ],
  skills: [
    "Python", "PyTorch", "FastAPI", "React.js", "Next.js", "TypeScript", 
    "PostgreSQL", "Redis", "Docker", "Git"
  ],
  experience: [
    {
      role: "Fullstack Developer Intern",
      company: "KeyValue Software Systems",
      date: "May 2026 – June 2026",
      location: "Kakkanad, Kerala",
      logo: "/keyvaluesystems_logo.jpeg",
      bullets: [
        "Built Scribble, an AI-powered consumer insights assistant using FastAPI, Vue.js, PostgreSQL, and Agno, enabling natural-language analysis of consumer behavior and market trends.",
        "Implemented agent workflows with skill-guided tool orchestration, session management, memory persistence, real-time SSE streaming, and extensible data-source integrations.",
        "Developed core backend infrastructure including skill loading and tool dispatch mechanisms; contributed integration tests to the open-source Netra SDK and reported platform issues."
      ]
    },
    {
      role: "Project Intern",
      company: "KalkiTech",
      date: "October 2024 – May 2026",
      location: "Kakkanad, Kerala",
      logo: "/kalkitech.png",
      bullets: [
        "Extended and debugged an existing MATLAB-to-OpenDSS pipeline for simulating European low-voltage power systems, integrating GIS data and synthesized smart meter load profiles to extract 480-hour voltage time series for 8,000+ customers.",
        "Contributed to a real-time Web-HMI for electrical network analysis using Spring Boot and gRPC, enabling live visualization of voltage and current behavior."
      ]
    }
  ],
  featuredProjects: [
    {
      title: "GRASP: Graph-Based Relevance & Span Pruning",
      description: "A multi-stage, query-aware context compression framework that intelligently prunes retrieved content before inference. Combines Information Bottleneck theory (QUITO-X) with graph-based evidence clustering (EP-EXIT) to preserve semantically cohesive evidence spans, simultaneously improving Exact Match scores by +10 and reducing LLM latency by 28% on QA benchmarks.",
      tagline: "RAG Context Compression",
      tags: "PyTorch · Gemma-2B · Flan-T5 · RRF Retrieval · Llama-3.1",
      badge: "Paper Under Review",
      report: "/grasp-paper",
      reportLabel: "Read Paper ↗",
      github: "https://github.com/Pvnn/grasp-rag"
    },
    {
      title: "Transformer Attention Mechanics & Dense Retrieval for Scientific Reasoning",
      description: "An empirical investigation into domain-specific scientific question answering. Features an L2-indexed dense retrieval pipeline over scientific corpora and benchmarks pre-trained disentangled attention (DeBERTa-v3) against a ground-up PyTorch transformer encoder to evaluate the inductive biases of self-attention versus pre-trained parameter scale.",
      tagline: "Representation Learning & Attention Mechanics",
      tags: "PyTorch · Transformer Encoders · Dense Embeddings · FAISS · Empirical NLP",
      github: "https://github.com/Pvnn/transformer-reasoning-sciqa",
      report: "https://drive.google.com/file/d/1h7Xu41uu0nIDbvdI-MYm5h-X3WVCdBFe/view?usp=drive_link"
    },
    {
      title: "Autonomous Code Review Agent",
      description: "An autonomous, real-time code review agent powered by Anthropic's Claude. It features an Express.js backend with automated CI/CD webhooks, a real-time NDJSON streaming dashboard via Server-Sent Events, and drops idempotent, inline comments directly onto the GitHub PR timeline. Fully instrumented with the Netra SDK for deep LLM tool tracing.",
      tagline: "AI Agents & CI/CD Automation",
      tags: "TypeScript · Express.js · Netra Observability · Server-Sent Events",
      badge: "Anthropic & Netra SDK",
      github: "https://github.com/Pvnn/code-review-agent"
    },
    {
      title: "Autonomous Data Analyst Bot",
      description: "A ReAct-based Telegram agent that answers complex data questions by navigating the real world. Features a resilient 4-layer search waterfall to locate public datasets, downloads raw files (CSV/Excel/PDF), and executes isolated Python code (pandas/numpy) to compute verifiable exact answers, outputting highly-structured JSON.",
      tagline: "Autonomous Tool Calling & Execution",
      tags: "Python · FastAPI · ReAct Framework · Pandas · Telegram API",
      badge: "LLM Agent",
      github: "https://github.com/Pvnn/data-analyst-bot"
    }
  ]
}
