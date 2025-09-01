'use client';

import { useState } from 'react';

const inquiryTypes = [
  'General Inquiry',
  'Insurance Quote',
  'Claims Support',
  'Partnership Opportunity',
  'Career Information',
  'Media Inquiry',
  'Other',
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    // Form data would be sent to backend here
  };

  return (
    <section className="bg-white w-full flex flex-col items-center py-24 px-16">
      <div className="flex flex-col items-center gap-4 w-full text-center mb-20">
        <span className="text-[18px] leading-[21.6px] font-normal text-corporate-grey-900">
          Send Us a Message
        </span>
        <h2 className="text-[48px] leading-[56px] font-medium tracking-tight text-corporate-grey-900">
          Get in Touch
        </h2>
        <p className="text-[19px] leading-[23px] font-medium text-corporate-grey-900">
          Fill out the form below and we'll get back to you within 24 hours
        </p>
      </div>

      <div className="w-full max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-[16px] font-medium text-corporate-grey-900 mb-2"
              >
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-corporate-grey-300 focus:outline-none focus:border-corporate-blue-500 transition-colors"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-[16px] font-medium text-corporate-grey-900 mb-2"
              >
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-corporate-grey-300 focus:outline-none focus:border-corporate-blue-500 transition-colors"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-[16px] font-medium text-corporate-grey-900 mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-corporate-grey-300 focus:outline-none focus:border-corporate-blue-500 transition-colors"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-[16px] font-medium text-corporate-grey-900 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-corporate-grey-300 focus:outline-none focus:border-corporate-blue-500 transition-colors"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          {/* Company and Inquiry Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="company"
                className="block text-[16px] font-medium text-corporate-grey-900 mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-corporate-grey-300 focus:outline-none focus:border-corporate-blue-500 transition-colors"
                placeholder="Enter your company name"
              />
            </div>
            <div>
              <label
                htmlFor="inquiryType"
                className="block text-[16px] font-medium text-corporate-grey-900 mb-2"
              >
                Inquiry Type *
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-corporate-grey-300 focus:outline-none focus:border-corporate-blue-500 transition-colors"
              >
                <option value="">Select inquiry type</option>
                {inquiryTypes.map(type => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-[16px] font-medium text-corporate-grey-900 mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-corporate-grey-300 focus:outline-none focus:border-corporate-blue-500 transition-colors resize-none"
              placeholder="Please describe your inquiry or request..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-corporate-blue-500 text-white px-12 py-4 font-medium hover:bg-corporate-blue-600 transition-colors text-lg"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Additional Contact Methods */}
        <div className="mt-16 text-center">
          <h3 className="text-[24px] leading-[29px] font-medium text-corporate-grey-900 mb-6">
            Prefer to Contact Us Directly?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl mb-3">📧</div>
              <h4 className="text-[18px] leading-[22px] font-medium text-corporate-grey-900 mb-2">
                Email Us
              </h4>
              <p className="text-[14px] leading-[20px] text-corporate-grey-600">
                info@burnsandwilcoxmena.com
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">📞</div>
              <h4 className="text-[18px] leading-[22px] font-medium text-corporate-grey-900 mb-2">
                Call Us
              </h4>
              <p className="text-[14px] leading-[20px] text-corporate-grey-600">+971 4 123 4567</p>
            </div>
            <div>
              <div className="text-3xl mb-3">💬</div>
              <h4 className="text-[18px] leading-[22px] font-medium text-corporate-grey-900 mb-2">
                Live Chat
              </h4>
              <p className="text-[14px] leading-[20px] text-corporate-grey-600">Available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
