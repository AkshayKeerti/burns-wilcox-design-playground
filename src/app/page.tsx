import OurProducts from '@/page-componenents/home/OurProducts';
import PartnerSection from '@/page-componenents/home/PartnerSection';
import StatsSection from '@/page-componenents/home/StatsSection';
import InsuranceCtaSection from '@/page-componenents/home/InsuranceCtaSection';
import HeroSection from '@/page-componenents/home/HeroSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurProducts />
      <PartnerSection />
      <StatsSection />
      <InsuranceCtaSection />
    </>
  );
}
