"use client";

import { Clock, Heart, Sparkles, Trophy } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "384",
    suffix: "h",
    label: "Time Together",
    description: "Your pet has been by your side",
  },
  {
    icon: Sparkles,
    value: "12,847",
    suffix: "",
    label: "Completions Tracked",
    description: "Every milestone celebrated",
  },
  {
    icon: Heart,
    value: "999",
    suffix: "+",
    label: "Encouragements",
    description: "Virtual pets never judge bugs",
  },
  {
    icon: Trophy,
    value: "56",
    suffix: "",
    label: "Active Sessions",
    description: "Currently watching over you",
  },
];

export default function StatsSection() {
  return (
    <section id="stats" className="relative py-24 px-6 bg-ink">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-terracotta mb-3 block">
            Your Journey Together
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-cream tracking-tight">
            Every Session Counts
          </h2>
          <p className="mt-4 text-lg text-warm-gray max-w-2xl mx-auto">
            Your pet quietly keeps track of everything, turning mundane stats
            into memories of your coding journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                  <stat.icon className="w-5 h-5 text-cream/80" />
                </div>
                <div className="text-4xl font-bold text-cream mb-1 tabular-nums">
                  {stat.value}
                  <span className="text-terracotta">{stat.suffix}</span>
                </div>
                <p className="text-cream font-medium text-sm">{stat.label}</p>
                <p className="text-warm-gray text-xs mt-1">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
