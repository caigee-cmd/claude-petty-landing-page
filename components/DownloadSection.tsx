"use client";

import { Download, Apple, AlertTriangle } from "lucide-react";

export default function DownloadSection() {
  return (
    <section id="download" className="relative py-32 px-6 bg-light-warm/30">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-sm font-medium text-terracotta mb-3 block">
          Get Started
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight">
          Ready to Meet Your Pet?
        </h2>
        <p className="mt-4 text-lg text-warm-gray max-w-2xl mx-auto">
          Download Claude Petty for macOS and start tracking your Claude Code
          activity with a cute companion by your side.
        </p>

        <div className="mt-12 flex flex-col items-center gap-6">
          <a
            href="https://github.com/caigee-cmd/claude-petty/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 text-base font-semibold text-cream bg-terracotta rounded-full hover:bg-terracotta/90 transition-colors"
          >
            <Apple className="w-5 h-5" />
            Download for macOS
          </a>

          <a
            href="https://github.com/caigee-cmd/claude-petty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-warm-gray hover:text-ink transition-colors"
          >
            <Download className="w-4 h-4" />
            View on GitHub
          </a>
        </div>

        <div className="mt-16 p-6 rounded-2xl bg-amber-50/50 border border-amber-200/40 max-w-2xl mx-auto">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-left">
              <h4 className="font-semibold text-amber-900 text-sm">
                Important Note
              </h4>
              <p className="text-sm text-amber-700/80 mt-1 leading-relaxed">
                The current public build is unsigned and not notarized. On first
                launch, macOS may block the app until you manually allow it in{" "}
                <strong>Privacy & Security</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
