'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface DesignOption {
  id: string;
  name: string;
  description: string;
  path: string;
}

const designOptions: DesignOption[] = [
  {
    id: 'original',
    name: 'Original Design',
    description: 'Classic Burns & Wilcox layout',
    path: ''
  },
  {
    id: 'variation-1',
    name: 'Design Variation 1',
    description: 'Modern card-based layouts',
    path: '/design-1'
  },
  {
    id: 'variation-2',
    name: 'Design Variation 2',
    description: 'Minimalist & elegant layouts',
    path: '/design-2'
  },
  {
    id: 'variation-3',
    name: 'Design Variation 3',
    description: 'Dynamic & interactive layouts',
    path: '/design-3'
  },
  {
    id: 'variation-4',
    name: 'Design Variation 4',
    description: 'Bold & contemporary layouts',
    path: '/design-4'
  },
  {
    id: 'variation-5',
    name: 'Design Variation 5',
    description: 'Insights-led & editorial layouts',
    path: '/design-5'
  }
];

export default function DesignSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState('original');
  const router = useRouter();
  const pathname = usePathname();

  const handleDesignChange = (designId: string, designPath: string) => {
    setSelectedDesign(designId);
    setIsOpen(false);
    
    if (designPath) {
      const currentPath = pathname.replace(/\/design-[1-5]/, '');
      router.push(`${designPath}${currentPath}`);
    } else {
      const cleanPath = pathname.replace(/\/design-[1-5]/, '');
      router.push(cleanPath);
    }
  };

  const getCurrentDesignName = () => {
    const current = designOptions.find(option => 
      pathname.includes(option.path) || (option.path === '' && !pathname.includes('/design-'))
    );
    return current?.name || 'Original Design';
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-corporate-blue-500 text-white rounded-lg hover:bg-corporate-blue-600 transition-colors duration-200"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a2 2 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
        <span className="hidden sm:inline">{getCurrentDesignName()}</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-corporate-grey-100 z-50">
          <div className="p-4">
            <h3 className="text-sm font-semibold text-corporate-grey-700 mb-3">Choose Design</h3>
            <div className="space-y-2">
              {designOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleDesignChange(option.id, option.path)}
                  className={`w-full text-left p-3 rounded-lg transition-colors duration-200 ${
                    (pathname.includes(option.path) || (option.path === '' && !pathname.includes('/design-')))
                      ? 'bg-corporate-blue-50 text-corporate-blue-700 border border-corporate-blue-200'
                      : 'hover:bg-corporate-grey-50 text-corporate-grey-700'
                  }`}
                >
                  <div className="font-medium">{option.name}</div>
                  <div className="text-sm text-corporate-grey-500">{option.description}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
