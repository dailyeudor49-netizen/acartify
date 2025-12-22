'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQProps {
  items: FAQItem[];
}

export const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:border-black"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <span className="font-black text-lg md:text-xl text-gray-900 flex items-center gap-3">
              <span className="text-red-600 font-bold">?</span> {item.question}
            </span>
            {openIndex === index ? (
              <ChevronUp className="w-6 h-6 text-red-600" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-400" />
            )}
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-5 border-t border-gray-200 bg-white text-gray-700 font-medium leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};