"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Sparkles, Music, Gamepad2 } from "lucide-react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const presets = [
  {
    name: "Floating Mascot",
    description: "A gentle companion that floats around your screen.",
    icon: Sparkles,
  },
  {
    name: "Guitar Mascot",
    description: "Rock out with a guitar-wielding companion.",
    icon: Music,
  },
  {
    name: "Gaming Mascot",
    description: "A playful gamer mascot for your coding sessions.",
    icon: Gamepad2,
  },
];

export default function MascotSection() {
  const [animationData, setAnimationData] = useState<any>(null);
  const [selectedPreset, setSelectedPreset] = useState(0);

  useEffect(() => {
    // Try to load the user's lottie file
    fetch("/lottie/mascot.json")
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Lottie file not found");
      })
      .then((data) => setAnimationData(data))
      .catch(() => {
        // Fallback: no animation data, will show placeholder
        setAnimationData(null);
      });
  }, []);

  return (
    <section id="mascot" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm font-medium text-violet-600 mb-3 block">
            Meet Your Companion
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight">
            A Mascot That Gets You
          </h2>
          <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">
            Choose from multiple mascot presets to keep you company during those
            long coding sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lottie Animation Area */}
          <div className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-3xl bg-neutral-100 border border-neutral-200/60 overflow-hidden flex items-center justify-center">
            {animationData ? (
              <Lottie
                animationData={animationData}
                loop={true}
                className="w-full h-full"
              />
            ) : (
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-neutral-200 flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-neutral-400" />
                </div>
                <p className="text-neutral-500 font-medium">
                  Placeholder for Lottie Animation
                </p>
                <p className="text-sm text-neutral-400 mt-2">
                  Place your mascot.json in{" "}
                  <code className="px-1.5 py-0.5 bg-neutral-200 rounded text-xs">
                    public/lottie/
                  </code>
                </p>
              </div>
            )}
          </div>

          {/* Preset Selection */}
          <div className="space-y-4">
            {presets.map((preset, index) => (
              <button
                key={preset.name}
                onClick={() => setSelectedPreset(index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                  selectedPreset === index
                    ? "bg-white border-violet-300 shadow-lg shadow-violet-100"
                    : "bg-white/50 border-neutral-200/60 hover:bg-white hover:border-neutral-300/80"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      selectedPreset === index
                        ? "bg-violet-100"
                        : "bg-neutral-100"
                    }`}
                  >
                    <preset.icon
                      className={`w-5 h-5 transition-colors ${
                        selectedPreset === index
                          ? "text-violet-600"
                          : "text-neutral-500"
                      }`}
                    />
                  </div>
                  <div>
                    <h3
                      className={`font-semibold transition-colors ${
                        selectedPreset === index
                          ? "text-violet-900"
                          : "text-neutral-900"
                      }`}
                    >
                      {preset.name}
                    </h3>
                    <p className="text-sm text-neutral-500 mt-0.5">
                      {preset.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
