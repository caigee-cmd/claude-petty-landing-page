"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="py-10 px-6 text-center bg-cream">
      <p className="text-xs tracking-[0.16em] text-ink/48 uppercase">
        {t("madeBy")}{" "}
        <a href="https://github.com/caigee-cmd" className="text-ink/58 hover:text-ink transition-colors">
          caigee-cmd
        </a>
        {" "}· {t("license")}
      </p>
    </footer>
  );
}
