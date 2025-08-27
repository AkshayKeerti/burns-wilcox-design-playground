'use client';

import Image from 'next/image';
import { useState } from 'react';

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
    author: 'Michael Chen',
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
    author: 'Emily Rodriguez',
    featured: false
  }
];

const categories = [
  'All News',
  'Company Updates',
  'Industry Insights',
  'Product News',
  'Client Stories',
  'Thought Leadership'
];

export default function NewsVariation2() {
  const [selectedCategory, setSelectedCategory] = useState('All News');

  return (
    <section className="bg-white w-full">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-2.jpg"
            alt="News and Events"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-8">
          <div className="mb-8">
            <div className="inline-block w-1 h-16 bg-corporate-blue-400 mb-6"></div>
            <h1 className="text-6xl md:text-7xl font-light tracking-wide mb-6 leading-tight">
              News &
              <br />
              <span className="font-normal">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed">
              Stay informed with the latest industry trends and company updates
            </p>
          </div>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="py-12 px-8 bg-corporate-grey-50 border-b border-corporate-grey-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 font-light transition-all duration-300 ${
                  selectedCategory === category
                    ? 'text-corporate-blue-600 border-b-2 border-corporate-blue-600'
                    : 'text-corporate-grey-600 hover:text-corporate-grey-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Article */}
      <div className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-light text-corporate-grey-900 mb-8 text-center">
              Featured Story
            </h2>
            <div className="w-24 h-px bg-corporate-blue-400 mx-auto mb-12"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 overflow-hidden">
              <Image
                src={featuredNews[0].image}
                alt={featuredNews[0].title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-sm text-corporate-grey-500">
                <span className="bg-corporate-blue-50 text-corporate-blue-600 px-3 py-1">
                  {featuredNews[0].category}
                </span>
                <span>{featuredNews[0].date}</span>
                <span>•</span>
                <span>{featuredNews[0].readTime}</span>
              </div>
              
              <h3 className="text-3xl font-light text-corporate-grey-900 leading-tight">
                {featuredNews[0].title}
              </h3>
              
              <p className="text-lg text-corporate-grey-600 leading-relaxed">
                {featuredNews[0].excerpt}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-corporate-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-corporate-blue-600 font-medium">
                    {featuredNews[0].author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-corporate-grey-900">{featuredNews[0].author}</div>
                  <div className="text-sm text-corporate-grey-500">Author</div>
                </div>
              </div>
              
              <button className="px-8 py-3 border border-corporate-blue-500 text-corporate-blue-500 font-light hover:bg-corporate-blue-500 hover:text-white transition-all duration-500">
                Read Full Article
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Latest News Grid */}
      <div className="py-20 px-8 bg-corporate-grey-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-light text-corporate-grey-900 mb-8 text-center">
              Latest Updates
            </h2>
            <div className="w-24 h-px bg-corporate-blue-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredNews.slice(1).map((article) => (
              <article key={article.id} className="bg-white group hover:shadow-2xl transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-corporate-grey-700 text-xs px-3 py-1">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-corporate-grey-500 mb-4">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-light text-corporate-grey-900 mb-3 leading-tight group-hover:text-corporate-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-corporate-grey-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
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

      {/* Newsletter Section */}
      <div className="py-20 px-8 bg-corporate-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Stay Connected
          </h2>
          <p className="text-lg text-corporate-blue-200 mb-8 leading-relaxed">
            Get the latest insights delivered directly to your inbox
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-all"
            />
            <button className="px-8 py-4 bg-white text-corporate-blue-900 font-light hover:bg-corporate-grey-50 transition-all duration-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
