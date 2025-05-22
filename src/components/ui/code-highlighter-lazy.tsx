'use client';

import React, { Suspense } from 'react';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';

// Define loading placeholder
const CodeHighlighterPlaceholder = ({
  className,
  lines = 10,
  lineLength = 100,
}: {
  className?: string;
  lines?: number;
  lineLength?: number;
}) => (
  <div className={cn("relative rounded-lg overflow-hidden shadow-lg", className)}>
    <div className="bg-slate-800 px-4 py-2 text-xs font-mono text-slate-300">
      <div className="h-4 w-20 bg-slate-700 rounded animate-pulse" />
    </div>
    <pre className="p-4 overflow-x-auto bg-slate-900">
      {[...Array(lines)].map((_, i) => (
        <div 
          key={i} 
          className="h-4 bg-slate-800 rounded my-1 animate-pulse"
          style={{ width: `${Math.random() * 40 + 60}%` }}
        />
      ))}
    </pre>
  </div>
);

// Lazy load the actual code highlighter component
const CodeHighlighterComponent = dynamic(
  () => import('./code-highlighter').then((mod) => mod.CodeHighlighter),
  {
    ssr: false,
    loading: ({ className }) => <CodeHighlighterPlaceholder className={className} />
  }
);

interface CodeHighlighterProps {
  code: string;
  language?: string;
  className?: string;
  showLineNumbers?: boolean;
}

export function LazyCodeHighlighter({
  code,
  language = 'javascript',
  className,
  showLineNumbers = true,
}: CodeHighlighterProps) {
  return (
    <Suspense fallback={<CodeHighlighterPlaceholder className={className} />}>
      <CodeHighlighterComponent 
        code={code}
        language={language}
        className={className}
        showLineNumbers={showLineNumbers}
      />
    </Suspense>
  );
}
