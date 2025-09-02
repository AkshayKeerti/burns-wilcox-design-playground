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

const officeLocations = [
  {
    city: 'Dubai, UAE',
    role: 'Middle East Headquarters',
    address: 'Sheikh Zayed Road, Dubai',
    phone: '+971 4 123 4567',
  },
  {
    city: 'London, UK',
    role: 'European Operations',
    address: 'Canary Wharf, London',
    phone: '+44 20 1234 5678',
  },
  {
    city: 'New York, USA',
    role: 'North America HQ',
    address: 'Manhattan, New York',
    phone: '+1 212 123 4567',
  },
];

const quickContact = {
  name: '',
  email: '',
  company: '',
  message: '',
  urgency: 'standard',
};

export default function ContactVariation2() {
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
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-white w-full">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/contact-us-banner.png"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-corporate-blue-900/80 via-corporate-blue-800/60 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-8">
          <div className="mb-8">
            <div className="inline-block w-1 h-16 bg-corporate-blue-400 mb-6"></div>
            <h1 className="text-6xl md:text-7xl font-light tracking-wide mb-6 leading-tight">
              Let's Start a
              <br />
              <span className="font-normal">Conversation</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed">
              Ready to discuss your insurance needs? Our team of experts is here to help.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-corporate-grey-900 mb-6">
              Quick Contact Options
            </h2>
            <div className="w-24 h-px bg-corporate-blue-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map(method => (
              <div
                key={method.id}
                className={`p-8 text-center border-2 transition-all duration-500 cursor-pointer ${
                  selectedMethod === method.id
                    ? 'border-corporate-blue-500 bg-corporate-blue-50'
                    : 'border-corporate-grey-200 hover:border-corporate-blue-300'
                }`}
                onClick={() => setSelectedMethod(method.id)}
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-light text-corporate-grey-900 mb-3">{method.title}</h3>
                <p className="text-corporate-grey-600 mb-4 leading-relaxed">{method.subtitle}</p>
                <div className="text-lg font-medium text-corporate-blue-600 mb-4">
                  {method.details}
                </div>
                <button className="px-6 py-3 bg-corporate-blue-500 text-white font-light hover:bg-corporate-blue-600 transition-all duration-500">
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form & Office Locations */}
      <div className="py-20 px-8 bg-corporate-grey-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8">
              <h3 className="text-2xl font-light text-corporate-grey-900 mb-8">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-corporate-grey-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-corporate-grey-200 focus:ring-2 focus:ring-corporate-blue-500 focus:border-transparent transition-all"
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
                      className="w-full px-4 py-3 border border-corporate-grey-200 focus:ring-2 focus:ring-corporate-blue-500 focus:border-transparent transition-all"
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
                    className="w-full px-4 py-3 border border-corporate-grey-200 focus:ring-2 focus:ring-corporate-blue-500 focus:border-transparent transition-all"
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
                    className="w-full px-4 py-3 border border-corporate-grey-200 focus:ring-2 focus:ring-corporate-blue-500 focus:border-transparent transition-all"
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
                    className="w-full px-4 py-3 border border-corporate-grey-200 focus:ring-2 focus:ring-corporate-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your insurance needs..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-corporate-blue-500 text-white py-4 px-6 font-light hover:bg-corporate-blue-600 transition-all duration-500"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Office Locations */}
            <div>
              <h3 className="text-2xl font-light text-corporate-grey-900 mb-8">
                Find Us Worldwide
              </h3>

              <div className="space-y-6">
                {officeLocations.map(office => (
                  <div
                    key={office.city}
                    className="p-6 bg-white border border-corporate-grey-200 hover:border-corporate-blue-300 transition-all duration-300"
                  >
                    <h4 className="text-lg font-medium text-corporate-grey-900 mb-2">
                      {office.city}
                    </h4>
                    <p className="text-corporate-grey-600 mb-2">{office.role}</p>
                    <p className="text-corporate-grey-500 text-sm mb-3">{office.address}</p>
                    <p className="text-corporate-blue-600 font-medium">{office.phone}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button className="px-8 py-3 border border-corporate-blue-500 text-corporate-blue-500 font-light hover:bg-corporate-blue-500 hover:text-white transition-all duration-500">
                  View All Offices
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-8 bg-corporate-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-white mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-corporate-blue-200 mb-8 leading-relaxed">
            Our team is ready to provide you with the insurance solutions you need
          </p>
          <button className="px-8 py-4 bg-white text-corporate-blue-900 font-light hover:bg-corporate-grey-50 transition-all duration-500">
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
}
