"use client";

import FadeContent from "@/components/FadeContent";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";

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

  useEffect(() => {
    presets.forEach((p) => void loadAnimation(p.file));
  }, [loadAnimation]);

  return (
    <section id="pets" className="relative overflow-hidden px-6 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 mx-auto h-72 w-[min(82vw,52rem)] rounded-full bg-[radial-gradient(circle,rgba(215,145,119,0.08),transparent_74%)] blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-7 md:gap-8">
        <FadeContent duration={0.8} blur className="mx-auto max-w-md text-center md:max-w-lg">
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink/38">
            {t("eyebrow")}
          </span>
          <h2 className="mt-3 text-3xl font-semibold leading-[1.02] tracking-[-0.04em] text-ink md:text-[3.25rem]">
            {t("title")}
          </h2>
          <p className="mx-auto mt-2.5 max-w-sm text-sm leading-6 text-ink/56 md:max-w-md md:text-[0.95rem] md:leading-7">
            {t("description")}
          </p>
        </FadeContent>

        <FadeContent duration={0.9} delay={120} blur>
          <div className="rounded-[32px] bg-[linear-gradient(180deg,rgba(255,255,255,0.62),rgba(247,242,233,0.86))] p-4 shadow-[0_20px_56px_rgba(31,29,26,0.04)] backdrop-blur-md">
            <div className="flex min-h-[420px] flex-col rounded-[28px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),rgba(252,249,242,0.78)_52%,rgba(247,242,233,0.94))] px-6 py-6 md:px-8 md:py-8">
              <div className="text-center">
                <span className="inline-flex px-1 py-1 text-xs font-medium uppercase tracking-[0.22em] text-terracotta/72">
                  {t(preset.id)}
                </span>
              </div>

              <div className="relative mt-5 flex flex-1 items-center justify-center overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.96),rgba(248,244,236,0.84)_58%,rgba(240,232,221,0.94))] px-6 py-10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,145,119,0.06),transparent_62%)]" />
                <div className="pointer-events-none absolute h-44 w-44 rounded-full bg-white/18 blur-2xl" />

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
            </div>
          </div>
        </FadeContent>

        <FadeContent duration={0.85} delay={180} blur>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {presets.map((p, index) => {
              const isActive = selected === index;

              return (
                <button
                  key={p.id}
                  onClick={() => setSelected(index)}
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-white/78 text-terracotta shadow-[0_8px_20px_rgba(215,145,119,0.08)]"
                      : "text-ink/54 hover:bg-white/48 hover:text-ink/72"
                  }`}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/42">
                    {animations[p.file] ? (
                      <Lottie
                        animationData={animations[p.file]}
                        loop
                        className="h-7 w-7"
                      />
                    ) : (
                      <span className="h-6 w-6 rounded-full bg-light-warm/40" />
                    )}
                  </span>
                  <span className="font-medium">{t(p.id)}</span>
                </button>
              );
            })}
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
