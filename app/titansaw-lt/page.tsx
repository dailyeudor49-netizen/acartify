'use client';

import React, { useState, useEffect } from 'react';
import {
  ChevronLeft, ChevronRight, Gift, Zap, Feather, ShieldCheck,
  RefreshCw, BatteryCharging, Gauge, Check, X, Minus, Plus,
  Star, Truck, Lock, Award, Banknote, Clock, FileText, PhoneCall,
  Calendar, Flame, PlayCircle, HelpCircle, ChevronDown, ChevronUp,
  XCircle, CheckCircle, AlertOctagon
} from 'lucide-react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

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
          PJAUNA <span className="text-white bg-[#dc3545] px-2 rounded">80CM</span> RĄSTUS KAIP SVIESTĄ.
        </h1>
        <h2 className="text-lg md:text-2xl font-bold text-[#0056b3] mb-6 leading-tight">
          Benzininio pjūklo galia,<br/>
          <span className="text-slate-600 font-medium text-base md:text-xl">bet lengvas kaip plunksna (1.2kg).</span>
        </h2>
        <div className="max-w-lg mx-auto shadow-2xl rounded-2xl overflow-hidden mb-6 border-4 border-[#dc3545]">
            <div className="bg-[#dc3545] text-white py-3 px-2 flex flex-col items-center justify-center gap-1 animate-pulse leading-none border-b-2 border-red-800">
                <div className="flex items-center gap-2 mb-1">
                   <Gift className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                   <span className="font-black uppercase text-base md:text-xl tracking-tight text-yellow-300">RIBOTA PASIŪLA:</span>
                </div>
                <span className="font-bold uppercase text-xs md:text-sm tracking-wide text-center">
                  ĮSKAIČIUOTA: 2 TITANO GRANDINĖS + ŠARVUOTA MENTĖ + 2 AKUMULIATORIAI + LAGAMINAS + ĮKROVIKLIS
                </span>
            </div>
            <div className="relative bg-white group cursor-pointer">
                <div className="absolute top-4 left-4 z-10 bg-white/90 border-2 border-green-600 rounded px-3 py-1 shadow-lg">
                  <span className="text-xs font-black text-green-700 uppercase">2 Metų Garantija Lietuvoje</span>
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
              PJAUNA 80CM RĄSTUS
            </h3>
            <p className="text-slate-600 font-medium text-base leading-tight mt-1">
              Dėka grandinės iš <span className="bg-yellow-200 px-1 border border-yellow-300 rounded-sm text-slate-900 font-bold">CHIRURGINIO TITANO</span>.
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
              PATS GALANDA SAVE
            </h3>
            <p className="text-slate-600 font-medium text-base leading-tight mt-1">
              Kuo daugiau pjauna, tuo aštresnė mentė. <span className="bg-yellow-200 px-1 border border-yellow-300 rounded-sm text-slate-900 font-bold">NULINĖ PRIEŽIŪRA</span>.
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
              GALIA LYGI 52cc BENZININIAM
            </h3>
            <p className="text-slate-600 font-medium text-base leading-tight mt-1">
              Magnetinis variklis išskiria <span className="bg-yellow-200 px-1 border border-yellow-300 rounded-sm text-slate-900 font-bold">4.000 APS./MIN</span>.
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
              TRUKMĖ 8 VALANDOS (2 AKUMULIATORIAI)
            </h3>
            <p className="text-slate-600 font-medium text-base leading-tight mt-1">
              Dėka naujų <span className="bg-yellow-200 px-1 border border-yellow-300 rounded-sm text-slate-900 font-bold">LITIO-KOBALTO (EV)</span> elementų.
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
              NEĮMANOMA SUSIŽEISTI
            </h3>
            <p className="text-slate-600 font-medium text-base leading-tight mt-1">
              Dėka <span className="bg-yellow-200 px-1 border border-yellow-300 rounded-sm text-slate-900 font-bold">SAFELOCK™ BIOMETRINIO</span> lustų.
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
              LENGVIAUSIAS (1.2 KG)
            </h3>
            <p className="text-slate-600 font-medium text-base leading-tight mt-1">
              Naudoji viena ranka. <span className="bg-yellow-200 px-1 border border-yellow-300 rounded-sm text-slate-900 font-bold">JOKIO NUOVARGIO</span>.
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
  const today = new Date().toLocaleDateString('lt-LT', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <section className="bg-white py-10 px-4 text-center border-t border-slate-200">
      <div className="container mx-auto max-w-xl">
        <div className="mb-6 space-y-2">
           <div className="inline-flex items-center gap-1 bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold uppercase animate-pulse">
              <Calendar className="w-3 h-3" /> Dienos Pasiūla: {today}
           </div>
        </div>

        <div className="space-y-4 mb-6">
           <div className="relative bg-slate-100 border border-slate-300 rounded-xl p-4 opacity-70 grayscale select-none">
              <div className="absolute inset-0 bg-slate-200/50 z-10 flex items-center justify-center rounded-xl">
                 <span className="bg-slate-600 text-white font-black text-xl px-4 py-2 uppercase -rotate-3 border-4 border-white shadow-xl">
                   ❌ IŠPARDUOTA
                 </span>
              </div>
              <div className="flex justify-between items-center">
                 <div className="text-left">
                    <span className="font-bold text-slate-500 block">Tik Pjūklas</span>
                    <span className="text-xs text-slate-400">Be papildomų priedų</span>
                 </div>
                 <div className="font-bold text-slate-500 text-xl">€79,90</div>
              </div>
           </div>

           <div className="relative bg-[#f8f9fa] rounded-2xl border-4 border-[#28a745] p-6 shadow-2xl overflow-hidden transform scale-105 z-20">
              <div className="absolute top-0 right-0 bg-[#dc3545] text-white text-xs font-black px-4 py-1.5 rounded-bl-xl shadow-sm z-10">
                -50% NUOLAIDA
              </div>

              <div className="text-left mb-2">
                 <span className="bg-[#28a745] text-white text-xs font-black px-2 py-0.5 rounded uppercase">Rekomenduojama</span>
                 <h3 className="font-black text-2xl text-slate-900 uppercase leading-none mt-2">TITANSAW PRO X <br/><span className="text-[#dc3545] text-lg">(TITANO KOMPLEKTAS)</span></h3>

                 <div className="mt-4 bg-white border border-slate-200 rounded-lg p-3 shadow-sm">
                    <ul className="text-left space-y-1.5">
                      <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <Check className="w-4 h-4 text-[#28a745]" /> 2x Ličio 24V Akumuliatoriai
                      </li>
                      <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <Check className="w-4 h-4 text-[#28a745]" /> 2x Titano Grandinės
                      </li>
                      <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <Check className="w-4 h-4 text-[#28a745]" /> 1x Šarvuota Mentė + Lagaminas
                      </li>
                      <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <Check className="w-4 h-4 text-[#28a745]" /> Greitas Įkroviklis Įskaičiuotas
                      </li>
                    </ul>
                 </div>
              </div>

              <div className="flex justify-center items-end gap-3 mb-1 mt-4 border-t border-dashed border-slate-300 pt-4">
                  <span className="text-slate-400 text-2xl font-bold line-through decoration-red-500 decoration-2">€129</span>
                  <span className="text-6xl font-black text-[#dc3545] tracking-tighter leading-none">€64</span>
              </div>

              <p className="text-sm font-bold text-green-700 uppercase tracking-widest mb-4 bg-green-50 inline-block px-3 py-1 rounded-full border border-green-100">
                 Mokėjimas Pristatymo Metu
              </p>

              <div className="grid grid-cols-2 gap-2 mb-4">
                 <div className="bg-white border border-slate-200 rounded p-2 flex items-center justify-center gap-1 shadow-sm">
                    <Truck className="w-4 h-4 text-[#28a745]" />
                    <span className="text-[10px] md:text-xs font-bold text-slate-600 uppercase">Pristatymas 24/48h</span>
                 </div>
                 <div className="bg-white border border-slate-200 rounded p-2 flex items-center justify-center gap-1 shadow-sm">
                    <ShieldCheck className="w-4 h-4 text-[#28a745]" />
                    <span className="text-[10px] md:text-xs font-bold text-slate-600 uppercase">Garantija 2 Metai</span>
                 </div>
              </div>

              <button
                onClick={onCtaClick}
                className="w-full bg-[#28a745] hover:bg-[#218838] text-white text-2xl md:text-3xl font-black py-4 rounded-xl shadow-[0_5px_0_#1e7e34] active:shadow-none active:translate-y-1 transition-all uppercase flex items-center justify-center gap-2 animate-pulse-fast ring-4 ring-green-100"
              >
                UŽSISAKYTI DABAR
              </button>
           </div>
        </div>

        <div className="mb-6 bg-white p-3 rounded-lg border border-red-100 shadow-inner">
          <div className="flex justify-between text-xs font-bold uppercase mb-1">
            <span className="text-slate-500">Sandėlio Atsargos:</span>
            <span className="text-red-600 flex items-center gap-1"><Flame className="w-3 h-3 fill-red-600" /> Baigiasi</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2.5">
            <div className="bg-red-500 h-2.5 rounded-full w-[85%] animate-pulse"></div>
          </div>
          <p className="text-[10px] text-left mt-1 text-slate-400">Daugiau nei 140 žmonių šiuo metu žiūri šią pasiūlą.</p>
        </div>

        <p className="text-xs text-center mt-3 text-slate-500 font-medium">
          <ShieldCheck className="w-3 h-3 inline mr-1" />
          Išbandyk be rizikos: 30 dienų pinigų grąžinimo garantija.
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
            TECHNOLOGIJA, KEIČIANTI <br/><span className="text-yellow-400">TAVO GYVENIMĄ</span>
          </h2>
          <p className="text-slate-300 text-lg">
            Išsprendėme visas senų benzininių pjūklų problemas. Štai kodėl TitanSaw Pro X yra geresnis.
          </p>
        </div>

        <div className="space-y-12">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2 relative group cursor-pointer aspect-square">
               <div className="absolute top-4 left-4 right-4 text-center z-20">
                  <span className="bg-red-600 text-white text-sm md:text-lg font-black px-4 py-2 uppercase shadow-lg transform -skew-x-6 inline-block border-2 border-white">
                    NUVERČIA MEDŽIUS PER 15 SEKUNDŽIŲ
                  </span>
               </div>
               <video src="/images/titansaw-img/velocita-4000rpm.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover rounded-xl border-4 border-slate-700 shadow-2xl" />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-2xl font-black text-yellow-400 uppercase mb-2">
                GREITIS 4.000 APS./MIN = GRYNA GALIA
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Pažiūrėk, kaip lengvai nuverčia šį medį. Paslaptis – greitis: variklis generuoja <strong className="text-white">4.000 apsisukimų per minutę</strong>, kurie virsta neprilygstama pjovimo jėga.
                <br/><br/>
                Dėka itin aštraus <strong className="text-white">CHIRURGINIO TITANO</strong> grandinės, mentė įeina į medieną be pastangų. <span className="text-white font-bold bg-red-600/20 px-1">Pjauna viską, ką sutinka</span> (ąžuolą, alyvą, buką) kaip karštą sviestą.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6">
            <div className="w-full md:w-1/2 relative group cursor-pointer aspect-square">
               <div className="absolute top-4 left-4 right-4 text-center z-20">
                  <span className="bg-[#28a745] text-white text-sm md:text-lg font-black px-4 py-2 uppercase shadow-lg transform -skew-x-6 inline-block border-2 border-white">
                    LENGVIAUSIAS: 1.2 KG
                  </span>
               </div>
               <video src="/images/titansaw-img/ti-basta-una-mano.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover rounded-xl border-4 border-slate-700 shadow-2xl" />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-2xl font-black text-green-400 uppercase mb-2">
                PAKANKA VIENOS RANKOS
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Pamiršk nugaros skausmą ir drebančias rankas po 5 minučių. Su <strong>1.2 kg</strong> svorio, tai kaip naudoti atsuktuvo. Naudoji viena ranka, o kita – perkelk šakas. <span className="text-white font-bold">Idealiai tinka ir vyresniems nei 60 metų.</span>
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2 relative group cursor-pointer aspect-square">
               <div className="absolute top-4 left-4 right-4 text-center z-20">
                  <span className="bg-[#0056b3] text-white text-sm md:text-lg font-black px-4 py-2 uppercase shadow-lg transform -skew-x-6 inline-block border-2 border-white">
                    BIOMETRINIS UŽRAKTAS 0.01s
                  </span>
               </div>
               <video src="/images/titansaw-img/safelock-biometrico.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover rounded-xl border-4 border-slate-700 shadow-2xl" />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-2xl font-black text-blue-400 uppercase mb-2">
                "SAFELOCK™" BIOMETRINIS
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Tavo žmona bijo, kad susižeisi? Ramus. Išmanusis lustas atpažįsta saugų rankenos laikymą. <strong className="text-white">Neįmanoma, kad paleistų atsitiktinai</strong> (net jei nukris ar paliestų vaikai). Jei atleidi pirštą, variklio stabdys sustabdo mentę per <strong>0.01 sekundės</strong>.
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
          SENAS PJŪKLAS VS <br/><span className="text-[#dc3545]">TITANSAW PRO</span>
        </h3>
        <div className="overflow-hidden rounded-xl border-2 border-slate-200 shadow-xl">
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr>
                <th className="bg-slate-50 p-2 w-[30%] border-b border-slate-200"></th>
                <th className="bg-slate-100 p-2 w-[35%] text-slate-500 font-bold border-b border-slate-200 text-xs md:text-sm uppercase leading-tight align-bottom pb-4">
                  Benzininis<br/>Pjūklas (52cc)
                </th>
                <th className="bg-[#28a745] p-2 w-[35%] text-white font-black border-b border-green-600 text-sm md:text-lg uppercase align-bottom pb-4 relative">
                  <div className="w-full flex justify-center mb-1">
                     <span className="bg-yellow-400 text-black text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded shadow-sm uppercase tracking-wide">
                       EVOLIUCIJA
                     </span>
                  </div>
                  TitanSaw Pro
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 font-bold text-slate-700 bg-slate-50 border-b border-slate-100 text-xs md:text-base">Variklis</td>
                <td className="p-3 text-center text-slate-500 border-b border-slate-100 bg-slate-50">
                  Benzinas/Mišinys<br/><span className="text-[10px] md:text-xs text-red-500 font-bold">(Smirdi)</span>
                </td>
                <td className="p-3 text-center font-black text-[#28a745] border-b border-slate-100 bg-green-50">
                  Litio-Kobaltas EV<br/><span className="text-[10px] md:text-xs text-green-700 font-bold">(52cc Galia)</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-700 bg-slate-50 border-b border-slate-100 text-xs md:text-base">Paleidimas</td>
                <td className="p-3 text-center text-slate-500 border-b border-slate-100 bg-slate-50">
                  Rankiniu Būdu<br/><span className="text-[10px] md:text-xs text-red-500 font-bold">(Varginantis)</span>
                </td>
                <td className="p-3 text-center font-black text-[#28a745] border-b border-slate-100 bg-green-50">
                  SafeLock™ Bio<br/><span className="text-[10px] md:text-xs text-green-700 font-bold">(100% Saugus)</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-700 bg-slate-50 border-b border-slate-100 text-xs md:text-base">Svoris</td>
                <td className="p-3 text-center text-slate-500 border-b border-slate-100 bg-slate-50">
                  7 kg<br/><span className="text-[10px] md:text-xs text-red-500 font-bold">(Skauda Nugarą)</span>
                </td>
                <td className="p-3 text-center font-black text-[#28a745] border-b border-slate-100 bg-green-50">
                  1.2 kg<br/><span className="text-[10px] md:text-xs text-green-700 font-bold">(Plunksna)</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-700 bg-slate-50 border-b border-slate-100 text-xs md:text-base">Priežiūra</td>
                <td className="p-3 text-center text-slate-500 border-b border-slate-100 bg-slate-50">
                  Žvakės, Galandimas<br/><span className="text-[10px] md:text-xs text-red-500 font-bold">(Brangus)</span>
                </td>
                <td className="p-3 text-center font-black text-[#28a745] border-b border-slate-100 bg-green-50">
                  JOKIOS<br/><span className="text-[10px] md:text-xs text-green-700 font-bold">(Pats Galandasi)</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-700 bg-slate-50 border-b border-slate-100 text-xs md:text-base">Triukšmas</td>
                <td className="p-3 text-center text-slate-500 border-b border-slate-100 bg-slate-50">
                  Pragaro<br/><span className="text-[10px] md:text-xs text-red-500 font-bold">(Reikia Ausinių)</span>
                </td>
                <td className="p-3 text-center font-black text-[#28a745] border-b border-slate-100 bg-green-50">
                  TYLUS<br/><span className="text-[10px] md:text-xs text-green-700 font-bold">(Daugiabučiams)</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-700 bg-slate-50 text-xs md:text-base bg-yellow-50">Pjovimas</td>
                <td className="p-3 text-center text-slate-500 bg-slate-50 bg-yellow-50">
                  Lėtas<br/><span className="text-[10px] md:text-xs text-red-500 font-bold">(Užstringa)</span>
                </td>
                <td className="p-3 text-center font-black text-[#28a745] bg-green-50 bg-yellow-50 border-2 border-[#28a745] relative">
                  LAZERIS<br/><span className="text-[10px] md:text-xs text-green-700 font-bold">(Titanas)</span>
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
            TAI... AR TAI TINKA TAU?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="font-black text-xl text-red-800 uppercase leading-none">NEPIRK, JEI...</h3>
                </div>
                <ul className="space-y-3 text-red-900 font-medium">
                <li className="flex items-start gap-2">
                    <span className="font-bold">•</span> Esi profesionalus miškininkas, kuris turi kirsti miškus 8 valandas per dieną.
                </li>
                <li className="flex items-start gap-2">
                    <span className="font-bold">•</span> Ieškoti sunkaus ir triukšmingo įrankio, kad "jaustum" nuovargį.
                </li>
                </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-xl border border-green-100 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <h3 className="font-black text-xl text-green-800 uppercase leading-none">PIRK DABAR, JEI...</h3>
                </div>
                <ul className="space-y-3 text-green-900 font-medium">
                <li className="flex items-start gap-2">
                    <span className="font-bold">•</span> Turi sodą, alyvmedžių sodą arba židinį ir nori būti savarankiškas.
                </li>
                <li className="flex items-start gap-2">
                    <span className="font-bold">•</span> Nori užbaigti darbą per pusę laiko ir mėgautis likusia dienos dalimi.
                </li>
                <li className="flex items-start gap-2">
                    <span className="font-bold">•</span> Nori saugaus įrankio, kuris nesulaužys nugaros.
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
            KAS YRA DĖŽĖJE?
          </h2>
          <div className="flex items-center justify-center gap-2 text-[#dc3545] font-black text-lg md:text-xl uppercase bg-red-50 inline-block px-4 py-2 rounded-lg border border-red-100">
            <Gift className="w-6 h-6" />
            MEGA KOMPLEKTAS "VISKAS ĮSKAIČIUOTA" (VERTĖ €99 NEMOKAMAI)
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl border-2 border-[#28a745] overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-slate-100 relative p-6 flex items-center justify-center">
             <span className="absolute top-4 left-4 bg-[#28a745] text-white text-xs font-bold px-3 py-1 uppercase rounded shadow-md z-10">
               PILNAS KOMPLEKTAS
             </span>
             <img src="/images/titansaw-img/1.webp" alt="Pilnas Komplektas" className="w-full h-auto rounded-lg shadow-sm" />
          </div>
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center bg-white">
            <h3 className="font-bold text-lg text-slate-500 mb-4 uppercase tracking-wide">Štai ką gausi namuose:</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 border-b border-slate-100 pb-2">
                <div className="bg-green-100 p-1 rounded-full"><Plus className="w-4 h-4 text-green-600" /></div>
                <div className="flex-1">
                  <span className="font-black text-slate-900 text-lg">1x Pjūklas TitanSaw</span>
                  <p className="text-xs text-slate-500">Naujos kartos įrenginio korpusas</p>
                </div>
              </li>
              <li className="flex items-center gap-3 border-b border-slate-100 pb-2">
                <div className="bg-green-100 p-1 rounded-full"><Plus className="w-4 h-4 text-green-600" /></div>
                <div className="flex-1">
                  <span className="font-black text-slate-900 text-lg">2x Ličio 24V Akumuliatoriai</span>
                  <span className="ml-2 bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">8 VAL. TRUKMĖ</span>
                  <p className="text-xs text-slate-500">Dviguba neribota autonomija</p>
                </div>
              </li>
              <li className="flex items-center gap-3 border-b border-slate-100 pb-2">
                <div className="bg-green-100 p-1 rounded-full"><Plus className="w-4 h-4 text-green-600" /></div>
                <div className="flex-1">
                  <span className="font-black text-slate-900 text-lg">2x Titano Grandinės</span>
                  <p className="text-xs text-slate-500">Super aštrūs. Niekada nepraranda aštrių.</p>
                </div>
              </li>
              <li className="flex items-center gap-3 border-b border-slate-100 pb-2">
                <div className="bg-green-100 p-1 rounded-full"><Plus className="w-4 h-4 text-green-600" /></div>
                <div className="flex-1">
                  <span className="font-black text-slate-900 text-lg">1x "Šarvuota" Kreipimo Mentė</span>
                  <p className="text-xs text-slate-500">Grūdintas plienas anti-sukimosi. <strong className="text-slate-700">Niekada nesulaužomas.</strong></p>
                </div>
              </li>
              <li className="flex items-center gap-3 border-b border-slate-100 pb-2">
                <div className="bg-green-100 p-1 rounded-full"><Plus className="w-4 h-4 text-green-600" /></div>
                <div className="flex-1">
                  <span className="font-black text-slate-900 text-lg">1x Kietas Lagaminas</span>
                  <p className="text-xs text-slate-500">Atsparus smūgiams saugiam transportavimui</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-green-100 p-1 rounded-full"><Plus className="w-4 h-4 text-green-600" /></div>
                <div className="flex-1">
                  <span className="font-black text-slate-900 text-lg">1x Akumuliatoriaus Įkroviklis</span>
                  <p className="text-xs text-slate-500">Greitas įkrovimas</p>
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
          KĄ SAKO KLIENTAI?
        </h2>
        <div className="flex justify-center items-center gap-2 mb-8">
           <div className="flex text-yellow-400">
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
          </div>
          <span className="font-bold text-slate-600">4.9/5 (Patikrinti Atsiliepimai)</span>
        </div>

        {/* Featured Review Image */}
        <div className="mb-8">
          <img
            src="/images/titansaw-img/recensione-3.webp"
            alt="Patikrinti klientų atsiliepimai"
            className="w-full rounded-xl shadow-lg border border-slate-200"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">J</div>
                 <div>
                   <h4 className="font-bold text-slate-900">Jonas P.</h4>
                   <p className="text-xs text-green-600 font-bold uppercase flex items-center gap-1">✅ Patvirtintas Pirkimas</p>
                 </div>
               </div>
               <span className="text-xs text-slate-400">Prieš 2 dienas</span>
            </div>
            <p className="text-slate-700 italic mb-4">
              "Netikėjau, kol neišbandžiau. Pjoviau malkų židiniui 2 valandas be nuovargio. Galia tokiam mažam daiktui yra neįtikėtina."
            </p>
            <img
              src="/images/titansaw-img/recensione-1.webp"
              alt="Kliento atsiliepimo nuotrauka"
              className="w-full h-40 object-cover rounded-lg border border-slate-200"
            />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">A</div>
                 <div>
                   <h4 className="font-bold text-slate-900">Antanas K.</h4>
                   <p className="text-xs text-green-600 font-bold uppercase flex items-center gap-1">✅ Patvirtintas Pirkimas</p>
                 </div>
               </div>
               <span className="text-xs text-slate-400">Vakar</span>
            </div>
            <p className="text-slate-700 italic mb-4">
              "Atvyko per tiksliai 24 valandas. Sumokėjau kurjeriui, kas labai patogu. Naudoju alyvmedžių sodinukų genėjimui, veikia puikiai. Rekomenduoju."
            </p>
            <img
              src="/images/titansaw-img/recensione-2.webp"
              alt="Kliento atsiliepimo nuotrauka"
              className="w-full h-40 object-cover rounded-lg border border-slate-200"
            />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">P</div>
                 <div>
                   <h4 className="font-bold text-slate-900">Petras V.</h4>
                   <p className="text-xs text-green-600 font-bold uppercase flex items-center gap-1">✅ Patvirtintas Pirkimas</p>
                 </div>
               </div>
               <span className="text-xs text-slate-400">Prieš 3 dienas</span>
            </div>
            <p className="text-slate-700 italic">
              "Man 65 metai ir benzininio pjūklo nebegalėjau įjungti dėl peties. Šis tiesiog reikia paspausti mygtuką. Sugrąžino man nepriklausomybę sode. Ačiū."
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">V</div>
                 <div>
                   <h4 className="font-bold text-slate-900">Vytautas B.</h4>
                   <p className="text-xs text-green-600 font-bold uppercase flex items-center gap-1">✅ Patvirtintas Pirkimas</p>
                 </div>
               </div>
               <span className="text-xs text-slate-400">Prieš 5 dienas</span>
            </div>
            <p className="text-slate-700 italic">
              "Komplektas pilnas su viskuo. Akumuliatoriai tikrai ilgai veikia. Naudojau padėklų pjovimui ir nei detalės nepajudėjo. Labai greitas pristatymas."
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
          KAIP UŽSAKYTI <span className="text-[#28a745]">4 ŽINGSNIAIS</span>
        </h2>
        <div className="grid grid-cols-2 gap-3 md:gap-6">
          <div className="bg-white p-3 md:p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col items-center text-center">
             <div className="absolute -right-2 -top-2 text-6xl font-black text-slate-100 z-0">1</div>
             <div className="bg-[#e6f4ea] p-2 rounded-full z-10 mb-2">
               <FileText className="w-5 h-5 md:w-6 md:h-6 text-[#28a745]" />
             </div>
             <div className="z-10">
               <h3 className="font-black text-sm md:text-lg text-slate-900 uppercase mb-1">Užpildyk formą</h3>
               <p className="text-slate-500 text-xs md:text-sm leading-tight">Palik savo duomenis žemiau.</p>
             </div>
          </div>
          <div className="bg-white p-3 md:p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col items-center text-center">
             <div className="absolute -right-2 -top-2 text-6xl font-black text-slate-100 z-0">2</div>
             <div className="bg-[#e6f4ea] p-2 rounded-full z-10 mb-2">
               <PhoneCall className="w-5 h-5 md:w-6 md:h-6 text-[#28a745]" />
             </div>
             <div className="z-10">
               <h3 className="font-black text-sm md:text-lg text-slate-900 uppercase mb-1">Perskambinsime</h3>
               <p className="text-slate-500 text-xs md:text-sm leading-tight">Patvirtinsime užsakymą žodžiu.</p>
             </div>
          </div>
          <div className="bg-white p-3 md:p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col items-center text-center">
             <div className="absolute -right-2 -top-2 text-6xl font-black text-slate-100 z-0">3</div>
             <div className="bg-[#e6f4ea] p-2 rounded-full z-10 mb-2">
               <Truck className="w-5 h-5 md:w-6 md:h-6 text-[#28a745]" />
             </div>
             <div className="z-10">
               <h3 className="font-black text-sm md:text-lg text-slate-900 uppercase mb-1">Greitas Pristatymas</h3>
               <p className="text-slate-500 text-xs md:text-sm leading-tight">Atvyksta per 24/48 valandas į namus.</p>
             </div>
          </div>
          <div className="bg-white p-3 md:p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col items-center text-center">
             <div className="absolute -right-2 -top-2 text-6xl font-black text-slate-100 z-0">4</div>
             <div className="bg-[#e6f4ea] p-2 rounded-full z-10 mb-2">
               <Banknote className="w-5 h-5 md:w-6 md:h-6 text-[#28a745]" />
             </div>
             <div className="z-10">
               <h3 className="font-black text-sm md:text-lg text-slate-900 uppercase mb-1">Mokėjimas pristatymo metu</h3>
               <p className="text-slate-500 text-xs md:text-sm leading-tight">Moki grynais kurjeriui.</p>
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

  // Load fingerprint script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://offers.uncappednetwork.com/forms/tmfp/';
    script.crossOrigin = 'anonymous';
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Prašome užpildyti visus privalomus laukus");
      return;
    }
    setIsSubmitting(true);

    // Save data to sessionStorage for conversion tracking
    // Clear any previous conversion flags first
    sessionStorage.removeItem('gg_conversion_tracked');
    sessionStorage.setItem('ec_name', formData.name);
    sessionStorage.setItem('ec_phone', formData.phone);
    sessionStorage.setItem('ec_address', formData.address);
    sessionStorage.setItem('ec_value', '64');
    sessionStorage.setItem('conversion_pending', 'true');

    try {
      // Get fingerprint from hidden input (populated by network script)
      const tmfpInput = document.querySelector('input[name="tmfp"]') as HTMLInputElement;
      const fingerprint = tmfpInput?.value || '';

      // Get UTM parameters from URL
      const urlParams = new URLSearchParams(window.location.search);
      const utmParams: Record<string, string> = {};
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'subid', 'subid2', 'subid3', 'subid4', 'pubid'].forEach(param => {
        const value = urlParams.get(param);
        if (value) utmParams[param] = value;
      });

      // Send to our API proxy (avoids CORS issues)
      const response = await fetch('/api/network-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product: 'titansaw',
          country: 'lt',
          name: formData.name,
          tel: formData.phone,
          address: formData.address,
          tmfp: fingerprint,
          ua: navigator.userAgent,
          utmParams,
        }),
      });

      const result = await response.json();
      console.log('Network API response:', result);

      // If DOUBLE, set flag to skip Google Ads conversion
      if (result.message === 'DOUBLE') {
        sessionStorage.setItem('skipConversion', 'true');
      }

    } catch (error) {
      console.error('Network API error:', error);
    }

    // Redirect to thank you page by country
    window.location.href = '/ty-lt';
  };

  if (isSuccess) {
    return (
      <section className="bg-green-600 py-12 text-white text-center rounded-xl mx-4 my-8 shadow-2xl">
        <div className="bg-white text-slate-900 rounded-2xl p-8 mx-auto max-w-sm shadow-inner">
          <Check className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-3xl font-black mb-2 text-green-700 uppercase">AČIŪ!</h2>
          <p className="font-bold mb-4">Jūsų užsakymas patvirtintas.</p>
          <p className="text-sm text-slate-600">Mūsų operatorius netrukus susisieks su jumis.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-8 px-4 border-t border-slate-200">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-black uppercase text-slate-900">
            UŽPILDYK FORMĄ
          </h3>
          <p className="text-sm text-slate-500">Moki tik pristatymo metu. Greitas Pristatymas 24/48h.</p>
        </div>

        <div className="bg-[#f8f9fa] rounded-xl border-2 border-slate-200 p-4 md:p-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-slate-200 px-2 py-1 rounded-bl text-[10px] font-bold text-slate-500 flex items-center gap-1">
             <Lock className="w-3 h-3" /> SSL SAUGUS
          </div>

          <div className="flex justify-between items-center border-b border-slate-200 pb-3 mb-4">
            <div className="flex items-center gap-3">
              <img src="/images/titansaw-img/1.webp" className="w-12 h-12 rounded object-cover border border-slate-300" alt="Produktas" />
              <div>
                <p className="font-bold text-sm text-slate-900 leading-tight">TitanSaw Pro X (Titano Komplektas)</p>
                <p className="text-[10px] text-[#dc3545] font-bold">-50% Nuolaida Pritaikyta</p>
              </div>
            </div>
            <div className="text-xl font-black text-[#28a745]">€64</div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Hidden input for fingerprint */}
            <input type="hidden" name="tmfp" />

            <div>
              <label className="text-[11px] font-bold text-slate-600 uppercase">Vardas ir Pavardė *</label>
              <input
                type="text" name="name" required placeholder="Pvz: Jonas Jonaitis"
                className="w-full p-2.5 border border-slate-300 rounded focus:border-[#28a745] focus:ring-1 focus:ring-[#28a745] outline-none shadow-sm placeholder-slate-400"
                value={formData.name} onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-600 uppercase">Telefonas (Mobilus) *</label>
              <input
                type="tel" name="phone" required placeholder="Pvz: +370 600 12345"
                className="w-full p-2.5 border border-slate-300 rounded focus:border-[#28a745] focus:ring-1 focus:ring-[#28a745] outline-none shadow-sm placeholder-slate-400"
                value={formData.phone} onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-600 uppercase">Pilnas Adresas *</label>
              <textarea
                name="address" required rows={2}
                placeholder="Gatvė, Namo Nr., Pašto kodas, Miestas"
                className="w-full p-2.5 border border-slate-300 rounded focus:border-[#28a745] focus:ring-1 focus:ring-[#28a745] outline-none shadow-sm placeholder-slate-400 resize-none"
                value={formData.address} onChange={handleChange}
              />
              <p className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                <Lock className="w-3 h-3" /> Jūsų duomenys saugomi ir naudojami tik pristatymui.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded p-3 flex items-center justify-between mt-2 cursor-pointer">
              <div className="flex items-center gap-2">
                 <div className="w-5 h-5 bg-[#28a745] rounded-full flex items-center justify-center shadow-sm">
                    <Check className="w-3 h-3 text-white stroke-[3]" />
                 </div>
                 <span className="text-sm font-bold text-slate-900">Mokėjimas Pristatymo Metu</span>
              </div>
              <Banknote className="w-5 h-5 text-green-700" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 bg-[#28a745] hover:bg-[#218838] text-white text-xl md:text-2xl font-black py-4 rounded-xl shadow-[0_4px_0_#1e7e34] uppercase tracking-wide transition-all active:scale-95 disabled:opacity-70 flex justify-center items-center gap-2 active:shadow-none active:translate-y-1"
            >
              {isSubmitting ? 'PALAUKITE...' : 'UŽBAIGTI UŽSAKYMĄ'} <Truck className="w-6 h-6" />
            </button>

          </form>

          <div className="mt-3 pt-2 border-t border-slate-200 text-center">
             <p className="text-[10px] text-slate-500 font-medium">
                🛡️ Garantija <strong>30 Dienų Pinigų Grąžinimas</strong> įskaičiuota.
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
            ABEJONĖS AR KLAUSIMAI?
          </h2>
          <p className="text-slate-500">Čia atsakymai į dažniausiai užduodamus mūsų klientų klausimus.</p>
        </div>

        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 shadow-sm">
          <FAQItem
            question="Kiek laiko veikia akumuliatoriai?"
            answer="Komplekte esantys akumuliatoriai yra labai didelės talpos. Kiekvienas akumuliatorius garantuoja iki 8 VALANDŲ darbo. Turint du komplekte, gali dirbti ištisas dienas be sustojimo."
          />
          <FAQItem
            question="Kur rasti atsargines dalis ir mentes?"
            answer="Dėmesio: tai nėra komercinis pjūklas iš prekybos centro. Jis turi specialią TITANO grandinę, sukurtą tarnauti metų metus be aštrių praradimo. Kreipimo mentė yra iš grūdinto plieno 'Šarvuota': neįmanoma sulaužyti ar sulenkti. Jei vis dėlto reikėtų atsarginių dalių (ar atsargos), jau dovanojame antrą grandinę komplekte. Būsimiems pirkimams, visa galite rasti mūsų svetainėje."
          />
          <FAQItem
            question="Ar tikrai toks galingas, kaip sakote?"
            answer="Taip, tai galios monstras. Dėka Brushless variklio ir Titano grandinės, nuverčia rąstus iki 80cm skersmens be jokių pastangų. Niekada nesustoja, net su kiečiausiu ir išdžiovusiu medienu."
          />
          <FAQItem
            question="Ar tikrai galiu mokėti pristatymo metu?"
            answer="Žinoma! Žinome, kad pasitikėti internetu sunku. Todėl siūlome mokėjimą grynais tiesiogiai kurjeriui, kai pristato paketą. Jokios rizikos jums."
          />
          <FAQItem
            question="Jei nepatiks, ar galiu grąžinti?"
            answer="Turi 30 dienų garantiją 'Pinigų Grąžinimas'. Jei produktas nepatinka, grąžini mums ir grąžiname pinigus. Be klausimų."
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
            <Clock className="w-3 h-3 mr-1" /> BAIGIASI PO: {formatTime(timeLeft)}
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-[#dc3545]">€64</span>
            <span className="text-xs text-slate-400 line-through">€129</span>
          </div>
        </div>
        <button
          onClick={onCtaClick}
          className="flex-1 bg-[#27ae60] text-white font-black text-lg py-3 px-2 rounded shadow-lg animate-pulse-fast uppercase leading-none"
        >
          UŽSAKYTI DABAR
          <span className="block text-[10px] font-medium opacity-80 mt-1">MOKI PRISTATYMO METU</span>
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

  // Google Ads PageView Tracking
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17806346250';
      document.head.appendChild(script);

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function() { window.dataLayer!.push(arguments); };
        window.gtag('js', new Date());
        window.gtag('config', 'AW-17806346250');
      };
    }
  }, []);

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
            UŽSAKYTI DABAR
          </button>
        </div>
      </header>

      {/* Urgency Bar */}
      <div className="bg-[#fff3cd] text-[#856404] py-3 px-2 text-center text-sm md:text-base font-bold border-b border-[#ffeeba]">
        ⚠️ DĖMESIO: TIK 14 VIENETŲ LIKO AKCIJOS KAINA
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
              <p className="text-xs font-bold text-slate-400 uppercase mb-4">Išrinktas "Metų produktu" iš:</p>
              <div className="flex flex-wrap justify-center gap-8 opacity-50 font-serif font-bold text-slate-600 grayscale text-lg md:text-2xl">
                <span>Sodo Meistrų</span>
                <span>Medžio Darbai</span>
                <span>Namelis.lt</span>
                <span className="hidden md:inline">Miškas & Sodas</span>
              </div>
            </div>
          </div>

        </div>
      </main>

      <StickyBar onCtaClick={scrollToOrder} />
    </div>
  );
}
