import React from 'react';
import { Zap, Feather, ShieldCheck, RefreshCw, BatteryCharging, Gauge } from 'lucide-react';

const BenefitsList: React.FC = () => {
  return (
    <section className="bg-white px-4 py-8 border-b border-slate-100">
      <div className="container mx-auto max-w-lg space-y-6">
        
        {/* Benefit 1: CAPACITY (Restored) */}
        <div className="flex items-start gap-4">
          <div className="shrink-0 mt-1">
             <div className="bg-green-100 text-green-700 p-2 rounded-lg border border-green-200 shadow-sm">
                <Zap className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" />
             </div>
          </div>
          <div>
            <h3 className="font-black text-xl text-slate-900 uppercase leading-none">
              TAGLIA TRONCHI DA 80CM
            </h3>
            <p className="text-slate-600 font-medium text-base leading-tight mt-1">
              Grazie alla catena in <span className="bg-yellow-200 px-1 border border-yellow-300 rounded-sm text-slate-900 font-bold">TITANIO CHIRURGICO</span>.
            </p>
          </div>
        </div>

        {/* Benefit 2: SELF-SHARPENING (New separate point) */}
        <div className="flex items-start gap-4">
           <div className="shrink-0 mt-1">
             <div className="bg-green-100 text-green-700 p-2 rounded-lg border border-green-200 shadow-sm">
                <RefreshCw className="w-8 h-8 md:w-10 md:h-10" />
             </div>
          </div>
          <div>
            <h3 className="font-black text-xl text-slate-900 uppercase leading-none">
              SI AUTO-AFFILA DA SOLA
            </h3>
            <p className="text-slate-600 font-medium text-base leading-tight mt-1">
              Più tagli, più la lama diventa affilata. <span className="bg-yellow-200 px-1 border border-yellow-300 rounded-sm text-slate-900 font-bold">MANUTENZIONE ZERO</span>.
            </p>
          </div>
        </div>

        {/* Benefit 3: POWER 52cc (Motor focus) */}
        <div className="flex items-start gap-4">
           <div className="shrink-0 mt-1">
             <div className="bg-green-100 text-green-700 p-2 rounded-lg border border-green-200 shadow-sm">
                <Gauge className="w-8 h-8 md:w-10 md:h-10" />
             </div>
          </div>
          <div>
            <h3 className="font-black text-xl text-slate-900 uppercase leading-none">
              POTENZA PARI A 52cc A SCOPPIO
            </h3>
            <p className="text-slate-600 font-medium text-base leading-tight mt-1">
              Il motore Magnetico sprigiona <span className="bg-yellow-200 px-1 border border-yellow-300 rounded-sm text-slate-900 font-bold">4.000 GIRI/MIN</span>.
            </p>
          </div>
        </div>

        {/* Benefit 4: BATTERY (Restored 8 Hours + EV tech) */}
        <div className="flex items-start gap-4">
           <div className="shrink-0 mt-1">
             <div className="bg-green-100 text-green-700 p-2 rounded-lg border border-green-200 shadow-sm">
                <BatteryCharging className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" />
             </div>
          </div>
          <div>
            <h3 className="font-black text-xl text-slate-900 uppercase leading-none">
              DURATA 8 ORE (2 BATTERIE)
            </h3>
            <p className="text-slate-600 font-medium text-base leading-tight mt-1">
              Grazie alle nuove celle al <span className="bg-yellow-200 px-1 border border-yellow-300 rounded-sm text-slate-900 font-bold">LITIO-COBALTO (EV)</span>.
            </p>
          </div>
        </div>

        {/* Benefit 5: SAFETY */}
         <div className="flex items-start gap-4">
           <div className="shrink-0 mt-1">
             <div className="bg-green-100 text-green-700 p-2 rounded-lg border border-green-200 shadow-sm">
                <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" />
             </div>
          </div>
          <div>
            <h3 className="font-black text-xl text-slate-900 uppercase leading-none">
              IMPOSSIBILE FARSI MALE
            </h3>
            <p className="text-slate-600 font-medium text-base leading-tight mt-1">
              Grazie al chip <span className="bg-yellow-200 px-1 border border-yellow-300 rounded-sm text-slate-900 font-bold">SAFELOCK™ BIOMETRICO</span>.
            </p>
          </div>
        </div>

        {/* Benefit 6: WEIGHT */}
        <div className="flex items-start gap-4">
           <div className="shrink-0 mt-1">
             <div className="bg-green-100 text-green-700 p-2 rounded-lg border border-green-200 shadow-sm">
                <Feather className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" />
             </div>
          </div>
          <div>
            <h3 className="font-black text-xl text-slate-900 uppercase leading-none">
              LEGGERISSIMA (1.2 KG)
            </h3>
            <p className="text-slate-600 font-medium text-base leading-tight mt-1">
              La usi con una sola mano. <span className="bg-yellow-200 px-1 border border-yellow-300 rounded-sm text-slate-900 font-bold">ZERO FATICA</span>.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BenefitsList;