import SolutionsHero from '@/page-componenents/solutions/SolutionsHero';
import ProductAreas from '@/page-componenents/solutions/ProductAreas';
import Industries from '@/page-componenents/solutions/Industries';
import CaseStudies from '@/page-componenents/solutions/CaseStudies';
import Footer from '@/components/Footer/Footer';

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <ProductAreas />
      <Industries />
      <CaseStudies />
      <Footer />
    </>
  );
}
