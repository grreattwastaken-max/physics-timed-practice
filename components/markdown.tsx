"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/** Tutor/marking output renderer with GFM tables and tuned typography. */
export function Markdown({ children }: { children: string }) {
  return (
    <div className="markdown text-sm leading-relaxed [&>*+*]:mt-3">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: (p) => <h3 className="text-base font-bold" {...p} />,
          h2: (p) => <h3 className="text-base font-semibold" {...p} />,
          h3: (p) => <h4 className="text-sm font-semibold" {...p} />,
          p: (p) => (
            <p className="formula max-w-[75ch] text-ink-secondary" {...p} />
          ),
          strong: (p) => <strong className="font-semibold text-ink" {...p} />,
          ul: (p) => (
            <ul className="ml-4 list-disc space-y-1 text-ink-secondary" {...p} />
          ),
          ol: (p) => (
            <ol
              className="ml-4 list-decimal space-y-1 text-ink-secondary"
              {...p}
            />
          ),
          li: (p) => <li className="formula leading-relaxed" {...p} />,
          code: (p) => (
            <code
              className="formula rounded bg-surface-sunken px-1.5 py-0.5 text-[0.85em]"
              {...p}
            />
          ),
          table: (p) => (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-xs" {...p} />
            </div>
          ),
          th: (p) => (
            <th
              className="border-b border-line px-2 py-1.5 text-left font-semibold"
              {...p}
            />
          ),
          td: (p) => (
            <td
              className="formula border-b border-line px-2 py-1.5 text-ink-secondary"
              {...p}
            />
          ),
          blockquote: (p) => (
            <blockquote
              className="border-l-2 border-line pl-3 text-ink-muted"
              {...p}
            />
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
