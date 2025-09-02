"use client";

import { useState } from 'react';

const solutions = [
  {
    category: "Consumer Lines",
    tagline: "Intro + product line",
    description: "Insurance solutions for individuals and families, covering a wide range of personal needs.",
    icon: "🚗",
    items: ["Motor", "Home", "Travel", "High Value Asset Owners", "Private Medical", "Private Jet & Yacht", "Individual/Family Cyber Protection"],
    stats: { clients: "2,500+", claims: "99.2%", coverage: "$50M+" },
    subdivisions: [
      {
        name: "Consumer Lines",
        products: [
          "Motor",
          "Home",
          "Travel",
          "High Value Asset Owners",
          "Private Medical",
          "Private Jet & Yacht",
          "Individual/Family Cyber Protection"
        ]
      }
    ]
  },
  {
    category: "Corporate General Broking",
    tagline: "Intro + product line",
    description: "Comprehensive insurance and risk solutions for businesses of all sizes.",
    icon: "🏢",
    items: ["Property", "Casualty", "Engineering", "Marine"],
    stats: { clients: "1,800+", claims: "98.7%", coverage: "$25M+" },
    subdivisions: [
      {
        name: "Property",
        products: [
          "Property All Risks (Dropdown explanation under products)",
          "Business Interruption",
          "Electronic Equipment"
        ]
      },
      {
        name: "Casualty",
        products: [
          "Comprehensive General Liability",
          "Product Liability",
          "Workmen's Compensation",
          "Employers Liability",
          "Professional Indemnity",
          "Medical Malpractice",
          "Money",
          "Fidelity Guarantee"
        ]
      },
      {
        name: "Engineering",
        products: [
          "Construction All Risks",
          "Erection All Risks",
          "Plant & Machinery",
          "Machinery Breakdown/Loss of Profit",
          "Decennial liability",
          "Advanced Loss of Profits"
        ]
      },
      {
        name: "Marine",
        products: [
          "Marine Cargo",
          "Marine Hull",
          "Marine In-Land Transit",
          "Stock Throughput"
        ]
      }
    ]
  },
  {
    category: "Human Capital Benefits",
    tagline: "Intro + product line",
    description: "Employee benefits and group insurance solutions for organizations.",
    icon: "👥",
    items: ["Group Medical", "Group Life", "Employee Health & Wellbeing", "Personal Accident", "Travel"],
    stats: { clients: "3,200+", claims: "99.5%", coverage: "$100M+" },
    subdivisions: [
      {
        name: "Human Capital Benefits",
        products: [
          "Group Medical",
          "Group Life",
          "Employee Health & Wellbeing",
          "Personal Accident",
          "Travel"
        ]
      }
    ]
  },
  {
    category: "Specialty",
    tagline: "Intro + product line",
    description: "Specialized insurance products for unique and complex risks.",
    icon: "⭐",
    items: ["Cyber Risk Insurance", "Directors & Officers Liability", "Errors and Omissions Liability", "Trade Credit Insurance", "Political Violence & Terrorism", "Commercial Crime", "Aviation", "Jeweller's Block", "Livestock", "Kidnap, Ransom, Extortion", "Energy", "Surety Bonds", "Depositor Insurance"],
    stats: { clients: "1,500+", claims: "98.9%", coverage: "$75M+" },
    subdivisions: [
      {
        name: "Specialty",
        products: [
          "Cyber Risk Insurance",
          "Directors & Officers Liability",
          "Errors and Omissions Liability",
          "Trade Credit Insurance",
          "Political Violence & Terrorism",
          "Commercial Crime",
          "Aviation",
          "Jeweller's Block",
          "Livestock",
          "Kidnap, Ransom, Extortion",
          "Energy",
          "Surety Bonds",
          "Depositor Insurance"
        ]
      }
    ]
  },
  {
    category: "Reinsurance",
    tagline: "Intro + product line",
    description: "Reinsurance solutions including facultative and treaty arrangements.",
    icon: "🔄",
    items: ["Facultative", "Treaty"],
    stats: { clients: "800+", claims: "99.8%", coverage: "$200M+" },
    subdivisions: [
      {
        name: "Reinsurance",
        products: [
          "Facultative",
          "Treaty"
        ]
      }
    ]
  },
  {
    category: "Risk Engineering & Consulting",
    tagline: "Intro + product line",
    description: "Risk management, analytics, and consulting services for businesses.",
    icon: "🛠️",
    items: ["Risk Surveys", "Risk Analytics", "Risk Control & Improvement", "Claim Advocacy"],
    stats: { clients: "5,000+", claims: "99.1%", coverage: "$30M+" },
    subdivisions: [
      {
        name: "Risk Engineering & Consulting",
        products: [
          "Risk Surveys",
          "Risk Analytics",
          "Risk Control & Improvement",
          "Claim Advocacy"
        ]
      }
    ]
  }
];

const productDetails: { [key: string]: { icon: string; desc: string } } = {
  // Consumer Lines
  "Motor": { icon: "🚗", desc: "Comprehensive vehicle protection for your journeys." },
  "Home": { icon: "🏠", desc: "Safeguard your home and belongings from the unexpected." },
  "Travel": { icon: "✈️", desc: "Travel with peace of mind, anywhere in the world." },
  "High Value Asset Owners": { icon: "💎", desc: "Specialized cover for your most valuable possessions." },
  "Private Medical": { icon: "🩺", desc: "Access premium healthcare for you and your family." },
  "Private Jet & Yacht": { icon: "🛥️", desc: "Luxury travel insurance for air and sea." },
  "Individual/Family Cyber Protection": { icon: "🛡️", desc: "Defend your digital life from cyber threats." },
  // Corporate General Broking
  "Property All Risks (Dropdown explanation under products)": { icon: "🏢", desc: "All-encompassing property risk coverage." },
  "Business Interruption": { icon: "⏸️", desc: "Keep your business running after disruptions." },
  "Electronic Equipment": { icon: "💻", desc: "Protect your essential business tech." },
  "Comprehensive General Liability": { icon: "⚖️", desc: "Broad liability protection for your business." },
  "Product Liability": { icon: "📦", desc: "Cover for product-related claims." },
  "Workmen's Compensation": { icon: "👷", desc: "Support and care for your workforce." },
  "Employers Liability": { icon: "🤝", desc: "Protection for employer responsibilities." },
  "Professional Indemnity": { icon: "📄", desc: "Cover for professional advice and services." },
  "Medical Malpractice": { icon: "🏥", desc: "Specialized cover for healthcare professionals." },
  "Money": { icon: "💰", desc: "Secure your business finances." },
  "Fidelity Guarantee": { icon: "🔒", desc: "Protection against employee dishonesty." },
  "Construction All Risks": { icon: "🏗️", desc: "Comprehensive cover for construction projects." },
  "Erection All Risks": { icon: "🏭", desc: "Insurance for installation and erection works." },
  "Plant & Machinery": { icon: "⚙️", desc: "Cover for your business equipment." },
  "Machinery Breakdown/Loss of Profit": { icon: "🔧", desc: "Minimize losses from equipment failure." },
  "Decennial liability": { icon: "📆", desc: "Long-term construction liability cover." },
  "Advanced Loss of Profits": { icon: "📉", desc: "Protect future profits from project delays." },
  "Marine Cargo": { icon: "🚢", desc: "Insurance for goods in transit by sea." },
  "Marine Hull": { icon: "⛴️", desc: "Protect your marine vessels." },
  "Marine In-Land Transit": { icon: "🚚", desc: "Cover for goods moving over land." },
  "Stock Throughput": { icon: "📦", desc: "End-to-end cover for your inventory." },
  // Human Capital Benefits
  "Group Medical": { icon: "👨‍⚕️", desc: "Comprehensive health plans for your team." },
  "Group Life": { icon: "🌱", desc: "Life insurance for employees and their families." },
  "Employee Health & Wellbeing": { icon: "🧘", desc: "Promote wellness and productivity." },
  "Personal Accident": { icon: "🤕", desc: "Financial support for accidental injuries." },
  // Specialty
  "Cyber Risk Insurance": { icon: "💻", desc: "Protect your business from cyber threats." },
  "Directors & Officers Liability": { icon: "👔", desc: "Cover for company leaders and decisions." },
  "Errors and Omissions Liability": { icon: "❗", desc: "Protection for professional mistakes." },
  "Trade Credit Insurance": { icon: "💳", desc: "Safeguard your receivables and cash flow." },
  "Political Violence & Terrorism": { icon: "🕊️", desc: "Cover against political risks." },
  "Commercial Crime": { icon: "🚨", desc: "Protection from business-related crimes." },
  "Aviation": { icon: "✈️", desc: "Insurance for aircraft and operations." },
  "Jeweller's Block": { icon: "💍", desc: "Specialized cover for jewelers and valuables." },
  "Livestock": { icon: "🐄", desc: "Insurance for farm animals and livestock." },
  "Kidnap, Ransom, Extortion": { icon: "🕵️", desc: "Protection against high-risk threats." },
  "Energy": { icon: "⚡", desc: "Cover for energy sector risks." },
  "Surety Bonds": { icon: "📜", desc: "Guarantees for contractual obligations." },
  "Depositor Insurance": { icon: "🏦", desc: "Protect your deposits and savings." },
  // Reinsurance
  "Facultative": { icon: "🔄", desc: "Custom reinsurance for specific risks." },
  "Treaty": { icon: "🤝", desc: "Comprehensive reinsurance agreements." },
  // Risk Engineering & Consulting
  "Risk Surveys": { icon: "📋", desc: "Detailed risk assessments for your business." },
  "Risk Analytics": { icon: "📊", desc: "Data-driven insights for risk management." },
  "Risk Control & Improvement": { icon: "🛠️", desc: "Strategies to reduce and control risk." },
  "Claim Advocacy": { icon: "🗣️", desc: "Expert support for your claims process." },
};

export default function SolutionsPage() {
  const [activeSection, setActiveSection] = useState<number>(0);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
        {solutions.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSection(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
              activeSection === index
                ? 'bg-corporate-blue-500 scale-125 border-corporate-blue-500'
                : 'bg-white border-corporate-grey-300 hover:bg-corporate-grey-50'
            }`}
          />
        ))}
      </div>

      {/* Top Navigation Bar */}
      <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-4 bg-white/90 backdrop-blur-sm rounded-full p-2 border-2 border-corporate-grey-200 shadow-lg">
          {solutions.map((solution, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === index
                  ? 'bg-corporate-blue-500 text-white'
                  : 'text-corporate-grey-700 hover:text-corporate-blue-500 hover:bg-corporate-blue-50'
              }`}
            >
              {solution.category.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative">
        {solutions.map((solution, index) => (
          <section
            key={index}
            className={`min-h-screen relative overflow-hidden transition-all duration-1000 ${
              activeSection === index ? 'opacity-100' : 'opacity-0 absolute inset-0'
            }`}
          >
            {/* Background */}
            <div className="absolute inset-0 bg-corporate-grey-50"></div>
            
            {/* Content */}
            <div className="relative z-10 min-h-screen flex items-center">
              <div className="w-full px-8 py-20">
                <div className="max-w-7xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Content */}
                    <div className="space-y-8">
                      {/* Badge */}
                      <div className="inline-flex items-center px-6 py-3 bg-white border-2 border-corporate-grey-300 rounded-full text-corporate-grey-800 text-sm font-medium shadow-sm">
                        <span className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></span>
                        {solution.category}
                      </div>
                      
                      {/* Main Heading */}
                      <div>
                        <h1 className="text-5xl lg:text-7xl font-bold text-corporate-blue-500 mb-6 leading-tight">
                          {solution.category}
                        </h1>
                        <h2 className="text-2xl lg:text-3xl font-light text-corporate-grey-600 mb-8">
                          {solution.tagline}
                        </h2>
                      </div>
                      
                      {/* Description */}
                      <p className="text-xl text-corporate-grey-700 leading-relaxed max-w-2xl">
                        {solution.description}
                      </p>
                      
                      {/* Features */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {solution.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center text-corporate-grey-700">
                            <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                            {item}
                          </div>
                        ))}
                      </div>
                      
                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="px-8 py-4 bg-corporate-blue-500 hover:bg-corporate-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                          Get Quote
                        </button>
                        <button className="px-8 py-4 border-2 border-corporate-grey-400 hover:border-corporate-blue-500 text-corporate-grey-700 hover:text-corporate-blue-500 font-semibold rounded-lg transition-all duration-300">
                          Learn More
                        </button>
                      </div>
                    </div>
                    
                    {/* Right Side - Stats & Icon */}
                    <div className="space-y-8">
                      {/* Large Icon */}
                      <div className="text-center">
                        <div className="text-8xl lg:text-9xl mb-8">{solution.icon}</div>
                      </div>
                      
                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-white border-2 border-corporate-grey-300 rounded-xl shadow-sm">
                          <div className="text-3xl font-bold text-corporate-blue-500 mb-2">
                            {solution.stats.clients}
                          </div>
                          <div className="text-sm text-corporate-grey-600">Clients Served</div>
                        </div>
                        <div className="text-center p-6 bg-white border-2 border-corporate-grey-300 rounded-xl shadow-sm">
                          <div className="text-3xl font-bold text-corporate-blue-500 mb-2">
                            {solution.stats.claims}
                          </div>
                          <div className="text-sm text-corporate-grey-600">Success Rate</div>
                        </div>
                        <div className="text-center p-6 bg-white border-2 border-corporate-grey-300 rounded-xl shadow-sm">
                          <div className="text-3xl font-bold text-corporate-blue-500 mb-2">
                            {solution.stats.coverage}
                          </div>
                          <div className="text-sm text-corporate-grey-600">Coverage Limit</div>
                        </div>
                      </div>
                      
                      {/* Additional Info */}
                      <div className="p-6 bg-white border-2 border-corporate-grey-300 rounded-xl shadow-sm">
                        <h3 className="text-xl font-semibold text-corporate-blue-500 mb-4">
                          Why Choose Our {solution.category}?
                        </h3>
                        <ul className="space-y-2 text-corporate-grey-700">
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-corporate-blue-500 rounded-full mr-3"></span>
                            Expert underwriting and risk assessment
                          </li>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-corporate-blue-500 rounded-full mr-3"></span>
                            Competitive pricing and flexible terms
                          </li>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-corporate-blue-500 rounded-full mr-3"></span>
                            24/7 claims support and assistance
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Expanded Subdivisions Section */}
            {activeSection === index && solution.subdivisions && (
              <div className="relative z-20 w-full bg-white border-t-2 border-corporate-grey-200 py-16 px-4">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl font-extrabold text-corporate-blue-500 mb-12 text-center tracking-tight">Product Lines</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {solution.subdivisions.flatMap((sub) =>
                      sub.products.map((prod, prodIdx) => {
                        const details = productDetails[prod] || { icon: "•", desc: "Comprehensive coverage and peace of mind." };
                        // Generate a subtitle from the product name for demo purposes
                        const subtitle = `Secure your ${prod.split(' ')[0].toLowerCase()}`;
                        return (
                          <div key={prod + prodIdx} className="bg-white border-2 border-corporate-grey-400 rounded-xl p-8 hover:border-corporate-blue-500 transition-all duration-300 shadow-sm flex flex-col h-full">
                            {/* Icon */}
                            <div className="w-16 h-16 bg-corporate-grey-50 rounded-xl flex items-center justify-center mb-6 border-2 border-corporate-grey-300">
                              <span className="text-3xl select-none">{details.icon}</span>
                            </div>
                            {/* Product Name */}
                            <h3 className="text-2xl font-bold text-corporate-blue-500 mb-2">{prod}</h3>
                            {/* Subtitle */}
                            <p className="text-corporate-grey-600 mb-4 font-medium">{subtitle}</p>
                            {/* Description */}
                            <p className="text-corporate-grey-600 mb-6 leading-relaxed">{details.desc}</p>
                            {/* CTA */}
                            <button className="mt-auto text-corporate-blue-500 font-medium hover:text-corporate-blue-600 transition-colors flex items-center group border border-corporate-grey-300 rounded-lg px-4 py-2">
                              Learn more
                            </button>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Bottom Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-corporate-grey-300 z-50">
        <div 
          className="h-full bg-corporate-blue-500 transition-all duration-1000"
          style={{ width: `${((activeSection + 1) / solutions.length) * 100}%` }}
        ></div>
      </div>

      {/* Global CTA */}
      <div className="fixed bottom-24 left-8 z-50">
        <button className="px-6 py-3 bg-corporate-blue-500 hover:bg-corporate-blue-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg">
          Contact Us
        </button>
      </div>
    </div>
  );
}
