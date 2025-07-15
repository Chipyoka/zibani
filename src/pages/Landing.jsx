import {React} from 'react';
import {Link} from 'react-router-dom';
import Mic from '../assets/icons/mic.svg';
import Launch from '../assets/icons/launch.svg';
import AddHome from '../assets/icons/add-home.svg';

import Navbar from '../components/Navbar';
import KnowZeet from '../components/KnowZeet';

const Landing = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <Navbar />
           
           <div className="flex flex-col items-center justify-center text-center max-w-[800px] mt-36">
            <div className="flex items-center justify-center rounded-full bg-primary-50 py-2 px-4 text-primary gap-x-2 w-fit">
                <img src={Mic} alt="Descriptive Alt Text" />
                <p className="text-sm font-semibold">Location-aware audio guides</p>
            </div>
             <h1 className="text-7xl font-bold my-6 "><span className="text-primary">Every</span> Zambian Town Has a <span className="text-primary">story</span></h1>
            <p className="text-lg">A voice-guided journey through heritage, places, and people. Doesn’t matter where you are, listen while you travel !</p>

            <div className="buttons flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                <button className="btn-primary flex items-center justify-center rounded-full gap-x-2"><img src={Launch} alt="Launch Icon" /> Launch Zeet Now !</button>
                <button className="btn-primary-outlined flex items-center justify-center rounded-full gap-x-2"><img src={AddHome} alt="Add Home Icon" /> Add to home screen</button>
            </div>

           </div>

            <KnowZeet />
        </div>
    );
};

export default Landing;
