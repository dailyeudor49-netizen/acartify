import React from 'react';
import { AlertOctagon } from 'lucide-react';

const ProblemAgitation: React.FC = () => {
  return (
    <section className="bg-red-50 p-6 mx-4 mt-6 rounded-xl border-2 border-red-100">
      <div className="flex items-start gap-3">
        <AlertOctagon className="w-10 h-10 text-red-600 shrink-0" />
        <div>
          <h3 className="text-red-700 font-black text-lg uppercase mb-1">
            Attenzione: La tua schiena è a rischio
          </h3>
          <p className="text-slate-800 text-sm font-medium leading-relaxed">
            Ogni anno 45.000 italiani finiscono al pronto soccorso per incidenti con motoseghe a scoppio o per strappi alla schiena dovuti al peso.
            <br/><br/>
            <strong>Non rischiare oltre.</strong> La tecnologia oggi ti permette di lavorare in sicurezza e senza fatica.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemAgitation;