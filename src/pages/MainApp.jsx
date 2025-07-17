import { useState } from "react";
import AudioWave from '../components/AudioWave';
import Loader from "../components/Loader";
import Logo from "../assets/zibani-logo.png"; 

import SideMenu from '../components/SideMenu';
import Mic from '../assets/icons/mic.svg';


import Play from '../assets/icons/play.svg';
import Pause from '../assets/icons/pause.svg';
import Repeat from '../assets/icons/repeat.svg';
import Next from '../assets/icons/next.svg';

import {NavLink} from 'react-router-dom';
const MainApp = () => {
  const [isLoaded, setIsLoaded] = useState(false);
   const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="app-container">
      {!isLoaded ? (
        <Loader onLoadingComplete={() => setIsLoaded(true)} />
      ) : (
        <div className="flex flex-col justify-start items-center w-screen h-[100dvh]  bg-[url('assets/wavy-bg-shade.svg')] bg-no-repeat bg-[position:20px_450px] bg-scroll bg-contain">
            <div className=" flex items-center justify-between w-full py-2 px-32 bg-white shadow-sm fixed top-0 left-0 z-50">
                <div>
                     <img src={Logo} alt="Zibani Logo" className="h-[54px] mb-6" />

                </div>

                <div className="flex items-center justify-center gap-x-4">
                    
                    <div className="pr-4 border-r border-gray-300">
                        <NavLink to="/">
                            <button className="nav-item">Logout</button>
                        </NavLink>
                    </div>

                    <SideMenu iconPosition="static"/>
                </div>
            </div>
            <div className="w-[50%] max-w-[900px] text-center flex flex-col items-center justify-center mt-30 mb-4">
                <h1 className="text-2xl font-bold">Welcome to smart, audio-first travel.</h1>
                <p className="text-xs text-gray-600">Experience Zambia through immersive audio guides.</p>

            </div>

            <div className="bg-gray-50 border border-gray-300 rounded-md w-[65%] h-[65dvh] flex items-center justify-center p-2 shadow-lg mt-2 gap-4">
                {/* Audio Player */}
                    <div className="flex flex-col items-center justify-center gap-4 w-1/2 h-full bg-white rounded-md p-6">
                        <div className="flex items-center justify-center rounded-full bg-primary-50 py-2 px-4 text-primary gap-x-2 w-fit">
                        <p className="text-sm font-semibold">Kabwe, Central Province</p>
                    </div>
                    <AudioWave isPlaying={isPlaying} size={48} />

                    <div className="bg-primary-50 p-4 rounded-full w-48 h-48 flex items-center justify-center">
                        <div className="bg-primary-50 rounded-full w-36 h-36 flex items-center justify-center">
                            <img src={Mic} alt="Microphone Icon" className="w-20 h-20" />
                        </div>
                    </div>

                    <div className="flex justify-between items-center w-fit mt-4 gap-2">
                        <button className="btn-primary-outlined rounded-full">
                            <img src={Repeat} alt="Repeat Icon" className="w-6 h-6" />
                            
                        </button>
                         <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="btn-primary rounded-full flex items-center justify-center gap-x-2"
                        >
                        {isPlaying ? (
                            <>
                            <img src={Pause} alt="Pause Icon" className="w-6 h-6" />
                            <span>Pause</span>
                            </>
                        ) : (
                            <>
                            <img src={Play} alt="Play Icon" className="w-6 h-6" />
                            <span>Play</span>
                            </>
                        )}
                        </button>
                        <button className="btn-primary-outlined rounded-full ">
                            <img src={Next} alt="Next Icon" className="w-6 h-6" />
                        </button>
                    </div>
                    
                </div>

                {/* Visual snapshots */}
                <div className="flex flex-col items-center justify-center gap-4 w-1/2 h-full bg-white rounded-md p-6">
                    <p className="text-sm text-gray-300 text-center">
                        No snapshots available yet.
                    </p>
                </div>
            </div>
          

      

            

        </div>
      )}
    </div>
  );
}

export default MainApp;