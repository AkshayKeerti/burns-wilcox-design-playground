import Image from 'next/image';

const newsArticles = [
  {
    id: 1,
    title: 'Burns & Wilcox MENA Expands Operations in Saudi Arabia',
    excerpt:
      'Strategic expansion to better serve the growing Saudi market with enhanced local presence and specialized insurance solutions.',
    category: 'Company News',
    date: 'December 15, 2024',
    readTime: '3 min read',
    image: '/hero-1.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'New Cyber Risk Insurance Solutions for MENA Businesses',
    excerpt:
      'Launch of comprehensive cyber protection packages designed specifically for the unique digital challenges facing Middle Eastern companies.',
    category: 'Product Launch',
    date: 'December 10, 2024',
    readTime: '4 min read',
    image: '/hero-2.jpg',
    featured: false,
  },
  {
    id: 3,
    title: 'Industry Insights: The Future of Insurance in the Digital Age',
    excerpt:
      'Expert analysis on how emerging technologies are reshaping the insurance landscape and what it means for MENA businesses.',
    category: 'Industry Insights',
    date: 'December 8, 2024',
    readTime: '6 min read',
    image: '/hero-3.jpg',
    featured: false,
  },
  {
    id: 4,
    title: 'Burns & Wilcox MENA Partners with Leading Regional Banks',
    excerpt:
      'Strategic partnerships established to provide integrated financial and insurance solutions for corporate clients.',
    category: 'Partnerships',
    date: 'December 5, 2024',
    readTime: '3 min read',
    image: '/hero-1.jpg',
    featured: false,
  },
  {
    id: 5,
    title: 'Employee Benefits Trends in the Middle East',
    excerpt:
      'Comprehensive analysis of evolving employee benefit preferences and how companies are adapting their offerings.',
    category: 'Market Research',
    date: 'December 3, 2024',
    readTime: '5 min read',
    image: '/hero-2.jpg',
    featured: false,
  },
  {
    id: 6,
    title: 'Regulatory Update: New Insurance Laws in the UAE',
    excerpt:
      'Important updates on recent regulatory changes and their implications for businesses operating in the UAE.',
    category: 'Regulatory',
    date: 'November 30, 2024',
    readTime: '4 min read',
    image: '/hero-3.jpg',
    featured: false,
  },
];

export default function LatestNews() {
  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  return (
    <section className="bg-white w-full flex flex-col items-center py-24 px-16">
      <div className="flex flex-col items-center gap-4 w-full text-center mb-20">
        <span className="text-[18px] leading-[21.6px] font-normal text-corporate-grey-900">
          Latest Updates
        </span>
        <h2 className="text-[48px] leading-[56px] font-medium tracking-tight text-corporate-grey-900">
          Latest News & Insights
        </h2>
        <p className="text-[19px] leading-[23px] font-medium text-corporate-grey-900">
          Stay informed with the latest developments in insurance and risk management
        </p>
      </div>

      {/* Featured Article */}
      {featuredArticle && (
        <div className="w-full max-w-7xl mb-16">
          <div className="bg-tertiary-blue-50 border border-corporate-grey-100 p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-corporate-blue-500 text-white text-sm px-3 py-1 font-medium">
                    Featured
                  </span>
                  <span className="text-corporate-grey-600 text-sm">
                    {featuredArticle.category}
                  </span>
                  <span className="text-corporate-grey-500 text-sm">{featuredArticle.date}</span>
                </div>
                <h3 className="text-[33px] leading-[40px] font-medium text-corporate-grey-900 mb-4">
                  {featuredArticle.title}
                </h3>
                <p className="text-[18px] leading-[27px] text-corporate-grey-700 mb-6">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-corporate-grey-500 text-sm">
                    {featuredArticle.readTime}
                  </span>
                  <button className="text-corporate-blue-500 font-medium hover:underline">
                    Read Full Article →
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative w-full h-[300px] lg:h-[400px]">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover rounded-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Regular Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {regularArticles.map(article => (
          <article
            key={article.id}
            className="bg-white border border-corporate-grey-100 hover:shadow-lg transition-all duration-300"
          >
            <div className="relative w-full h-48">
              <Image src={article.image} alt={article.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-corporate-grey-100 text-corporate-grey-700 text-xs px-2 py-1 font-medium">
                  {article.category}
                </span>
                <span className="text-corporate-grey-500 text-xs">{article.date}</span>
              </div>
              <h3 className="text-[20px] leading-[24px] font-medium text-corporate-grey-900 mb-3 line-clamp-2">
                {article.title}
              </h3>
              <p className="text-[14px] leading-[20px] text-corporate-grey-700 mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-corporate-grey-500 text-xs">{article.readTime}</span>
                <button className="text-corporate-blue-500 font-medium hover:underline text-sm">
                  Read More →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="bg-corporate-blue-500 text-white px-8 py-4 font-medium hover:bg-corporate-blue-600 transition-colors">
          View All News
        </button>
      </div>
    </section>
  );
}
