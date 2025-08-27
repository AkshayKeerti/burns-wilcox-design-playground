import OurHistoryHero from '@/page-componenents/about/our-history/OurHistoryHero';
import Timeline from '@/page-componenents/about/our-history/Timeline';
import Milestones from '@/page-componenents/about/our-history/Milestones';
import Legacy from '@/page-componenents/about/our-history/Legacy';
import Footer from '@/components/Footer/Footer';

export default function OurHistory() {
  return (
    <>
      <OurHistoryHero />
      <Timeline />
      <Milestones />
      <Legacy />
      <Footer />
    </>
  );
}
