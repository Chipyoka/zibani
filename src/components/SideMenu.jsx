import { useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

import Menu from '../assets/icons/menu.svg'; 
import Process from '../assets/icons/process.svg'; 
import HomeScreen from '../assets/icons/home-screen.svg'; 
import Location from '../assets/icons/location.svg'; 
import Register from '../assets/icons/register.svg'; 
import Voice from '../assets/icons/voice.svg'; 
import Notification from '../assets/icons/notifications.svg'; 
import Coffee from '../assets/icons/coffee.svg'; 

const SideMenu = ({ iconPosition = 'static' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger button - can be positioned by parent */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`${iconPosition === 'fixed' ? 'fixed top-4 right-4' : ''} z-30 p-2 rounded-full bg-gray-50 hover:bg-gray-200 transition-all`}
      >
        <img src={Menu} className="w-6 h-6" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity"
        />
      )}

      {/* Side menu (always fixed position) */}
      <div className={`
        fixed top-0 right-0 z-50 h-full w-96 bg-white shadow-xl
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>


        {/* Close button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
       

        {/* Menu content */}
        <div className="p-6 pt-6 overflow-y-auto h-[calc(100vh-64px)]">

            {/* last synced */}
           <div className="px-4 py-2 mb-4 text-xs border rounded-sm border-gray-200 text-sm py-4 text-left bg-gray-100">
                <p>Last synced: <span className="font-semibold">2 minutes ago</span></p>
           </div>

          <nav className="flex flex-col space-y-4 text-left">
            <div className="flex items-center gap-2 mb-4 py-2 px-4 hover:bg-gray-100 cursor-pointer">
                {/* Insert Icon */}
                <img src={Process} alt="background sync" className="w-6 h-6" />

                <div className="text-gray-500 ml-4">
                    <p className="text-sm font-semibold">Enable background mode</p>
                    <p className="text-xs font-light">Allow app to run in the background</p>
                </div>

                {/* <ChevronRight className="ml-2 w-6 h-6 text-gray-400" /> */}
            </div>
            <div className="flex items-center gap-2 mb-4 py-2 px-4 hover:bg-gray-100 cursor-pointer">
                {/* Insert Icon */}
                <img src={Location} alt="location" className="w-6 h-6" />

                <div className="text-gray-500 ml-4">
                    <p className="text-sm font-semibold">Where am I?</p>
                    <p className="text-xs font-light">Get narrations of current town.</p>
                </div>

                {/* <ChevronRight className="w-8 h-8 text-gray-400" /> */}
            </div>
            <div className="flex items-center gap-2 mb-4 py-2 px-4 hover:bg-gray-100 cursor-pointer">
                {/* Insert Icon */}
                <img src={HomeScreen} alt="home screen" className="w-6 h-6" />

                <div className="text-gray-500 ml-4">
                    <p className="text-sm font-semibold">Add to home screen</p>
                    <p className="text-xs font-light">Install app to home screen for easy access</p>
                </div>

                {/* <ChevronRight className="w-8 h-8 text-gray-400" /> */}
            </div>
            <div className="flex items-center gap-2 mb-4 py-2 px-4 hover:bg-gray-100 cursor-pointer">
                {/* Insert Icon */}
                <img src={Register} alt="register" className="w-6 h-6" />

                <div className="text-gray-500 ml-4">
                    <p className="text-sm font-semibold">Register for updates</p>
                    <p className="text-xs font-light">Sign up with email to receive updates</p>
                </div>

                {/* <ChevronRight className="w-8 h-8 text-gray-400" /> */}
            </div>
            <div className="flex items-center gap-2 mb-4 py-2 px-4 hover:bg-gray-100 cursor-pointer">
                {/* Insert Icon */}
                <img src={Voice} alt="narration voice" className="w-6 h-6" />

                <div className="text-gray-500 ml-4">
                    <p className="text-sm font-semibold">Change voice</p>
                    <p className="text-xs font-light">You can select Male or Female narrator</p>
                </div>

                {/* <ChevronRight className="w-8 h-8 text-gray-400" /> */}
            </div>
            <div className="flex items-center gap-2 mb-4 py-2 px-4 hover:bg-gray-100 cursor-pointer">
                {/* Insert Icon */}
                <img src={Notification} alt="push notifications" className="w-6 h-6" />

                <div className="text-gray-500 ml-4">
                    <p className="text-sm font-semibold">Enable push notifications</p>
                    <p className="text-xs font-light">Allow the app to send you notifications</p>
                </div>

                {/* <ChevronRight className="w-8 h-8 text-gray-400" /> */}
            </div>
          
          </nav>

        

           {/* footer */}
      
            <div className="mt-6 text-gray-500 border-t border-gray-200 p-4">
                <p className="text-xs text-left">
                    <b>Zibani</b> is currently free for use, to support the developers, you can make a generous donation through the button below. ❤
                </p>

                <button className="btn-primary-outlined my-6 rounded-full w-full flex items-center justify-center gap-x-2"> <img src={Coffee} alt="Buy me a coffee" className="inline-block mr-2" />Buy me coffee</button>
                <p className="text-xs">Version 1.0.0 | © {new Date().getFullYear()} Zibani </p>


            </div>
         
        </div>
      </div>
    </>
  );
};

export default SideMenu;