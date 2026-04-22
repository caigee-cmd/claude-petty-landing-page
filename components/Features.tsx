"use client";

import { Activity, BarChart3, Shield, Download } from "lucide-react";

const items = [
  { icon: Activity, label: "Menu bar glance" },
  { icon: BarChart3, label: "Daily stats" },
  { icon: Shield, label: "Local-only" },
  { icon: Download, label: "CSV / JSON export" },
];

export default function Features() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-10 px-6 bg-light-warm/30">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-light-warm text-sm text-ink"
            >
              <item.icon className="w-4 h-4 text-terracotta" />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
