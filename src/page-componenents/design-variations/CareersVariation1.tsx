'use client';

import Image from 'next/image';
import { useState } from 'react';

const careerPaths = [
  {
    id: 1,
    title: 'Underwriting',
    level: 'Entry Level',
    experience: '0-2 years',
    description: 'Learn the fundamentals of risk assessment and policy development',
    skills: ['Analytical Thinking', 'Risk Assessment', 'Communication'],
    growth: 'Senior Underwriter → Underwriting Manager → Director',
    image: '/hero-1.jpg',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 2,
    title: 'Sales & Business Development',
    level: 'Mid Level',
    experience: '3-7 years',
    description: 'Build client relationships and drive business growth',
    skills: ['Relationship Building', 'Negotiation', 'Market Knowledge'],
    growth: 'Account Executive → Sales Manager → VP of Sales',
    image: '/hero-2.jpg',
    color: 'from-green-500 to-green-600',
  },
  {
    id: 3,
    title: 'Claims Management',
    level: 'Senior Level',
    experience: '8+ years',
    description: 'Lead complex claims resolution and team management',
    skills: ['Leadership', 'Problem Solving', 'Industry Expertise'],
    growth: 'Claims Manager → Claims Director → VP of Claims',
    image: '/hero-3.jpg',
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 4,
    title: 'Technology & Innovation',
    level: 'All Levels',
    experience: 'Varies',
    description: 'Drive digital transformation and innovative solutions',
    skills: ['Technical Skills', 'Innovation', 'Project Management'],
    growth: 'Developer → Tech Lead → CTO',
    image: '/hero-1.jpg',
    color: 'from-orange-500 to-orange-600',
  },
];

const benefits = [
  {
    icon: '🏢',
    title: 'Global Opportunities',
    description: 'Work across 60+ offices worldwide',
  },
  {
    icon: '📚',
    title: 'Continuous Learning',
    description: 'Professional development and certifications',
  },
  {
    icon: '💼',
    title: 'Competitive Benefits',
    description: 'Health, retirement, and wellness programs',
  },
  {
    icon: '🤝',
    title: 'Collaborative Culture',
    description: 'Team-based approach to success',
  },
];

export default function CareersVariation1() {
  const [selectedPath, setSelectedPath] = useState(0);

  return (
    <section className="bg-gradient-to-br from-corporate-blue-50 via-white to-tertiary-blue-50 w-full py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-corporate-blue-100 text-corporate-blue-700 px-4 py-2 rounded-full mb-6">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 3a1 1 0 000 2h.01a1 1 0 100-2H9zm3 0a1 1 0 000 2h.01a1 1 0 100-2H12z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium">Join Our Team</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-corporate-grey-900 mb-6">
            Build Your <span className="text-corporate-blue-500">Future</span> With Us
          </h1>
          <p className="text-xl text-corporate-grey-600 max-w-3xl mx-auto leading-relaxed">
            Join a team of 2,300+ insurance professionals across the globe. Discover opportunities
            for growth, innovation, and meaningful impact in the insurance industry.
          </p>
        </div>

        {/* Career Paths Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-corporate-grey-900 text-center mb-12">
            Explore Your Career Path
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-corporate-grey-200 h-full hidden lg:block"></div>

            <div className="space-y-12">
              {careerPaths.map((path, index) => (
                <div
                  key={path.id}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-corporate-blue-500 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>

                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div
                      className={`bg-white rounded-2xl p-8 shadow-xl border border-corporate-grey-100 hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                        selectedPath === index ? 'ring-2 ring-corporate-blue-500 scale-105' : ''
                      }`}
                      onClick={() => setSelectedPath(index)}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <span
                          className={`bg-gradient-to-r ${path.color} text-white px-3 py-1 rounded-full text-sm font-medium`}
                        >
                          {path.level}
                        </span>
                        <span className="text-corporate-grey-500 text-sm">{path.experience}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-corporate-grey-900 mb-3">
                        {path.title}
                      </h3>

                      <p className="text-corporate-grey-600 mb-4 leading-relaxed">
                        {path.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-corporate-grey-800 mb-2">Key Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {path.skills.map(skill => (
                            <span
                              key={skill}
                              className="bg-corporate-blue-50 text-corporate-blue-700 text-xs px-2 py-1 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-corporate-grey-100 pt-4">
                        <h4 className="font-semibold text-corporate-grey-800 mb-2">
                          Career Growth:
                        </h4>
                        <p className="text-sm text-corporate-grey-600">{path.growth}</p>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex-1">
                    <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                      <Image src={path.image} alt={path.title} fill className="object-cover" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-corporate-grey-900 text-center mb-12">
            Why Choose Burns & Wilcox?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(benefit => (
              <div
                key={benefit.title}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-corporate-grey-900 mb-2">{benefit.title}</h3>
                <p className="text-corporate-grey-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-corporate-blue-500 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Explore our current openings and find the perfect role to advance your career in the
            insurance industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-corporate-blue-500 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              View Open Positions
            </button>
            <button className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-corporate-blue-500 transition-colors">
              Contact Recruiting
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
