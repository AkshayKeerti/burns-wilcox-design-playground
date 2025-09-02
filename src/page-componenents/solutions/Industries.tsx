export default function Industries() {
  const industries = [
    'Financial Services',
    'Construction',
    'Healthcare',
    'Manufacturing',
    'Technology',
    'Retail',
  ];
  return (
    <section className="py-16 px-6 bg-corporate-grey-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-corporate-grey-900 mb-8">
          Industries We Serve
        </h2>
        <div className="flex flex-wrap gap-3">
          {industries.map(name => (
            <span
              key={name}
              className="px-4 py-2 bg-white border border-corporate-grey-200 text-corporate-grey-800"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
