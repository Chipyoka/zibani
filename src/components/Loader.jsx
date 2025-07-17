import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import CarSvg from "../assets/car.svg"; // Adjust import path as needed

const Loader = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Start exit animation
          setTimeout(() => {
            setIsVisible(false);
            onLoadingComplete();
          }, 1000);
          return 100;
        }
        return prev + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50 overflow-hidden">
          {/* Car container - centered vertically and horizontally */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ x: "-100vw" }} // Start completely off-screen left
            animate={{
              x: loadingProgress < 20 
                ? "0vw" // Move to center
                : loadingProgress > 80 
                  ? "100vw" // Move off-screen right
                  : "0vw", // Stay centered
              transition: {
                x: {
                  duration: loadingProgress < 20 ? 0.8 : loadingProgress > 80 ? 0.8 : 0,
                  ease: "easeInOut"
                }
              }
            }}
          >
            <img 
              src={CarSvg} 
              alt="Loading car" 
              className="w-36 h-auto" // Adjust size as needed
            />
          </motion.div>

          {/* Spinner and progress container at bottom */}
          <motion.div
            className="absolute bottom-8 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: loadingProgress >= 20 && loadingProgress <= 80 ? 1 : 0,
              transition: { duration: 0.3 }
            }}
          >
            {/* Spinner */}
            <motion.div
              animate={{ 
                rotate: 360,
                transition: {
                  rotate: {
                    repeat: Infinity,
                    duration: 1,
                    ease: "linear"
                  }
                }
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837"
                  stroke="var(--ztpink)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>

            {/* Progress text */}
            <div className="text-primary text-sm">
              {loadingProgress}%
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Loader;