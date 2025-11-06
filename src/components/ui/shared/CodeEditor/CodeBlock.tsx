"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
}

export default function CodeBlock({ code, language, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg overflow-hidden border border-primary/20 bg-card/50 backdrop-blur-sm mb-6">
      {/* Header */}
      <div className="bg-linear-to-r from-primary/10 to-accent/10 border-b border-primary/20 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <span className="text-sm font-mono text-primary font-semibold">
            {title || language}
          </span>
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 px-3 py-1 rounded text-sm text-foreground/60 hover:text-foreground hover:bg-primary/10 transition-all"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      {/* Code */}
      <div className="overflow-x-auto p-4">
        <pre className="font-mono text-sm text-foreground/80 leading-relaxed whitespace-pre-wrap wrap-break-word">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
