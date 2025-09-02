const supportCategories = [
  {
    title: 'Claims Support',
    description: 'Get help with your insurance claims and understand the process',
    phone: '+971 4 123 4567',
    email: 'claims@burnsandwilcoxmena.com',
    hours: '24/7 Emergency Support',
    icon: '🆘',
  },
  {
    title: 'Technical Support',
    description: 'Assistance with our digital platforms and online services',
    phone: '+971 4 123 4568',
    email: 'support@burnsandwilcoxmena.com',
    hours: 'Sunday - Thursday: 8:00 AM - 8:00 PM',
    icon: '💻',
  },
  {
    title: 'Business Development',
    description: 'Partnership opportunities and business collaboration inquiries',
    phone: '+971 4 123 4569',
    email: 'partnerships@burnsandwilcoxmena.com',
    hours: 'Sunday - Thursday: 9:00 AM - 6:00 PM',
    icon: '🤝',
  },
  {
    title: 'Media Relations',
    description: 'Press inquiries, media requests, and public relations',
    phone: '+971 4 123 4570',
    email: 'media@burnsandwilcoxmena.com',
    hours: 'Sunday - Thursday: 9:00 AM - 6:00 PM',
    icon: '📰',
  },
];

const emergencyContacts = [
  {
    type: 'Emergency Claims',
    phone: '+971 50 123 4567',
    available: '24/7',
    description: 'Immediate assistance for urgent claims',
  },
  {
    type: 'Roadside Assistance',
    phone: '+971 50 123 4568',
    available: '24/7',
    description: 'Vehicle breakdown and accident support',
  },
  {
    type: 'Medical Emergency',
    phone: '+971 50 123 4569',
    available: '24/7',
    description: 'Urgent medical insurance support',
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-white w-full flex flex-col items-center py-24 px-16">
      <div className="flex flex-col items-center gap-4 w-full text-center mb-20">
        <span className="text-[18px] leading-[21.6px] font-normal text-corporate-grey-900">
          Additional Support
        </span>
        <h2 className="text-[48px] leading-[56px] font-medium tracking-tight text-corporate-grey-900">
          Contact Information & Support
        </h2>
        <p className="text-[19px] leading-[23px] font-medium text-corporate-grey-900">
          Multiple ways to get in touch and receive the support you need
        </p>
      </div>

      {/* Support Categories */}
      <div className="w-full max-w-7xl mb-20">
        <h3 className="text-[28px] leading-[34px] font-medium text-corporate-grey-900 mb-8 text-center">
          Specialized Support Channels
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {supportCategories.map(category => (
            <div
              key={category.title}
              className="bg-tertiary-blue-50 border border-corporate-grey-100 p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">{category.icon}</div>
                <div>
                  <h4 className="text-[20px] leading-[24px] font-medium text-corporate-grey-900 mb-2">
                    {category.title}
                  </h4>
                  <p className="text-[14px] leading-[20px] text-corporate-grey-700">
                    {category.description}
                  </p>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-corporate-grey-500">📞</span>
                  <span className="text-[14px] leading-[20px] text-corporate-grey-700">
                    {category.phone}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-corporate-grey-500">📧</span>
                  <span className="text-[14px] leading-[20px] text-corporate-grey-700">
                    {category.email}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-corporate-grey-500">🕒</span>
                  <span className="text-[14px] leading-[20px] text-corporate-grey-700">
                    {category.hours}
                  </span>
                </div>
              </div>
              <button className="text-corporate-blue-500 font-medium hover:underline text-sm">
                Contact Support →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="w-full max-w-7xl mb-20">
        <h3 className="text-[28px] leading-[34px] font-medium text-corporate-grey-900 mb-8 text-center">
          Emergency Contacts
        </h3>
        <div className="bg-red-50 border border-red-200 p-8">
          <div className="text-center mb-6">
            <h4 className="text-[20px] leading-[24px] font-medium text-red-800 mb-2">
              🚨 24/7 Emergency Support Available
            </h4>
            <p className="text-[14px] leading-[20px] text-red-700">
              For urgent situations, these numbers are available around the clock
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergencyContacts.map(contact => (
              <div key={contact.type} className="bg-white border border-red-200 p-4 text-center">
                <h5 className="text-[16px] leading-[20px] font-medium text-red-800 mb-2">
                  {contact.type}
                </h5>
                <div className="text-2xl font-bold text-red-600 mb-2">{contact.phone}</div>
                <div className="text-[12px] leading-[16px] text-red-600 mb-2">
                  Available: {contact.available}
                </div>
                <p className="text-[12px] leading-[16px] text-red-700">{contact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* General Contact Information */}
      <div className="bg-corporate-blue-500 text-white p-12 max-w-6xl text-center">
        <h3 className="text-[33px] leading-[40px] font-medium mb-6">General Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-[20px] leading-[24px] font-medium mb-3">Headquarters</h4>
            <div className="text-[14px] leading-[20px] text-white/90 space-y-2">
              <div>Burns & Wilcox MENA</div>
              <div>Sheikh Zayed Road</div>
              <div>Downtown Dubai, UAE</div>
              <div>P.O. Box 12345</div>
            </div>
          </div>
          <div>
            <h4 className="text-[20px] leading-[24px] font-medium mb-3">Main Contact</h4>
            <div className="text-[14px] leading-[20px] text-white/90 space-y-2">
              <div>Phone: +971 4 123 4567</div>
              <div>Fax: +971 4 123 4568</div>
              <div>Email: info@burnsandwilcoxmena.com</div>
              <div>Website: www.burnsandwilcoxmena.com</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-corporate-blue-500 px-8 py-4 font-medium hover:bg-gray-100 transition-colors">
            Download Contact Directory
          </button>
          <button className="bg-transparent text-white border border-white px-8 py-4 font-medium hover:bg-white hover:text-corporate-blue-500 transition-colors">
            Request Callback
          </button>
        </div>
      </div>

      {/* Social Media & Additional Info */}
      <div className="bg-white border border-corporate-grey-200 p-8 max-w-4xl text-center mt-16">
        <h3 className="text-[28px] leading-[34px] font-medium text-corporate-grey-900 mb-4">
          Stay Connected
        </h3>
        <p className="text-[16px] leading-[24px] text-corporate-grey-700 mb-6">
          Follow us on social media for the latest updates, industry insights, and company news.
        </p>
        <div className="flex justify-center gap-6 mb-6">
          <button className="bg-corporate-blue-500 text-white px-6 py-3 font-medium hover:bg-corporate-blue-600 transition-colors">
            LinkedIn
          </button>
          <button className="bg-corporate-blue-500 text-white px-6 py-3 font-medium hover:bg-corporate-blue-600 transition-colors">
            Twitter
          </button>
          <button className="bg-corporate-blue-500 text-white px-6 py-3 font-medium hover:bg-corporate-blue-600 transition-colors">
            YouTube
          </button>
        </div>
        <p className="text-[14px] leading-[20px] text-corporate-grey-500">
          For general inquiries, please allow 24-48 hours for a response. For urgent matters, please
          use our emergency contact numbers.
        </p>
      </div>
    </section>
  );
}
