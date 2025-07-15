
import Logo from '../assets/zibani-logo-w.png'; 

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 py-8 w-full max-w-full mt-8 px-20">
            <div className="flex items-start justify-between gap-4 mb-8">
                <div className="w-1/3 text-left">
                    <img src={Logo} alt="Your voice-guided travel app" className="h-12" />
                    <p className="text-sm my-4 font-light">
                        A voice-first, GPS-aware, offline-ready app that brings local culture to the traveler’s ears. 
                        No searching, no maps. Just open the app, and let Zambia speak.
                    </p>

                    <div>
                        <ul className="flex gap-4 text-xs">
                            <li className="text-primary font-medium hover:underline cursor-pointer">GitHub</li>
                            <li className="text-primary font-medium hover:underline cursor-pointer">LinkedIn</li>
                            <li className="text-primary font-medium hover:underline cursor-pointer">Twitter</li>
                        </ul>
                    </div>
                    <div className="mt-6 border-t-2 border-gray-500 pt-4">
                        <p className="text-sm font-semibold">Legal</p>

                        <ul className="text-xs font-light mt-4 space-y-2">
                            <li className="w-fit hover:underline cursor-pointer">Cookie Policy</li>
                            <li className="w-fit hover:underline cursor-pointer">Privacy Policy</li>
                            <li className="w-fit hover:underline cursor-pointer">Terms of Service</li>
                        </ul>
                    </div>
                </div>

                {/* Feedback form */}
                <div>
                    <div class="w-[500px] text-left text-white px-6 py-2">
                        <div class="max-w-4xl mx-auto">
                            <p class="text-sm font-semibold mb-6 text-gray-300">Have a suggestion, a cultural fact to contribute, or something you'd like to hear on the road?</p>

                            <form class="space-y-4">
                            <div>
                                <label for="email" class="block text-sm text-gray-300 mb-1">Your email</label>
                                <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="john@gmail.com"
                                class="w-full px-4 py-2 bg-gray-100 text-gray-600 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>

                            <div>
                                <label for="message" class="block text-sm text-gray-300 mb-1">Message</label>
                                <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Share your thoughts..."
                                class="w-full px-4 py-2 bg-gray-100 text-gray-600 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                class="btn-primary flex items-center justify-center rounded-full gap-x-4"
                            >
                                Submit Feedback
                            </button>
                            </form>
                        </div>
                        </div>

                </div>
            </div>
            <div className="cursor-default flex items-center justify-between mx-auto text-center border-t-2 border-gray-500 pt-4 mt-4">
                <p className="text-sm">© {new Date().getFullYear()} Zibani. All rights reserved.</p>
                <p className=" text-sm mt-2">All Systems Operational <span className="mx-4 text-green-500 font-bold text-sm">o</span></p>
            </div>
        </footer>
    );
}

export default Footer;