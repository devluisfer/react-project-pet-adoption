import NavBar from "../NavBar/NavBar";
import { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import DropdownMenu from "../DropdownMenuOption/DropdownMenuOption";

const NavBarButton = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDropdownRendered, setDropdownRendered] = useState(false);

  const handleMouseEnter = () => {
    setDropdownRendered(true);
    setTimeout(() => {
      setDropdownVisible(true);
    }, 10); // Small delay to ensure rendering before animation
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
    setTimeout(() => {
      setDropdownRendered(false);
    }, 500); // Match the duration of the CSS transition
  };
  useEffect(() => {
    let timeoutId;

    const handleMouseLeaveWithDelay = () => {
      timeoutId = setTimeout(() => {
        handleMouseLeave();
      }, 50); // Short delay to prevent flicker
    };

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const navLinks = [
    { to: "/about", text: "About" },
    { to: "/adopt", text: "Adopt" },
    { to: "/volunteer", text: "Volunteer" },
    { to: "/actitivity", text: "Actitivity" },
    { text: "Others", hasDropdown: true },
  ];
  return (
    <>
      <nav id="navbar" className="w-1/2 flex justify-between position-relative">
        {navLinks.map((link, index) => (
          <div
          key={index}
          onMouseEnter={link.hasDropdown ? handleMouseEnter : null}
          onMouseLeave={link.hasDropdown ? handleMouseLeave : null}
          className="relative h-fit"
        >
          {link.hasDropdown ? (
            <div className="relative cursor-pointer text-base no-underline w-fit h-fit flex text-[#fff]">{link.text}</div>
          ) : (
            <NavBar title={link.text} link={link.to} />
          )}
          {link.hasDropdown && isDropdownRendered && (
            <DropdownMenu isVisible={isDropdownVisible} />
          )}
        </div>
        ))}
      </nav>
    </>
  );
};

export default NavBarButton;
