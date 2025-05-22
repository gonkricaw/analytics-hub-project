"use client";

import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-css";
import "prismjs/components/prism-json";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-python";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-sql";
import "prismjs/themes/prism-tomorrow.css"; // Dark theme
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CodeHighlighterProps {
  code: string;
  language?: string;
  className?: string;
  showLineNumbers?: boolean;
}

export function CodeHighlighter({
  code,
  language = "javascript",
  className,
  showLineNumbers = true,
}: CodeHighlighterProps) {
  useEffect(() => {
    // Highlight all code blocks
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, [code, language]);

  return (
    <motion.div
      className={cn("relative rounded-lg overflow-hidden shadow-lg", className)}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-slate-800 px-4 py-2 text-xs font-mono text-slate-300 flex justify-between items-center">
        <span>{language}</span>
        <button
          onClick={() => {
            navigator.clipboard.writeText(code);
            // Optional: Add toast notification here
          }}
          className="px-2 py-1 bg-slate-700 hover:bg-slate-600 rounded text-slate-200 transition-colors"
        >
          Copy
        </button>
      </div>
      <pre
        className={cn(
          "p-4 overflow-x-auto bg-[#1E1E1E]",
          showLineNumbers && "line-numbers",
        )}
      >
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </motion.div>
  );
}
