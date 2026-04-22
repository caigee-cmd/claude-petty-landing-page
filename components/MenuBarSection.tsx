"use client";

import { Activity, Zap, MessageSquare, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Active Sessions",
    description: "See your currently active Claude Code sessions at a glance, right from the menu bar.",
  },
  {
    icon: MessageSquare,
    title: "Recent Completions",
    description: "Quickly access your most recent completions and conversations without opening the terminal.",
  },
  {
    icon: BarChart3,
    title: "Daily Overview",
    description: "Get a lightweight daily summary of your Claude Code usage patterns and activity.",
  },
  {
    icon: Zap,
    title: "Instant Access",
    description: "Everything is one click away. No need to dig through folders or terminal history.",
  },
];

export default function MenuBarSection() {
  return (
    <section id="menubar" className="relative py-24 px-6 bg-light-warm/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-terracotta mb-3 block">
            Where Your Pet Lives
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight">
            Always in Your Menu Bar
          </h2>
          <p className="mt-4 text-lg text-warm-gray max-w-2xl mx-auto">
            Claude Petty stays quietly in your menu bar, surfacing what matters
            without ever getting in the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white border border-light-warm rounded-2xl p-7 hover:border-warm-gray/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-light-warm flex items-center justify-center shrink-0">
                  <feature.icon className="w-5 h-5 text-ink/70" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ink mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-warm-gray text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
