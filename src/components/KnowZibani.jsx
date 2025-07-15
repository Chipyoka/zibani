import {React} from 'react';
import Question from '../assets/icons/question.svg';
import Doodle from '../assets/car-doodle-w.png';

const KnowZibani = () => {
    return (
        <div className="  flex flex-col items-center justify-center float-bg w-screen h-[160dvh] bg-[url('assets/wavy-bg-orange.svg')] bg-no-repeat bg-center bg-scroll bg-cover mt-8">

            

           <div className="text-white text-left max-w-[900px] h-fit mx-auto mt-20 pt-20 ">

                <div className="flex items-center justify-center rounded-full bg-[#FF7152] py-2 px-4 text-white gap-x-2 w-fit">
                    <img src={Question} alt="Descriptive Alt Text" />
                    <p className="text-sm font-semibold">What is ZIBANI?</p>
                </div>

                <h1 className="text-5xl font-semibold my-6 w-[70%]">Let Zambia speak to you as you travel.</h1>
                <p>
                    Built for Zambia’s roads, it uses offline voice storytelling and GPS awareness powered by AI to bring travelers closer to the country’s traditions, 
                    landmarks, and regional identities. From local sayings to historical facts, ZIBANI helps ensure our stories move with us, protecting what makes Zambia unique, 
                    even in the most remote areas.
                </p>

                <div className="mt-12">
                    <img src={Doodle} alt="a white car doodle" width="400px"/>
                </div>
           </div>
        </div>
    );
}

export default KnowZibani;
