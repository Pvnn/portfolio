"use client";

import React, { useState } from "react";
import { Search, FileDown, Terminal, FileJson } from "lucide-react";

interface AgentStage {
  id: string;
  name: string;
  tag: string;
  icon: React.ElementType;
  headline: string;
  badge: string;
  description: string;
  telemetry: string[];
}

const stages: AgentStage[] = [
  {
    id: "search",
    name: "Search Waterfall",
    tag: "4-Layer Fallback",
    icon: Search,
    headline: "Resilient Web Search Engine",
    badge: "search_web(query)",
    description:
      "Prevents silent scraping failures on cloud hosts by cascading through Tavily API, DuckDuckGo API, MediaWiki API, and raw HTML scraping. Ensures the agent always finds valid dataset sources.",
    telemetry: ["Primary: Tavily API", "Fallback: DDG Instant", "0% Silent Fails"],
  },
  {
    id: "fetch",
    name: "Data Fetcher",
    tag: "Multi-Format",
    icon: FileDown,
    headline: "Verified Dataset Ingestion",
    badge: "fetch_url(url)",
    description:
      "Downloads and previews structured data directly from verified URLs. Natively handles parsing for CSVs, Excel (.xls/.xlsx), PDFs, and HTML tables into the agent's context window.",
    telemetry: ["Format: .xlsx", "Bytes Read: 2.4MB", "Rows Previewed: 50"],
  },
  {
    id: "execute",
    name: "Python Sandbox",
    tag: "Subprocess",
    icon: Terminal,
    headline: "Sandboxed Computation Engine",
    badge: "run_python(code)",
    description:
      "Computes exact answers instead of hallucinating. Spawns an isolated Python subprocess with pandas and numpy pre-imported, enforced by a strict 25-second hard timeout to prevent hangs.",
    telemetry: ["import pandas as pd", "Execution Time: 1.2s", "Status: 0 (Success)"],
  },
  {
    id: "serve",
    name: "JSON & Logs",
    tag: "FastAPI",
    icon: FileJson,
    headline: "Structured Output & Public Traces",
    badge: "GET /run.jsonl",
    description:
      "Replies to Telegram with a strict, grader-parseable JSON object. Concurrently runs a FastAPI server in the same process to publicly serve the agent's full append-only ReAct reasoning trace.",
    telemetry: ["Async Thread Pool", "Response: JSON Object", "Trace: Public URL"],
  },
];

export default function DataAnalystWireframe() {
  const [activeStage, setActiveStage] = useState<AgentStage>(stages[0]);

  return (
    <div className="w-full h-full flex flex-col justify-between bg-white dark:bg-neutral-900 p-3 sm:p-4 select-none font-mono min-h-[260px]">
      {/* Mini Window Bar */}
      <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-2 mb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full border border-black dark:border-white bg-white dark:bg-black" />
          <div className="w-2.5 h-2.5 rounded-full border border-black dark:border-white bg-white dark:bg-black" />
          <div className="w-2.5 h-2.5 rounded-full border border-black dark:border-white bg-black dark:bg-white" />
        </div>
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-600 dark:bg-neutral-400"></span>
          </span>
          <span className="text-[10px] font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">Click nodes to explore</span>
        </div>
      </div>

      {/* Interactive Node Flow */}
      <div className="grid grid-cols-4 gap-1.5 sm:gap-2 items-center my-auto">
        {stages.map((stage) => {
          const Icon = stage.icon;
          const isActive = activeStage.id === stage.id;

          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => setActiveStage(stage)}
              className={`relative flex flex-col items-center justify-center p-2 rounded border-2 border-black dark:border-white text-center transition-all cursor-pointer ${
                isActive
                  ? "bg-black text-white dark:bg-white dark:text-black shadow-none translate-x-[2px] translate-y-[2px]"
                  : "bg-white text-black dark:bg-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000] dark:hover:shadow-[4px_4px_0px_0px_#fff] shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff]"
              }`}
            >
              <Icon className={`w-4 h-4 mb-1 ${isActive ? "text-white dark:text-black" : "text-black dark:text-white"}`} />
              <span className="text-[9px] sm:text-[10px] font-bold leading-tight line-clamp-1">
                {stage.name}
              </span>
              <span className={`text-[8px] mt-0.5 ${isActive ? "text-gray-300 dark:text-gray-600" : "text-gray-500 dark:text-gray-400"}`}>
                {stage.tag}
              </span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Inspector Output */}
      <div className="mt-2.5 border-2 border-black dark:border-white bg-[#F7F6F3] dark:bg-neutral-800 p-2.5 rounded text-left shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff]">
        <div className="flex items-center justify-between text-[9px] text-gray-500 dark:text-gray-400 border-b border-gray-300 dark:border-gray-600 pb-1 mb-1.5">
          <span className="font-bold text-black dark:text-white uppercase tracking-wider">{activeStage.headline}</span>
          <span className="bg-black text-white dark:bg-white dark:text-black px-1.5 py-0.5 rounded text-[8px] font-bold">
            {activeStage.badge}
          </span>
        </div>
        <p className="text-[11px] text-gray-800 dark:text-gray-200 leading-snug font-sans mb-2">
          {activeStage.description}
        </p>

        {/* Telemetry Pills */}
        <div className="flex flex-wrap gap-1">
          {activeStage.telemetry.map((item) => (
            <span
              key={item}
              className="text-[9px] bg-white dark:bg-black border border-black dark:border-white px-1.5 py-0.5 rounded text-black dark:text-white font-mono font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
