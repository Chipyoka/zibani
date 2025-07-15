import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react'; // optional icon lib

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show when scroll > 300px
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-primary border-2 border-white hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition duration-300 ease-in-out"
          aria-label="Return to Top"
        >
          <ChevronUp className="w-8 h-8" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
