import Image from 'next/image';

const benefits = [
  {
    title: 'Professional Growth',
    description:
      'Continuous learning opportunities, mentorship programs, and clear career progression paths',
    icon: '📈',
    features: [
      'Leadership development programs',
      'Industry certifications support',
      'Internal mobility opportunities',
      'Performance-based advancement',
    ],
  },
  {
    title: 'Work-Life Balance',
    description:
      'Flexible work arrangements and comprehensive benefits that support your well-being',
    icon: '⚖️',
    features: [
      'Flexible working hours',
      'Remote work options',
      'Generous time-off policies',
      'Wellness programs',
    ],
  },
  {
    title: 'Global Opportunities',
    description: 'Work with international teams and access to global career opportunities',
    icon: '🌍',
    features: [
      'International assignments',
      'Cross-cultural collaboration',
      'Global training programs',
      'Worldwide network access',
    ],
  },
  {
    title: 'Innovation & Technology',
    description: 'Access to cutting-edge tools and technologies that drive the future of insurance',
    icon: '🚀',
    features: [
      'Advanced analytics platforms',
      'Digital transformation projects',
      'AI and machine learning tools',
      'Modern workplace technology',
    ],
  },
];

export default function WhyJoinUs() {
  return (
    <section className="bg-white w-full flex flex-col items-center py-24 px-16">
      <div className="flex flex-col items-center gap-4 w-full text-center mb-20">
        <span className="text-[18px] leading-[21.6px] font-normal text-corporate-grey-900">
          Why Choose Us
        </span>
        <h2 className="text-[48px] leading-[56px] font-medium tracking-tight text-corporate-grey-900">
          Why Join Burns & Wilcox?
        </h2>
        <p className="text-[19px] leading-[23px] font-medium text-corporate-grey-900">
          Discover the advantages of being part of our global insurance family
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mb-16">
        {benefits.map(benefit => (
          <div
            key={benefit.title}
            className="bg-tertiary-blue-50 border border-corporate-grey-100 p-8 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">{benefit.icon}</div>
              <div>
                <h3 className="text-[23px] leading-[28px] font-medium text-corporate-grey-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[16px] leading-[24px] text-corporate-grey-700">
                  {benefit.description}
                </p>
              </div>
            </div>
            <ul className="space-y-2">
              {benefit.features.map((feature, featureIdx) => (
                <li key={featureIdx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-corporate-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[14px] leading-[20px] text-corporate-grey-600">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-corporate-blue-500 text-white p-12 max-w-6xl text-center">
        <h3 className="text-[33px] leading-[40px] font-medium mb-6">
          Our Values Drive Everything We Do
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-[20px] leading-[24px] font-medium mb-3">Integrity</h4>
            <p className="text-[14px] leading-[20px] text-white/90">
              We operate with honesty, transparency, and ethical behavior in all our interactions
            </p>
          </div>
          <div>
            <h4 className="text-[20px] leading-[24px] font-medium mb-3">Excellence</h4>
            <p className="text-[14px] leading-[20px] text-white/90">
              We strive for the highest standards in everything we do, from client service to
              professional development
            </p>
          </div>
          <div>
            <h4 className="text-[20px] leading-[24px] font-medium mb-3">Innovation</h4>
            <p className="text-[14px] leading-[20px] text-white/90">
              We embrace new ideas and technologies to continuously improve our services and
              solutions
            </p>
          </div>
        </div>
        <button className="bg-white text-corporate-blue-500 px-8 py-4 font-medium hover:bg-gray-100 transition-colors">
          Learn More About Our Culture
        </button>
      </div>
    </section>
  );
}
