import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="bg-slate-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black text-center text-yellow-400 mb-10">
          Guarda cosa può fare
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-800 p-2 rounded-lg">
            <img src="https://picsum.photos/400/400?random=3" alt="Taglio tronco grande" className="w-full h-48 object-cover rounded mb-3" />
            <h3 className="font-bold text-lg text-center">Taglia tronchi da 20cm</h3>
          </div>
          <div className="bg-slate-800 p-2 rounded-lg">
             <img src="https://picsum.photos/400/400?random=4" alt="Potatura alta" className="w-full h-48 object-cover rounded mb-3" />
            <h3 className="font-bold text-lg text-center">Potatura facile</h3>
          </div>
          <div className="bg-slate-800 p-2 rounded-lg">
             <img src="https://picsum.photos/400/400?random=5" alt="Lavori di precisione" className="w-full h-48 object-cover rounded mb-3" />
            <h3 className="font-bold text-lg text-center">Fai da te e Bricolage</h3>
          </div>
          <div className="bg-slate-800 p-2 rounded-lg">
             <img src="https://picsum.photos/400/400?random=6" alt="Sicurezza totale" className="w-full h-48 object-cover rounded mb-3" />
            <h3 className="font-bold text-lg text-center">Sicurezza Totale</h3>
          </div>
        </div>
        
        <div className="mt-8 text-center bg-slate-800 p-4 rounded-lg border border-slate-700">
          <p className="text-lg font-semibold">
            🛡️ <span className="text-yellow-400 font-bold">Lubrificazione Automatica Inclusa:</span> Non devi nemmeno oliarla a mano. Fa tutto da sola.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;