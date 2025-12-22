'use client';

import React, { useState } from 'react';
import { Truck, Banknote } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import { PRICE_PROMO } from '../constants';

export const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });
  const [loading, setLoading] = useState(false);

  // Calculate total price
  const priceNum = parseFloat(PRICE_PROMO.replace(',', '.'));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.address) {
      alert("Per favore, compila tutti i campi obbligatori");
      return;
    }

    setLoading(true);

    // Save data to sessionStorage for conversion tracking
    sessionStorage.setItem('ec_name', formData.name);
    sessionStorage.setItem('ec_phone', formData.phone);
    sessionStorage.setItem('ec_address', formData.address);
    sessionStorage.setItem('ec_value', priceNum.toString());

    // TODO: Add network API call here when you have the network config
    // const NETWORK_CONFIG = {
    //   uid: 'YOUR_UID',
    //   key: 'YOUR_KEY',
    //   offer: 'YOUR_OFFER',
    //   lp: 'YOUR_LP',
    // };

    // Redirect to thank you page by country
    window.location.href = '/ty-it';
  };

  return (
    <div id="order-form" className="max-w-xl mx-auto bg-white border-4 border-red-600 rounded-xl shadow-2xl overflow-hidden my-8 scroll-mt-4">
      <div className="bg-red-600 p-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-white/10 skew-x-12 transform -translate-x-1/2"></div>
        <h3 className="text-white text-2xl md:text-3xl font-black uppercase tracking-wide relative z-10">Modulo d'Ordine</h3>
        <p className="text-yellow-300 font-bold uppercase text-sm relative z-10 flex items-center justify-center gap-2 mt-1">
           <Banknote className="w-4 h-4" /> Non serve la carta di credito
        </p>
      </div>

      <div className="p-6">
        <CountdownTimer />
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-800 font-bold mb-1 text-base">Nome e Cognome <span className="text-red-600">*</span></label>
            <input
              required
              type="text"
              name="name"
              placeholder="Es. Mario Rossi"
              className="w-full p-3 border-2 border-gray-300 rounded-lg text-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-gray-50 focus:bg-white"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-800 font-bold mb-1 text-base">Numero di Telefono <span className="text-red-600">*</span></label>
            <input
              required
              type="tel"
              name="phone"
              placeholder="Es. 340 1234567"
              className="w-full p-3 border-2 border-gray-300 rounded-lg text-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-gray-50 focus:bg-white"
              value={formData.phone}
              onChange={handleChange}
            />
            <p className="text-xs text-gray-500 mt-1 font-medium">Ti chiameremo per confermare la spedizione.</p>
          </div>

          <div>
            <label className="block text-gray-800 font-bold mb-1 text-base">Indirizzo Completo <span className="text-red-600">*</span></label>
            <textarea
              required
              name="address"
              rows={3}
              placeholder="Via, Numero Civico, Città, CAP"
              className="w-full p-3 border-2 border-gray-300 rounded-lg text-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-gray-50 focus:bg-white"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="bg-green-50 p-4 rounded-lg flex items-center gap-4 border-2 border-green-200 border-dashed">
             <div className="bg-white p-2 rounded-full shadow-sm">
                <Banknote className="w-8 h-8 text-green-600" />
             </div>
             <div className="flex-1">
                <p className="font-black text-gray-800 text-sm uppercase">Pagamento alla Consegna</p>
                <p className="text-xs text-gray-600 leading-tight">Paghi in contanti al corriere quando arriva il pacco. Zero rischi.</p>
             </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-2xl py-5 rounded-lg shadow-[0_4px_0_#991b1b] active:shadow-none active:translate-y-1 transition-all flex flex-col items-center justify-center gap-0 uppercase"
          >
            {loading ? 'Elaborazione...' : (
              <>
                <div className="flex items-center gap-2">
                   <span>COMPLETA L'ORDINE</span>
                   <Truck className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium opacity-80 normal-case">Clicca per confermare</span>
              </>
            )}
          </button>
          
        </form>
      </div>
    </div>
  );
};