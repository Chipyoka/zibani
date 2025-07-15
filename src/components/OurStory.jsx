
import Book from '../assets/icons/book.svg';
const OurStory = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-full">
            <div className="text-left max-w-[800px] mt-36">
                <div className="flex items-center justify-center rounded-full bg-primary-50 py-2 px-4 text-primary gap-x-2 w-fit">
                    <img src={Book} alt="stars for features" />
                    <p className="text-sm font-semibold">The Story Behind</p>
                </div>

                <h1 className="text-5xl font-semibold my-6 w-[75%]"><span className="text-primary">A Journey</span> That Sparked a Vision.</h1>

                <p className="text-lg mb-8">
                    Zibani started with a simple idea: to make travel more immersive and engaging through audio storytelling. We believe that every place has a story to tell, 
                    and we want to help travelers discover those stories in a hands-free, 
                    distraction-free way.
                </p>

                <p>
                    Inspired by real-life road trips across Zambia from Kasama to Ndola, 
                    from home to university. Early mornings, long hours on the highway, towns rushing 
                    past the windows. For many travelers, especially first-timers, there’s little to see, 
                    even less to know. The roads are full of culture, but the journey often feels silent.

                    <br /><br />
                    That silence became a question:<br /> <strong><i>“What if every town could tell its own story—right when you pass it?”</i></strong>
                </p>
            </div>

            <div className="flex flex-col justify-end items-center w-screen h-[50dvh]  bg-[url('assets/wavy-bg-shade.svg')] bg-no-repeat bg-top bg-scroll bg-contain mt-8">
                <p className="ml-24 mb-12 text-lg text-left italic font-semibold max-w-[600px] px-4"> 
                    Not just a tourism app—it’s a movement to preserve, promote, and experience 
                    Zambia’s living culture through everyday travel.
                </p>

            </div>

          
        </div>
    );
}

export default OurStory;