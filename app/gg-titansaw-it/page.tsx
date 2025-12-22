'use client';

import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, ChevronRight, Gift, Zap, Feather, ShieldCheck, 
  RefreshCw, BatteryCharging, Gauge, Check, X, Minus, Plus, 
  Star, Truck, Lock, Award, Banknote, Clock, FileText, PhoneCall,
  Calendar, Flame, PlayCircle, HelpCircle, ChevronDown, ChevronUp, 
  XCircle, CheckCircle, AlertOctagon 
} from 'lucide-react';

/* =========================================================================
   1. HERO SECTION
   ========================================================================= */
const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/images/titansaw-img/1.webp',
    '/images/titansaw-img/2.webp',
    '/images/titansaw-img/3.webp',
    '/images/titansaw-img/4.webp',
    '/images/titansaw-img/5.webp',
    '/images/titansaw-img/6.webp',
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="pt-6 pb-2 px-4 bg-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] mb-2 uppercase">
          TAGLIA TRONCHI DA <span className="text-white bg-[#dc3545] px-2 rounded">80CM</span> COME BURRO.
        </h1>
        <h2 className="text-lg md:text-2xl font-bold text-[#0056b3] mb-6 leading-tight">
          La potenza di una motosega a scoppio,<br/>
          <span className="text-slate-600 font-medium text-base md:text-xl">ma leggera come una piuma (1.2kg).</span>
        </h2>
        <div className="max-w-lg mx-auto shadow-2xl rounded-2xl overflow-hidden mb-6 border-4 border-[#dc3545]">
            <div className="bg-[#dc3545] text-white py-3 px-2 flex flex-col items-center justify-center gap-1 animate-pulse leading-none border-b-2 border-red-800">
                <div className="flex items-center gap-2 mb-1">
                   <Gift className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                   <span className="font-black uppercase text-base md:text-xl tracking-tight text-yellow-300">OFFERTA LIMITATA:</span>
                </div>
                <span className="font-bold uppercase text-xs md:text-sm tracking-wide text-center">
                  INCLUSI: 2 CATENE TITANIO + LAMA BLINDATA + 2 BATTERIE + VALIGETTA + CARICATORE
                </span>
            </div>
            <div className="relative bg-white group cursor-pointer">
                <div className="absolute top-4 left-4 z-10 bg-white/90 border-2 border-green-600 rounded px-3 py-1 shadow-lg">
                  <span className="text-xs font-black text-green-700 uppercase">Garanzia Italia 2 Anni</span>
                </div>
                <img
                  src={images[currentImage]}
                  alt="TitanSaw Pro X"
                  className="w-full h-auto object-cover aspect-square"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-xl text-slate-900 border border-slate-200 z-30 transition-all"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-xl text-slate-900 border border-slate-200 z-30 transition-all"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${idx === currentImage ? 'bg-[#dc3545] scale-110' : 'bg-white/70 border border-slate-300'}`}
                    />
                  ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   2. BENEFITS LIST
   ========================================================================= */
const BenefitsList: React.FC = () => {
  return (
    <section className="bg-white px-4 py-8 border-b border-slate-100">
      <div className="container mx-auto max-w-lg space-y-6">
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

/* =========================================================================
   3. OFFER SECTION (UPDATED)
   ========================================================================= */
interface OfferSectionProps {
  onCtaClick: () => void;
}

const OfferSection: React.FC<OfferSectionProps> = ({ onCtaClick }) => {
  const today = new Date().toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <section className="bg-white py-10 px-4 text-center border-t border-slate-200">
      <div className="container mx-auto max-w-xl">
        <div className="mb-6 space-y-2">
           <div className="inline-flex items-center gap-1 bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold uppercase animate-pulse">
              <Calendar className="w-3 h-3" /> Offerta del Giorno: {today}
           </div>
        </div>

        <div className="space-y-4 mb-6">
           <div className="relative bg-slate-100 border border-slate-300 rounded-xl p-4 opacity-70 grayscale select-none">
              <div className="absolute inset-0 bg-slate-200/50 z-10 flex items-center justify-center rounded-xl">
                 <span className="bg-slate-600 text-white font-black text-xl px-4 py-2 uppercase -rotate-3 border-4 border-white shadow-xl">
                   ❌ ESAURITO
                 </span>
              </div>
              <div className="flex justify-between items-center">
                 <div className="text-left">
                    <span className="font-bold text-slate-500 block">Solo Motosega</span>
                    <span className="text-xs text-slate-400">Senza accessori extra</span>
                 </div>
                 <div className="font-bold text-slate-500 text-xl">€79,90</div>
              </div>
           </div>

           <div className="relative bg-[#f8f9fa] rounded-2xl border-4 border-[#28a745] p-6 shadow-2xl overflow-hidden transform scale-105 z-20">
              <div className="absolute top-0 right-0 bg-[#dc3545] text-white text-xs font-black px-4 py-1.5 rounded-bl-xl shadow-sm z-10">
                -50% SCONTO
              </div>
              
              <div className="text-left mb-2">
                 <span className="bg-[#28a745] text-white text-xs font-black px-2 py-0.5 rounded uppercase">Consigliato</span>
                 <h3 className="font-black text-2xl text-slate-900 uppercase leading-none mt-2">TITANSAW PRO X <br/><span className="text-[#dc3545] text-lg">(KIT TITANIO)</span></h3>
                 
                 <div className="mt-4 bg-white border border-slate-200 rounded-lg p-3 shadow-sm">
                    <ul className="text-left space-y-1.5">
                      <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <Check className="w-4 h-4 text-[#28a745]" /> 2x Batterie Litio 24V
                      </li>
                      <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <Check className="w-4 h-4 text-[#28a745]" /> 2x Catene in Titanio
                      </li>
                      <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <Check className="w-4 h-4 text-[#28a745]" /> 1x Lama Blindata + Valigetta
                      </li>
                      <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <Check className="w-4 h-4 text-[#28a745]" /> Caricatore Rapido Incluso
                      </li>
                    </ul>
                 </div>
              </div>

              <div className="flex justify-center items-end gap-3 mb-1 mt-4 border-t border-dashed border-slate-300 pt-4">
                  <span className="text-slate-400 text-2xl font-bold line-through decoration-red-500 decoration-2">€199</span>
                  <span className="text-6xl font-black text-[#dc3545] tracking-tighter leading-none">€89,90</span>
              </div>
              
              <p className="text-sm font-bold text-green-700 uppercase tracking-widest mb-4 bg-green-50 inline-block px-3 py-1 rounded-full border border-green-100">
                 Pagamento alla Consegna
              </p>

              <div className="grid grid-cols-2 gap-2 mb-4">
                 <div className="bg-white border border-slate-200 rounded p-2 flex items-center justify-center gap-1 shadow-sm">
                    <Truck className="w-4 h-4 text-[#28a745]" />
                    <span className="text-[10px] md:text-xs font-bold text-slate-600 uppercase">Spedizione 24/48h</span>
                 </div>
                 <div className="bg-white border border-slate-200 rounded p-2 flex items-center justify-center gap-1 shadow-sm">
                    <ShieldCheck className="w-4 h-4 text-[#28a745]" />
                    <span className="text-[10px] md:text-xs font-bold text-slate-600 uppercase">Garanzia 2 Anni</span>
                 </div>
              </div>

              <button 
                onClick={onCtaClick}
                className="w-full bg-[#28a745] hover:bg-[#218838] text-white text-2xl md:text-3xl font-black py-4 rounded-xl shadow-[0_5px_0_#1e7e34] active:shadow-none active:translate-y-1 transition-all uppercase flex items-center justify-center gap-2 animate-pulse-fast ring-4 ring-green-100"
              >
                ORDINA ADESSO
              </button>
           </div>
        </div>

        <div className="mb-6 bg-white p-3 rounded-lg border border-red-100 shadow-inner">
          <div className="flex justify-between text-xs font-bold uppercase mb-1">
            <span className="text-slate-500">Disponibilità Magazzino:</span>
            <span className="text-red-600 flex items-center gap-1"><Flame className="w-3 h-3 fill-red-600" /> In Esaurimento</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2.5">
            <div className="bg-red-500 h-2.5 rounded-full w-[85%] animate-pulse"></div>
          </div>
          <p className="text-[10px] text-left mt-1 text-slate-400">Più di 140 persone stanno guardando questa offerta.</p>
        </div>

        <p className="text-xs text-center mt-3 text-slate-500 font-medium">
          <ShieldCheck className="w-3 h-3 inline mr-1" />
          Prova senza rischi: 30 giorni soddisfatti o rimborsati.
        </p>

      </div>
    </section>
  );
};

/* =========================================================================
   4. VISUAL FEATURES
   ========================================================================= */
const VisualFeatures: React.FC = () => {
  return (
    <section className="bg-slate-900 py-12 px-4 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-none mb-4 text-white">
            TECNOLOGIA CHE TI <br/><span className="text-yellow-400">CAMBIA LA VITA</span>
          </h2>
          <p className="text-slate-300 text-lg">
            Abbiamo risolto tutti i problemi delle vecchie motoseghe a scoppio. Ecco perché la TitanSaw Pro X è superiore.
          </p>
        </div>

        <div className="space-y-12">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2 relative group cursor-pointer aspect-square">
               <div className="absolute top-4 left-4 right-4 text-center z-20">
                  <span className="bg-red-600 text-white text-sm md:text-lg font-black px-4 py-2 uppercase shadow-lg transform -skew-x-6 inline-block border-2 border-white">
                    ABBATTE ALBERI IN 15 SECONDI
                  </span>
               </div>
               <video src="/images/titansaw-img/velocita-4000rpm.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover rounded-xl border-4 border-slate-700 shadow-2xl" />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-2xl font-black text-yellow-400 uppercase mb-2">
                VELOCITÀ 4.000 RPM = POTENZA PURA
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Guarda con che facilità abbatte questo albero. Il segreto è la velocità: il motore genera <strong className="text-white">4.000 giri al minuto</strong> che si tramutano in una forza di taglio inarrestabile.
                <br/><br/>
                Grazie alla catena in <strong className="text-white">TITANIO CHIRURGICO</strong> affilatissima, la lama entra nel legno senza sforzo. <span className="text-white font-bold bg-red-600/20 px-1">Taglia qualsiasi cosa incontri</span> (quercia, ulivo, faggio) come se fosse un coltello caldo nel burro.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6">
            <div className="w-full md:w-1/2 relative group cursor-pointer aspect-square">
               <div className="absolute top-4 left-4 right-4 text-center z-20">
                  <span className="bg-[#28a745] text-white text-sm md:text-lg font-black px-4 py-2 uppercase shadow-lg transform -skew-x-6 inline-block border-2 border-white">
                    LEGGERISSIMA: 1.2 KG
                  </span>
               </div>
               <video src="/images/titansaw-img/ti-basta-una-mano.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover rounded-xl border-4 border-slate-700 shadow-2xl" />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-2xl font-black text-green-400 uppercase mb-2">
                TI BASTA UNA MANO
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Dimentica il mal di schiena e le braccia che tremano dopo 5 minuti. Con <strong>1.2 kg</strong> di peso, è come usare un avvitatore. La usi con una mano, mentre con l'altra sposti i rami. <span className="text-white font-bold">Ideale anche sopra i 60 anni.</span>
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2 relative group cursor-pointer aspect-square">
               <div className="absolute top-4 left-4 right-4 text-center z-20">
                  <span className="bg-[#0056b3] text-white text-sm md:text-lg font-black px-4 py-2 uppercase shadow-lg transform -skew-x-6 inline-block border-2 border-white">
                    BLOCCO BIOMETRICO 0.01s
                  </span>
               </div>
               <video src="/images/titansaw-img/safelock-biometrico.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover rounded-xl border-4 border-slate-700 shadow-2xl" />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-2xl font-black text-blue-400 uppercase mb-2">
                "SAFELOCK™" BIOMETRICO
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Tua moglie ha paura che ti fai male? Tranquillo. Il chip intelligente riconosce la presa sicura. <strong className="text-white">È impossibile che parta per sbaglio</strong> (nemmeno se cade a terra o se la toccano i nipoti). Se molli il dito, il freno motore blocca la lama in <strong>0.01 secondi</strong> netti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   5. COMPARISON
   ========================================================================= */
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
              <tr>
                <td className="p-3 font-bold text-slate-700 bg-slate-50 border-b border-slate-100 text-xs md:text-base">Motore</td>
                <td className="p-3 text-center text-slate-500 border-b border-slate-100 bg-slate-50">
                  Benzina/Miscela<br/><span className="text-[10px] md:text-xs text-red-500 font-bold">(Puzza)</span>
                </td>
                <td className="p-3 text-center font-black text-[#28a745] border-b border-slate-100 bg-green-50">
                  Litio-Cobalto EV<br/><span className="text-[10px] md:text-xs text-green-700 font-bold">(Spinta 52cc)</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-700 bg-slate-50 border-b border-slate-100 text-xs md:text-base">Avviamento</td>
                <td className="p-3 text-center text-slate-500 border-b border-slate-100 bg-slate-50">
                  A strappo<br/><span className="text-[10px] md:text-xs text-red-500 font-bold">(Faticoso)</span>
                </td>
                <td className="p-3 text-center font-black text-[#28a745] border-b border-slate-100 bg-green-50">
                  SafeLock™ Bio<br/><span className="text-[10px] md:text-xs text-green-700 font-bold">(Sicuro 100%)</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-700 bg-slate-50 border-b border-slate-100 text-xs md:text-base">Peso</td>
                <td className="p-3 text-center text-slate-500 border-b border-slate-100 bg-slate-50">
                  7 kg<br/><span className="text-[10px] md:text-xs text-red-500 font-bold">(Spacca Schiena)</span>
                </td>
                <td className="p-3 text-center font-black text-[#28a745] border-b border-slate-100 bg-green-50">
                  1.2 kg<br/><span className="text-[10px] md:text-xs text-green-700 font-bold">(Piuma)</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-700 bg-slate-50 border-b border-slate-100 text-xs md:text-base">Manutenzione</td>
                <td className="p-3 text-center text-slate-500 border-b border-slate-100 bg-slate-50">
                  Candele, Affilatura<br/><span className="text-[10px] md:text-xs text-red-500 font-bold">(Costoso)</span>
                </td>
                <td className="p-3 text-center font-black text-[#28a745] border-b border-slate-100 bg-green-50">
                  NESSUNA<br/><span className="text-[10px] md:text-xs text-green-700 font-bold">(Auto-Affilante)</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-700 bg-slate-50 border-b border-slate-100 text-xs md:text-base">Rumore</td>
                <td className="p-3 text-center text-slate-500 border-b border-slate-100 bg-slate-50">
                  Infernale<br/><span className="text-[10px] md:text-xs text-red-500 font-bold">(Servono Cuffie)</span>
                </td>
                <td className="p-3 text-center font-black text-[#28a745] border-b border-slate-100 bg-green-50">
                  SILENZIOSA<br/><span className="text-[10px] md:text-xs text-green-700 font-bold">(Uso Condominio)</span>
                </td>
              </tr>
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

/* =========================================================================
   6. QUALIFYING SECTION
   ========================================================================= */
const QualifyingSection: React.FC = () => {
  return (
    <section className="bg-white py-10 px-4 border-t border-slate-200">
      <div className="container mx-auto max-w-4xl">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-center mb-8 uppercase text-slate-900">
            QUINDI... È ADATTA A TE?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

/* =========================================================================
   7. BUNDLE
   ========================================================================= */
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
          <div className="md:w-1/2 bg-slate-100 relative p-6 flex items-center justify-center">
             <span className="absolute top-4 left-4 bg-[#28a745] text-white text-xs font-bold px-3 py-1 uppercase rounded shadow-md z-10">
               KIT COMPLETO
             </span>
             <img src="/images/titansaw-img/1.webp" alt="Kit Completo" className="w-full h-auto rounded-lg shadow-sm" />
          </div>
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

/* =========================================================================
   8. REVIEWS
   ========================================================================= */
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

        {/* Featured Review Image */}
        <div className="mb-8">
          <img
            src="/images/titansaw-img/recensione-3.webp"
            alt="Recensioni clienti verificate"
            className="w-full rounded-xl shadow-lg border border-slate-200"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <img
              src="/images/titansaw-img/recensione-1.webp"
              alt="Foto recensione cliente"
              className="w-full h-40 object-cover rounded-lg border border-slate-200"
            />
          </div>
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
            <img
              src="/images/titansaw-img/recensione-2.webp"
              alt="Foto recensione cliente"
              className="w-full h-40 object-cover rounded-lg border border-slate-200"
            />
          </div>
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

/* =========================================================================
   9. HOW TO ORDER (UPDATED)
   ========================================================================= */
const HowToOrder: React.FC = () => {
  return (
    <section className="bg-slate-50 py-8 px-4 border-t border-slate-200">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-xl md:text-3xl font-black text-center mb-6 uppercase text-slate-900 leading-tight">
          COME ORDINARE IN <span className="text-[#28a745]">4 STEP</span>
        </h2>
        <div className="grid grid-cols-2 gap-3 md:gap-6">
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

/* =========================================================================
   10. ORDER FORM (UPDATED)
   ========================================================================= */
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
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Per favore, compila tutti i campi obbligatori");
      return;
    }
    setIsSubmitting(true);

    // Save data to sessionStorage for conversion tracking
    sessionStorage.setItem('ec_name', formData.name);
    sessionStorage.setItem('ec_phone', formData.phone);
    sessionStorage.setItem('ec_address', formData.address);
    sessionStorage.setItem('ec_value', '69.90');

    // Redirect to thank you page by country
    window.location.href = '/ty-it';
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
          <div className="absolute top-0 right-0 bg-slate-200 px-2 py-1 rounded-bl text-[10px] font-bold text-slate-500 flex items-center gap-1">
             <Lock className="w-3 h-3" /> SSL SECURE
          </div>

          <div className="flex justify-between items-center border-b border-slate-200 pb-3 mb-4">
            <div className="flex items-center gap-3">
              <img src="/images/titansaw-img/1.webp" className="w-12 h-12 rounded object-cover border border-slate-300" alt="Product" />
              <div>
                <p className="font-bold text-sm text-slate-900 leading-tight">TitanSaw Pro X (Kit Titanio)</p>
                <p className="text-[10px] text-[#dc3545] font-bold">Sconto -50% Applicato</p>
              </div>
            </div>
            <div className="text-xl font-black text-[#28a745]">€89,90</div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="text-[11px] font-bold text-slate-600 uppercase">Nome e Cognome *</label>
              <input 
                type="text" name="name" required placeholder="Es: Mario Rossi"
                className="w-full p-2.5 border border-slate-300 rounded focus:border-[#28a745] focus:ring-1 focus:ring-[#28a745] outline-none shadow-sm placeholder-slate-400"
                value={formData.name} onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-600 uppercase">Telefono (Cellulare) *</label>
              <input 
                type="tel" name="phone" required placeholder="Es: 333 1234567"
                className="w-full p-2.5 border border-slate-300 rounded focus:border-[#28a745] focus:ring-1 focus:ring-[#28a745] outline-none shadow-sm placeholder-slate-400"
                value={formData.phone} onChange={handleChange}
              />
            </div>

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

            <div className="bg-green-50 border border-green-200 rounded p-3 flex items-center justify-between mt-2 cursor-pointer">
              <div className="flex items-center gap-2">
                 <div className="w-5 h-5 bg-[#28a745] rounded-full flex items-center justify-center shadow-sm">
                    <Check className="w-3 h-3 text-white stroke-[3]" />
                 </div>
                 <span className="text-sm font-bold text-slate-900">Pagamento alla Consegna</span>
              </div>
              <Banknote className="w-5 h-5 text-green-700" />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 bg-[#28a745] hover:bg-[#218838] text-white text-xl md:text-2xl font-black py-4 rounded-xl shadow-[0_4px_0_#1e7e34] uppercase tracking-wide transition-all active:scale-95 disabled:opacity-70 flex justify-center items-center gap-2 active:shadow-none active:translate-y-1"
            >
              {isSubmitting ? 'ATTENDI...' : 'COMPLETA ORDINE'} <Truck className="w-6 h-6" />
            </button>
            
          </form>

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

/* =========================================================================
   11. FAQ
   ========================================================================= */
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

/* =========================================================================
   12. STICKY BAR
   ========================================================================= */
interface StickyBarProps {
  onCtaClick: () => void;
}

const StickyBar: React.FC<StickyBarProps> = ({ onCtaClick }) => {
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 shadow-[0_-5px_20px_rgba(0,0,0,0.15)] p-2 z-50 md:hidden pb-safe">
      <div className="flex items-center gap-2">
        <div className="flex-1 pl-1">
          <div className="text-[10px] text-red-600 font-black uppercase flex items-center mb-0.5 animate-pulse">
            <Clock className="w-3 h-3 mr-1" /> SCADE TRA: {formatTime(timeLeft)}
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-[#dc3545]">€89,90</span>
            <span className="text-xs text-slate-400 line-through">€199</span>
          </div>
        </div>
        <button 
          onClick={onCtaClick}
          className="flex-1 bg-[#27ae60] text-white font-black text-lg py-3 px-2 rounded shadow-lg animate-pulse-fast uppercase leading-none"
        >
          ORDINA ORA
          <span className="block text-[10px] font-medium opacity-80 mt-1">PAGHI ALLA CONSEGNA</span>
        </button>
      </div>
    </div>
  );
};

/* =========================================================================
   MAIN PAGE COMPONENT
   ========================================================================= */
export default function LandingPage() {
  const scrollToOrder = () => {
    const element = document.getElementById('order-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-24 md:pb-0">
      {/* Header */}
      <header className="bg-white py-4 px-4 md:px-8 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto max-w-6xl flex justify-between items-center">
          <h1 className="text-xl md:text-3xl font-black uppercase tracking-tighter text-slate-900 flex flex-col md:flex-row md:gap-2 leading-none">
            <span>TITANSAW</span> <span className="text-[#dc3545]">PRO X</span>
          </h1>
          <button 
            onClick={scrollToOrder}
            className="bg-[#28a745] hover:bg-[#218838] text-white font-bold py-2 px-6 rounded-full uppercase text-sm md:text-base tracking-wide shadow-md transition-transform active:scale-95"
          >
            ORDINA ORA
          </button>
        </div>
      </header>

      {/* Urgency Bar */}
      <div className="bg-[#fff3cd] text-[#856404] py-3 px-2 text-center text-sm md:text-base font-bold border-b border-[#ffeeba]">
        ⚠️ ATTENZIONE: SOLO 14 PEZZI RIMASTI AL PREZZO LANCIO
      </div>

      <main className="bg-[#f8f9fa]">
        <div className="bg-white shadow-xl min-h-screen">
          <Hero />
          
          <BenefitsList />

          {/* Offer Box */}
          <OfferSection onCtaClick={scrollToOrder} />

          <VisualFeatures />
          
          <Comparison />

          <QualifyingSection />
          
          <Bundle />

          <Reviews />

          <div id="order-form-section">
            <HowToOrder />
            <OrderForm />
          </div>

          <FAQ />

          {/* Press/Trust Logos */}
          <div className="bg-slate-100 py-6 text-center border-y border-slate-200">
            <div className="container mx-auto max-w-6xl">
              <p className="text-xs font-bold text-slate-400 uppercase mb-4">Eletto "Prodotto dell'anno" da:</p>
              <div className="flex flex-wrap justify-center gap-8 opacity-50 font-serif font-bold text-slate-600 grayscale text-lg md:text-2xl">
                <span>FaiDaTe Facile</span>
                <span>Giardinaggio.it</span>
                <span>BricolagePRO</span>
                <span className="hidden md:inline">Il Bosco</span>
              </div>
            </div>
          </div>

        </div>
      </main>

      <StickyBar onCtaClick={scrollToOrder} />
    </div>
  );
}
