import ContactHero from '@/page-componenents/contact/ContactHero';
import ContactForm from '@/page-componenents/contact/ContactForm';
import OfficeLocations from '@/page-componenents/contact/OfficeLocations';
import ContactInfo from '@/page-componenents/contact/ContactInfo';
import Footer from '@/components/Footer/Footer';

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <OfficeLocations />
      <ContactInfo />
      <Footer />
    </>
  );
}
