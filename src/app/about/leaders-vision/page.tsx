import LeadersVisionHero from '@/page-componenents/about/leaders-vision/LeadersVisionHero';
import LeadershipTeam from '@/page-componenents/about/leaders-vision/LeadershipTeam';
import VisionMission from '@/page-componenents/about/leaders-vision/VisionMission';
import Values from '@/page-componenents/about/leaders-vision/Values';
import Footer from '@/components/Footer/Footer';

export default function LeadersVision() {
  return (
    <>
      <LeadersVisionHero />
      <LeadershipTeam />
      <VisionMission />
      <Values />
      <Footer />
    </>
  );
}
