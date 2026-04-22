"use client";

import SoftAurora from "@/components/SoftAurora";

export default function Background() {
  return (
    <div className="fixed inset-0 z-0">
      <SoftAurora
        speed={0.3}
        scale={1.2}
        brightness={0.6}
        color1="#faf9f5"
        color2="#e8e6dc"
        noiseFrequency={2.0}
        noiseAmplitude={0.6}
        bandHeight={0.5}
        bandSpread={1.2}
        enableMouseInteraction={false}
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-multiply bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.88),transparent_18%),radial-gradient(circle_at_80%_10%,rgba(31,29,26,0.08),transparent_14%),radial-gradient(circle_at_30%_80%,rgba(31,29,26,0.06),transparent_12%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.72),transparent_16%)] bg-[length:180px_180px,220px_220px,260px_260px,240px_240px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(250,247,238,0.08),rgba(250,247,238,0.02)_16%,rgba(250,247,238,0.08))]" />
    </div>
  );
}
