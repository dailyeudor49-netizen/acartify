'use client';

import React from 'react';
import { CheckCircle2, XCircle, Minus } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  return (
    <div className="overflow-hidden rounded-xl border-2 border-gray-200 shadow-lg my-8 bg-white">
      <div className="bg-gray-800 text-white text-center py-3 font-black uppercase tracking-widest text-sm md:text-base">
        Perché siamo diversi
      </div>
      <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200 text-xs md:text-sm">
        <div className="p-3 font-bold text-gray-400 flex items-center justify-center">CARATTERISTICA</div>
        <div className="p-3 font-black text-green-700 bg-green-50 flex items-center justify-center text-center border-x border-green-100 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
            LITHIUM PRO
        </div>
        <div className="p-3 font-bold text-gray-500 flex items-center justify-center text-center">
            ALTRE CESOIE
        </div>
      </div>

      {/* Row 1 */}
      <div className="grid grid-cols-3 border-b border-gray-100">
        <div className="p-3 flex items-center justify-center font-bold text-gray-700 text-xs md:text-sm text-center">
          Potenza Taglio
        </div>
        <div className="p-3 bg-green-50/50 flex flex-col items-center justify-center border-x border-green-100">
          <CheckCircle2 className="w-6 h-6 text-green-600 mb-1" />
          <span className="text-[10px] md:text-xs font-bold text-green-800 uppercase text-center">8cm Reali</span>
        </div>
        <div className="p-3 flex flex-col items-center justify-center opacity-50">
          <XCircle className="w-6 h-6 text-red-400 mb-1" />
          <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase text-center">Si Bloccano</span>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-3 border-b border-gray-100">
        <div className="p-3 flex items-center justify-center font-bold text-gray-700 text-xs md:text-sm text-center">
          Batterie Incluse
        </div>
        <div className="p-3 bg-green-50/50 flex flex-col items-center justify-center border-x border-green-100">
          <CheckCircle2 className="w-6 h-6 text-green-600 mb-1" />
          <span className="text-[10px] md:text-xs font-bold text-green-800 uppercase text-center">2x (8 Ore)</span>
        </div>
        <div className="p-3 flex flex-col items-center justify-center opacity-50">
          <Minus className="w-6 h-6 text-gray-400 mb-1" />
          <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase text-center">Solo 1</span>
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-3 border-b border-gray-100">
        <div className="p-3 flex items-center justify-center font-bold text-gray-700 text-xs md:text-sm text-center">
          Kit Accessori
        </div>
        <div className="p-3 bg-green-50/50 flex flex-col items-center justify-center border-x border-green-100">
          <CheckCircle2 className="w-6 h-6 text-green-600 mb-1" />
          <span className="text-[10px] md:text-xs font-bold text-green-800 uppercase text-center">Valore €100</span>
        </div>
        <div className="p-3 flex flex-col items-center justify-center opacity-50">
          <XCircle className="w-6 h-6 text-red-400 mb-1" />
          <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase text-center">Nessuno</span>
        </div>
      </div>

      {/* Row 4 */}
      <div className="grid grid-cols-3">
        <div className="p-3 flex items-center justify-center font-bold text-gray-700 text-xs md:text-sm text-center">
          Garanzia & Assistenza
        </div>
        <div className="p-3 bg-green-50/50 flex flex-col items-center justify-center border-x border-green-100">
          <CheckCircle2 className="w-6 h-6 text-green-600 mb-1" />
          <span className="text-[10px] md:text-xs font-bold text-green-800 uppercase text-center">2 Anni Italia</span>
        </div>
        <div className="p-3 flex flex-col items-center justify-center opacity-50">
          <XCircle className="w-6 h-6 text-red-400 mb-1" />
          <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase text-center">Nessuna</span>
        </div>
      </div>
    </div>
  );
};