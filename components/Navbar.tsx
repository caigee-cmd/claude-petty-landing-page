"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Cat, Download, Github, PawPrint, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

const NAV_ITEMS = [
  { id: "features", labelKey: "features", href: "#features", icon: Sparkles },
  { id: "pets", labelKey: "pets", href: "#pets", icon: PawPrint },
  { id: "download", labelKey: "download", href: "#download", icon: Download },
] as const;

const shellTransition = {
  type: "spring",
  stiffness: 148,
  damping: 32,
  mass: 0.92,
} as const;

const activePillTransition = {
  type: "spring",
  stiffness: 320,
  damping: 30,
  mass: 0.72,
} as const;

const shellVariants = {
  top: {
    y: 0,
    scale: 1,
    width: "100%",
    maxWidth: 1240,
    padding: "12px 14px",
    backgroundColor: "rgba(255, 255, 255, 0.42)",
    borderColor: "rgba(0, 0, 0, 0.04)",
    boxShadow: "0 18px 45px rgba(31, 29, 26, 0.03)",
    backdropFilter: "blur(10px)",
    borderRadius: "28px",
  },
  scrolled: {
    y: 10,
    scale: 0.975,
    width: "88%",
    maxWidth: 780,
    padding: "4px 5px",
    backgroundColor: "rgba(255, 255, 255, 0.84)",
    borderColor: "rgba(0, 0, 0, 0.07)",
    boxShadow: "0 18px 48px rgba(31, 29, 26, 0.09)",
    backdropFilter: "blur(22px)",
    borderRadius: "22px",
  },
};

const brandVariants = {
  top: { gap: 12 },
  scrolled: { gap: 4 },
};

const logoVariants = {
  top: {
    width: 44,
    height: 44,
    borderRadius: 16,
    rotate: 0,
  },
  scrolled: {
    width: 32,
    height: 32,
    borderRadius: 12,
    rotate: -8,
  },
};

const brandTextVariants = {
  top: { opacity: 1, x: 0, scale: 1 },
  scrolled: { opacity: 0.78, x: -6, scale: 0.92 },
};

const navVariants = {
  top: {
    gap: 8,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 4,
    paddingRight: 4,
  },
  scrolled: {
    gap: 0,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 2,
    paddingRight: 2,
  },
};

const ctaVariants = {
  top: { paddingLeft: 18, paddingRight: 18, paddingTop: 10, paddingBottom: 10 },
  scrolled: { paddingLeft: 10, paddingRight: 10, paddingTop: 6, paddingBottom: 6 },
};

const actionsVariants = {
  top: { gap: 10 },
  scrolled: { gap: 8 },
};

const iconButtonVariants = {
  top: { width: 42, height: 42 },
  scrolled: { width: 32, height: 32 },
};

export default function Navbar() {
  const t = useTranslations("Navbar");
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<(typeof NAV_ITEMS)[number]["id"]>("features");

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 180;

      const currentSection = NAV_ITEMS.reduce<(typeof NAV_ITEMS)[number]["id"]>(
        (current, item) => {
          const section = document.getElementById(item.id);
          if (!section) return current;

          return scrollPosition >= section.offsetTop ? item.id : current;
        },
        "features"
      );

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={false}
        animate={isScrolled ? "scrolled" : "top"}
        transition={shellTransition}
        className="fixed inset-x-0 top-3 z-50 flex justify-center px-2 md:px-4"
      >
        <motion.div
          variants={shellVariants}
          transition={shellTransition}
          className="relative flex items-center justify-between overflow-hidden rounded-[28px] border"
          style={{ WebkitBackdropFilter: isScrolled ? "blur(22px)" : "blur(10px)" }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_62%)]" />
          <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-ink/[0.08]" />

          <motion.a
            href="#"
            variants={brandVariants}
            className="relative z-10 flex min-w-0 items-center"
          >
            <motion.div
              variants={logoVariants}
              className="flex shrink-0 items-center justify-center bg-ink text-cream shadow-lg shadow-ink/10"
            >
              <Cat className="h-5 w-5" />
            </motion.div>
            <motion.div
              variants={brandTextVariants}
              className="hidden min-w-0 sm:block"
            >
              <div className="font-semibold tracking-tight text-ink">Claude Petty</div>
            </motion.div>
          </motion.a>

          <motion.nav
            variants={navVariants}
            className="relative hidden items-center rounded-full bg-black/[0.03] md:flex"
          >
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="relative rounded-full px-4 py-2 text-sm font-medium text-ink/68 transition-colors duration-200 hover:text-ink"
                >
                  {isActive ? (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 rounded-full bg-terracotta text-cream shadow-[0_8px_18px_rgba(215,145,119,0.18)]"
                      transition={activePillTransition}
                    />
                  ) : null}

                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="h-3.5 w-3.5" />
                    <span className={isActive ? "text-cream" : ""}>{t(item.labelKey)}</span>
                  </span>
                </a>
              );
            })}
          </motion.nav>

          <motion.div
            variants={actionsVariants}
            className="relative z-10 flex shrink-0 items-center"
          >
            <motion.a
              href="#download"
              variants={ctaVariants}
              className="inline-flex items-center gap-2 rounded-full bg-ink text-sm font-medium text-cream transition-colors hover:bg-ink/90"
            >
              <span className="hidden sm:inline">{t("get")}</span>
              <span className="sm:hidden">{t("download")}</span>
            </motion.a>

            <motion.a
              href="https://github.com/caigee-cmd/claude-petty"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Claude Petty on GitHub"
              title="GitHub"
              variants={iconButtonVariants}
              whileHover={{ y: -1.5, scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center justify-center rounded-full border border-black/[0.06] bg-black/[0.03] text-ink/65 shadow-[0_12px_28px_rgba(31,29,26,0.06)] transition-[background-color,color,box-shadow,border-color] duration-300 hover:border-terracotta/25 hover:bg-black/[0.06] hover:text-ink hover:shadow-[0_18px_36px_rgba(215,145,119,0.18)]"
            >
              <span className="pointer-events-none absolute left-1/2 top-full mt-3 hidden -translate-x-1/2 translate-y-1 rounded-full border border-white/50 bg-[rgba(252,249,242,0.92)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/60 opacity-0 shadow-[0_10px_24px_rgba(31,29,26,0.08)] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:inline-flex">
                GitHub
              </span>
              <Github className="h-4.5 w-4.5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.header>

      <motion.div
        initial={false}
        animate={isScrolled ? { y: 0, opacity: 1, scale: 1 } : { y: 10, opacity: 0.94, scale: 0.96 }}
        transition={shellTransition}
        className="fixed inset-x-0 bottom-4 z-50 px-3 md:hidden"
      >
        <div className="mx-auto flex max-w-sm items-center justify-between rounded-[24px] bg-[rgba(255,255,255,0.82)] px-2 py-2 shadow-[0_18px_45px_rgba(31,29,26,0.12)] backdrop-blur-xl">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                className="relative flex min-w-[78px] flex-1 justify-center"
              >
                <motion.span
                  animate={isActive ? { y: -8 } : { y: 0 }}
                  transition={activePillTransition}
                  className="relative flex w-full max-w-[88px] flex-col items-center gap-1 rounded-[22px] px-3 py-2"
                >
                  {isActive ? (
                    <motion.span
                      layoutId="mobile-navbar-active-pill"
                      className="absolute inset-0 rounded-[22px] bg-ink shadow-[0_10px_22px_rgba(31,29,26,0.14)]"
                      transition={activePillTransition}
                    />
                  ) : null}

                  <Icon className={`relative z-10 h-4 w-4 ${isActive ? "text-cream" : "text-ink/62"}`} />
                  <span
                    className={`relative z-10 text-[11px] font-medium tracking-wide ${
                      isActive ? "text-cream" : "text-ink/68"
                    }`}
                  >
                    {t(item.labelKey)}
                  </span>
                </motion.span>
              </a>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
