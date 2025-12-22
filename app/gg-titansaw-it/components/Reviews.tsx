import React from 'react';
import { Star } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section className="bg-slate-50 py-12 px-4 border-t border-slate-200">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-black text-center mb-2 text-slate-900 uppercase">
          COSA DICONO I CLIENTI?
        </h2>
        <div className="flex justify-center items-center gap-2 mb-8">
           <div className="flex text-yellow-400">
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
          </div>
          <span className="font-bold text-slate-600">4.9/5 (Recensioni Verificate)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Review 1 - WITH PHOTO */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">L</div>
                 <div>
                   <h4 className="font-bold text-slate-900">Luca M.</h4>
                   <p className="text-xs text-green-600 font-bold uppercase flex items-center gap-1">✅ Acquisto Verificato</p>
                 </div>
               </div>
               <span className="text-xs text-slate-400">2 giorni fa</span>
            </div>
            <p className="text-slate-700 italic mb-4">
              "Non ci credevo finché non l'ho provata. Ho tagliato legna per il camino per 2 ore senza stancarmi. La potenza è assurda per una cosa così piccola."
            </p>
            <div className="w-full h-40 bg-slate-100 rounded-lg border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-sm">
               [FOTO CLIENTE: Tronchi tagliati]
            </div>
          </div>

          {/* Review 2 - WITH PHOTO */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">G</div>
                 <div>
                   <h4 className="font-bold text-slate-900">Giuseppe R.</h4>
                   <p className="text-xs text-green-600 font-bold uppercase flex items-center gap-1">✅ Acquisto Verificato</p>
                 </div>
               </div>
               <span className="text-xs text-slate-400">Ieri</span>
            </div>
            <p className="text-slate-700 italic mb-4">
              "Arrivata in 24 ore esatte. Pagato al corriere che è comodissimo. La uso per potare l'uliveto, va che è una meraviglia. Consigliata."
            </p>
            <div className="w-full h-40 bg-slate-100 rounded-lg border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-sm">
               [FOTO CLIENTE: Potatura Ulivo]
            </div>
          </div>

          {/* Review 3 - TEXT ONLY */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">M</div>
                 <div>
                   <h4 className="font-bold text-slate-900">Mario V.</h4>
                   <p className="text-xs text-green-600 font-bold uppercase flex items-center gap-1">✅ Acquisto Verificato</p>
                 </div>
               </div>
               <span className="text-xs text-slate-400">3 giorni fa</span>
            </div>
            <p className="text-slate-700 italic">
              "Ho 65 anni e la motosega a scoppio non riuscivo più ad accenderla per via della spalla. Questa basta premere un bottone. Mi ha ridato la mia indipendenza in giardino. Grazie."
            </p>
          </div>

          {/* Review 4 - TEXT ONLY */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">A</div>
                 <div>
                   <h4 className="font-bold text-slate-900">Antonio B.</h4>
                   <p className="text-xs text-green-600 font-bold uppercase flex items-center gap-1">✅ Acquisto Verificato</p>
                 </div>
               </div>
               <span className="text-xs text-slate-400">5 giorni fa</span>
            </div>
            <p className="text-slate-700 italic">
              "Il kit è completo di tutto. Le batterie durano davvero tanto. L'ho usata per tagliare dei pallet e non ha fatto una piega. Spedizione velocissima."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Reviews;