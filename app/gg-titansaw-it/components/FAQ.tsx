import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
      >
        <span className="font-bold text-slate-900 text-lg">{question}</span>
        {isOpen ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
      </button>
      {isOpen && (
        <div className="pb-4 text-slate-600 leading-relaxed text-sm md:text-base">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="bg-white py-12 px-4 border-t border-slate-200">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <HelpCircle className="w-10 h-10 text-[#0056b3] mx-auto mb-2" />
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase">
            DUBBI O DOMANDE?
          </h2>
          <p className="text-slate-500">Ecco le risposte alle domande più frequenti dei nostri clienti.</p>
        </div>

        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 shadow-sm">
          <FAQItem 
            question="Quanto durano le batterie?"
            answer="Le batterie in dotazione sono ad Altissima Capacità. Ogni batteria garantisce fino a 8 ORE di lavoro. Avendone due incluse nel kit, puoi lavorare per giorni interi senza mai fermarti."
          />
          <FAQItem 
            question="Dove trovo i ricambi e le lame?"
            answer="Attenzione: questa non è una motosega commerciale da supermercato. Monta una catena speciale in TITANIO progettata per durare anni e anni senza perdere il filo. La Barra Guida invece è in Acciaio Temperato 'Blindato': è impossibile da spezzare o piegare. Se comunque dovessi aver bisogno di ricambi (o per scorta), ti regaliamo già una seconda catena nel kit. Per futuri acquisti, trovi tutto sul nostro sito."
          />
          <FAQItem 
            question="È davvero potente come dite?"
            answer="Sì, è un mostro di potenza. Grazie al motore Brushless e alla catena in Titanio, abbatte tronchi fino a 80cm di diametro senza alcuno sforzo. Non si blocca mai, nemmeno con il legno più duro e stagionato."
          />
          <FAQItem 
            question="Posso pagare davvero alla consegna?"
            answer="Certamente! Sappiamo che fidarsi online è difficile. Per questo offriamo il pagamento in contanti direttamente al corriere quando ti consegna il pacco. Nessun rischio per te."
          />
          <FAQItem 
            question="Se non mi piace posso restituirla?"
            answer="Hai 30 giorni di garanzia 'Soddisfatti o Rimborsati'. Se il prodotto non ti piace, ce lo rimandi e ti ridiamo i soldi. Senza fare domande."
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;