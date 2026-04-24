"use client";

import FadeContent from "@/components/FadeContent";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const presets = [
  { id: "run", file: "sweet-run-cycle.json" },
  { id: "guitar", file: "cat-guitar.json" },
  { id: "surprise", file: "cat-surprise.json" },
  { id: "balloons", file: "cat-balloons.json" },
  { id: "drink", file: "cat-drink.json" },
  { id: "sax", file: "cat-sax.json" },
  { id: "ball", file: "cat-ball.json" },
  { id: "hide", file: "cat-hide.json" },
] as const;

export default function MascotShowcase() {
  const t = useTranslations("Pets");
  const [animations, setAnimations] = useState<Record<string, unknown>>({});
  const [selected, setSelected] = useState(0);

  const preset = presets[selected];
  const totalPresets = String(presets.length).padStart(2, "0");
  const activePreset = String(selected + 1).padStart(2, "0");

  const loadAnimation = useCallback(
    async (file: string) => {
      if (animations[file]) return;

      try {
        const res = await fetch(`/lottie/${file}`);
        if (!res.ok) return;
        const data = await res.json();
        setAnimations((prev) => ({ ...prev, [file]: data }));
      } catch {
        // Ignore failed animation fetches and keep fallback placeholder.
      }
    },
    [animations]
  );


  return (
    <section id="pets" className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 mx-auto h-72 w-[min(82vw,52rem)] rounded-full bg-[radial-gradient(circle,rgba(215,145,119,0.08),transparent_74%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[8%] top-24 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.4),transparent_72%)] blur-2xl" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-10 md:gap-12">
        <FadeContent
          duration={0.8}
          blur
          className="mx-auto max-w-xl text-center md:max-w-2xl"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink/38">
            {t("eyebrow")}
          </span>
          <h2 className="mt-3 text-3xl font-semibold leading-[1.02] tracking-[-0.04em] text-ink md:text-[3.25rem]">
            {t("title")}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-ink/56 md:max-w-xl md:text-[0.98rem] md:leading-7">
            {t("description")}
          </p>
        </FadeContent>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.28fr)_minmax(320px,0.82fr)] xl:gap-5">
          <FadeContent duration={0.9} delay={120} blur>
            <div className="rounded-[34px] border border-white/48 bg-[linear-gradient(180deg,rgba(255,255,255,0.58),rgba(248,246,241,0.76))] p-4 shadow-[0_20px_52px_rgba(31,29,26,0.035)] backdrop-blur-md">
              <div className="flex min-h-[500px] flex-col rounded-[28px] border border-white/56 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(247,244,238,0.86))] px-6 py-6 md:px-8 md:py-8">
                <div className="flex items-start justify-between gap-5 border-b border-ink/6 pb-5">
                  <div>
                    <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-ink/34">
                      {t("activeLabel")}
                    </span>
                    <h3 className="mt-3 text-[1.9rem] font-semibold leading-none tracking-[-0.05em] text-ink md:text-[2.4rem]">
                      {t(preset.id)}
                    </h3>
                  </div>

                  <span className="rounded-full border border-white/80 bg-white/56 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-ink/42">
                    {activePreset} / {totalPresets}
                  </span>
                </div>

                <div className="relative mt-6 flex flex-1 items-center justify-center overflow-hidden rounded-[28px] border border-white/46 bg-[linear-gradient(180deg,rgba(249,247,243,0.88),rgba(244,240,234,0.92))] px-6 py-10">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.32),transparent_60%)]" />
                  <div className="pointer-events-none absolute h-40 w-40 rounded-full bg-white/14 blur-3xl" />

                  {animations[preset.file] ? (
                    <Lottie
                      animationData={animations[preset.file]}
                      loop
                      className="relative z-10 h-52 w-52 md:h-64 md:w-64"
                    />
                  ) : (
                    <div className="relative z-10 h-52 w-52 rounded-[28px] bg-light-warm/45 md:h-64 md:w-64" />
                  )}
                </div>

                <p className="mt-6 border-t border-ink/6 pt-5 text-sm font-medium tracking-[0.08em] text-ink/44 md:text-[0.95rem]">
                  {t(`${preset.id}Mood`)}
                </p>
              </div>
            </div>
          </FadeContent>

          <FadeContent duration={0.85} delay={180} blur>
            <div className="h-full rounded-[30px] border border-white/52 bg-white/40 p-3 shadow-[0_18px_56px_rgba(31,29,26,0.035)] backdrop-blur-md">
              <div className="flex items-center justify-between rounded-[24px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(248,244,236,0.82))] px-5 py-4">
                <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-ink/34">
                  {t("collectionLabel")}
                </span>
                <span className="rounded-full border border-white/80 bg-white/54 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-ink/40">
                  {totalPresets}
                </span>
              </div>

              <div className="mt-3 space-y-2">
                {presets.map((p, index) => {
                  const isActive = selected === index;
                  const displayIndex = String(index + 1).padStart(2, "0");

                  return (
                    <button
                      key={p.id}
                      onClick={() => {
                        setSelected(index);
                        void loadAnimation(p.file);
                      }}
                      className={`flex w-full items-center gap-3 rounded-[22px] border px-4 py-3.5 text-left transition-all duration-200 ${
                        isActive
                          ? "border-white/82 bg-white/86 shadow-[0_12px_28px_rgba(31,29,26,0.05)]"
                          : "border-transparent bg-white/24 hover:border-white/48 hover:bg-white/58"
                      }`}
                    >
                      <span className="w-8 shrink-0 text-[10px] font-medium uppercase tracking-[0.24em] text-ink/30">
                        {displayIndex}
                      </span>

                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/70 bg-white/55">
                        {isActive && animations[p.file] ? (
                          <Lottie
                            animationData={animations[p.file]}
                            loop
                            className="h-8 w-8"
                          />
                        ) : (
                          <span className="h-7 w-7 rounded-full bg-light-warm/40" />
                        )}
                      </span>

                      <span
                        className={`min-w-0 flex-1 text-sm font-semibold transition-colors ${
                          isActive ? "text-ink" : "text-ink/74"
                        }`}
                      >
                        {t(p.id)}
                      </span>

                      <span
                        className={`h-2.5 w-2.5 shrink-0 rounded-full transition-colors ${
                          isActive ? "bg-terracotta/72" : "bg-transparent"
                        }`}
                      >
                        <span className="sr-only">{isActive ? "active" : ""}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
}
