import NavBarSub from "../NavBarSub/NavBarSub";


const DropdownMenu = ({isVisible }) => {
    const subLinks = [
        { to: "/option1", text: "option1" },
        { to: "/option2", text: "option2" },

      ];
  return (
    <>
      <div
    className={`absolute top-full left-0 bg-white border shadow-md transition-all duration-500  ease-in-out transform ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
    }`}
  >
        {subLinks.map((link, index) => (
            <div key={index} className="flex text-[#50d71e]">
                <NavBarSub title={link.text} link={link.to}/>
            </div>
        ))}
      </div>

    </>
  );
};

export default DropdownMenu;
