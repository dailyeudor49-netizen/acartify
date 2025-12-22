import React from 'react';
import { FileText, PhoneCall, Truck, Banknote } from 'lucide-react';

const HowToOrder: React.FC = () => {
  return (
    <section className="bg-slate-50 py-8 px-4 border-t border-slate-200">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-xl md:text-3xl font-black text-center mb-6 uppercase text-slate-900 leading-tight">
          COME ORDINARE IN <span className="text-[#28a745]">4 STEP</span>
        </h2>

        {/* GRID 2x2 Layout to save vertical space */}
        <div className="grid grid-cols-2 gap-3 md:gap-6">
          
          {/* Step 1 */}
          <div className="bg-white p-3 md:p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col items-center text-center">
             <div className="absolute -right-2 -top-2 text-6xl font-black text-slate-100 z-0">1</div>
             <div className="bg-[#e6f4ea] p-2 rounded-full z-10 mb-2">
               <FileText className="w-5 h-5 md:w-6 md:h-6 text-[#28a745]" />
             </div>
             <div className="z-10">
               <h3 className="font-black text-sm md:text-lg text-slate-900 uppercase mb-1">Compila il modulo</h3>
               <p className="text-slate-500 text-xs md:text-sm leading-tight">Lascia i tuoi dati qui sotto.</p>
             </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-3 md:p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col items-center text-center">
             <div className="absolute -right-2 -top-2 text-6xl font-black text-slate-100 z-0">2</div>
             <div className="bg-[#e6f4ea] p-2 rounded-full z-10 mb-2">
               <PhoneCall className="w-5 h-5 md:w-6 md:h-6 text-[#28a745]" />
             </div>
             <div className="z-10">
               <h3 className="font-black text-sm md:text-lg text-slate-900 uppercase mb-1">Ti richiamiamo</h3>
               <p className="text-slate-500 text-xs md:text-sm leading-tight">Confermiamo l'ordine a voce.</p>
             </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-3 md:p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col items-center text-center">
             <div className="absolute -right-2 -top-2 text-6xl font-black text-slate-100 z-0">3</div>
             <div className="bg-[#e6f4ea] p-2 rounded-full z-10 mb-2">
               <Truck className="w-5 h-5 md:w-6 md:h-6 text-[#28a745]" />
             </div>
             <div className="z-10">
               <h3 className="font-black text-sm md:text-lg text-slate-900 uppercase mb-1">Spedizione Rapida</h3>
               <p className="text-slate-500 text-xs md:text-sm leading-tight">Arriva in 24/48 ore a casa tua.</p>
             </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-3 md:p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col items-center text-center">
             <div className="absolute -right-2 -top-2 text-6xl font-black text-slate-100 z-0">4</div>
             <div className="bg-[#e6f4ea] p-2 rounded-full z-10 mb-2">
               <Banknote className="w-5 h-5 md:w-6 md:h-6 text-[#28a745]" />
             </div>
             <div className="z-10">
               <h3 className="font-black text-sm md:text-lg text-slate-900 uppercase mb-1">Pagamento alla consegna</h3>
               <p className="text-slate-500 text-xs md:text-sm leading-tight">Paghi in contanti al corriere.</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowToOrder;