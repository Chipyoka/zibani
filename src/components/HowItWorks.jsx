import Workflow from '../assets/icons/workflow.svg';
import Launch from '../assets/icons/launch.svg';
import How1 from '../assets/how-step-01.png';
import How2 from '../assets/how-step-02.png';   
import How3 from '../assets/how-step-03.png';

const HowItWorks = () => { 
    return (
        <div className="   flex flex-col items-start justify-center w-screen h-[210dvh] bg-[url('assets/wavy-bg-black.svg')] bg-no-repeat bg-top bg-scroll bg-cover mt-8">

            

           <div className="justify-center items-center flex flex-col text-white text-center max-w-[900px] h-fit mx-auto h-[90%]   ">

                <div className="flex items-center justify-center rounded-full bg-primary-50 py-2 px-4 text-primary gap-x-2 w-fit">
                    <img src={Workflow} alt="Descriptive Alt Text" />
                    <p className="text-sm font-semibold">How it works</p>
                </div>

                <h1 className="text-5xl font-semibold my-6 w-[90%]">The <span className="text-primary">3-steps</span> into an immersive road trip.</h1>
                <p className="text-lg">
                    Using AI-powered GPS and offline technology, <b>ZIBANI</b> speaks to you based on where you are or what you want to learn.
                </p>

           </div>

           <section className="flex flex-col items-center justify-center mt-6    px-20 py-6 w-full max-w-full">
            <div className="row mx-6 flex items-center justify-center gap-6 mt-6">

                {/* card one */}
                <div className="card card-hover-float gradient-border-card w-[400px] h-[520px]">
                    <div className="card-content text-left">
                        <div className="flex items-center justify-center h-16 w-16 bg-primary rounded-full mb-4">
                            <p className="font-semibold text-3xl text-center text-white">01</p>
                        </div>

                        <h2 className="text-primary text-3xl font-semibold mb-2">Open Anywhere in Zambia</h2>
                        <p className="text-sm font-light text-left text-white">
                            Instantly detects your current area using GPS. No route planning needed.
                        </p>

                        <div className="mt-6 w-full flex items-center justify-center"><img src={How1} alt="How it works step 1" className="w-full" /></div>
                    </div>
                </div>

                {/* card two */}
                <div className="card card-hover-float gradient-border-card w-[400px] h-[520px]">
                    <div className="card-content text-left">
                        <div className="flex items-center justify-center h-16 w-16 bg-primary rounded-full mb-4">
                            <p className="font-semibold text-3xl text-center text-white">02</p>
                        </div>

                        <h2 className="text-primary text-3xl font-semibold mb-2">Hear Local Stories, Instantly</h2>
                        <p className="text-sm font-light text-left text-white">
                            Plays short narrated insights about the current town’s history, people, and culture.
                        </p>

                        <div className="mt-6 w-full flex items-center justify-center"><img src={How2} alt="How it works step 2" className="w-full" /></div>
                    </div>
                </div>

                {/* card three */}
                <div className="card card-hover-float gradient-border-card w-[400px] h-[520px]">
                    <div className="card-content text-left">
                        <div className="flex items-center justify-center h-16 w-16 bg-primary rounded-full mb-4">
                            <p className="font-semibold text-3xl text-center text-white">03</p>
                        </div>

                        <h2 className="text-primary text-3xl font-semibold mb-2">Travel, Learn, and Enjoy</h2>
                        <p className="text-sm font-light text-left text-white">
                            Sit back and listen. The app works offline, plays in the background.
                        </p>

                        <div className="mt-6 w-full flex items-center justify-center"><img src={How3} alt="How it works step 3" className="w-full" /></div>
                    </div>
                </div>
            </div>

            <div className="buttons flex flex-col md:flex-row items-center justify-center gap-4 mt-20">
                <button className="btn-primary flex items-center justify-center rounded-full gap-x-2"><img src={Launch} alt="Launch Icon" /> Try Zibani Now!</button>
            </div>
           </section>
        </div>
    );
    }

export default HowItWorks;