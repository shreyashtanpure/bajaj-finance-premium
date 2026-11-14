import React, { useState } from 'react';
import { ExternalLink, X, ShieldAlert } from 'lucide-react';

export const DisclaimerBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-gradient-to-r from-[#001c38] via-[#00386b] to-[#001c38] border-b border-blue-500/30 text-xs py-2 px-4 relative z-40 text-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-1">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
          <p className="leading-tight">
            <span className="font-bold text-white tracking-wide uppercase bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded text-[10px] mr-2">
              Educational Concept
            </span>
            This is an unofficial educational portfolio concept & frontend design showcase. All financial products, names, and logos belong to Bajaj Finance Limited / Bajaj Finserv Limited.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://www.bajajfinserv.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#38bdf8] hover:text-white font-medium hover:underline"
          >
            Visit Official Website <ExternalLink className="w-3 h-3" />
          </a>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss disclaimer banner"
            className="p-1 text-slate-400 hover:text-white rounded hover:bg-white/10 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
