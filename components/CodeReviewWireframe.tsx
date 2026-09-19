"use client";

import React, { useState } from "react";
import { GitPullRequest, Activity, Cpu, CheckCircle2 } from "lucide-react";

interface AgentStep {
  id: string;
  name: string;
  tag: string;
  icon: React.ElementType;
  headline: string;
  badge: string;
  description: string;
  telemetry: string[];
}

const steps: AgentStep[] = [
  {
    id: "webhook",
    name: "PR Ingestion",
    tag: "Express Webhook",
    icon: GitPullRequest,
    headline: "Automated CI/CD Webhooks",
    badge: "fetchPR.ts",
    description:
      "Listens for GitHub PR events via an Express.js backend. Fetches raw diffs and parses existing PR comments to ensure idempotency so the agent never spams the repository with duplicate issues.",
    telemetry: ["Event: pull_request", "Idempotency Check: Passed", "Diff Extracted"],
  },
  {
    id: "stream",
    name: "NDJSON Stream",
    tag: "Server-Sent Events",
    icon: Activity,
    headline: "Real-Time Dashboard Streaming",
    badge: "Vanilla JS / CSS",
    description:
      "Streams the agent's internal thought process and execution states in real-time to a minimalist local dashboard using NDJSON and Server-Sent Events.",
    telemetry: ["Connection: SSE Active", "Parsing: NDJSON", "Status: Receiving"],
  },
  {
    id: "loop",
    name: "Anthropic Agent",
    tag: "Tool-Use Loop",
    icon: Cpu,
    headline: "Iterative Code Analysis",
    badge: "@anthropic-ai/sdk",
    description:
      "Core loop powered by Anthropic's Claude. Analyzes code for bugs and anti-patterns while adhering to custom injected team rules (e.g., strict typings) using an iterative tool-use loop.",
    telemetry: ["Model: Claude", "Custom Rules: Applied", "Tool: addLabels"],
  },
  {
    id: "review",
    name: "Inline Comments",
    tag: "Netra Tracing",
    icon: CheckCircle2,
    headline: "GitHub API & Observability",
    badge: "postReview.ts",
    description:
      "Drops targeted comments precisely onto the offending lines in the GitHub 'Files changed' tab. Fully instrumented with the Netra SDK to trace LLM tool usage and execution spans.",
    telemetry: ["Netra Span: review_pr", "GitHub API: Success", "Inline Patch: Posted"],
  },
];

export default function CodeReviewWireframe() {
  const [activeStep, setActiveStep] = useState<AgentStep>(steps[2]);

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
        {steps.map((step) => {
          const Icon = step.icon;
          const isActive = activeStep.id === step.id;

          return (
            <button
              key={step.id}
              type="button"
              onClick={() => setActiveStep(step)}
              className={`relative flex flex-col items-center justify-center p-2 rounded border-2 border-black dark:border-white text-center transition-all cursor-pointer ${
                isActive
                  ? "bg-black text-white dark:bg-white dark:text-black shadow-none translate-x-[2px] translate-y-[2px]"
                  : "bg-white text-black dark:bg-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000] dark:hover:shadow-[4px_4px_0px_0px_#fff] shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff]"
              }`}
            >
              <Icon className={`w-4 h-4 mb-1 ${isActive ? "text-white dark:text-black" : "text-black dark:text-white"}`} />
              <span className="text-[9px] sm:text-[10px] font-bold leading-tight line-clamp-1">
                {step.name}
              </span>
              <span className={`text-[8px] mt-0.5 ${isActive ? "text-gray-300 dark:text-gray-600" : "text-gray-500 dark:text-gray-400"}`}>
                {step.tag}
              </span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Inspector Output */}
      <div className="mt-2.5 border-2 border-black dark:border-white bg-[#F7F6F3] dark:bg-neutral-800 p-2.5 rounded text-left shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff]">
        <div className="flex items-center justify-between text-[9px] text-gray-500 dark:text-gray-400 border-b border-gray-300 dark:border-gray-600 pb-1 mb-1.5">
          <span className="font-bold text-black dark:text-white uppercase tracking-wider">{activeStep.headline}</span>
          <span className="bg-black text-white dark:bg-white dark:text-black px-1.5 py-0.5 rounded text-[8px] font-bold">
            {activeStep.badge}
          </span>
        </div>
        <p className="text-[11px] text-gray-800 dark:text-gray-200 leading-snug font-sans mb-2">
          {activeStep.description}
        </p>

        {/* Telemetry Pills */}
        <div className="flex flex-wrap gap-1">
          {activeStep.telemetry.map((item) => (
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
