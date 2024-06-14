import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import SVGLogo from "../svg/SvgLogo";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-center text-center">
        <div className="flex justify-center p-[20px] w-[1080px]">
          <ul className="w-[300px]">
            <li className="p-[5px] font-bold h-[40px] flex items-center justify-center">
              <Link className="cursor-default">About</Link>
            </li>
            <li className="p-[5px] h-[40px] flex items-center justify-center">
              <Link to="#">Who we are</Link>
            </li>
            <li className="p-[5px] h-[40px] flex items-center justify-center">
              <Link to="#">Contact us</Link>
            </li>
            <li className="p-[5px] h-[40px] flex items-center justify-center">
              <Link to="#">FAQs</Link>
            </li>
          </ul>
          <ul className="w-[300px]">
            <li className="p-[5px] font-bold h-[40px] flex items-center justify-center">
              <Link className="cursor-default">How can I help</Link>
            </li>
            <li className="p-[5px] h-[40px] flex items-center justify-center">
              <Link to="#">Adopt</Link>
            </li>
            <li className="p-[5px] h-[40px] flex items-center justify-center">
              <Link to="#">Donate</Link>
            </li>
            <li className="p-[5px] h-[40px] flex items-center justify-center">
              <Link to="#">Volunteer</Link>
            </li>
          </ul>
          <ul className="w-[300px]">
            <li className="p-[5px] font-bold h-[40px] flex items-center justify-center">
              <Link className="cursor-default">Others</Link>
            </li>
            <li className="p-[5px] h-[40px] flex items-center justify-center">
              <Link to="#">Actitivity</Link>
            </li>
            <li className="p-[5px] h-[40px] flex items-center justify-center">
              <Link to="#">Brands involved</Link>
            </li>
            <li className="p-[5px] h-[40px] flex items-center justify-center">
              <Link to="#">Terms and Conditions</Link>
            </li>
          </ul>
          <ul className="w-[300px]">
            <li className="p-[5px] font-bold  h-[40px] flex items-center justify-center">
              <Link className="cursor-default">Social networks</Link>
            </li>
            <li className="p-[5px] h-[40px] flex items-center justify-center">
              <Link
                to="#"
                className="inline-flex items-center
                              w-1/2"
              >
                <span className="flex bg-[url('/public/social-icons.png')] bg-[length:220px_110px] bg-[position:-5px_0] w-[30px] h-[30px]"></span>
                <span>Facebook</span>
              </Link>
            </li>
            <li className="p-[5px] h-[40px] flex items-center justify-center">
              <Link
                to="#"
                className="inline-flex items-center
                              w-1/2"
              >
                <span className="flex bg-[url('/public/social-icons.png')] bg-[length:220px_110px] bg-[position:-57px_0] w-[30px] h-[30px]"></span>
                <span>Instagram</span>
              </Link>
            </li>
            <li className="p-[5px] h-[40px] flex items-center justify-center">
              <Link
                to="#"
                className="inline-flex items-center
                             w-1/2"
              >
                <span className="flex bg-[url('/public/social-icons.png')] bg-[length:220px_110px] bg-[position:60px_-163px] w-[30px] h-[30px]"></span>

                <span>TikTok</span>
              </Link>
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
