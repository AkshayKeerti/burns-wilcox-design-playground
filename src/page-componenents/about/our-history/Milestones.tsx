import Image from 'next/image';

const milestones = [
  {
    year: '1969',
    title: 'Company Foundation',
    achievement: 'Founded by H. William Kaufman in Detroit',
    impact: 'Established the foundation for future growth and success',
    category: 'Foundation',
    image: '/hero-1.jpg',
  },
  {
    year: '1985',
    title: 'National Recognition',
    achievement: 'Achieved nationwide presence across all 50 states',
    impact: 'Became a recognized national insurance brokerage leader',
    category: 'Growth',
    image: '/hero-2.jpg',
  },
  {
    year: '1995',
    title: 'International Expansion',
    achievement: 'First international office opened in Toronto, Canada',
    impact: 'Marked the beginning of global operations and expertise',
    category: 'Global',
    image: '/hero-3.jpg',
  },
  {
    year: '2003',
    title: 'Middle East Entry',
    achievement: 'Established first regional office in Dubai, UAE',
    impact: 'Began serving the growing Middle Eastern insurance market',
    category: 'Regional',
    image: '/hero-1.jpg',
  },
  {
    year: '2010',
    title: 'European Presence',
    achievement: 'Expanded into key European markets',
    impact: 'Established continental expertise and local partnerships',
    category: 'Continental',
    image: '/hero-2.jpg',
  },
  {
    year: '2015',
    title: 'Digital Innovation',
    achievement: 'Launched comprehensive digital insurance platforms',
    impact: 'Revolutionized client service and operational efficiency',
    category: 'Innovation',
    image: '/hero-3.jpg',
  },
  {
    year: '2020',
    title: 'Global Leadership',
    achievement: 'Recognized as top 10 global insurance broker',
    impact: 'Achieved industry leadership position worldwide',
    category: 'Leadership',
    image: '/hero-1.jpg',
  },
  {
    year: '2024',
    title: 'Future Vision',
    achievement: 'Continued expansion and innovation initiatives',
    impact: 'Positioning for next generation of insurance solutions',
    category: 'Innovation',
    image: '/hero-2.jpg',
  },
];

const achievements = [
  {
    metric: '50+',
    label: 'Years of Excellence',
    description: 'Half a century of trusted insurance services',
  },
  {
    metric: '60+',
    label: 'Global Offices',
    description: 'Worldwide presence and local expertise',
  },
  {
    metric: '2,300+',
    label: 'Insurance Professionals',
    description: 'Dedicated team of industry experts',
  },
  {
    metric: '$3.6B+',
    label: 'Group Premium',
    description: 'Comprehensive coverage solutions',
  },
];

export default function Milestones() {
  return (
    <section className="bg-tertiary-blue-50 w-full flex flex-col items-center py-24 px-16">
      <div className="flex flex-col items-center gap-4 w-full text-center mb-20">
        <span className="text-[18px] leading-[21.6px] font-normal text-corporate-grey-900">
          Key Achievements
        </span>
        <h2 className="text-[48px] leading-[56px] font-medium tracking-tight text-corporate-grey-900">
          Major Milestones
        </h2>
        <p className="text-[19px] leading-[23px] font-medium text-corporate-grey-900">
          Significant moments that shaped our company and industry
        </p>
      </div>

      {/* Milestones Grid */}
      <div className="w-full max-w-7xl mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {milestones.map(milestone => (
            <div
              key={milestone.year}
              className="bg-white border border-corporate-grey-100 p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={milestone.image}
                  alt={milestone.title}
                  fill
                  className="object-cover rounded-none"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-corporate-blue-500 text-white text-sm px-3 py-1 font-medium">
                    {milestone.year}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-corporate-grey-100 text-corporate-grey-700 text-xs px-2 py-1 font-medium">
                    {milestone.category}
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-[18px] leading-[22px] font-medium text-corporate-grey-900">
                  {milestone.title}
                </h3>
                <div className="text-[14px] leading-[20px] text-corporate-grey-700">
                  <p className="font-medium mb-1">{milestone.achievement}</p>
                  <p className="text-corporate-grey-600">{milestone.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Statistics */}
      <div className="w-full max-w-7xl mb-16">
        <h3 className="text-[28px] leading-[34px] font-medium text-corporate-grey-900 mb-12 text-center">
          By the Numbers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map(achievement => (
            <div
              key={achievement.label}
              className="bg-white border border-corporate-grey-100 p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl font-bold text-corporate-blue-500 mb-2">
                {achievement.metric}
              </div>
              <h4 className="text-[18px] leading-[22px] font-medium text-corporate-grey-900 mb-2">
                {achievement.label}
              </h4>
              <p className="text-[14px] leading-[20px] text-corporate-grey-600">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Legacy Section */}
      <div className="bg-corporate-blue-500 text-white p-12 max-w-6xl text-center">
        <h3 className="text-[33px] leading-[40px] font-medium mb-6">
          Building on a Strong Foundation
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-[20px] leading-[24px] font-medium mb-3">Our Heritage</h4>
            <p className="text-[14px] leading-[20px] text-white/90">
              Founded on principles of integrity, excellence, and client service that continue to
              guide us today
            </p>
          </div>
          <div>
            <h4 className="text-[20px] leading-[24px] font-medium mb-3">Our Future</h4>
            <p className="text-[14px] leading-[20px] text-white/90">
              Embracing innovation and technology while maintaining the values that made us
              successful
            </p>
          </div>
        </div>
        <p className="text-[18px] leading-[27px] mb-8 max-w-4xl mx-auto">
          Each milestone represents not just growth, but our commitment to serving clients better
          and advancing the insurance industry.
        </p>
        <button className="bg-white text-corporate-blue-500 px-8 py-4 font-medium hover:bg-gray-100 transition-colors">
          Learn About Our Future Plans
        </button>
      </div>
    </section>
  );
}
