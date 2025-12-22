import React from 'react';
import { PlayCircle } from 'lucide-react';

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
          
          {/* Feature 1 - POWER / RPM / TITANIUM */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2 relative group cursor-pointer aspect-square">
               {/* Play Button */}
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/40 rounded-full p-4 border-2 border-white z-10 group-hover:scale-110 transition-transform">
                  <PlayCircle className="w-12 h-12 text-white fill-white/20" />
               </div>
               
               {/* Specific Value Badge */}
               <div className="absolute top-4 left-4 right-4 text-center">
                  <span className="bg-red-600 text-white text-sm md:text-lg font-black px-4 py-2 uppercase shadow-lg transform -skew-x-6 inline-block border-2 border-white">
                    ABBATTE ALBERI IN 15 SECONDI
                  </span>
               </div>

               {/* 1080x1080 Image (GIF Simulation) */}
               <img src="https://picsum.photos/1080/1080?random=10" alt="Taglio grande albero con facilità" className="w-full h-full object-cover rounded-xl border-4 border-slate-700 shadow-2xl opacity-90" />
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

          {/* Feature 2 - Weight & Ease */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6">
            <div className="w-full md:w-1/2 relative group cursor-pointer aspect-square">
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/40 rounded-full p-4 border-2 border-white z-10 group-hover:scale-110 transition-transform">
                  <PlayCircle className="w-12 h-12 text-white fill-white/20" />
               </div>

               {/* Specific Value Badge */}
               <div className="absolute top-4 left-4 right-4 text-center">
                  <span className="bg-[#28a745] text-white text-sm md:text-lg font-black px-4 py-2 uppercase shadow-lg transform -skew-x-6 inline-block border-2 border-white">
                    LEGGERISSIMA: 1.2 KG
                  </span>
               </div>

               {/* 1080x1080 Image */}
               <img src="https://picsum.photos/1080/1080?random=11" alt="Uso con una mano" className="w-full h-full object-cover rounded-xl border-4 border-slate-700 shadow-2xl opacity-90" />
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

          {/* Feature 3 - Safety - Biometric */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2 relative group cursor-pointer aspect-square">
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/40 rounded-full p-4 border-2 border-white z-10 group-hover:scale-110 transition-transform">
                  <PlayCircle className="w-12 h-12 text-white fill-white/20" />
               </div>

               {/* Specific Value Badge */}
               <div className="absolute top-4 left-4 right-4 text-center">
                  <span className="bg-[#0056b3] text-white text-sm md:text-lg font-black px-4 py-2 uppercase shadow-lg transform -skew-x-6 inline-block border-2 border-white">
                    BLOCCO BIOMETRICO 0.01s
                  </span>
               </div>

               {/* 1080x1080 Image */}
               <img src="https://picsum.photos/1080/1080?random=12" alt="Sicurezza" className="w-full h-full object-cover rounded-xl border-4 border-slate-700 shadow-2xl opacity-90" />
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

export default VisualFeatures;