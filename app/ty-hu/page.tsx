'use client';

import React, { useState, useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// Country configuration
const COUNTRY_CONFIG = {
  code: 'HU',
  currency: 'HUF',
  lang: {
    title: 'Köszönjük a rendelését!',
    subtitle: 'Rendelését sikeresen fogadtuk.',
    orderCode: 'Rendelésszám',
    payment: 'Utánvétes fizetés',
    paymentDesc: 'Készpénzben fizet a futárnak',
    shipping: 'Gyors szállítás',
    shippingDesc: 'Szállítás 24/48 órán belül',
    returns: '30 napos visszaküldés',
    returnsDesc: 'Teljes visszatérítés, ha nem elégedett',
    warranty: '2 év garancia',
    warrantyDesc: 'Minden termékre',
    callInfo: 'Hamarosan felhívjuk',
    callDesc: 'Munkatársunk felveszi Önnel a kapcsolatot a szállítási adatok megerősítéséhez.',
    support: 'Segítségre van szüksége?',
    backHome: 'Vissza a főoldalra',
  }
};

// SHA-256 hash function for Enhanced Conversions
async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message.toLowerCase().trim());
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export default function ThankYouPage() {
  const [orderCode, setOrderCode] = useState('');

  useEffect(() => {
    // Generate order code
    const stored = sessionStorage.getItem('orderCode');
    if (stored) {
      setOrderCode(stored);
    } else {
      const newCode = Math.floor(100000 + Math.random() * 900000).toString();
      sessionStorage.setItem('orderCode', newCode);
      setOrderCode(newCode);
    }

    // Google Ads Conversion Tracking
    const alreadyTracked = sessionStorage.getItem('gg_conversion_tracked');
    const skipConversion = sessionStorage.getItem('skipConversion');

    // Skip conversion if it's a DOUBLE from network
    if (skipConversion === 'true') {
      console.log('[Google Ads] Skipping conversion - DOUBLE lead from network');
      sessionStorage.removeItem('skipConversion');
      return;
    }

    if (typeof window !== 'undefined' && !alreadyTracked) {
      // IMMEDIATELY set flag to prevent duplicate tracking (race condition fix)
      sessionStorage.setItem('gg_conversion_tracked', 'true');

      const transactionId = sessionStorage.getItem('orderCode') || Math.floor(100000 + Math.random() * 900000).toString();

      // Get Enhanced Conversions data from sessionStorage
      const ecPhone = sessionStorage.getItem('ec_phone') || '';
      const ecAddress = sessionStorage.getItem('ec_address') || '';
      const ecValue = parseFloat(sessionStorage.getItem('ec_value') || '0');

      // Google Ads Conversion ID and Label for Hungary
      const GOOGLE_ADS_CONVERSION_ID = 'AW-17806346250';
      const GOOGLE_ADS_CONVERSION_LABEL = 'UXJpCOnjstUbEIqQ3apC';

      // Only track if value > 0
      if (ecValue > 0) {
        // Load gtag script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_CONVERSION_ID}`;
        document.head.appendChild(script);

        script.onload = async () => {
          window.dataLayer = window.dataLayer || [];
          window.gtag = function() { window.dataLayer!.push(arguments); };
          window.gtag('js', new Date());

          // Configure gtag (without automatic page_view to avoid duplicate conversions)
          window.gtag('config', GOOGLE_ADS_CONVERSION_ID, {
            'send_page_view': false
          });

          // Prepare Enhanced Conversions user_data with hashed values
          const userData: Record<string, unknown> = {};
          if (ecPhone) {
            const normalizedPhone = ecPhone.replace(/[\s\-\(\)]/g, '');
            userData.phone_number = await sha256(normalizedPhone);
          }
          if (ecAddress) {
            userData.address = {
              street: await sha256(ecAddress)
            };
          }

          // Track Purchase Conversion with Enhanced Conversions
          window.gtag('event', 'conversion', {
            'send_to': `${GOOGLE_ADS_CONVERSION_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`,
            'value': ecValue,
            'currency': COUNTRY_CONFIG.currency,
            'transaction_id': transactionId,
            'user_data': userData
          });

          // Clean up EC data
          sessionStorage.removeItem('ec_name');
          sessionStorage.removeItem('ec_phone');
          sessionStorage.removeItem('ec_address');
          sessionStorage.removeItem('ec_value');

          console.log('[Google Ads] Purchase conversion tracked:', {
            value: ecValue,
            currency: COUNTRY_CONFIG.currency,
            transaction_id: transactionId,
            enhanced_conversions: !!Object.keys(userData).length
          });
        };
      } else {
        console.log('[Google Ads] Conversion not tracked - ID not configured or value is 0');
      }
    }
  }, []);

  return (
    <div className="ty-container" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #166534 0%, #14532d 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div className="ty-box" style={{
        background: 'white',
        borderRadius: '24px',
        padding: '3rem',
        maxWidth: '550px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <style>{`
          @media (max-width: 640px) {
            .ty-box { padding: 1.5rem !important; margin: 0 !important; border-radius: 16px !important; }
            .ty-container { padding: 0.75rem !important; }
          }
        `}</style>
        <div style={{
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem',
          fontSize: '2.5rem',
          color: 'white'
        }}>
          ✓
        </div>

        <h1 style={{
          fontSize: '2rem',
          fontWeight: 800,
          color: '#111827',
          marginBottom: '0.5rem'
        }}>
          {COUNTRY_CONFIG.lang.title}
        </h1>

        <p style={{
          color: '#6b7280',
          fontSize: '1rem',
          marginBottom: '1.5rem'
        }}>
          {COUNTRY_CONFIG.lang.subtitle}
        </p>

        <div style={{
          background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)',
          borderRadius: '12px',
          padding: '1.25rem',
          marginBottom: '1.5rem',
          border: '1px solid #FCD34D'
        }}>
          <div style={{ fontSize: '0.875rem', color: '#92400e', marginBottom: '0.25rem' }}>{COUNTRY_CONFIG.lang.orderCode}</div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#B45309', letterSpacing: '2px' }}>{orderCode}</div>
        </div>

        <div style={{
          background: '#F8FAFC',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '1.5rem',
          textAlign: 'left'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: '32px', height: '32px', background: '#16a34a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.75rem' }}>Ft</div>
            <div>
              <div style={{ fontWeight: 600, color: '#1E293B', fontSize: '0.95rem' }}>{COUNTRY_CONFIG.lang.payment}</div>
              <div style={{ color: '#64748b', fontSize: '0.85rem' }}>{COUNTRY_CONFIG.lang.paymentDesc}</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: '32px', height: '32px', background: '#3B82F6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1rem' }}>📦</div>
            <div>
              <div style={{ fontWeight: 600, color: '#1E293B', fontSize: '0.95rem' }}>{COUNTRY_CONFIG.lang.shipping}</div>
              <div style={{ color: '#64748b', fontSize: '0.85rem' }}>{COUNTRY_CONFIG.lang.shippingDesc}</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: '32px', height: '32px', background: '#8B5CF6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1rem' }}>↺</div>
            <div>
              <div style={{ fontWeight: 600, color: '#1E293B', fontSize: '0.95rem' }}>{COUNTRY_CONFIG.lang.returns}</div>
              <div style={{ color: '#64748b', fontSize: '0.85rem' }}>{COUNTRY_CONFIG.lang.returnsDesc}</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '32px', height: '32px', background: '#F59E0B', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1rem' }}>★</div>
            <div>
              <div style={{ fontWeight: 600, color: '#1E293B', fontSize: '0.95rem' }}>{COUNTRY_CONFIG.lang.warranty}</div>
              <div style={{ color: '#64748b', fontSize: '0.85rem' }}>{COUNTRY_CONFIG.lang.warrantyDesc}</div>
            </div>
          </div>
        </div>

        <div style={{
          background: '#ECFDF5',
          borderRadius: '12px',
          padding: '1rem',
          marginBottom: '1.5rem',
          border: '1px solid #A7F3D0'
        }}>
          <div style={{ fontSize: '0.9rem', color: '#065F46', fontWeight: 600, marginBottom: '0.25rem' }}>📞 {COUNTRY_CONFIG.lang.callInfo}</div>
          <div style={{ fontSize: '0.85rem', color: '#047857' }}>{COUNTRY_CONFIG.lang.callDesc}</div>
        </div>

        <div style={{
          background: '#F1F5F9',
          borderRadius: '12px',
          padding: '1rem',
          marginBottom: '2rem'
        }}>
          <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.25rem' }}>{COUNTRY_CONFIG.lang.support}</div>
          <a href="mailto:info@acartify.com" style={{ color: '#16a34a', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>info@acartify.com</a>
        </div>

        <a href="/" style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '12px',
          fontSize: '1rem',
          fontWeight: 600,
          textDecoration: 'none'
        }}>
          {COUNTRY_CONFIG.lang.backHome}
        </a>
      </div>
    </div>
  );
}
