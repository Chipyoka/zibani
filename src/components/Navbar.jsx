import {React} from 'react';
import Logo from '../assets/zibani-logo.png'; 

import { Link } from 'react-scroll';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className=" flex items-center justify-between w-full py-6 px-32 bg-white shadow-sm fixed top-0 left-0 z-50">
            <div className="logo">
                <img src={Logo} alt="Zeet Logo" className="h-[54px]" />
            </div>

            <div className=" flex justify-between items-center">
               
                <ul className="flex space-x-8 nav-links">
                    <li>
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <Link to="Features" smooth={true} duration={500} offset={-50}>Features</Link>
                    </li>
                    <li>
                        <Link to="HowItWorks" smooth={true} duration={500} offset={-50}>How it Works</Link>
                    </li>
                    <li>
                        <Link to="OurStory" smooth={true} duration={500} offset={-50}>Our Story</Link>
                    </li>
                    <li>
                        <Link to="FAQs" smooth={true} duration={500} offset={-50}>FAQs</Link>
                    </li>
                    {/* <li>Contact</li>   */}
                </ul>

            </div>

            <div className="buttons">
                <button className="btn-primary rounded-full">Register Now</button>
            </div>
        </nav>
    );
}

export default Navbar;
