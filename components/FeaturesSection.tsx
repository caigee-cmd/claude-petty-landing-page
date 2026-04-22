"use client";

import {
  Shield,
  HardDrive,
  FileOutput,
  Eye,
  Lock,
  WifiOff,
} from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Passive Scanning",
    description: "Reads local transcript data under ~/.claude/projects/ without modifying anything.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "No cloud uploads, no telemetry, no account required. Your data stays on your machine.",
  },
  {
    icon: HardDrive,
    title: "Local-First",
    description: "All data is stored locally in ~/Library/Application Support/ClaudeDash/",
  },
  {
    icon: WifiOff,
    title: "No Network Required",
    description: "Works entirely offline. No internet connection needed after installation.",
  },
  {
    icon: FileOutput,
    title: "Export Ready",
    description: "Export your usage stats as CSV or JSON for further analysis or reporting.",
  },
  {
    icon: Lock,
    title: "No Config Changes",
    description: "Does not modify ~/.claude/settings.json or any of your existing Claude Code setup.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm font-medium text-terracotta mb-3 block">
            Built for Developers
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight">
            Local. Private. Yours.
          </h2>
          <p className="mt-4 text-lg text-warm-gray max-w-2xl mx-auto">
            Claude Petty is designed with a local-first philosophy. Your data
            never leaves your Mac.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-white border border-light-warm hover:border-warm-gray/30 hover:shadow-lg hover:shadow-ink/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-light-warm flex items-center justify-center mb-5 group-hover:bg-terracotta/10 transition-colors">
                <feature.icon className="w-5 h-5 text-ink/60 group-hover:text-terracotta transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-ink mb-2">
                {feature.title}
              </h3>
              <p className="text-warm-gray leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
