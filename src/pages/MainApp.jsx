import { useState } from "react";
import Loader from "../components/Loader";

const MainApp = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="app-container">
      {!isLoaded ? (
        <Loader onLoadingComplete={() => setIsLoaded(true)} />
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1>Welcome</h1>
        </div>
      )}
    </div>
  );
}

export default MainApp;