import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

const QualifyingSection: React.FC = () => {
  return (
    <section className="bg-white py-10 px-4 border-t border-slate-200">
      <div className="container mx-auto max-w-4xl">
        
        {/* QUALIFYING BOXES ONLY */}
        <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-center mb-8 uppercase text-slate-900">
            QUINDI... È ADATTA A TE?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* NOT FOR YOU */}
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="font-black text-xl text-red-800 uppercase leading-none">NON COMPRARLA SE...</h3>
                </div>
                <ul className="space-y-3 text-red-900 font-medium">
                <li className="flex items-start gap-2">
                    <span className="font-bold">•</span> Sei un boscaiolo professionista che deve abbattere foreste intere 8 ore al giorno.
                </li>
                <li className="flex items-start gap-2">
                    <span className="font-bold">•</span> Cerchi uno strumento pesante e rumoroso per "sentire" la fatica.
                </li>
                </ul>
            </div>

            {/* FOR YOU */}
            <div className="bg-green-50 p-6 rounded-xl border border-green-100 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <h3 className="font-black text-xl text-green-800 uppercase leading-none">COMPRALA SUBITO SE...</h3>
                </div>
                <ul className="space-y-3 text-green-900 font-medium">
                <li className="flex items-start gap-2">
                    <span className="font-bold">•</span> Hai un giardino, un uliveto o un camino e vuoi essere autonomo.
                </li>
                <li className="flex items-start gap-2">
                    <span className="font-bold">•</span> Vuoi finire il lavoro in metà tempo e goderti il resto della giornata.
                </li>
                <li className="flex items-start gap-2">
                    <span className="font-bold">•</span> Vuoi uno strumento sicuro che non ti spezzi la schiena.
                </li>
                </ul>
            </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default QualifyingSection;