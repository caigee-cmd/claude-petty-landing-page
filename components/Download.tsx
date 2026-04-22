"use client";

import FadeContent from "@/components/FadeContent";
import Magnet from "@/components/Magnet";
import { AlertTriangle, Apple, Download } from "lucide-react";
import { useTranslations } from "next-intl";

const DOWNLOAD_URL =
  "https://github.com/caigee-cmd/claude-petty/releases/latest/download/ClaudePetty.dmg";

export default function Download() {
  const t = useTranslations("Download");

  return (
    <section id="download" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 py-20">
      <div className="pointer-events-none absolute inset-x-0 bottom-24 mx-auto h-56 w-[min(78vw,48rem)] rounded-full bg-[radial-gradient(circle,rgba(215,145,119,0.08),transparent_72%)] blur-3xl" />

      <FadeContent duration={0.85} blur className="relative mx-auto w-full max-w-4xl">
        <div className="rounded-[36px] bg-[linear-gradient(180deg,rgba(255,255,255,0.68),rgba(248,245,238,0.9))] px-6 py-8 shadow-[0_20px_56px_rgba(31,29,26,0.05)] backdrop-blur-md md:px-10 md:py-12">
          <div className="text-center">
            <span className="inline-flex items-center px-1 py-1 text-xs font-medium uppercase tracking-[0.24em] text-terracotta/72">
              {t("eyebrow")}
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              {t("title")}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-ink/58">
              {t("description")}
            </p>
            <p className="mt-2 text-sm text-ink/48">{t("subtitle")}</p>

            <div className="mt-9 flex justify-center">
              <Magnet padding={130} magnetStrength={3.2} wrapperClassName="inline-flex">
                <a
                  href={DOWNLOAD_URL}
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream shadow-[0_14px_28px_rgba(31,29,26,0.1)] transition-colors hover:bg-ink/92"
                >
                  <Apple className="h-4 w-4" />
                  {t("button")}
                  <Download className="h-4 w-4 opacity-70" />
                </a>
              </Magnet>
            </div>

            <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-ink/56">
              <AlertTriangle className="h-3 w-3" />
              {t("note")}
            </div>
          </div>
        </div>
      </FadeContent>
    </section>
  );
}
