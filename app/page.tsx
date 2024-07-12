import { DrawerDemo } from "@/components/DrawerForm";
import FeaturedCourses from "@/components/FeaturedCourses";
import { GlobeCom } from "@/components/GlobeCom";
import HeroSection from "@/components/HeroSection";
import Quote from "@/components/Quote";
import { MarqueeDemo } from "@/components/ui/testimony";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased 
    bg-grid-white/[0.2]">
      <HeroSection />
      <FeaturedCourses />
      <Quote />
      <GlobeCom />
      <MarqueeDemo />
      <DrawerDemo/>
    </main>
  );
}
