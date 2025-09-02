import ChevronRight from '@/components/icons/ChevronDown';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function ProductCard({
  icon,
  title,
  description,
  image,
  expanded,
  onMouseEnter,
  onMouseLeave,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  image?: string;
  expanded: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const [imageMounted, setImageMounted] = useState(false);
  const [contentMounted, setContentMounted] = useState(false);

  useEffect(() => {
    if (expanded) {
      // Reset states when expanding
      setImageMounted(false);
      setContentMounted(false);

      // Animate image first
      const imageTimer = setTimeout(() => setImageMounted(true), 100);
      // Animate content after image
      const contentTimer = setTimeout(() => setContentMounted(true), 300);

      return () => {
        clearTimeout(imageTimer);
        clearTimeout(contentTimer);
      };
    } else {
      // Reset states when collapsing
      setImageMounted(false);
      setContentMounted(false);
    }
  }, [expanded]);

  if (expanded && image) {
    return (
      <div
        className={`relative bg-tertiary-blue-300 rounded-none border border-corporate-grey-50 flex min-h-[360px] cursor-pointer transition-all duration-500 ease-out overflow-hidden flex-[2_2_0%] z-10 transform hover:scale-[1.02] hover:shadow-lg`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        tabIndex={0}
        role="button"
        aria-expanded={expanded}
      >
        <div className="flex-shrink-0 h-full flex items-stretch">
          <Image
            src={image}
            alt={title}
            width={320}
            height={360}
            className={`object-cover object-center transition-all duration-700 ease-out hover:scale-105 ${
              imageMounted
                ? 'opacity-100 scale-100 translate-x-0'
                : 'opacity-0 scale-95 -translate-x-4'
            }`}
            style={{ minHeight: 360, minWidth: 0 }}
            priority
          />
        </div>
        <div
          className={`flex flex-col p-6 transition-all duration-500 ease-out ${
            contentMounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}
        >
          <div className="mb-2 mt-auto">
            <h3 className="text-[23px] leading-7 font-medium tracking-tight mb-2 text-corporate-grey-900 transition-colors duration-300 ease-out">
              {title}
            </h3>
            <p className="text-base leading-[19px] font-normal text-corporate-grey-900 transition-colors duration-300 ease-out">
              {description}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center mt-auto group">
            <span className="text-lg leading-[21.6px] font-normal group-hover:underline text-corporate-blue-500 transition-all duration-300 ease-out group-hover:text-corporate-blue-600">
              Discover more
            </span>
            <ChevronRight className="w-6 h-6 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:scale-110" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className={`relative bg-tertiary-blue-300 rounded-none border border-corporate-grey-50 flex flex-col justify-between min-h-[360px] cursor-pointer transition-all duration-500 ease-out overflow-hidden transform hover:scale-[1.02] hover:shadow-lg ${expanded ? 'flex-[2_2_0%] z-10' : 'flex-1'}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      tabIndex={0}
      role="button"
      aria-expanded={expanded}
    >
      <div className="flex flex-col h-full p-6">
        <div className="mb-4 transition-transform duration-300 ease-out hover:scale-110">
          {icon}
        </div>
        <div className="mb-2">
          <h3 className="text-[23px] leading-7 font-medium tracking-tight mb-2 text-corporate-grey-900 transition-colors duration-300 ease-out">
            {title}
          </h3>
          <p className="text-base leading-[19px] font-normal text-corporate-grey-900 transition-colors duration-300 ease-out">
            {description}
          </p>
        </div>
        <div className="flex flex-row gap-2 items-center mt-auto group">
          <span className="text-lg leading-[21.6px] font-normal group-hover:underline text-corporate-blue-500 transition-all duration-300 ease-out group-hover:text-corporate-blue-600">
            Discover more
          </span>
          <ChevronRight className="w-6 h-6 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:scale-110" />
        </div>
      </div>
    </div>
  );
}
