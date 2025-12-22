import React from 'react';
import { X, Check } from 'lucide-react';

const VisualDemo: React.FC = () => {
  return (
    <section className="py-8 px-4 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-4xl font-black text-center mb-8 uppercase leading-tight">
          BASTA FATICARE INUTILMENTE.<br/>
          <span className="text-slate-500 text-lg md:text-2xl font-bold normal-case">Guarda la differenza tu stesso:</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-4">
          
          {/* LEFT: OLD WAY (PAIN) */}
          <div className="w-full md:w-1/2 relative">
             <div className="absolute top-0 left-0 w-full h-full bg-slate-900/40 z-10 flex flex-col items-center justify-center">
                <X className="w-20 h-20 text-red-500 bg-white rounded-full p-2 mb-2 shadow-xl" />
                <span className="bg-red-600 text-white font-black text-xl px-4 py-1 uppercase -rotate-6 shadow-lg">IL VECCHIO METODO</span>
             </div>
             <img 
               src="https://picsum.photos/600/600?random=88" 
               alt="Fatica con motosega vecchia" 
               className="w-full aspect-square object-cover grayscale contrast-125 rounded-xl border-4 border-red-200"
             />
             <div className="mt-2 text-center">
               <h3 className="font-black text-slate-700 text-lg uppercase">LA TORTURA</h3>
               <p className="text-sm text-slate-500 font-bold">Mal di schiena • Puzza • Non parte mai</p>
             </div>
          </div>

          {/* RIGHT: NEW WAY (PLEASURE) */}
          <div className="w-full md:w-1/2 relative">
             <div className="absolute top-4 right-4 z-20 animate-bounce">
                <span className="bg-yellow-400 text-black font-black text-xs px-2 py-1 rounded shadow uppercase">Zero Fatica</span>
             </div>
             <img 
               src="https://picsum.photos/600/600?random=89" 
               alt="Facilità con TitanSaw" 
               className="w-full aspect-square object-cover rounded-xl border-4 border-[#28a745] shadow-2xl"
             />
             <div className="absolute bottom-4 left-0 w-full text-center z-20">
                <div className="bg-[#28a745] text-white font-black text-xl px-6 py-2 uppercase inline-block shadow-lg skew-x-[-10deg]">
                  <span className="skew-x-[10deg] flex items-center gap-2">
                     <Check className="w-6 h-6" /> NUOVA TITANSAW
                  </span>
                </div>
             </div>
             <div className="mt-2 text-center">
               <h3 className="font-black text-green-700 text-lg uppercase">IL PIACERE</h3>
               <p className="text-sm text-slate-500 font-bold">1 Mano • Taglio Laser • Leggera</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisualDemo;