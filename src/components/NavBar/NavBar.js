import React from 'react';


const NavBar = ({ title, link }) => {

    return (
      <>
              <a className={"relative text-base no-underline w-fit h-fit flex text-[#fff] after:border-b-[2px] after:border-b-[#f5f5f5] after:border-solid after:bottom-0 after:content-[''] after:block after:left-0 after:right-full after:absolute after:duration-500 hover:after:right-0"} href={link} title={title}>
              {title}
              </a>
      </>
    );
}

export default NavBar