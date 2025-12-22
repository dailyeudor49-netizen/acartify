import React from 'react';
import { Gift, Plus } from 'lucide-react';

const Bundle: React.FC = () => {
  return (
    <section className="bg-slate-50 py-12 px-4 border-t border-slate-200">
      <div className="container mx-auto max-w-4xl">
        
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 uppercase mb-2">
            COSA C'È NELLA SCATOLA?
          </h2>
          <div className="flex items-center justify-center gap-2 text-[#dc3545] font-black text-lg md:text-xl uppercase bg-red-50 inline-block px-4 py-2 rounded-lg border border-red-100">
            <Gift className="w-6 h-6" />
            MEGA KIT "TUTTO INCLUSO" (VALORE €99 GRATIS)
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border-2 border-[#28a745] overflow-hidden flex flex-col md:flex-row">
          
          {/* Left: Main Image */}
          <div className="md:w-1/2 bg-slate-100 relative p-6 flex items-center justify-center">
             <span className="absolute top-4 left-4 bg-[#28a745] text-white text-xs font-bold px-3 py-1 uppercase rounded shadow-md z-10">
               KIT COMPLETO
             </span>
             <img src="https://picsum.photos/600/600?random=99" alt="Kit Completo" className="w-full h-auto rounded-lg shadow-sm mix-blend-multiply" />
          </div>

          {/* Right: List */}
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center bg-white">
            <h3 className="font-bold text-lg text-slate-500 mb-4 uppercase tracking-wide">Ecco cosa riceverai a casa:</h3>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-3 border-b border-slate-100 pb-2">
                <div className="bg-green-100 p-1 rounded-full"><Plus className="w-4 h-4 text-green-600" /></div>
                <div className="flex-1">
                  <span className="font-black text-slate-900 text-lg">1x Motosega TitanSaw</span>
                  <p className="text-xs text-slate-500">Corpo macchina ultima generazione</p>
                </div>
              </li>
              
              <li className="flex items-center gap-3 border-b border-slate-100 pb-2">
                <div className="bg-green-100 p-1 rounded-full"><Plus className="w-4 h-4 text-green-600" /></div>
                <div className="flex-1">
                  <span className="font-black text-slate-900 text-lg">2x Batterie Litio 24V</span>
                  <span className="ml-2 bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">8 ORE DURATA</span>
                  <p className="text-xs text-slate-500">Doppia autonomia infinita</p>
                </div>
              </li>

              <li className="flex items-center gap-3 border-b border-slate-100 pb-2">
                <div className="bg-green-100 p-1 rounded-full"><Plus className="w-4 h-4 text-green-600" /></div>
                <div className="flex-1">
                  <span className="font-black text-slate-900 text-lg">2x Catene in Titanio</span>
                  <p className="text-xs text-slate-500">Super affilate. Non perdono mai il filo.</p>
                </div>
              </li>

              <li className="flex items-center gap-3 border-b border-slate-100 pb-2">
                <div className="bg-green-100 p-1 rounded-full"><Plus className="w-4 h-4 text-green-600" /></div>
                <div className="flex-1">
                  <span className="font-black text-slate-900 text-lg">1x Barra Guida "Blindata"</span>
                  <p className="text-xs text-slate-500">Acciaio temperato anti-torsione. <strong className="text-slate-700">Non si spezza mai.</strong></p>
                </div>
              </li>

              <li className="flex items-center gap-3 border-b border-slate-100 pb-2">
                <div className="bg-green-100 p-1 rounded-full"><Plus className="w-4 h-4 text-green-600" /></div>
                <div className="flex-1">
                  <span className="font-black text-slate-900 text-lg">1x Valigetta Rigida</span>
                  <p className="text-xs text-slate-500">Anti-urto per trasporto sicuro</p>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-green-100 p-1 rounded-full"><Plus className="w-4 h-4 text-green-600" /></div>
                <div className="flex-1">
                  <span className="font-black text-slate-900 text-lg">1x Caricabatterie</span>
                  <p className="text-xs text-slate-500">Ricarica rapida</p>
                </div>
              </li>
            </ul>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Bundle;