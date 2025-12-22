import React, { useState } from 'react';
import { Truck, Check, ShieldCheck, Lock, Award, Banknote } from 'lucide-react';

const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <section className="bg-green-600 py-12 text-white text-center rounded-xl mx-4 my-8 shadow-2xl">
        <div className="bg-white text-slate-900 rounded-2xl p-8 mx-auto max-w-sm shadow-inner">
          <Check className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-3xl font-black mb-2 text-green-700 uppercase">GRAZIE!</h2>
          <p className="font-bold mb-4">Il tuo ordine è confermato.</p>
          <p className="text-sm text-slate-600">Un nostro operatore ti contatterà a breve.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-8 px-4 border-t border-slate-200">
      <div className="max-w-xl mx-auto">
        
        <div className="text-center mb-6">
          <h3 className="text-2xl font-black uppercase text-slate-900">
            COMPILA IL MODULO
          </h3>
          <p className="text-sm text-slate-500">Paghi solo alla consegna. Spedizione Rapida 24/48h.</p>
        </div>

        <div className="bg-[#f8f9fa] rounded-xl border-2 border-slate-200 p-4 md:p-6 shadow-xl relative overflow-hidden">
          {/* Security Badge */}
          <div className="absolute top-0 right-0 bg-slate-200 px-2 py-1 rounded-bl text-[10px] font-bold text-slate-500 flex items-center gap-1">
             <Lock className="w-3 h-3" /> SSL SECURE
          </div>

          {/* Summary Row */}
          <div className="flex justify-between items-center border-b border-slate-200 pb-3 mb-4">
            <div className="flex items-center gap-3">
              <img src="https://picsum.photos/100/100?random=1" className="w-12 h-12 rounded object-cover border border-slate-300" alt="Product" />
              <div>
                <p className="font-bold text-sm text-slate-900 leading-tight">TitanSaw Pro X (Kit Titanio)</p>
                <p className="text-[10px] text-[#dc3545] font-bold">Sconto -50% Applicato</p>
              </div>
            </div>
            <div className="text-xl font-black text-[#28a745]">€89,90</div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            
            {/* NAME */}
            <div>
              <label className="text-[11px] font-bold text-slate-600 uppercase">Nome e Cognome *</label>
              <input 
                type="text" name="name" required placeholder="Es: Mario Rossi"
                className="w-full p-2.5 border border-slate-300 rounded focus:border-[#28a745] focus:ring-1 focus:ring-[#28a745] outline-none shadow-sm placeholder-slate-400"
                value={formData.name} onChange={handleChange}
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="text-[11px] font-bold text-slate-600 uppercase">Telefono (Cellulare) *</label>
              <input 
                type="tel" name="phone" required placeholder="Es: 333 1234567"
                className="w-full p-2.5 border border-slate-300 rounded focus:border-[#28a745] focus:ring-1 focus:ring-[#28a745] outline-none shadow-sm placeholder-slate-400"
                value={formData.phone} onChange={handleChange}
              />
            </div>

            {/* ADDRESS FULL */}
            <div>
              <label className="text-[11px] font-bold text-slate-600 uppercase">Indirizzo Completo *</label>
              <textarea 
                name="address" required rows={2}
                placeholder="Via, Civico, CAP, Città"
                className="w-full p-2.5 border border-slate-300 rounded focus:border-[#28a745] focus:ring-1 focus:ring-[#28a745] outline-none shadow-sm placeholder-slate-400 resize-none"
                value={formData.address} onChange={handleChange}
              />
              <p className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                <Lock className="w-3 h-3" /> I tuoi dati sono protetti e usati solo per la spedizione.
              </p>
            </div>

            {/* Compact Payment Selector */}
            <div className="bg-green-50 border border-green-200 rounded p-3 flex items-center justify-between mt-2 cursor-pointer">
              <div className="flex items-center gap-2">
                 <div className="w-5 h-5 bg-[#28a745] rounded-full flex items-center justify-center shadow-sm">
                    <Check className="w-3 h-3 text-white stroke-[3]" />
                 </div>
                 <span className="text-sm font-bold text-slate-900">Pagamento alla Consegna</span>
              </div>
              <Banknote className="w-5 h-5 text-green-700" />
            </div>

            {/* ACTION BUTTON */}
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 bg-[#28a745] hover:bg-[#218838] text-white text-xl md:text-2xl font-black py-4 rounded-xl shadow-[0_4px_0_#1e7e34] uppercase tracking-wide transition-all active:scale-95 disabled:opacity-70 flex justify-center items-center gap-2 active:shadow-none active:translate-y-1"
            >
              {isSubmitting ? 'ATTENDI...' : 'COMPLETA ORDINE'} <Truck className="w-6 h-6" />
            </button>
            
          </form>

          {/* Compact Footer Trust */}
          <div className="mt-3 pt-2 border-t border-slate-200 text-center">
             <p className="text-[10px] text-slate-500 font-medium">
                🛡️ Garanzia <strong>30 Giorni Soddisfatti o Rimborsati</strong> inclusa.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;