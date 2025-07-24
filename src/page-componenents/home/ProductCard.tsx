import ChevronRight from '@/components/icons/ChevronDown';
import Image from 'next/image';
export function ProductCard({ icon, title, description, image, expanded, onClick }: {
    icon: React.ReactNode;
    title: string;
    description: string;
    image?: string;
    expanded: boolean;
    onClick: () => void;
  }) {
    if (expanded && image) {
      return (
        <div
          className={`relative bg-tertiary-blue-300 rounded-none border border-corporate-grey-50 flex min-h-[360px] cursor-pointer transition-all duration-300 overflow-hidden flex-[2_2_0%] z-10`}
          onClick={onClick}
          tabIndex={0}
          role="button"
          aria-expanded={expanded}
        >
          <div className="flex-shrink-0  h-full flex items-stretch">
            <Image
              src={image}
              alt={title}
              width={320}
              height={360}
              className="object-cover object-center"
              style={{ minHeight: 360, minWidth: 0 }}
              priority
            />
          </div>
          <div className="flex flex-col p-6">
            <div className="mb-2 mt-auto">
              <h3 className="text-[23px] leading-7 font-medium tracking-tight mb-2 text-corporate-grey-900">
                {title}
              </h3>
              <p className="text-base leading-[19px] font-normal text-corporate-grey-900">
                {description}
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center mt-auto group">
              <span className="text-lg leading-[21.6px] font-normal group-hover:underline text-corporate-blue-500">
                Discover more
              </span>
              <ChevronRight className="w-6 h-6" />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div
        className={`relative bg-tertiary-blue-300 rounded-none border border-corporate-grey-50 flex flex-col justify-between min-h-[360px] cursor-pointer transition-all duration-300 overflow-hidden ${expanded ? 'flex-[2_2_0%] z-10' : 'flex-1'}`}
        onClick={onClick}
        tabIndex={0}
        role="button"
        aria-expanded={expanded}
      >
        <div className="flex flex-col h-full p-6">
          <div className="mb-4">
            {icon}
          </div>
          <div className="mb-2">
            <h3 className="text-[23px] leading-7 font-medium tracking-tight mb-2 text-corporate-grey-900">
              {title}
            </h3>
            <p className="text-base leading-[19px] font-normal text-corporate-grey-900">
              {description}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center mt-auto group">
            <span className="text-lg leading-[21.6px] font-normal group-hover:underline text-corporate-blue-500">
              Discover more
            </span>
            <ChevronRight className="w-6 h-6" />
          </div>
        </div>
      </div>
    );
  }