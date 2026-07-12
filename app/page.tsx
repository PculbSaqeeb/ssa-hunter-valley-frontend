import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const AboutSection = dynamic(() => import("@/components/AboutSection"), { ssr: true });
const QuoteSection = dynamic(() => import("@/components/QuoteSection"), { ssr: true });
const KeyFeatures = dynamic(() => import("@/components/KeyFeatures"), { ssr: true });
const Programs = dynamic(() => import("@/components/Programs"), { ssr: true });
const Marquee = dynamic(() => import("@/components/Marquee"), { ssr: true });
const SignatureAcademy = dynamic(() => import("@/components/SignatureAcademy"), { ssr: true });
const Professionals = dynamic(() => import("@/components/Professionals"), { ssr: true });
const Facilities = dynamic(() => import("@/components/Facilities"), { ssr: true });
const CoachesEvents = dynamic(() => import("@/components/CoachesEvents"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden relative w-full">
      <Header />
      <Hero />
      <AboutSection />
      <QuoteSection />
      <KeyFeatures />
      <Programs />
      <Marquee />
      <SignatureAcademy />
      <Professionals />
      <Facilities />
      <CoachesEvents />
      <Footer />
    </main>
  );
}
