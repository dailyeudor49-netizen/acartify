'use client';

import React, { useState, useEffect } from 'react';
import { Truck, Banknote } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import { PRICE_PROMO, CURRENCY } from '../constants';

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
      alert("Proszę wypełnić wszystkie wymagane pola");
      return;
    }

    setLoading(true);

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
          country: 'pl',
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

      // Only save conversion data and redirect if API call was successful
      if (response.ok) {
        // Save data to sessionStorage for conversion tracking
        sessionStorage.setItem('ec_name', formData.name);
        sessionStorage.setItem('ec_phone', formData.phone);
        sessionStorage.setItem('ec_address', formData.address);
        sessionStorage.setItem('ec_value', priceNum.toString());

        // If DOUBLE, set flag to skip Google Ads conversion
        if (result.message === 'DOUBLE') {
          sessionStorage.setItem('skipConversion', 'true');
        }

        // Redirect to thank you page
        window.location.href = '/ty-pl';
      } else {
        alert('Wystąpił błąd. Spróbuj ponownie.');
        setLoading(false);
      }

    } catch (error) {
      console.error('Network API error:', error);
      alert('Błąd połączenia. Spróbuj ponownie.');
      setLoading(false);
    }
  };

  return (
    <div id="order-form" className="max-w-xl mx-auto bg-white border-4 border-red-600 rounded-xl shadow-2xl overflow-hidden my-8 scroll-mt-4">
      <div className="bg-red-600 p-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-white/10 skew-x-12 transform -translate-x-1/2"></div>
        <h3 className="text-white text-2xl md:text-3xl font-black uppercase tracking-wide relative z-10">Formularz Zamówienia</h3>
        <p className="text-yellow-300 font-bold uppercase text-sm relative z-10 flex items-center justify-center gap-2 mt-1">
           <Banknote className="w-4 h-4" /> Karta kredytowa nie jest wymagana
        </p>
      </div>

      <div className="p-6">
        <CountdownTimer />

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Hidden input for fingerprint */}
          <input type="hidden" name="tmfp" />

          <div>
            <label className="block text-gray-800 font-bold mb-1 text-base">Imię i Nazwisko <span className="text-red-600">*</span></label>
            <input
              required
              type="text"
              name="name"
              placeholder="Np. Jan Kowalski"
              className="w-full p-3 border-2 border-gray-300 rounded-lg text-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-gray-50 focus:bg-white"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-800 font-bold mb-1 text-base">Numer Telefonu <span className="text-red-600">*</span></label>
            <input
              required
              type="tel"
              name="phone"
              placeholder="Np. 500 123 456"
              className="w-full p-3 border-2 border-gray-300 rounded-lg text-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-gray-50 focus:bg-white"
              value={formData.phone}
              onChange={handleChange}
            />
            <p className="text-xs text-gray-500 mt-1 font-medium">Zadzwonimy, aby potwierdzić wysyłkę.</p>
          </div>

          <div>
            <label className="block text-gray-800 font-bold mb-1 text-base">Pełny Adres <span className="text-red-600">*</span></label>
            <textarea
              required
              name="address"
              rows={3}
              placeholder="Ulica, Numer, Miasto, Kod Pocztowy"
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
                <p className="font-black text-gray-800 text-sm uppercase">Płatność przy Odbiorze</p>
                <p className="text-xs text-gray-600 leading-tight">Płacisz gotówką kurierowi, gdy dostaniesz paczkę. Zero ryzyka.</p>
             </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-2xl py-5 rounded-lg shadow-[0_4px_0_#991b1b] active:shadow-none active:translate-y-1 transition-all flex flex-col items-center justify-center gap-0 uppercase"
          >
            {loading ? 'Przetwarzanie...' : (
              <>
                <div className="flex items-center gap-2">
                   <span>ZŁÓŻ ZAMÓWIENIE</span>
                   <Truck className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium opacity-80 normal-case">Kliknij, aby potwierdzić</span>
              </>
            )}
          </button>

        </form>
      </div>
    </div>
  );
};
