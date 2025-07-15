import { create } from 'zustand';

const useConsentStore = create((set) => ({
  consent: localStorage.getItem('cookieConsent') || null,
  setConsent: (value) => {
    localStorage.setItem('cookieConsent', value);
    set({ consent: value });
  },
}));

export default useConsentStore;
