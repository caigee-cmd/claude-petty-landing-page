import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DemoVideo from "@/components/DemoVideo";
import MascotShowcase from "@/components/MascotShowcase";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export default function Home() {
  return (
    <>
      <Background />
      <main className="relative z-10">
        <Navbar />
        <HeroSection />
        <DemoVideo />
        <MascotShowcase />
        <Download />
        <Footer />
      </main>
    </>
  );
}
