import React from 'react';
import { ChevronLeft, ChevronRight, Gift } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-6 pb-2 px-4 bg-white">
      <div className="container mx-auto max-w-4xl text-center">
        
        {/* 1. Titolo */}
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] mb-2 uppercase">
          TAGLIA TRONCHI DA <span className="text-white bg-[#dc3545] px-2 rounded">80CM</span> COME BURRO.
        </h1>
        
        {/* 2. Sottotitolo */}
        <h2 className="text-lg md:text-2xl font-bold text-[#0056b3] mb-6 leading-tight">
          La potenza di una motosega a scoppio,<br/>
          <span className="text-slate-600 font-medium text-base md:text-xl">ma leggera come una piuma (1.2kg).</span>
        </h2>

        {/* 3. BLOCCO IMMAGINI + REGALO ATTACCATO */}
        <div className="max-w-lg mx-auto shadow-2xl rounded-2xl overflow-hidden mb-6 border-4 border-[#dc3545]">
            
            {/* FASCIA REGALO ROSSA (Unica e Dominante) */}
            <div className="bg-[#dc3545] text-white py-3 px-2 flex flex-col items-center justify-center gap-1 animate-pulse leading-none border-b-2 border-red-800">
                <div className="flex items-center gap-2 mb-1">
                   <Gift className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                   <span className="font-black uppercase text-base md:text-xl tracking-tight text-yellow-300">OFFERTA LIMITATA:</span>
                </div>
                <span className="font-bold uppercase text-xs md:text-sm tracking-wide text-center">
                  INCLUSI: 2 CATENE TITANIO + LAMA BLINDATA + 2 BATTERIE + VALIGETTA + CARICATORE
                </span>
            </div>

            {/* CAROSELLO IMMAGINI */}
            <div className="relative bg-white group cursor-pointer">
                
                {/* Badge Garanzia (Sinistra) */}
                <div className="absolute top-4 left-4 z-10 bg-white/90 border-2 border-green-600 rounded px-3 py-1 shadow-lg">
                  <span className="text-xs font-black text-green-700 uppercase">Garanzia Italia 2 Anni</span>
                </div>
                
                {/* Immagine 1080x1080 Placeholder */}
                <img 
                  src="https://picsum.photos/1080/1080?random=1" 
                  alt="TitanSaw Pro X" 
                  className="w-full h-auto object-cover aspect-square"
                />

                {/* Carousel Controls */}
                <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-xl text-slate-900 border border-slate-200 z-30 transition-all">
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-xl text-slate-900 border border-slate-200 z-30 transition-all">
                  <ChevronRight className="w-8 h-8" />
                </button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;