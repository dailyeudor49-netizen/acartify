'use client';

import React from 'react';
import { CheckCircle2, XCircle, Minus } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  return (
    <div className="overflow-hidden rounded-xl border-2 border-gray-200 shadow-lg my-8 bg-white">
      <div className="bg-gray-800 text-white text-center py-3 font-black uppercase tracking-widest text-sm md:text-base">
        Miért Vagyunk Mások
      </div>
      <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200 text-xs md:text-sm">
        <div className="p-3 font-bold text-gray-400 flex items-center justify-center">JELLEMZŐ</div>
        <div className="p-3 font-black text-green-700 bg-green-50 flex items-center justify-center text-center border-x border-green-100 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
            LITHIUM PRO
        </div>
        <div className="p-3 font-bold text-gray-500 flex items-center justify-center text-center">
            TÖBBI OLLÓ
        </div>
      </div>

      <div className="grid grid-cols-3 border-b border-gray-100">
        <div className="p-3 flex items-center justify-center font-bold text-gray-700 text-xs md:text-sm text-center">Vágási Erő</div>
        <div className="p-3 bg-green-50/50 flex flex-col items-center justify-center border-x border-green-100">
          <CheckCircle2 className="w-6 h-6 text-green-600 mb-1" />
          <span className="text-[10px] md:text-xs font-bold text-green-800 uppercase text-center">Valódi 8cm</span>
        </div>
        <div className="p-3 flex flex-col items-center justify-center opacity-50">
          <XCircle className="w-6 h-6 text-red-400 mb-1" />
          <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase text-center">Elakadnak</span>
        </div>
      </div>

      <div className="grid grid-cols-3 border-b border-gray-100">
        <div className="p-3 flex items-center justify-center font-bold text-gray-700 text-xs md:text-sm text-center">Akkumulátorok</div>
        <div className="p-3 bg-green-50/50 flex flex-col items-center justify-center border-x border-green-100">
          <CheckCircle2 className="w-6 h-6 text-green-600 mb-1" />
          <span className="text-[10px] md:text-xs font-bold text-green-800 uppercase text-center">2x (8 Óra)</span>
        </div>
        <div className="p-3 flex flex-col items-center justify-center opacity-50">
          <Minus className="w-6 h-6 text-gray-400 mb-1" />
          <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase text-center">Csak 1</span>
        </div>
      </div>

      <div className="grid grid-cols-3 border-b border-gray-100">
        <div className="p-3 flex items-center justify-center font-bold text-gray-700 text-xs md:text-sm text-center">Tartozékkészlet</div>
        <div className="p-3 bg-green-50/50 flex flex-col items-center justify-center border-x border-green-100">
          <CheckCircle2 className="w-6 h-6 text-green-600 mb-1" />
          <span className="text-[10px] md:text-xs font-bold text-green-800 uppercase text-center">10 000 Ft Értékben</span>
        </div>
        <div className="p-3 flex flex-col items-center justify-center opacity-50">
          <XCircle className="w-6 h-6 text-red-400 mb-1" />
          <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase text-center">Semmi</span>
        </div>
      </div>

      <div className="grid grid-cols-3">
        <div className="p-3 flex items-center justify-center font-bold text-gray-700 text-xs md:text-sm text-center">Garancia és Szerviz</div>
        <div className="p-3 bg-green-50/50 flex flex-col items-center justify-center border-x border-green-100">
          <CheckCircle2 className="w-6 h-6 text-green-600 mb-1" />
          <span className="text-[10px] md:text-xs font-bold text-green-800 uppercase text-center">2 Év</span>
        </div>
        <div className="p-3 flex flex-col items-center justify-center opacity-50">
          <XCircle className="w-6 h-6 text-red-400 mb-1" />
          <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase text-center">Nincs</span>
        </div>
      </div>
    </div>
  );
};
