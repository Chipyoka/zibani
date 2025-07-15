import {React} from 'react';
import Logo from '../assets/zibani-logo.png'; 

const Navbar = () => {
    return (
        <nav className=" flex items-center justify-between w-full py-6 px-32 bg-white shadow-sm fixed top-0 left-0 z-50">
            <div className="logo">
                <img src={Logo} alt="Zeet Logo" className="h-[54px]" />
            </div>

            <div className=" flex justify-between items-center">
               
                <ul className="flex space-x-8 nav-links">
                    <li>Home</li>
                    <li>Features</li>
                    <li>How it Works</li>
                    <li>Our Story</li>
                    <li>FAQs</li>
                    <li>Contact</li>  
                </ul>

            </div>

            <div className="buttons">
                <button className="btn-primary rounded-full">Register Now</button>
            </div>
        </nav>
    );
}

export default Navbar;
