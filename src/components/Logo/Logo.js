import SVGLogo from "../svg/SvgLogo"


const Logo = () => {
    return (
        <>
            <div className="no-underline">
              <a href="/">
              {/* <img alt="logo" src="home-logo-pet-v2.png" className="w-[100px] sm:w-[200px]"/> */}
                <SVGLogo />
              </a>
            </div>
        </>
    )
}

export default Logo