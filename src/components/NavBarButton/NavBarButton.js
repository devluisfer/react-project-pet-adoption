
import NavBar from '../NavBar/NavBar'


const NavBarButton = () => {
    const navLinks = [
        { href: "/about", text: "About" },
        { href: "/adopt", text: "Adopt" },
        { href: "/volunteer", text: "Volunteer" },
        { href: "/actitivity", text: "Actitivity" },
        { href: "/others", text: "Others" },
      ];
    return (
      <>
        <nav id="navbar" className='w-1/2 flex justify-between position-relative'>
          {navLinks.map((link, index) => (
            <NavBar key={index} title={link.text} link={link.href} />
          ))}
        </nav>
      </>
    );
}
export default NavBarButton