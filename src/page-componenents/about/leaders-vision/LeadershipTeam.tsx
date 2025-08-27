import Image from 'next/image';

const leadershipTeam = [
  {
    name: 'Ahmed Al-Mansouri',
    role: 'Chief Executive Officer',
    location: 'Dubai, UAE',
    experience: '25+ years in insurance and financial services',
    bio: 'Leading Burns & Wilcox MENA with a vision to become the region\'s most trusted insurance partner, combining global expertise with local market knowledge.',
    expertise: ['Strategic Leadership', 'Market Development', 'Client Relations', 'Regional Growth'],
    image: '/hero-1.jpg',
    linkedin: '#',
  },
  {
    name: 'Sarah Hassan',
    role: 'Chief Operating Officer',
    location: 'Abu Dhabi, UAE',
    experience: '20+ years in operations and risk management',
    bio: 'Overseeing day-to-day operations and ensuring operational excellence across all regional offices while maintaining the highest service standards.',
    expertise: ['Operations Management', 'Risk Management', 'Process Optimization', 'Quality Assurance'],
    image: '/hero-2.jpg',
    linkedin: '#',
  },
  {
    name: 'Mohammed Al-Rashid',
    role: 'Chief Financial Officer',
    location: 'Riyadh, Saudi Arabia',
    experience: '18+ years in finance and insurance',
    bio: 'Managing financial strategy and ensuring sustainable growth while maintaining strong relationships with financial partners and stakeholders.',
    expertise: ['Financial Strategy', 'Risk Assessment', 'Investment Management', 'Regulatory Compliance'],
    image: '/hero-3.jpg',
    linkedin: '#',
  },
  {
    name: 'Fatima Zahra',
    role: 'Chief Technology Officer',
    location: 'Dubai, UAE',
    experience: '15+ years in technology and digital transformation',
    bio: 'Driving digital innovation and technology adoption to enhance client experience and operational efficiency across the region.',
    expertise: ['Digital Transformation', 'Technology Strategy', 'Innovation', 'Data Analytics'],
    image: '/hero-1.jpg',
    linkedin: '#',
  },
  {
    name: 'Omar Khalil',
    role: 'Chief Risk Officer',
    location: 'Doha, Qatar',
    experience: '22+ years in risk management and underwriting',
    bio: 'Leading risk assessment and management strategies to ensure sustainable growth while protecting our clients and company interests.',
    expertise: ['Risk Management', 'Underwriting Strategy', 'Compliance', 'Risk Assessment'],
    image: '/hero-2.jpg',
    linkedin: '#',
  },
  {
    name: 'Layla Al-Sabah',
    role: 'Chief Human Resources Officer',
    location: 'Kuwait City, Kuwait',
    experience: '16+ years in HR and organizational development',
    bio: 'Building and nurturing our most valuable asset - our people - through talent development, culture building, and organizational excellence.',
    expertise: ['Talent Development', 'Organizational Culture', 'Leadership Development', 'Employee Engagement'],
    image: '/hero-3.jpg',
    linkedin: '#',
  },
];

export default function LeadershipTeam() {
  return (
    <section className="bg-white w-full flex flex-col items-center py-24 px-16">
      <div className="flex flex-col items-center gap-4 w-full text-center mb-20">
        <span className="text-[18px] leading-[21.6px] font-normal text-corporate-grey-900">
          Executive Leadership
        </span>
        <h2 className="text-[48px] leading-[56px] font-medium tracking-tight text-corporate-grey-900">
          Leadership Team
        </h2>
        <p className="text-[19px] leading-[23px] font-medium text-corporate-grey-900">
          Meet the experienced professionals who guide our company's strategic direction and growth
        </p>
      </div>

      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadershipTeam.map((leader) => (
            <div
              key={leader.name}
              className="bg-tertiary-blue-50 border border-corporate-grey-100 p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col gap-4">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover rounded-none"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <h3 className="text-[20px] leading-[24px] font-medium text-corporate-grey-900 mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-[16px] leading-[20px] font-medium text-corporate-blue-500 mb-2">
                      {leader.role}
                    </p>
                    <div className="text-[14px] leading-[18px] text-corporate-grey-600 mb-3">
                      📍 {leader.location} • {leader.experience}
                    </div>
                  </div>
                  
                  <p className="text-[14px] leading-[20px] text-corporate-grey-700">
                    {leader.bio}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-[16px] leading-[20px] font-medium text-corporate-grey-900 mb-2">
                      Key Areas of Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className="bg-white text-corporate-grey-600 text-xs px-2 py-1 border border-corporate-grey-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mt-auto">
                    <button className="text-corporate-blue-500 font-medium hover:underline text-sm">
                      View Full Profile →
                    </button>
                    <a
                      href={leader.linkedin}
                      className="text-corporate-grey-500 hover:text-corporate-blue-500 transition-colors"
                      aria-label={`${leader.name} LinkedIn Profile`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-corporate-blue-500 text-white p-12 max-w-6xl text-center mt-16">
        <h3 className="text-[33px] leading-[40px] font-medium mb-6">
          Leadership That Inspires
        </h3>
        <p className="text-[18px] leading-[27px] mb-8 max-w-4xl mx-auto">
          Our leadership team brings together decades of industry experience, regional expertise, and a shared vision for the future of insurance in the Middle East.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-corporate-blue-500 px-8 py-4 font-medium hover:bg-gray-100 transition-colors">
            Contact Leadership Team
          </button>
          <button className="bg-transparent text-white border border-white px-8 py-4 font-medium hover:bg-white hover:text-corporate-blue-500 transition-colors">
            Join Our Leadership Program
          </button>
        </div>
      </div>
    </section>
  );
}
