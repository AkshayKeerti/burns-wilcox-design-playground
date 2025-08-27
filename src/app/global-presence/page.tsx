import GlobalPresenceHero from '@/page-componenents/global-presence/GlobalPresenceHero';
import GlobalOffices from '@/page-componenents/global-presence/GlobalOffices';
import RegionalExpertise from '@/page-componenents/global-presence/RegionalExpertise';
import GlobalPartnerships from '@/page-componenents/global-presence/GlobalPartnerships';
import Footer from '@/components/Footer/Footer';

export default function GlobalPresence() {
  return (
    <>
      <GlobalPresenceHero />
      <GlobalOffices />
      <RegionalExpertise />
      <GlobalPartnerships />
      <Footer />
    </>
  );
}
