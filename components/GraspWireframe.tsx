"use client";

import React, { useState } from "react";
import { Database, Filter, GitGraph, Zap } from "lucide-react";

interface PipelineStage {
  id: string;
  name: string;
  tag: string;
  icon: React.ElementType;
  headline: string;
  badge: string;
  description: string;
  telemetry: string[];
}

const stages: PipelineStage[] = [
  {
    id: "retrieve",
    name: "Hybrid Retrieval",
    tag: "Contriever + BM25",
    icon: Database,
    headline: "Dense + Sparse Reciprocal Rank Fusion",
    badge: "RRF (κ=10)",
    description:
      "Maximizes initial recall by fusing dense embeddings (Contriever-MSMARCO) with sparse keyword scoring (BM25-Okapi) before passing documents to the compression pipeline.",
    telemetry: ["Contriever 110M", "Top-K: 5", "Recall Optimized"],
  },
  {
    id: "quitox",
    name: "QUITO-X",
    tag: "Coarse Filter",
    icon: Filter,
    headline: "Information Bottleneck Filtering",
    badge: "Flan-T5-Small",
    description:
      "Adapts token-level IB to sentence-level filtering via boundary tracking. Uses max-pooled, Gaussian-smoothed cross-attention from a frozen 80M parameter model to prune obvious noise.",
    telemetry: ["Retains ~80%", "Gaussian σ=2.0", "Fast Heuristic"],
  },
  {
    id: "epexit",
    name: "EP-EXIT",
    tag: "Fine Span Filter",
    icon: GitGraph,
    headline: "Evidence Span Grouping & Classification",
    badge: "Gemma-2B (NF4)",
    description:
      "Constructs a cosine-similarity graph to cluster related sentences into coherent evidence spans, then classifies span relevance using a 4-bit quantized Gemma-2B-it classifier.",
    telemetry: ["Graph δ=0.45", "Threshold τ=0.5", "Span-Level context"],
  },
  {
    id: "results",
    name: "Performance",
    tag: "NQ & TriviaQA",
    icon: Zap,
    headline: "Pareto Frontier Shift",
    badge: "Accuracy + Speed",
    description:
      "Demonstrates a paradoxical efficiency gain: the lightweight QUITO-X filter shrinks the payload for the 2B classifier, yielding a +10 Exact Match improvement on Natural Questions with a 28% latency reduction.",
    telemetry: ["+10 EM (NQ)", "-28% Latency", "Beats NoOp Baseline"],
  },
];

export default function GraspWireframe() {
  const [activeStage, setActiveStage] = useState<PipelineStage>(stages[1]);

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
