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
      title: "GRASP — Graph-based Relevance Pruning",
      description: "Query-aware, multi-stage context compression for RAG. Uses hybrid dense+sparse retrieval, Information-Bottleneck-style filtering, and graph-based clustering. Benchmarked on HotpotQA/NQ/TriviaQA.",
      tags: "Python · PyTorch",
      github: "https://github.com/Pvnn/grasp-rag"
    },
    {
      title: "Smart MCQ Solver",
      description: "Retrieval-augmented MCQ pipeline fine-tuning microsoft/deberta-v3-small. Systematically evaluated against a custom from-scratch Transformer encoder and XGBoost baseline.",
      tags: "Transformers · FAISS",
      github: "https://github.com/Pvnn/mcq-solver"
    },
    {
      title: "Code Review Agent",
      description: "Autonomous agent fetching PR diffs, running an iterative Claude tool-use loop, and posting inline comments via GitHub API. Includes CI/CD mode and Netra tracing.",
      tags: "TypeScript · Claude API",
      github: "https://github.com/Pvnn/code-review-agent"
    },
    {
      title: "Data Analyst Telegram Bot",
      description: "Autonomous ReAct agent for data-analysis. Performs multi-layer fallback web search, downloads datasets, and runs sandboxed pandas to compute answers without hallucinations.",
      tags: "Python · FastAPI",
      github: "https://github.com/Pvnn/data-analyst-bot"
    }
  ]
}
