'use client';

import Image from 'next/image';

const featuredNews = [
  {
    id: 1,
    title: 'Burns & Wilcox Expands European Operations with New London Office',
    excerpt: 'Strategic expansion strengthens our presence in key European markets, offering enhanced risk management solutions for international clients.',
    category: 'Company News',
    date: 'December 15, 2024',
    readTime: '5 min read',
    image: '/hero-1.jpg',
    featured: true
  },
  {
    id: 2,
    title: 'New Cyber Insurance Solutions Address Emerging Digital Threats',
    excerpt: 'Comprehensive coverage options designed to protect businesses from evolving cybersecurity risks and data breach incidents.',
    category: 'Product Updates',
    date: 'December 12, 2024',
    readTime: '3 min read',
    image: '/hero-2.jpg',
    featured: false
  },
  {
    id: 3,
    title: 'Industry Recognition: Top 10 Global Insurance Broker 2024',
    excerpt: 'Continued excellence in client service and innovative solutions earns Burns & Wilcox prestigious industry recognition.',
    category: 'Awards',
    date: 'December 10, 2024',
    readTime: '4 min read',
    image: '/hero-3.jpg',
    featured: false
  }
];

const trendingTopics = [
  'Climate Risk Management',
  'Digital Transformation',
  'Supply Chain Insurance',
  'ESG Compliance',
  'Cyber Security',
  'Remote Work Coverage'
];

export default function NewsVariation1() {
  return (
    <section className="bg-white w-full py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-corporate-blue-50 text-corporate-blue-700 px-4 py-2 rounded-full mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Latest Updates</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-corporate-grey-900 mb-6">
            News & <span className="text-corporate-blue-500">Insights</span>
          </h1>
          <p className="text-xl text-corporate-grey-600 max-w-2xl mx-auto">
            Stay informed with the latest industry trends, company updates, and expert insights from Burns & Wilcox.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={featuredNews[0].image}
                  alt={featuredNews[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-corporate-blue-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                    {featuredNews[0].category}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h2 className="text-3xl font-bold mb-3 leading-tight group-hover:text-corporate-blue-200 transition-colors">
                    {featuredNews[0].title}
                  </h2>
                  <p className="text-lg opacity-90 mb-4 leading-relaxed">
                    {featuredNews[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm opacity-75">
                    <span>{featuredNews[0].date}</span>
                    <span>•</span>
                    <span>{featuredNews[0].readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Articles */}
          <div className="space-y-6">
            {featuredNews.slice(1).map((article) => (
              <div key={article.id} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 text-corporate-grey-700 text-xs px-2 py-1 rounded-full font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-corporate-grey-900 mb-2 group-hover:text-corporate-blue-500 transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-sm text-corporate-grey-600 mb-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-corporate-grey-500">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Topics */}
        <div className="bg-gradient-to-r from-corporate-blue-50 to-tertiary-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-corporate-grey-900 mb-6 text-center">
            Trending Topics
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {trendingTopics.map((topic) => (
              <button
                key={topic}
                className="bg-white text-corporate-grey-700 px-4 py-2 rounded-full border border-corporate-grey-200 hover:border-corporate-blue-300 hover:text-corporate-blue-600 transition-all duration-300 hover:shadow-md"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-corporate-blue-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Get the latest news and insights delivered directly to your inbox. Never miss an important update.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-corporate-grey-900 placeholder-corporate-grey-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
            <button className="bg-white text-corporate-blue-500 px-6 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
