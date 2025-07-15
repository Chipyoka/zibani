import useConsentStore from '../store/useConsentStore';

const CookieConsent = () => {
  const { consent, setConsent } = useConsentStore();

  if (consent !== null) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[var(--ztblack-2)] text-white px-4 py-5 z-50 shadow-lg">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-sm text-left w-[70%]">
          Zibani uses cookies to improve your experience and understand usage patterns. Do you consent to the use of cookies?
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => setConsent('yes')}
            className="btn-primary rounded-full text-sm transition"
          >
            Yes, I agree
          </button>
          <button
            onClick={() => setConsent('no')}
            className="btn-primary-outlined rounded-full text-sm transition"
          >
            No, thanks
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
