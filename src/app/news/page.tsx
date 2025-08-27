import NewsHero from '@/page-componenents/news/NewsHero';
import LatestNews from '@/page-componenents/news/LatestNews';
import EventsCalendar from '@/page-componenents/news/EventsCalendar';
import NewsCategories from '@/page-componenents/news/NewsCategories';
import Footer from '@/components/Footer/Footer';

export default function News() {
  return (
    <>
      <NewsHero />
      <LatestNews />
      <EventsCalendar />
      <NewsCategories />
      <Footer />
    </>
  );
}
