import Stars from '../assets/icons/stars.svg';
import Offline from '../assets/icons/offline.svg';
import Photo from '../assets/icons/photo.svg';
import Search from '../assets/icons/search.svg';
import GPS from '../assets/icons/gps.svg';
import Mic from '../assets/icons/mic-2.svg';

const Features = () => {
  return (
    <div className=" mt-20 text-left">
        

        <div className="flex flex-col items-start justify-center max-w-[900px] mx-auto">
            <div className="flex items-center justify-center rounded-full bg-primary-50 py-2 px-4 text-primary gap-x-2 w-fit">
                <img src={Stars} alt="stars for features" />
                <p className="text-sm font-semibold">Core Features</p>
            </div>

            <h1 className="text-5xl font-semibold my-6 w-[70%]"><span className="text-primary">Everything</span> you need for smart, audio-first travel.</h1>

            <section>
                <div className="row-1 row flex items-center justify-center gap-4 mt-6 cursor-default">
                    <div className="card card-hover-float p-8 bg-primary-50 h-[307px] w-[416px] rounded-md">
                        <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center border-2 border-primary"><img src={Mic} alt="audio recording" /></div>
                        <h2 className="text-primary text-3xl font-semibold mt-4 mb-2">Audio-first Explores</h2>
                        <p className="text-lg">Listen to narrated insights about the town you’re in, hands-free, distraction-free. </p>
                    </div>

                    <div className="card card-hover-float p-8 bg-primary-50 h-[307px] w-[416px] rounded-md">
                        <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center border-2 border-primary"><img src={GPS} alt="gps awareness" /></div>
                        <h2 className="text-primary text-3xl font-semibold mt-4 mb-2">GPS Awareness</h2>
                        <p className="text-lg">To get started, the app detects your current town and tells its story as you travel. </p>
                    </div>
                   
                </div>
                <div className="row-2 row flex items-center justify-center gap-4 mt-6">
                    <div className="card card-hover-float  bg-primary-50 h-[312px] w-[270px] rounded-md p-6">
                          <div className= "bg-white rounded-full w-12 h-12 flex items-center justify-center border-2 border-primary"><img src={Search} alt="search a town" /></div>
                        <h2 className="text-primary text-3xl font-semibold mt-4 mb-2">Search A Town</h2>
                        <p className="text-lg">Not on the road? Discover towns and traditions across Zambia by name. </p>
                    </div>
                    <div className="card card-hover-float  bg-primary-50 h-[312px] w-[270px] rounded-md p-6">
                          <div className= "bg-white rounded-full w-12 h-12 flex items-center justify-center border-2 border-primary"><img src={Offline} alt="offline first design" /></div>
                        <h2 className="text-primary text-3xl font-semibold mt-4 mb-2">Offline-first design</h2>
                        <p className="text-lg">All audio and photos are cached for offline use refreshes when you're connected.</p>
                    </div>
                    <div className="card card-hover-float  bg-primary-50 h-[312px] w-[270px] rounded-md p-6">
                          <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center border-2 border-primary"><img src={Photo} alt="cultural snapshots" /></div>
                        <h2 className="text-primary text-3xl font-semibold mt-4 mb-2">Cultural Snapshots</h2>
                        <p className="text-lg">Each voice story has handpicked photos that offer a visual sense of the place</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}

export default Features;