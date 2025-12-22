'use client';

import React from 'react';
import { ShoppingCart, Wallet } from 'lucide-react';
import { PRICE_PROMO, CURRENCY } from '../constants';

interface StickyFooterProps {
  onScrollToOrder: () => void;
}

export const StickyFooter: React.FC<StickyFooterProps> = ({ onScrollToOrder }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_10px_rgba(0,0,0,0.15)] z-50 p-3 md:hidden pb-safe">
      <div className="flex items-center justify-between gap-3 max-w-lg mx-auto">
        <div className="flex flex-col shrink-0">
          <span className="text-[10px] text-gray-500 line-through font-medium">Cena: 3 598 Kč</span>
          <span className="text-xl font-black text-gray-900 leading-none">{PRICE_PROMO} {CURRENCY}</span>
        </div>
        <button
          onClick={onScrollToOrder}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-black py-2.5 px-2 rounded-lg shadow-lg flex flex-col items-center justify-center leading-none active:scale-95 transition-transform"
        >
          <div className="flex items-center gap-2 text-lg uppercase tracking-wide mb-0.5">
            <ShoppingCart className="w-5 h-5" />
            <span>OBJEDNAT</span>
          </div>
          <span className="text-[10px] uppercase font-bold text-green-100 flex items-center gap-1">
             <Wallet className="w-3 h-3" /> Platba při doručení
          </span>
        </button>
      </div>
    </div>
  );
};
