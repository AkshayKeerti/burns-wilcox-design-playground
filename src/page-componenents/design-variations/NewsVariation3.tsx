'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const featuredNews = [
  {
    id: 1,
    title: 'Burns & Wilcox Expands European Operations with New London Office',
    excerpt: 'Strategic expansion strengthens our presence in key European markets, offering enhanced risk management solutions for international clients.',
    category: 'Company News',
    date: 'December 15, 2024',
    readTime: '5 min read',
    image: '/hero-1.jpg',
    author: 'Sarah Johnson',
    featured: true,
    tags: ['Expansion', 'Europe', 'Strategy']
  },
  {
    id: 2,
    title: 'New Cyber Insurance Solutions Address Emerging Digital Threats',
    excerpt: 'Comprehensive coverage options designed to protect businesses from evolving cybersecurity risks and data breach incidents.',
    category: 'Product Updates',
    date: 'December 12, 2024',
    readTime: '3 min read',
    image: '/hero-2.jpg',
    author: 'Michael Chen',
    featured: false,
    tags: ['Cyber', 'Security', 'Innovation']
  },
  {
    id: 3,
    title: 'Industry Recognition: Top 10 Global Insurance Broker 2024',
    excerpt: 'Continued excellence in client service and innovative solutions earns Burns & Wilcox prestigious industry recognition.',
    category: 'Awards',
    date: 'December 10, 2024',
    readTime: '4 min read',
    image: '/hero-3.jpg',
    author: 'Emily Rodriguez',
    featured: false,
    tags: ['Awards', 'Recognition', 'Excellence']
  }
];

const categories = [
  { name: 'All News', count: 24, color: 'bg-corporate-blue-500' },
  { name: 'Company Updates', count: 8, color: 'bg-green-500' },
  { name: 'Industry Insights', count: 6, color: 'bg-purple-500' },
  { name: 'Product News', count: 5, color: 'bg-orange-500' },
  { name: 'Client Stories', count: 3, color: 'bg-pink-500' },
  { name: 'Thought Leadership', count: 2, color: 'bg-indigo-500' }
];

const trendingTopics = [
  'Climate Risk Management',
  'Digital Transformation',
  'Supply Chain Insurance',
  'ESG Compliance',
  'Cyber Security',
  'Remote Work Coverage'
];

export default function NewsVariation3() {
  const [selectedCategory, setSelectedCategory] = useState('All News');
  const [selectedArticle, setSelectedArticle] = useState(0);
  const [isReading, setIsReading] = useState(false);

  useEffect(() => {
    if (isReading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isReading]);

  return (
    <section className="bg-white w-full">
      {/* Dynamic Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-2.jpg"
            alt="News and Events"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <div className="w-2 h-2 bg-corporate-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Latest Updates</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-corporate-blue-200">
                News &
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-200 to-white">
                Insights
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Stay informed with the latest industry trends, company updates, and expert insights
            </p>
          </div>
          
          {/* Interactive Category Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-white text-corporate-blue-900 shadow-lg scale-110'
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${category.color}`}></span>
                  {category.name}
                  <span className="text-xs opacity-75">({category.count})</span>
                </span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-corporate-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-corporate-blue-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Featured Article with Interactive Elements */}
      <div className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-corporate-grey-900 mb-8 text-center">
              Featured <span className="text-corporate-blue-500">Story</span>
            </h2>
            <div className="w-24 h-px bg-corporate-blue-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group cursor-pointer" onClick={() => setIsReading(true)}>
              <div className="relative h-96 overflow-hidden rounded-2xl">
                <Image
                  src={featuredNews[0].image}
                  alt={featuredNews[0].title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Interactive Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="bg-white text-corporate-blue-900 px-6 py-3 rounded-full font-medium">
                      Click to Read Full Article
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-sm text-corporate-grey-500">
                <span className="bg-corporate-blue-50 text-corporate-blue-600 px-3 py-1 rounded-full">
                  {featuredNews[0].category}
                </span>
                <span>{featuredNews[0].date}</span>
                <span>•</span>
                <span>{featuredNews[0].readTime}</span>
              </div>
              
              <h3 className="text-3xl font-bold text-corporate-grey-900 leading-tight">
                {featuredNews[0].title}
              </h3>
              
              <p className="text-lg text-corporate-grey-600 leading-relaxed">
                {featuredNews[0].excerpt}
              </p>
              
              {/* Interactive Tags */}
              <div className="flex flex-wrap gap-2">
                {featuredNews[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-corporate-grey-100 text-corporate-grey-700 px-3 py-1 rounded-full text-sm hover:bg-corporate-blue-100 hover:text-corporate-blue-700 transition-all duration-300 cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-corporate-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-corporate-blue-600 font-bold">
                    {featuredNews[0].author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-corporate-grey-900">{featuredNews[0].author}</div>
                  <div className="text-sm text-corporate-grey-500">Author</div>
                </div>
              </div>
              
              <button 
                className="px-8 py-3 bg-corporate-blue-500 text-white font-medium rounded-lg hover:bg-corporate-blue-600 transition-all duration-500 transform hover:scale-105"
                onClick={() => setIsReading(true)}
              >
                Read Full Article
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive News Grid */}
      <div className="py-20 px-8 bg-corporate-grey-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-corporate-grey-900 mb-8 text-center">
              Latest <span className="text-corporate-blue-500">Updates</span>
            </h2>
            <div className="w-24 h-px bg-corporate-blue-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredNews.slice(1).map((article, index) => (
              <article 
                key={article.id} 
                className="bg-white group hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                onClick={() => setSelectedArticle(index + 1)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-corporate-grey-700 text-xs px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  
                  {/* Interactive Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="bg-white text-corporate-blue-900 px-4 py-2 rounded-full text-sm font-medium">
                        Click to Read
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-corporate-grey-500 mb-4">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-corporate-grey-900 mb-3 leading-tight group-hover:text-corporate-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-corporate-grey-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  {/* Interactive Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-corporate-grey-100 text-corporate-grey-700 px-2 py-1 rounded-full text-xs hover:bg-corporate-blue-100 hover:text-corporate-blue-700 transition-all duration-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-corporate-grey-500">
                      By {article.author}
                    </div>
                    <button className="text-corporate-blue-600 hover:text-corporate-blue-700 transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Trending Topics */}
      <div className="py-20 px-8 bg-gradient-to-r from-corporate-blue-600 to-corporate-blue-800">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            Trending <span className="text-corporate-blue-200">Topics</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {trendingTopics.map((topic, index) => (
              <button
                key={topic}
                className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Newsletter Section */}
      <div className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-corporate-grey-900 mb-6">
            Stay <span className="text-corporate-blue-500">Connected</span>
          </h2>
          <p className="text-lg text-corporate-grey-600 mb-8 leading-relaxed">
            Get the latest insights delivered directly to your inbox
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 border-2 border-corporate-grey-200 rounded-lg focus:ring-2 focus:ring-corporate-blue-500 focus:border-transparent transition-all"
            />
            <button className="px-8 py-4 bg-corporate-blue-500 text-white font-medium rounded-lg hover:bg-corporate-blue-600 transition-all duration-500 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Full Article Modal */}
      {isReading && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8">
          <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-corporate-grey-900">
                  {featuredNews[selectedArticle].title}
                </h2>
                <button
                  onClick={() => setIsReading(false)}
                  className="text-corporate-grey-500 hover:text-corporate-grey-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-lg text-corporate-grey-600 leading-relaxed">
                  {featuredNews[selectedArticle].excerpt}
                </p>
                <p className="text-corporate-grey-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-corporate-grey-600 leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
