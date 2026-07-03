/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageSquare } from 'lucide-react';
import { FAQS } from '../data';

export const FaqAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-6">
      {/* Accordion List */}
      <div className="max-w-3xl mx-auto space-y-3">
        {FAQS.map((faq, idx) => {
          const isOpen = activeIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'border-blue-300 bg-white shadow-md'
                  : 'border-slate-200/80 bg-white/40 hover:border-slate-300 hover:bg-white/70'
              }`}
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer"
              >
                <div className="flex items-center space-x-3.5 pr-4">
                  <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? 'text-blue-500' : 'text-slate-400'}`} />
                  <span className={`text-sm md:text-base font-semibold font-sans leading-snug transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-800'}`}>
                    {faq.question}
                  </span>
                </div>
                <div className="text-slate-400 shrink-0">
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-blue-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed font-sans border-t border-slate-100 bg-slate-50/50">
                  <div className="mb-2">
                    <span className="inline-block px-2 py-0.5 text-[10px] font-mono rounded bg-blue-50 text-blue-600 border border-blue-100 font-bold">
                      {faq.category}
                    </span>
                  </div>
                  <p className="indent-4">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
