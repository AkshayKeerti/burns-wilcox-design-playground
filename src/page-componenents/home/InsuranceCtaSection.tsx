import Link from 'next/link';

const imgCta = '/cta_contact_us_burns&wilcox.jpg';

export default function InsuranceCtaSection() {
  return (
    <section
      className="relative w-full min-h-[480px] flex items-center justify-start bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), url('${imgCta}')`,
      }}
    >
      <div className="w-full max-w-7xl px-4 md:px-16 py-28 flex flex-col gap-20 items-start">
        <div className="flex flex-col gap-8 w-full max-w-2xl">
          <div className="flex flex-col gap-6 text-white text-left">
            <h2 className="text-[48px] leading-[56px] font-medium tracking-tight font-sans">
              Your Insurance Needs Matter
            </h2>
            <p className="text-[20px] leading-6 font-normal font-sans">
              Reach out to discuss tailored insurance solutions that meet your unique business needs
              today.
            </p>
          </div>
          <div className="flex flex-row gap-4 mt-2">
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-black text-[18px] font-normal border border-white hover:bg-gray-100 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/learn-more"
              className="px-6 py-3 bg-transparent text-white text-[18px] font-normal border border-white hover:bg-white hover:text-black transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
