import React from 'react';
import { Link } from 'react-router-dom';


const NavBarSub = ({ title, link }) => {

    return (
      <>
              <Link className={"relative border-0 text-base no-underline w-fit h-fit flex text-[#000] after:border-b-[2px] after:border-b-[#000] after:border-solid after:bottom-0 after:content-[''] after:block after:left-0 after:right-full after:absolute after:duration-500 hover:after:right-0"} to={link} title={title}>
              {title}
              </Link>
      </>
    );
}

export default NavBarSub