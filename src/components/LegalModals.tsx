/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, ShieldCheck, FileText, Cookie } from 'lucide-react';
import { PRIVACY_POLICY, TERMS_OF_SERVICE, COOKIE_POLICY } from '../data';
import { PolicyContent } from '../types';

interface LegalModalsProps {
  policyType: 'privacy' | 'terms' | 'cookie' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ policyType, onClose }) => {
  if (!policyType) return null;

  let policyData: PolicyContent;
  let Icon = FileText;

  switch (policyType) {
    case 'privacy':
      policyData = PRIVACY_POLICY;
      Icon = ShieldCheck;
      break;
    case 'terms':
      policyData = TERMS_OF_SERVICE;
      Icon = FileText;
      break;
    case 'cookie':
      policyData = COOKIE_POLICY;
      Icon = Cookie;
      break;
    default:
      return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md">
      {/* Background click to close */}
      <div 
        className="absolute inset-0 cursor-pointer" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal Container */}
      <div 
        id="legal-modal-container"
        className="relative w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-2xl glass-panel border border-white/80 shadow-2xl flex flex-col bg-white/95 backdrop-blur-xl animate-fade-in"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200/80 bg-white/90">
          <div className="flex items-center space-x-3 text-blue-600">
            <Icon className="w-6 h-6 text-blue-500" />
            <h3 className="text-xl font-display font-bold text-slate-900">
              {policyData.title}
            </h3>
          </div>
          <button 
            id="close-legal-modal-btn"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            title="关闭"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrolling Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-600 leading-relaxed font-sans">
          <div className="text-xs text-slate-400 italic">
            最新更新日期: {policyData.lastUpdated}
          </div>

          {policyData.sections.map((section, index) => (
            <div key={index} className="space-y-2">
              <h4 className="text-slate-800 font-bold text-base">
                {section.heading}
              </h4>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="indent-4">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200/80 bg-slate-50/50 flex justify-end">
          <button 
            id="acknowledge-legal-modal-btn"
            onClick={onClose}
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-50 hover:to-indigo-500 text-white rounded-lg font-semibold text-xs transition-all shadow-md shadow-blue-500/10 cursor-pointer"
          >
            我已阅读并理解
          </button>
        </div>
      </div>
    </div>
  );
};
