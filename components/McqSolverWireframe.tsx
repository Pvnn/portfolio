"use client";

import React, { useState } from "react";
import { Search, Cpu, Layers, Trophy } from "lucide-react";

interface PipelineStage {
  id: string;
  name: string;
  tag: string;
  icon: React.ElementType;
  headline: string;
  metric: string;
  description: string;
  specs: string[];
}

const stages: PipelineStage[] = [
  {
    id: "indexing",
    name: "Dense Corpus Indexing",
    tag: "Semantic Representation",
    icon: Search,
    headline: "Dense Wikipedia Context Retrieval",
    metric: "IndexFlatL2 Vector Store",
    description: "Processes unstructured Wikipedia corpora into dense embedding spaces using SentenceTransformers, enabling semantic neighborhood retrieval over keyword frequency.",
    specs: ["all-MiniLM-L6-v2", "Continuous Vector Space", "Dense Retrieval"],
  },
  {
    id: "eda",
    name: "Length-Bias Hypothesis",
    tag: "Distractor Analysis",
    icon: Trophy, // Re-using Trophy or we can use another icon like Cpu
    headline: "Empirical EDA & Feature Validation",
    metric: "p > 0.05 (Insignificant)",
    description: "Statistically evaluated common exam biases—specifically whether correct answers correlate with verbose options. Chi-square and boxplot distributions confirmed uniform length invariants, ruling out superficial length heuristics.",
    specs: ["Hypothesis Testing", "Distractor Invariants", "Corpus Validation"],
  },
  {
    id: "scratch_model",
    name: "Scratch Attention Stack",
    tag: "From-Scratch Encoder",
    icon: Cpu,
    headline: "PyTorch Custom Multi-Head Self-Attention",
    metric: "Vaswani et al. Formulation",
    description: "Built a ground-up PyTorch TransformerEncoder with sinusoidal positional encodings and multi-head self-attention over flattened choice tokens [B*5, L] to isolate architectural inductive bias from pre-trained weights.",
    specs: ["Multi-Head Attention", "Sinusoidal Encodings", "Linear Classifier Head"],
  },
  {
    id: "training",
    name: "Optimization Stability",
    tag: "Gradient Conditioning",
    icon: Layers,
    headline: "Resolving Posterior Collapse",
    metric: "Differential LR + Clipping",
    description: "Investigated optimization collapse where unconstrained backprop caused NaN loss and uniform posterior probabilities. Stabilized convergence via layer-specific differential learning rates and strict gradient norm clipping.",
    specs: ["Gradient Clipping", "Warmup Scheduler", "Weight Decay Decoupling"],
  },
];

export default function McqSolverWireframe() {
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

      {/* Interactive Flow Bar */}
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

      {/* Dynamic Terminal / Inspector Output */}
      <div className="mt-2.5 border-2 border-black dark:border-white bg-[#F7F6F3] dark:bg-neutral-800 p-2.5 rounded text-left shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff]">
        <div className="flex items-center justify-between text-[9px] text-gray-500 dark:text-gray-400 border-b border-gray-300 dark:border-gray-600 pb-1 mb-1.5">
          <span className="font-bold text-black dark:text-white uppercase tracking-wider">{activeStage.headline}</span>
          <span className="bg-black text-white dark:bg-white dark:text-black px-1.5 py-0.5 rounded text-[8px] font-bold">
            {activeStage.metric}
          </span>
        </div>
        <p className="text-[11px] text-gray-800 dark:text-gray-200 leading-snug font-sans mb-2">
          {activeStage.description}
        </p>

        {/* Mini Pill Badges */}
        <div className="flex flex-wrap gap-1">
          {activeStage.specs.map((item) => (
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
