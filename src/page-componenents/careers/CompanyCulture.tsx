import Image from 'next/image';

const cultureHighlights = [
  {
    title: 'Diversity & Inclusion',
    description:
      'We celebrate diverse perspectives and create an inclusive environment where everyone feels valued and heard.',
    image: '/hero-1.jpg',
    features: [
      'Equal opportunity employer',
      'Diverse leadership team',
      'Inclusive workplace policies',
      'Cultural awareness training',
    ],
  },
  {
    title: 'Learning & Development',
    description:
      'Continuous learning is at the heart of our culture, with extensive training and development opportunities.',
    image: '/hero-2.jpg',
    features: [
      'Professional certification support',
      'Internal training programs',
      'Mentorship opportunities',
      'Conference attendance',
    ],
  },
  {
    title: 'Work-Life Integration',
    description:
      'We understand the importance of balance and provide flexible arrangements to support your personal and professional life.',
    image: '/hero-3.jpg',
    features: [
      'Flexible working hours',
      'Remote work options',
      'Generous leave policies',
      'Wellness initiatives',
    ],
  },
];

const testimonials = [
  {
    name: 'Sarah Al-Mansouri',
    role: 'Senior Insurance Broker',
    location: 'Dubai, UAE',
    quote:
      'Working at Burns & Wilcox has been an incredible journey. The company truly invests in its people and provides opportunities for growth that I never thought possible.',
    image: '/hero-1.jpg',
  },
  {
    name: 'Ahmed Hassan',
    role: 'Cyber Risk Specialist',
    location: 'Abu Dhabi, UAE',
    quote:
      "The collaborative culture here is amazing. Everyone is willing to share knowledge and support each other's success. It's more than just a job - it's a family.",
    image: '/hero-2.jpg',
  },
  {
    name: 'Fatima Zahra',
    role: 'Employee Benefits Consultant',
    location: 'Riyadh, Saudi Arabia',
    quote:
      "I love how the company embraces innovation while maintaining the highest ethical standards. It's the perfect balance of progress and integrity.",
    image: '/hero-3.jpg',
  },
];

export default function CompanyCulture() {
  return (
    <section className="bg-white w-full flex flex-col items-center py-24 px-16">
      <div className="flex flex-col items-center gap-4 w-full text-center mb-20">
        <span className="text-[18px] leading-[21.6px] font-normal text-corporate-grey-900">
          Our Culture
        </span>
        <h2 className="text-[48px] leading-[56px] font-medium tracking-tight text-corporate-grey-900">
          Company Culture & Values
        </h2>
        <p className="text-[19px] leading-[23px] font-medium text-corporate-grey-900">
          Discover what makes Burns & Wilcox a great place to work
        </p>
      </div>

      {/* Culture Highlights */}
      <div className="w-full max-w-7xl mb-20">
        {cultureHighlights.map((highlight, idx) => (
          <div
            key={highlight.title}
            className={`flex flex-col ${
              idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } gap-12 items-center mb-24 last:mb-0`}
          >
            <div className="flex-1">
              <div className="flex flex-col gap-6">
                <h3 className="text-[33px] leading-[40px] font-medium text-corporate-grey-900">
                  {highlight.title}
                </h3>
                <p className="text-[18px] leading-[27px] text-corporate-grey-700">
                  {highlight.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {highlight.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[16px] leading-[24px] text-corporate-grey-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative w-full h-[400px]">
                <Image
                  src={highlight.image}
                  alt={highlight.title}
                  fill
                  className="object-cover rounded-none"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Employee Testimonials */}
      <div className="w-full max-w-7xl mb-16">
        <h3 className="text-[28px] leading-[34px] font-medium text-corporate-grey-900 mb-12 text-center">
          What Our Team Says
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.name}
              className="bg-tertiary-blue-50 border border-corporate-grey-100 p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="text-[18px] leading-[22px] font-medium text-corporate-grey-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-[14px] leading-[18px] text-corporate-grey-600">
                    {testimonial.role}
                  </p>
                  <p className="text-[12px] leading-[16px] text-corporate-grey-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
              <blockquote className="text-[14px] leading-[20px] text-corporate-grey-700 italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      {/* Culture Stats */}
      <div className="bg-corporate-blue-500 text-white p-12 max-w-6xl text-center">
        <h3 className="text-[33px] leading-[40px] font-medium mb-8">Our Culture by the Numbers</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-4xl font-bold mb-2">95%</div>
            <div className="text-sm">Employee Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">85%</div>
            <div className="text-sm">Internal Promotions</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">40+</div>
            <div className="text-sm">Training Hours/Year</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">92%</div>
            <div className="text-sm">Team Collaboration</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white border border-corporate-grey-200 p-8 max-w-4xl text-center mt-16">
        <h3 className="text-[28px] leading-[34px] font-medium text-corporate-grey-900 mb-4">
          Ready to Join Our Team?
        </h3>
        <p className="text-[16px] leading-[24px] text-corporate-grey-700 mb-6">
          If our culture and values resonate with you, we'd love to hear from you. Explore our open
          positions or reach out to learn more about opportunities at Burns & Wilcox MENA.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-corporate-blue-500 text-white px-8 py-4 font-medium hover:bg-corporate-blue-600 transition-colors">
            View Open Positions
          </button>
          <button className="bg-white text-corporate-blue-500 border border-corporate-blue-500 px-8 py-4 font-medium hover:bg-corporate-blue-50 transition-colors">
            Contact HR Team
          </button>
        </div>
      </div>
    </section>
  );
}
