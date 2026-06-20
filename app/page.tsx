import Header from '@/src/components/Header';
import HeroSection from '@/src/components/sections/HeroSection';
import SobreSection from '@/src/components/sections/SobreSection';
import ServicosSection from '@/src/components/sections/ServicosSection';
import ClubeSection from '@/src/components/sections/ClubeSection';
import TimeSection from '@/src/components/sections/TimeSection';
import GallerySection from '@/src/components/sections/GallerySection';
import AppSection from '@/src/components/sections/AppSection';
import DepoimentosSection from '@/src/components/sections/DepoimentosSection';
import FAQSection from '@/src/components/sections/FAQSection';
import CTASection from '@/src/components/sections/CTASection';
import Footer from '@/src/components/Footer';
import SectionDivider from '@/src/components/ui/SectionDivider';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#d97706] selection:text-white overflow-x-hidden w-full max-w-[100vw]">
      <Header />
      <HeroSection />
      <SectionDivider />
      <SobreSection />
      <SectionDivider />
      <ServicosSection />
      <SectionDivider />
      <ClubeSection />
      <SectionDivider />
      <TimeSection />
      <SectionDivider />
      <GallerySection />
      <SectionDivider />
      <AppSection />
      <SectionDivider />
      <DepoimentosSection />
      <SectionDivider />
      <FAQSection />
      <SectionDivider />
      <CTASection />
      <Footer />
    </main>
  );
}
