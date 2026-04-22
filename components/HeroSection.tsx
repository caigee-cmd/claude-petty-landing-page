"use client";

import BlurText from "@/components/BlurText";
import FadeContent from "@/components/FadeContent";
import Magnet from "@/components/Magnet";
import { Heart } from "lucide-react";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 pb-16">
      <div className="pointer-events-none absolute inset-x-0 top-24 mx-auto h-56 w-[min(84vw,48rem)] rounded-full bg-[radial-gradient(circle,rgba(215,145,119,0.1),transparent_70%)] blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <FadeContent duration={0.8} blur className="mb-6 flex justify-center">
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-terracotta/72">
            {t("badge")}
          </span>
        </FadeContent>

        <div className="max-w-3xl">
          <BlurText
            text={t("title")}
            animateBy="words"
            delay={180}
            className="justify-center text-5xl font-semibold tracking-tight text-ink md:text-7xl"
          />
        </div>

        <FadeContent duration={0.9} delay={120} blur className="mt-4 max-w-xl">
          <p className="mx-auto text-lg leading-8 text-ink/68 md:text-[1.15rem]">
            {t("description")}
          </p>
        </FadeContent>

        <FadeContent duration={0.8} delay={220} className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Magnet padding={120} magnetStrength={3} wrapperClassName="inline-flex">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream shadow-[0_14px_30px_rgba(215,145,119,0.22)] transition-colors hover:bg-terracotta/92"
            >
              <Heart className="h-4 w-4" />
              {t("download")}
            </a>
          </Magnet>

          <a
            href="#pets"
            className="inline-flex items-center gap-2 px-2 py-1 text-sm font-medium text-ink/62 transition-colors hover:text-ink"
          >
            {t("meetPets")}
          </a>
        </FadeContent>
      </div>
    </section>
  );
}
