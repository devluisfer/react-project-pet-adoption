import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = ({ title, link }) => {

    return (
      <>
              <Link className={"relative text-base no-underline w-fit h-fit flex text-[#fff] after:border-b-[2px] after:border-b-[#f5f5f5] after:border-solid after:bottom-[-2px] after:content-[''] after:block after:left-0 after:right-full after:absolute after:duration-500 hover:after:right-0"} to={link} title={title}>
              {title}
              </Link>
      </>
    );
}

export default NavBar