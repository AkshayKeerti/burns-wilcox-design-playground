import Image from 'next/image';
import partnerImage from '../../../public/partner.png';
import Link from 'next/link';

export default function PartnerSection() {
  return (
    <section className="bg-white w-full flex flex-col items-center py-28 px-4 md:px-16">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col lg:flex-row gap-20 items-center w-full">
          {/* Left Image */}
          <div className="flex-1 min-w-[320px] h-[400px] lg:h-[640px] relative bg-center bg-cover rounded-none">
            <Image
              src={partnerImage}
              alt="Partner in Managing Unique Risks"
              fill
              className="object-cover object-center rounded-none"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
          {/* Right Content */}
          <div className="flex-1 flex flex-col gap-8 items-start justify-center text-corporate-grey-900">
            <div className="flex flex-col gap-6 w-full">
              <h2 className="text-[48px] leading-[56px] font-medium tracking-tight font-sans">
                Your Partner in Managing Unique Risks
              </h2>
              <p className="text-[20px] leading-6 font-normal font-sans">
                We understand that every risk is unique. Committed to being a solution-driven
                organization, we offer personalized coverage that meets your business and personal
                needs, ensuring comprehensive protection that adapts to every challenge.
              </p>
            </div>
            {/* Features Row 1 */}
            <div className="flex flex-row gap-6 w-full">
              <div className="flex-1 flex flex-col gap-2">
                <h3 className="text-[23px] leading-[34px] font-bold tracking-tight font-sans">
                  Global Expertise
                </h3>
                <p className="text-base leading-[1.5] font-normal font-roboto">
                  Backed by worldwide insight
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <h3 className="text-[23px] leading-[34px] font-bold tracking-tight font-sans">
                  Tailored Solutions
                </h3>
                <p className="text-base leading-[1.5] font-normal font-roboto">Legacy of trust</p>
              </div>
            </div>
            {/* Features Row 2 */}
            <div className="flex flex-row gap-6 w-full">
              <div className="flex-1 flex flex-col gap-2">
                <h3 className="text-[23px] leading-[34px] font-bold tracking-tight font-sans">
                  Trusted Reputation
                </h3>
                <p className="text-base leading-[1.5] font-normal font-roboto">
                  Designed for your needs
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <h3 className="text-[23px] leading-[34px] font-bold tracking-tight font-sans">
                  Comprehensive Coverage
                </h3>
                <p className="text-base leading-[1.5] font-normal font-roboto">
                  Protection without gaps
                </p>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-row gap-4 mt-2">
              <Link
                href="/about-us"
                className="px-6 py-3 bg-corporate-blue-500 text-white text-[16px] font-normal border border-corporate-blue-500 hover:bg-corporate-blue-600 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/our-team"
                className="px-6 py-3 bg-white text-corporate-blue-500 text-[16px] font-normal border border-corporate-blue-500 hover:bg-corporate-blue-50 transition-colors"
              >
                Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
