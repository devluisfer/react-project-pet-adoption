import Logo from "../Logo/Logo";
import NavBarButton from "../NavBarButton/NavBarButton";

const Header = () => {
  return (
    <>
      <div id="header" className="fixed z-[999] font-['helvetica'] w-full p-[20px] flex justify-center text-center bg-[#0099ff] bg-[url('https://www.vozanimalperu.com/images/texture.png')]">
        <div className="w-full max-w-[1080px] justify-between font-bold flex">
            <Logo />
            <NavBarButton />
        </div>

      </div>
    </>
  );
};
export default Header;
