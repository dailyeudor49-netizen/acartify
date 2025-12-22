// Google Ads Configuration by Country
// Format: 'country_code': { conversionId: 'AW-XXXXXXXXX', conversionLabel: 'XXXXXXXXXXXXXX', currency: 'XXX' }
// Example: 'hr': { conversionId: 'AW-123456789', conversionLabel: 'AbCdEfGhIjKlMnOp', currency: 'EUR' }

export interface GoogleAdsCountryConfig {
  conversionId: string;
  conversionLabel: string;
  currency: string;
}

export const GOOGLE_ADS_BY_COUNTRY: Record<string, GoogleAdsCountryConfig> = {
  // Hungary
  'hu': { conversionId: 'AW-17806346250', conversionLabel: 'UXJpCOnjstUbEIqQ3apC', currency: 'HUF' },
  // Poland
  'pl': { conversionId: 'AW-17806346250', conversionLabel: 'x-9zCKj5wNUbEIqQ3apC', currency: 'PLN' },
  // Czech Republic
  'cz': { conversionId: 'AW-17806346250', conversionLabel: '5gc8CK2EwdUbEIqQ3apC', currency: 'CZK' },
  // Slovakia
  'sk': { conversionId: 'AW-17806346250', conversionLabel: 'u0wACMyLwdUbEIqQ3apC', currency: 'EUR' },
  // Lithuania
  'lt': { conversionId: 'AW-17806346250', conversionLabel: 'NbCPCJebwdUbEIqQ3apC', currency: 'EUR' },
  // Italy (same conversion ID, different label for IT campaigns)
  'it': { conversionId: 'AW-17806346250', conversionLabel: 'AW17806346250_IT', currency: 'EUR' },
};

/**
 * Extract country code from pathname
 * Landing pages: /gg-productname-it -> 'it'
 * Thank you pages: /ty-it -> 'it'
 * Product landing pages: /lithiumpro-hu -> 'hu'
 */
export function getCountryFromPath(pathname: string): string | null {
  // Match the last segment after the last hyphen
  const match = pathname.match(/-([a-z]{2})$/i);
  return match ? match[1].toLowerCase() : null;
}

/**
 * Check if the current path is a Google Ads landing page
 * Includes: /gg-*, /lithiumpro-*, /titansaw-*
 */
export function isGoogleAdsLanding(pathname: string): boolean {
  return pathname.startsWith('/gg-') ||
         pathname.startsWith('/lithiumpro-') ||
         pathname.startsWith('/titansaw-');
}

/**
 * Check if the current path is a Google Ads thank you page (starts with /ty-)
 */
export function isGoogleAdsThankYou(pathname: string): boolean {
  return pathname.startsWith('/ty-');
}

/**
 * Get Google Ads config for a specific country
 */
export function getGoogleAdsConfig(countryCode: string): GoogleAdsCountryConfig | null {
  return GOOGLE_ADS_BY_COUNTRY[countryCode.toLowerCase()] || null;
}

/**
 * Get the primary conversion ID (first one in the config, used for gtag initialization)
 */
export function getPrimaryConversionId(): string | null {
  const countries = Object.keys(GOOGLE_ADS_BY_COUNTRY);
  if (countries.length === 0) return null;
  return GOOGLE_ADS_BY_COUNTRY[countries[0]].conversionId;
}

/**
 * Get all unique conversion IDs (for loading multiple gtag configs if needed)
 */
export function getAllConversionIds(): string[] {
  const ids = new Set<string>();
  Object.values(GOOGLE_ADS_BY_COUNTRY).forEach(config => {
    ids.add(config.conversionId);
  });
  return Array.from(ids);
}
