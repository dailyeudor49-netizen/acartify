import React, { useState, useEffect } from 'react';
import { Truck, Clock } from 'lucide-react';

interface StickyBarProps {
  onCtaClick: () => void;
}

const StickyBar: React.FC<StickyBarProps> = ({ onCtaClick }) => {
  // Countdown Timer State
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 shadow-[0_-5px_20px_rgba(0,0,0,0.15)] p-2 z-50 md:hidden pb-safe">
      <div className="flex items-center gap-2">
        <div className="flex-1 pl-1">
          {/* Timer Added */}
          <div className="text-[10px] text-red-600 font-black uppercase flex items-center mb-0.5 animate-pulse">
            <Clock className="w-3 h-3 mr-1" /> SCADE TRA: {formatTime(timeLeft)}
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-[#dc3545]">€89,90</span>
            <span className="text-xs text-slate-400 line-through">€199</span>
          </div>
        </div>
        <button 
          onClick={onCtaClick}
          className="flex-1 bg-[#27ae60] text-white font-black text-lg py-3 px-2 rounded shadow-lg animate-pulse-fast uppercase leading-none"
        >
          ORDINA ORA
          <span className="block text-[10px] font-medium opacity-80 mt-1">PAGHI ALLA CONSEGNA</span>
        </button>
      </div>
    </div>
  );
};

export default StickyBar;