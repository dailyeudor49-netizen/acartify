import React from 'react';
import { Check } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section className="bg-white py-4 overflow-hidden">
      
      {/* Block 1: Power */}
      <div className="py-8 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-6 leading-tight">
            MOTORE BRUSHLESS "HYPER-DRIVE"<br/>
            <span className="text-red-600 bg-red-50 px-2">3.000 GIRI AL MINUTO</span>
          </h2>
          
          <img 
            src="https://picsum.photos/800/500?random=100" 
            alt="Motore Potente" 
            className="w-full rounded-lg shadow-lg mb-6 border border-slate-200"
          />

          <div className="space-y-4 text-lg text-slate-700 font-medium px-2">
            <p>
              Dimentica le motoseghe che si bloccano. Il nostro motore <strong>Tedesco Brushless</strong> non ha spazzole, quindi non si surriscalda mai.
            </p>
            <p>
              La catena gira così veloce che il legno non fa resistenza. È perfetta per:
            </p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-center gap-2 font-bold"><Check className="text-green-600 w-6 h-6"/> Potare rami alti</li>
              <li className="flex items-center gap-2 font-bold"><Check className="text-green-600 w-6 h-6"/> Tagliare tronchi per il camino</li>
              <li className="flex items-center gap-2 font-bold"><Check className="text-green-600 w-6 h-6"/> Lavori di precisione</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Block 2: Battery - EV/52cc ANGLE */}
      <div className="py-8 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4">
           <h2 className="text-2xl md:text-3xl font-black text-center mb-6 leading-tight">
            TECNOLOGIA AUTO ELETTRICHE<br/>
            <span className="text-green-600 bg-green-50 px-2">POTENZA DI UN 52cc</span>
          </h2>

          <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
            <img 
              src="https://picsum.photos/800/500?random=101" 
              alt="Batterie Litio" 
              className="w-full md:w-1/2 rounded-lg shadow-lg border border-slate-200"
            />
            
            <div className="space-y-4 text-lg text-slate-700 font-medium px-2">
              <p>
                Non sono normali batterie. Usiamo celle <strong>Litio-Cobalto ad Alta Densità</strong> (le stesse delle auto elettriche moderne).
              </p>
              <p>
                Il risultato? Una scarica di potenza brutale equivalente a un <strong>Motore a Scoppio 52cc</strong>, ma senza puzza di benzina e senza rumore.
              </p>
              <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-400 shadow-sm mt-4">
                <p className="font-bold text-slate-900">⚡ SUPER CHARGE:</p>
                <p className="text-sm">Si ricaricano completamente in soli 45 minuti.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Block 3: Safety */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-6 leading-tight">
            SICURA AL 100%<br/>
            <span className="text-blue-600 bg-blue-50 px-2">ANCHE PER PRINCIPIANTI</span>
          </h2>
          
          <img 
            src="https://picsum.photos/800/500?random=102" 
            alt="Sicurezza" 
            className="w-full rounded-lg shadow-lg mb-6 border border-slate-200"
          />

          <div className="grid grid-cols-2 gap-4">
             <div className="bg-slate-100 p-4 rounded text-center">
                <h4 className="font-black text-xl mb-1">STOP</h4>
                <p className="text-sm leading-tight">Freno catena istantaneo anti-contraccolpo</p>
             </div>
             <div className="bg-slate-100 p-4 rounded text-center">
                <h4 className="font-black text-xl mb-1">LOCK</h4>
                <p className="text-sm leading-tight">Pulsante di sicurezza (i bambini non possono accenderla)</p>
             </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Solution;