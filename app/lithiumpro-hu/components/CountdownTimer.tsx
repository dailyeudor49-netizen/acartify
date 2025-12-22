'use client';

import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-yellow-100 border-2 border-red-500 text-red-700 px-4 py-3 rounded-lg font-bold flex items-center justify-center gap-2 my-4 shadow-sm animate-pulse">
      <Clock className="w-5 h-5" />
      <span>AZ AJÁNLAT LEJÁR: <span className="text-xl font-black tabular-nums">{formatTime(timeLeft)}</span></span>
    </div>
  );
};
