import React from 'react';
import { Check, X, Minus } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="bg-white py-8 px-4 border-b border-slate-100">
      <div className="container mx-auto max-w-3xl">
        <h3 className="text-2xl font-black text-center mb-6 uppercase leading-tight">
          VECCHIA MOTOSEGA VS <br/><span className="text-[#dc3545]">TITANSAW PRO</span>
        </h3>

        <div className="overflow-hidden rounded-xl border-2 border-slate-200 shadow-xl">
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr>
                <th className="bg-slate-50 p-2 w-[30%] border-b border-slate-200"></th>
                <th className="bg-slate-100 p-2 w-[35%] text-slate-500 font-bold border-b border-slate-200 text-xs md:text-sm uppercase leading-tight align-bottom pb-4">
                  Motosega<br/>a Scoppio (52cc)
                </th>
                <th className="bg-[#28a745] p-2 w-[35%] text-white font-black border-b border-green-600 text-sm md:text-lg uppercase align-bottom pb-4 relative">
                  {/* Fixed Badge for Mobile */}
                  <div className="w-full flex justify-center mb-1">
                     <span className="bg-yellow-400 text-black text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded shadow-sm uppercase tracking-wide">
                       EVOLUZIONE
                     </span>
                  </div>
                  TitanSaw Pro
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1: Alimentazione (New Angle) */}
              <tr>
                <td className="p-3 font-bold text-slate-700 bg-slate-50 border-b border-slate-100 text-xs md:text-base">Motore</td>
                <td className="p-3 text-center text-slate-500 border-b border-slate-100 bg-slate-50">
                  Benzina/Miscela<br/><span className="text-[10px] md:text-xs text-red-500 font-bold">(Puzza)</span>
                </td>
                <td className="p-3 text-center font-black text-[#28a745] border-b border-slate-100 bg-green-50">
                  Litio-Cobalto EV<br/><span className="text-[10px] md:text-xs text-green-700 font-bold">(Spinta 52cc)</span>
                </td>
              </tr>

              {/* Row 2: Avviamento */}
              <tr>
                <td className="p-3 font-bold text-slate-700 bg-slate-50 border-b border-slate-100 text-xs md:text-base">Avviamento</td>
                <td className="p-3 text-center text-slate-500 border-b border-slate-100 bg-slate-50">
                  A strappo<br/><span className="text-[10px] md:text-xs text-red-500 font-bold">(Faticoso)</span>
                </td>
                <td className="p-3 text-center font-black text-[#28a745] border-b border-slate-100 bg-green-50">
                  SafeLock™ Bio<br/><span className="text-[10px] md:text-xs text-green-700 font-bold">(Sicuro 100%)</span>
                </td>
              </tr>

              {/* Row 3: Weight */}
              <tr>
                <td className="p-3 font-bold text-slate-700 bg-slate-50 border-b border-slate-100 text-xs md:text-base">Peso</td>
                <td className="p-3 text-center text-slate-500 border-b border-slate-100 bg-slate-50">
                  7 kg<br/><span className="text-[10px] md:text-xs text-red-500 font-bold">(Spacca Schiena)</span>
                </td>
                <td className="p-3 text-center font-black text-[#28a745] border-b border-slate-100 bg-green-50">
                  1.2 kg<br/><span className="text-[10px] md:text-xs text-green-700 font-bold">(Piuma)</span>
                </td>
              </tr>

              {/* Row 4: Maintenance */}
              <tr>
                <td className="p-3 font-bold text-slate-700 bg-slate-50 border-b border-slate-100 text-xs md:text-base">Manutenzione</td>
                <td className="p-3 text-center text-slate-500 border-b border-slate-100 bg-slate-50">
                  Candele, Affilatura<br/><span className="text-[10px] md:text-xs text-red-500 font-bold">(Costoso)</span>
                </td>
                <td className="p-3 text-center font-black text-[#28a745] border-b border-slate-100 bg-green-50">
                  NESSUNA<br/><span className="text-[10px] md:text-xs text-green-700 font-bold">(Auto-Affilante)</span>
                </td>
              </tr>
               
               {/* Row 5: Rumore */}
              <tr>
                <td className="p-3 font-bold text-slate-700 bg-slate-50 border-b border-slate-100 text-xs md:text-base">Rumore</td>
                <td className="p-3 text-center text-slate-500 border-b border-slate-100 bg-slate-50">
                  Infernale<br/><span className="text-[10px] md:text-xs text-red-500 font-bold">(Servono Cuffie)</span>
                </td>
                <td className="p-3 text-center font-black text-[#28a745] border-b border-slate-100 bg-green-50">
                  SILENZIOSA<br/><span className="text-[10px] md:text-xs text-green-700 font-bold">(Uso Condominio)</span>
                </td>
              </tr>

               {/* Row 6: Power (Objection Handling) */}
              <tr>
                <td className="p-3 font-bold text-slate-700 bg-slate-50 text-xs md:text-base bg-yellow-50">Taglio</td>
                <td className="p-3 text-center text-slate-500 bg-slate-50 bg-yellow-50">
                  Lento<br/><span className="text-[10px] md:text-xs text-red-500 font-bold">(Si inceppa)</span>
                </td>
                <td className="p-3 text-center font-black text-[#28a745] bg-green-50 bg-yellow-50 border-2 border-[#28a745] relative">
                  LASER<br/><span className="text-[10px] md:text-xs text-green-700 font-bold">(Titanio)</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;