import {React} from 'react';
import {Link} from 'react-router-dom';
import Mic from '../assets/icons/mic.svg';
import Launch from '../assets/icons/launch.svg';
import AddHome from '../assets/icons/add-home.svg';

import Navbar from '../components/Navbar';
import KnowZibani from '../components/KnowZibani';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import OurStory from '../components/OurStory';
import FAQs from '../components/Faqs';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Landing = () => {

     // Set page title
    document.title = 'Your voice-guided travel app - Zibani';

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-full">
            <Navbar />
           
           <div className="flex flex-col items-center justify-center text-center max-w-[800px] mt-36">

            <div className="flex items-center justify-center rounded-full bg-primary-50 py-2 px-4 text-primary gap-x-2 w-fit">
                <img src={Mic} alt="Descriptive Alt Text" />
                <p className="text-sm font-semibold">Location-aware audio guides</p>
            </div>

             <h1 className="text-7xl font-bold my-6 "><span className="text-primary">Every</span> Zambian Town Has a <span className="text-primary">story</span></h1>
            <p className="text-lg">A voice-guided journey through heritage, places, and people. Doesn’t matter where you are, listen while you travel !</p>

            <div className="buttons flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                <button className="btn-primary flex items-center justify-center rounded-full gap-x-2"><img src={Launch} alt="Launch Icon" /> Launch Zibani Now !</button>
                <button className="btn-primary-outlined flex items-center justify-center rounded-full gap-x-2"><img src={AddHome} alt="Add Home Icon" /> Add to home screen</button>
            </div>

           </div>


           <section id="KnowZibani" className="min-h-screen  ">
                 <KnowZibani />
            </section>
           <section id="Features" className="min-h-screen  ">
               <Features />
            </section>
           <section id="HowItWorks" className="min-h-screen  ">
                <HowItWorks />
            </section>
           <section id="OurStory" className="min-h-screen  ">
                <OurStory />
            </section>
           <section id="FAQs" className="min-h-screen  ">
                <FAQs />
            </section>

           
            
            
            
            
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default Landing;
