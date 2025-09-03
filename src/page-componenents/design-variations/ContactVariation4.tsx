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
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: 'email',
    icon: '✉️',
    title: 'Email Us',
    details: 'info@burnsandwilcox.com',
    subtitle: 'We respond within 2 business hours',
    action: 'Send Email',
    color: 'from-green-600 to-green-800',
  },
  {
    id: 'chat',
    icon: '💬',
    title: 'Live Chat',
    details: 'Available during business hours',
    subtitle: 'Get instant answers to your questions',
    action: 'Start Chat',
    color: 'from-purple-600 to-purple-800',
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

export default function ContactVariation4() {
  const [selectedMethod, setSelectedMethod] = useState('phone');
  const [selectedOffice, setSelectedOffice] = useState(0);

  return (
    <section className="bg-white w-full">
      {/* Bold Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/contact-us-banner.png"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-corporate-blue-900 via-corporate-blue-800 to-black"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-8">
          <div className="mb-16">
            <div className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full mb-12 border border-white/30">
              <div className="w-3 h-3 bg-corporate-blue-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold tracking-wide">Get In Touch</span>
            </div>

            <h1 className="text-7xl md:text-9xl font-black mb-12 leading-none tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-corporate-blue-200 to-corporate-blue-400">
                LET'S START A
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-400 via-corporate-blue-200 to-white">
                CONVERSATION
              </span>
            </h1>

            <p className="text-2xl md:text-3xl font-light text-white/90 max-w-4xl mx-auto leading-relaxed mb-16">
              Ready to discuss your insurance needs? Our team of experts is here to help.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {contactMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`px-8 py-4 rounded-full transition-all duration-500 font-bold text-lg ${
                  selectedMethod === method.id
                    ? 'bg-white text-corporate-blue-900 shadow-2xl scale-110'
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20'
                }`}
              >
                {method.title}
              </button>
            ))}
          </div>

          <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 max-w-3xl mx-auto border border-white/20">
            <h3 className="text-4xl font-black mb-4">
              {contactMethods.find(m => m.id === selectedMethod)?.title}
            </h3>
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              {contactMethods.find(m => m.id === selectedMethod)?.subtitle}
            </p>
            <div className="text-2xl font-bold text-corporate-blue-200">
              {contactMethods.find(m => m.id === selectedMethod)?.details}
            </div>
          </div>
        </div>

        <div className="absolute top-32 left-32 w-40 h-40 bg-corporate-blue-400/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 bg-corporate-blue-300/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Bold Contact Methods */}
      <div className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-black text-corporate-grey-900 mb-8">
              Quick{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-500 to-corporate-blue-700">
                Contact Options
              </span>
            </h2>
            <div className="w-32 h-1 bg-corporate-blue-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {contactMethods.map(method => (
              <div
                key={method.id}
                className={`p-10 rounded-3xl border-4 transition-all duration-700 cursor-pointer transform hover:-translate-y-6 ${
                  selectedMethod === method.id
                    ? 'border-corporate-blue-500 bg-corporate-blue-50 shadow-2xl scale-105'
                    : 'border-corporate-grey-200 hover:border-corporate-blue-300 hover:shadow-xl'
                }`}
                onClick={() => setSelectedMethod(method.id)}
              >
                <div className="text-center">
                  <div
                    className={`text-6xl mb-6 bg-gradient-to-r ${method.color} bg-clip-text text-transparent`}
                  >
                    {method.icon}
                  </div>
                  <h3 className="text-3xl font-black text-corporate-grey-900 mb-4">
                    {method.title}
                  </h3>
                  <p className="text-xl text-corporate-grey-600 mb-6 leading-relaxed">
                    {method.subtitle}
                  </p>
                  <div className="text-2xl font-bold text-corporate-blue-600 mb-8">
                    {method.details}
                  </div>
                  <button
                    className={`px-8 py-4 rounded-xl font-black text-lg transition-all duration-500 ${
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

      {/* Bold Office Locations */}
      <div className="py-32 px-8 bg-gradient-to-br from-corporate-grey-50 via-white to-corporate-blue-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl font-black text-corporate-grey-900 mb-16 text-center">
            Find Us{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-500 to-corporate-blue-700">
              Worldwide
            </span>
          </h3>

          <div className="space-y-8">
            {officeLocations.map((office, index) => (
              <div
                key={office.city}
                className={`p-8 rounded-3xl border-4 transition-all duration-700 cursor-pointer transform hover:scale-105 ${
                  selectedOffice === index
                    ? 'border-corporate-blue-500 bg-corporate-blue-50 shadow-2xl'
                    : 'border-corporate-grey-200 hover:border-corporate-blue-300 hover:shadow-xl'
                }`}
                onClick={() => setSelectedOffice(index)}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-3xl font-black text-corporate-grey-900 mb-3">
                      {office.city}
                    </h4>
                    <p className="text-xl text-corporate-grey-600 mb-3">{office.role}</p>
                    <p className="text-lg text-corporate-grey-500 mb-4">{office.address}</p>
                    <p className="text-xl text-corporate-blue-600 font-bold mb-3">{office.phone}</p>
                    <p className="text-base text-corporate-grey-500">{office.timezone}</p>
                  </div>

                  <div className="text-right">
                    <div className="text-lg text-corporate-grey-500 mb-1">
                      {office.coordinates.lat.toFixed(2)}°N
                    </div>
                    <div className="text-lg text-corporate-grey-500">
                      {office.coordinates.lng.toFixed(2)}°E
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-10 py-5 border-4 border-corporate-blue-500 text-corporate-blue-500 font-black text-xl rounded-xl hover:bg-corporate-blue-500 hover:text-white transition-all duration-500 transform hover:scale-110">
              View All Offices
            </button>
          </div>
        </div>
      </div>

      {/* Bold CTA Section */}
      <div className="py-32 px-8 bg-gradient-to-r from-corporate-blue-600 via-corporate-blue-700 to-corporate-blue-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-7xl font-black text-white mb-12">
            Ready to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-200 to-white">
              Connect
            </span>
            ?
          </h2>
          <p className="text-2xl text-white/90 mb-16 leading-relaxed">
            Our team is ready to provide you with the insurance solutions you need
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <button className="px-12 py-6 bg-white text-corporate-blue-600 font-black text-xl rounded-xl hover:bg-corporate-grey-50 transition-all duration-500 transform hover:scale-110 shadow-2xl">
              Contact Us Today
            </button>
            <button className="px-12 py-6 border-4 border-white text-white font-black text-xl rounded-xl hover:bg-white hover:text-corporate-blue-600 transition-all duration-500 transform hover:scale-110">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
