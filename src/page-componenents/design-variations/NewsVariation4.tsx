'use client';

import Image from 'next/image';
import { useState } from 'react';

const featuredNews = [
  {
    id: 1,
    title: 'Burns & Wilcox Expands European Operations with New London Office',
    excerpt:
      'Strategic expansion strengthens our presence in key European markets, offering enhanced risk management solutions for international clients.',
    category: 'Company News',
    date: 'December 15, 2024',
    readTime: '5 min read',
    image: '/hero-1.jpg',
    author: 'Sarah Johnson',
    featured: true,
    tags: ['Expansion', 'Europe', 'Strategy'],
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: 2,
    title: 'New Cyber Insurance Solutions Address Emerging Digital Threats',
    excerpt:
      'Comprehensive coverage options designed to protect businesses from evolving cybersecurity risks and data breach incidents.',
    category: 'Product Updates',
    date: 'December 12, 2024',
    readTime: '3 min read',
    image: '/hero-2.jpg',
    author: 'Michael Chen',
    featured: false,
    tags: ['Cyber', 'Security', 'Innovation'],
    color: 'from-green-600 to-green-800',
  },
  {
    id: 3,
    title: 'Industry Recognition: Top 10 Global Insurance Broker 2024',
    excerpt:
      'Continued excellence in client service and innovative solutions earns Burns & Wilcox prestigious industry recognition.',
    category: 'Awards',
    date: 'December 10, 2024',
    readTime: '4 min read',
    image: '/hero-3.jpg',
    author: 'Emily Rodriguez',
    featured: false,
    tags: ['Awards', 'Recognition', 'Excellence'],
    color: 'from-purple-600 to-purple-800',
  },
];

const categories = [
  {
    name: 'All News',
    count: 24,
    color: 'bg-gradient-to-r from-corporate-blue-600 to-corporate-blue-700',
  },
  { name: 'Company Updates', count: 8, color: 'bg-gradient-to-r from-green-600 to-green-700' },
  { name: 'Industry Insights', count: 6, color: 'bg-gradient-to-r from-purple-600 to-purple-700' },
  { name: 'Product News', count: 5, color: 'bg-gradient-to-r from-orange-600 to-orange-700' },
  { name: 'Client Stories', count: 3, color: 'bg-gradient-to-r from-pink-600 to-pink-700' },
  { name: 'Thought Leadership', count: 2, color: 'bg-gradient-to-r from-indigo-600 to-indigo-700' },
];

const trendingTopics = [
  'Climate Risk Management',
  'Digital Transformation',
  'Supply Chain Insurance',
  'ESG Compliance',
  'Cyber Security',
  'Remote Work Coverage',
];

export default function NewsVariation4() {
  const [selectedCategory, setSelectedCategory] = useState('All News');

  return (
    <section className="bg-white w-full">
      {/* Bold Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/hero-2.jpg" alt="News and Events" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-corporate-blue-900 to-black"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-8">
          <div className="mb-16">
            {/* Bold Badge */}
            <div className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full mb-12 border border-white/30">
              <div className="w-3 h-3 bg-corporate-blue-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold tracking-wide">Latest Updates</span>
            </div>

            {/* Bold Typography */}
            <h1 className="text-7xl md:text-9xl font-black mb-12 leading-none tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-corporate-blue-200 to-corporate-blue-400">
                NEWS &
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-400 via-corporate-blue-200 to-white">
                INSIGHTS
              </span>
            </h1>

            <p className="text-2xl md:text-3xl font-light text-white/90 max-w-4xl mx-auto leading-relaxed mb-16">
              Stay informed with the latest industry trends, company updates, and expert insights
            </p>
          </div>

          {/* Bold Category Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-4 rounded-full text-lg font-bold transition-all duration-500 ${
                  selectedCategory === category.name
                    ? 'bg-white text-corporate-blue-900 shadow-2xl scale-110'
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20'
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className={`w-3 h-3 rounded-full ${category.color}`}></span>
                  {category.name}
                  <span className="text-sm opacity-75">({category.count})</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Bold Floating Elements */}
        <div className="absolute top-32 left-32 w-40 h-40 bg-corporate-blue-400/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 bg-corporate-blue-300/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Bold Featured Article */}
      <div className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-6xl font-black text-corporate-grey-900 mb-8 text-center">
              Featured{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-500 to-corporate-blue-700">
                Story
              </span>
            </h2>
            <div className="w-32 h-1 bg-corporate-blue-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group cursor-pointer">
              <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={featuredNews[0].image}
                  alt={featuredNews[0].title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Bold Interactive Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-700 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-8 group-hover:translate-y-0">
                    <div className="bg-white text-corporate-blue-900 px-8 py-4 rounded-full font-black text-lg shadow-2xl">
                      Click to Read Full Article
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 text-lg text-corporate-grey-500">
                <span
                  className={`inline-block ${featuredNews[0].color} text-white px-6 py-3 rounded-full font-bold text-lg`}
                >
                  {featuredNews[0].category}
                </span>
                <span className="font-medium">{featuredNews[0].date}</span>
                <span className="text-2xl">•</span>
                <span className="font-medium">{featuredNews[0].readTime}</span>
              </div>

              <h3 className="text-4xl font-black text-corporate-grey-900 leading-tight">
                {featuredNews[0].title}
              </h3>

              <p className="text-xl text-corporate-grey-600 leading-relaxed">
                {featuredNews[0].excerpt}
              </p>

              {/* Bold Interactive Tags */}
              <div className="flex flex-wrap gap-3">
                {featuredNews[0].tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-corporate-grey-100 text-corporate-grey-700 px-4 py-2 rounded-full text-lg hover:bg-corporate-blue-100 hover:text-corporate-blue-700 transition-all duration-500 cursor-pointer font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-corporate-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-corporate-blue-600 font-black text-2xl">
                    {featuredNews[0].author
                      .split(' ')
                      .map(n => n[0])
                      .join('')}
                  </span>
                </div>
                <div>
                  <div className="text-xl font-bold text-corporate-grey-900">
                    {featuredNews[0].author}
                  </div>
                  <div className="text-lg text-corporate-grey-500">Author</div>
                </div>
              </div>

              <button className="px-10 py-5 bg-corporate-blue-500 text-white font-black text-xl rounded-xl hover:bg-corporate-blue-600 transition-all duration-500 transform hover:scale-110 shadow-2xl">
                Read Full Article
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bold News Grid */}
      <div className="py-32 px-8 bg-corporate-grey-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-6xl font-black text-corporate-grey-900 mb-8 text-center">
              Latest{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-500 to-corporate-blue-700">
                Updates
              </span>
            </h2>
            <div className="w-32 h-1 bg-corporate-blue-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {featuredNews.slice(1).map((article) => (
              <article
                key={article.id}
                className="bg-white group hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:-translate-y-4 rounded-3xl overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-125 transition-transform duration-1000"
                  />
                  <div className="absolute top-6 left-6">
                    <span
                      className={`inline-block ${article.color} text-white px-4 py-2 rounded-full text-lg font-black shadow-xl`}
                    >
                      {article.category}
                    </span>
                  </div>

                  {/* Bold Interactive Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-700 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-8 group-hover:translate-y-0">
                      <div className="bg-white text-corporate-blue-900 px-6 py-3 rounded-full text-lg font-black shadow-2xl">
                        Click to Read
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-4 text-lg text-corporate-grey-500 mb-6">
                    <span className="font-medium">{article.date}</span>
                    <span className="text-2xl">•</span>
                    <span className="font-medium">{article.readTime}</span>
                  </div>

                  <h3 className="text-2xl font-black text-corporate-grey-900 mb-4 leading-tight group-hover:text-corporate-blue-600 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-lg text-corporate-grey-600 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Bold Interactive Tags */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {article.tags.map(tag => (
                      <span
                        key={tag}
                        className="bg-corporate-grey-100 text-corporate-grey-700 px-3 py-2 rounded-full text-base hover:bg-corporate-blue-100 hover:text-corporate-blue-700 transition-all duration-500 font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-lg text-corporate-grey-500 font-medium">
                      By {article.author}
                    </div>
                    <button className="text-corporate-blue-600 hover:text-corporate-blue-700 transition-colors font-bold text-lg">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Bold Trending Topics */}
      <div className="py-32 px-8 bg-gradient-to-r from-corporate-blue-600 via-corporate-blue-700 to-corporate-blue-800">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl font-black text-white mb-16 text-center">
            Trending{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-200 to-white">
              Topics
            </span>
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {trendingTopics.map((topic, index) => (
              <button
                key={topic}
                className="bg-white/15 backdrop-blur-md text-white px-8 py-4 rounded-full border-2 border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-500 transform hover:scale-110 font-bold text-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bold Newsletter Section */}
      <div className="py-32 px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-6xl font-black text-corporate-grey-900 mb-8">
            Stay{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-500 to-corporate-blue-700">
              Connected
            </span>
          </h2>
          <p className="text-2xl text-corporate-grey-600 mb-12 leading-relaxed">
            Get the latest insights delivered directly to your inbox
          </p>

          <div className="flex flex-col sm:flex-row gap-6 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-8 py-6 border-4 border-corporate-grey-200 rounded-xl focus:ring-4 focus:ring-corporate-blue-500 focus:border-transparent transition-all text-lg font-medium"
            />
            <button className="px-10 py-6 bg-corporate-blue-500 text-white font-black text-xl rounded-xl hover:bg-corporate-blue-600 transition-all duration-500 transform hover:scale-110 shadow-2xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
