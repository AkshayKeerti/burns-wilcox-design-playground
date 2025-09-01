'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const contactMethods = [
  {
    id: 'phone',
    icon: '📞',
    title: 'Call Us',
    details: '+1 (800) 456-7890',
    subtitle: 'Available 24/7 for urgent matters',
    action: 'Call Now',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'email',
    icon: '✉️',
    title: 'Email Us',
    details: 'info@burnsandwilcox.com',
    subtitle: 'We respond within 2 business hours',
    action: 'Send Email',
    color: 'from-green-500 to-green-600',
  },
  {
    id: 'chat',
    icon: '💬',
    title: 'Live Chat',
    details: 'Available during business hours',
    subtitle: 'Get instant answers to your questions',
    action: 'Start Chat',
    color: 'from-purple-500 to-purple-600',
  },
];

const officeLocations = [
  {
    city: 'Dubai, UAE',
    role: 'Middle East Headquarters',
    address: 'Sheikh Zayed Road, Dubai',
    phone: '+971 4 123 4567',
    coordinates: { lat: 25.2048, lng: 55.2708 },
    timezone: 'GST (UTC+4)',
  },
  {
    city: 'London, UK',
    role: 'European Operations',
    address: 'Canary Wharf, London',
    phone: '+44 20 1234 5678',
    coordinates: { lat: 51.5074, lng: -0.1278 },
    timezone: 'GMT (UTC+0)',
  },
  {
    city: 'New York, USA',
    role: 'North America HQ',
    address: 'Manhattan, New York',
    phone: '+1 212 123 4567',
    coordinates: { lat: 40.7128, lng: -74.006 },
    timezone: 'EST (UTC-5)',
  },
];

const quickContact = {
  name: '',
  email: '',
  company: '',
  message: '',
  urgency: 'standard',
  preferredContact: 'email',
};

export default function ContactVariation3() {
  const [formData, setFormData] = useState(quickContact);
  const [selectedMethod, setSelectedMethod] = useState('phone');
  const [selectedOffice, setSelectedOffice] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const officesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (officesRef.current) {
        const rect = officesRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.4}px)`,
  };

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
    <section className="bg-white w-full overflow-hidden">
      {/* Interactive Hero Section */}
      <div
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background with Parallax */}
        <div className="absolute inset-0" style={parallaxStyle}>
          <Image
            src="/contact-us-banner.png"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-corporate-blue-900/90 via-corporate-blue-800/70 to-transparent"></div>
        </div>

        {/* Floating Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <div className="w-2 h-2 bg-corporate-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Get In Touch</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-corporate-blue-200">
                Let's Start a
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-200 to-white">
                Conversation
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Ready to discuss your insurance needs? Our team of experts is here to help.
            </p>
          </div>

          {/* Interactive Contact Method Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {contactMethods.map((method, index) => (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`px-6 py-3 rounded-full transition-all duration-500 ${
                  selectedMethod === method.id
                    ? 'bg-corporate-blue-500 text-white shadow-lg scale-110'
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
              >
                {method.title}
              </button>
            ))}
          </div>

          {/* Active Contact Method Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">
              {contactMethods.find(m => m.id === selectedMethod)?.title}
            </h3>
            <p className="text-white/90 mb-3">
              {contactMethods.find(m => m.id === selectedMethod)?.subtitle}
            </p>
            <div className="text-lg font-medium text-corporate-blue-200">
              {contactMethods.find(m => m.id === selectedMethod)?.details}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-corporate-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-corporate-blue-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Interactive Contact Methods */}
      <div className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-corporate-grey-900 mb-6">
              Quick <span className="text-corporate-blue-500">Contact Options</span>
            </h2>
            <div className="w-24 h-px bg-corporate-blue-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map(method => (
              <div
                key={method.id}
                className={`p-8 rounded-2xl border-2 transition-all duration-700 cursor-pointer transform hover:-translate-y-2 ${
                  selectedMethod === method.id
                    ? 'border-corporate-blue-500 bg-corporate-blue-50 shadow-2xl scale-105'
                    : 'border-corporate-grey-200 hover:border-corporate-blue-300 hover:shadow-xl'
                }`}
                onClick={() => setSelectedMethod(method.id)}
              >
                <div className="text-center">
                  <div
                    className={`text-5xl mb-4 bg-gradient-to-r ${method.color} bg-clip-text text-transparent`}
                  >
                    {method.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-corporate-grey-900 mb-3">
                    {method.title}
                  </h3>
                  <p className="text-corporate-grey-600 mb-4 leading-relaxed">{method.subtitle}</p>
                  <div className="text-lg font-medium text-corporate-blue-600 mb-6">
                    {method.details}
                  </div>
                  <button
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      selectedMethod === method.id
                        ? 'bg-corporate-blue-500 text-white'
                        : 'bg-corporate-blue-500 text-white hover:bg-corporate-blue-600'
                    }`}
                  >
                    {method.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Contact Form & Office Locations */}
      <div ref={officesRef} className="py-20 px-8 bg-corporate-grey-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Interactive Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold text-corporate-grey-900 mb-8">
                Send us a <span className="text-corporate-blue-500">Message</span>
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
                      className="w-full px-4 py-3 border-2 border-corporate-grey-200 rounded-lg focus:ring-2 focus:ring-corporate-blue-500 focus:border-transparent transition-all"
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
                      className="w-full px-4 py-3 border-2 border-corporate-grey-200 rounded-lg focus:ring-2 focus:ring-corporate-blue-500 focus:border-transparent transition-all"
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
                    className="w-full px-4 py-3 border-2 border-corporate-grey-200 rounded-lg focus:ring-2 focus:ring-corporate-blue-500 focus:border-transparent transition-all"
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
                    className="w-full px-4 py-3 border-2 border-corporate-grey-200 rounded-lg focus:ring-2 focus:ring-corporate-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="standard">Standard (2-3 business days)</option>
                    <option value="urgent">Urgent (24 hours)</option>
                    <option value="emergency">Emergency (Same day)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-corporate-grey-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex gap-4">
                    {contactMethods.map(method => (
                      <label key={method.id} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method.id}
                          checked={formData.preferredContact === method.id}
                          onChange={handleInputChange}
                          className="text-corporate-blue-500"
                        />
                        <span className="text-sm text-corporate-grey-700">{method.title}</span>
                      </label>
                    ))}
                  </div>
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
                    className="w-full px-4 py-3 border-2 border-corporate-grey-200 rounded-lg focus:ring-2 focus:ring-corporate-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your insurance needs..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-corporate-blue-500 text-white py-4 px-6 rounded-lg font-bold hover:bg-corporate-blue-600 transition-all duration-500 transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Interactive Office Locations */}
            <div>
              <h3 className="text-3xl font-bold text-corporate-grey-900 mb-8">
                Find Us <span className="text-corporate-blue-500">Worldwide</span>
              </h3>

              <div className="space-y-6">
                {officeLocations.map((office, index) => (
                  <div
                    key={office.city}
                    className={`p-6 rounded-xl border-2 transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                      selectedOffice === index
                        ? 'border-corporate-blue-500 bg-corporate-blue-50 shadow-xl'
                        : 'border-corporate-grey-200 hover:border-corporate-blue-300 hover:shadow-lg'
                    }`}
                    onClick={() => setSelectedOffice(index)}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-corporate-grey-900 mb-2">
                          {office.city}
                        </h4>
                        <p className="text-corporate-grey-600 mb-2">{office.role}</p>
                        <p className="text-corporate-grey-500 text-sm mb-3">{office.address}</p>
                        <p className="text-corporate-blue-600 font-medium mb-2">{office.phone}</p>
                        <p className="text-xs text-corporate-grey-500">{office.timezone}</p>
                      </div>

                      <div className="text-right">
                        <div className="text-sm text-corporate-grey-500 mb-1">
                          {office.coordinates.lat.toFixed(2)}°N
                        </div>
                        <div className="text-sm text-corporate-grey-500">
                          {office.coordinates.lng.toFixed(2)}°E
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button className="px-8 py-3 border-2 border-corporate-blue-500 text-corporate-blue-500 font-medium rounded-lg hover:bg-corporate-blue-500 hover:text-white transition-all duration-500 transform hover:scale-105">
                  View All Offices
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive CTA Section */}
      <div className="py-24 px-8 bg-gradient-to-r from-corporate-blue-600 to-corporate-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-8">
            Ready to <span className="text-corporate-blue-200">Connect</span>?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Our team is ready to provide you with the insurance solutions you need
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-5 bg-white text-corporate-blue-600 font-bold rounded-lg hover:bg-corporate-grey-50 transition-all duration-500 transform hover:scale-105 shadow-lg">
              Contact Us Today
            </button>
            <button className="px-10 py-5 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-corporate-blue-600 transition-all duration-500 transform hover:scale-105">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
