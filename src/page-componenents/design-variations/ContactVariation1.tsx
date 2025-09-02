'use client';

import Image from 'next/image';
import { useState } from 'react';

const contactMethods = [
  {
    id: 'phone',
    icon: '📞',
    title: 'Call Us',
    details: '+1 (800) 456-7890',
    subtitle: 'Available 24/7 for urgent matters',
    action: 'Call Now',
  },
  {
    id: 'email',
    icon: '✉️',
    title: 'Email Us',
    details: 'info@burnsandwilcox.com',
    subtitle: 'We respond within 2 business hours',
    action: 'Send Email',
  },
  {
    id: 'chat',
    icon: '💬',
    title: 'Live Chat',
    details: 'Available during business hours',
    subtitle: 'Get instant answers to your questions',
    action: 'Start Chat',
  },
];

const quickContact = {
  name: '',
  email: '',
  company: '',
  message: '',
  urgency: 'standard',
};

export default function ContactVariation1() {
  const [formData, setFormData] = useState(quickContact);
  const [selectedMethod, setSelectedMethod] = useState('phone');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-white w-full min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Side - Contact Form */}
        <div className="bg-gradient-to-br from-corporate-blue-50 to-tertiary-blue-50 p-8 lg:p-16 flex flex-col justify-center">
          <div className="max-w-lg mx-auto w-full">
            {/* Header */}
            <div className="text-center lg:text-left mb-12">
              <div className="inline-flex items-center gap-3 bg-corporate-blue-100 text-corporate-blue-700 px-4 py-2 rounded-full mb-6">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-sm font-medium">Get In Touch</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-corporate-grey-900 mb-6 leading-tight">
                Let's Start a <span className="text-corporate-blue-500">Conversation</span>
              </h1>

              <p className="text-lg text-corporate-grey-600 leading-relaxed">
                Ready to discuss your insurance needs? Our team of experts is here to help you find
                the right solutions for your business.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-corporate-grey-800 mb-4">
                Quick Contact Options
              </h3>
              <div className="space-y-3">
                {contactMethods.map(method => (
                  <div
                    key={method.id}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      selectedMethod === method.id
                        ? 'border-corporate-blue-500 bg-corporate-blue-50'
                        : 'border-corporate-grey-200 bg-white hover:border-corporate-blue-300'
                    }`}
                    onClick={() => setSelectedMethod(method.id)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{method.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-corporate-grey-900">{method.title}</h4>
                        <p className="text-sm text-corporate-grey-600">{method.subtitle}</p>
                      </div>
                      <button className="bg-corporate-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-corporate-blue-600 transition-colors">
                        {method.action}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-corporate-grey-100">
              <h3 className="text-xl font-bold text-corporate-grey-900 mb-6">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-corporate-grey-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-corporate-grey-200 rounded-lg focus:ring-2 focus:ring-corporate-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-corporate-grey-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-corporate-grey-200 rounded-lg focus:ring-2 focus:ring-corporate-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-corporate-grey-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-corporate-grey-200 rounded-lg focus:ring-2 focus:ring-corporate-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-corporate-grey-700 mb-2">
                    Urgency Level
                  </label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-corporate-grey-200 rounded-lg focus:ring-2 focus:ring-corporate-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="standard">Standard (2-3 business days)</option>
                    <option value="urgent">Urgent (24 hours)</option>
                    <option value="emergency">Emergency (Same day)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-corporate-grey-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-corporate-grey-200 rounded-lg focus:ring-2 focus:ring-corporate-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your insurance needs..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-corporate-blue-500 text-white py-4 px-6 rounded-lg font-medium hover:bg-corporate-blue-600 transition-colors duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Right Side - Office Locations & Map */}
        <div className="bg-corporate-grey-900 p-8 lg:p-16 flex flex-col justify-center">
          <div className="max-w-lg mx-auto w-full text-white">
            {/* Header */}
            <div className="text-center lg:text-left mb-12">
              <div className="inline-flex items-center gap-3 bg-white/10 text-white/90 px-4 py-2 rounded-full mb-6">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">Global Offices</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Find Us <span className="text-corporate-blue-400">Worldwide</span>
              </h2>

              <p className="text-lg text-white/80 leading-relaxed">
                With offices across 4 continents, we're never far away. Visit us in person or
                connect virtually.
              </p>
            </div>

            {/* Office Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-corporate-blue-400 mb-2">60+</div>
                <div className="text-sm text-white/70">Global Offices</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-corporate-blue-400 mb-2">4</div>
                <div className="text-sm text-white/70">Continents</div>
              </div>
            </div>

            {/* Featured Offices */}
            <div className="space-y-4 mb-8">
              <div className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-corporate-blue-400 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold">Dubai, UAE</h4>
                    <p className="text-sm text-white/70">Middle East Headquarters</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-corporate-blue-400 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold">London, UK</h4>
                    <p className="text-sm text-white/70">European Operations</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-corporate-blue-400 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold">New York, USA</h4>
                    <p className="text-sm text-white/70">North America HQ</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button className="bg-corporate-blue-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-corporate-blue-600 transition-colors duration-300 transform hover:scale-105">
                View All Offices
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
