import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import SVGLogo from '../svg/SvgLogo';

const Footer = () => {
    return (
        <>

            <footer className="flex justify-center text-center">
                <div className="flex justify-center p-[20px] w-[1080px]">
                    <ul className="w-[300px]">
                        <li className="p-[5px] font-bold">
                            <a>About</a>
                        </li>
                        <li className="p-[5px]">
                            <a href="#">Who we are</a>
                        </li>
                        <li className="p-[5px]">
                            <a href="#">Contact us</a>
                        </li>
                        <li className="p-[5px]">
                            <a href="#">FAQs</a>
                        </li>
                    </ul>
                    <ul className="w-[300px]">
                        <li className="p-[5px] font-bold">
                            <a>How can I help</a>
                        </li>
                        <li className="p-[5px]">
                            <a href="#">Adopt</a>
                        </li>
                        <li className="p-[5px]">
                            <a href="#">Donate</a>
                        </li>
                        <li className="p-[5px]">
                            <a href="#">Volunteer</a>
                        </li>
                    </ul>
                    <ul className="w-[300px]">
                        <li className="p-[5px] font-bold">
                            <a>Others</a>
                        </li>
                        <li className="p-[5px]">
                            <a href="#">Actitivity</a>
                        </li>
                        <li className="p-[5px]">
                            <a href="#">Brands involved</a>
                        </li>
                        <li className="p-[5px]">
                            <a href="#">Terms and Conditions</a>
                        </li>
                    </ul>
                    <ul className="w-[300px]">
                        <li className="p-[5px] font-bold">
                            <a>Social networks</a>
                        </li>
                        <li className="p-[5px]">
                            <a href="#">Facebook</a>
                        </li>
                        <li className="p-[5px]">
                            <a href="#">Instagram</a>
                        </li>
                        <li className="p-[5px]">
                            <a href="#">Tiktok</a>
                        </li>
                    </ul>

                    <ul className="w-[300px]">
                        <li className="p-[5px] w-[50px]">
                            <Link to="/">
                                {/* <img
                                    src="home-logo-pet.png"
                                    alt="logo"
                                    className="w-[50px] sm:w-[100px]"
                                /> */}
                                <SVGLogo width={100} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
};
export default Footer;