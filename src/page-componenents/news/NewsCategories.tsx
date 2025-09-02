const categories = [
  {
    name: 'Company News',
    description:
      'Latest updates about Burns & Wilcox MENA operations, expansions, and achievements',
    count: 24,
    color: 'bg-corporate-blue-500',
  },
  {
    name: 'Industry Insights',
    description:
      'Expert analysis and thought leadership on insurance trends and market developments',
    count: 18,
    color: 'bg-corporate-grey-700',
  },
  {
    name: 'Product Launch',
    description: 'New insurance products, services, and solutions introduced to the market',
    count: 12,
    color: 'bg-secondary-blue-500',
  },
  {
    name: 'Regulatory',
    description:
      'Important updates on insurance regulations, compliance requirements, and legal changes',
    count: 15,
    color: 'bg-corporate-grey-600',
  },
  {
    name: 'Partnerships',
    description: 'Strategic alliances, collaborations, and business partnerships announcements',
    count: 9,
    color: 'bg-secondary-yellow-500',
  },
  {
    name: 'Market Research',
    description: 'Data-driven insights, surveys, and research findings on insurance markets',
    count: 21,
    color: 'bg-tertiary-blue-500',
  },
];

export default function NewsCategories() {
  return (
    <section className="bg-white w-full flex flex-col items-center py-24 px-16">
      <div className="flex flex-col items-center gap-4 w-full text-center mb-20">
        <span className="text-[18px] leading-[21.6px] font-normal text-corporate-grey-900">
          Browse by Topic
        </span>
        <h2 className="text-[48px] leading-[56px] font-medium tracking-tight text-corporate-grey-900">
          News Categories
        </h2>
        <p className="text-[19px] leading-[23px] font-medium text-corporate-grey-900">
          Find the information that matters most to you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mb-16">
        {categories.map(category => (
          <div
            key={category.name}
            className="bg-white border border-corporate-grey-100 p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-4 h-4 ${category.color} rounded-full`}></div>
              <span className="text-corporate-grey-500 text-sm font-medium">
                {category.count} articles
              </span>
            </div>
            <h3 className="text-[20px] leading-[24px] font-medium text-corporate-grey-900 mb-3 group-hover:text-corporate-blue-500 transition-colors">
              {category.name}
            </h3>
            <p className="text-[14px] leading-[20px] text-corporate-grey-700 mb-4">
              {category.description}
            </p>
            <button className="text-corporate-blue-500 font-medium hover:underline text-sm group-hover:text-corporate-blue-600 transition-colors">
              Browse Category →
            </button>
          </div>
        ))}
      </div>

      <div className="bg-tertiary-blue-50 border border-corporate-grey-200 p-8 max-w-4xl text-center">
        <h3 className="text-[28px] leading-[34px] font-medium text-corporate-grey-900 mb-4">
          Stay Updated
        </h3>
        <p className="text-[16px] leading-[24px] text-corporate-grey-700 mb-6">
          Subscribe to our newsletter to receive the latest news, insights, and event updates
          directly in your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-3 border border-corporate-grey-300 focus:outline-none focus:border-corporate-blue-500 flex-1 max-w-md"
          />
          <button className="bg-corporate-blue-500 text-white px-6 py-3 font-medium hover:bg-corporate-blue-600 transition-colors">
            Subscribe
          </button>
        </div>
        <p className="text-xs text-corporate-grey-500 mt-3">
          By subscribing, you agree to receive marketing communications from Burns & Wilcox MENA.
        </p>
      </div>
    </section>
  );
}
