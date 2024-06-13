import SVGLogo from "../svg/SvgLogo"
import { Link } from "react-router-dom"


const Logo = () => {
    return (
        <>
            <div className="no-underline">
              <Link to="/">
              {/* <img alt="logo" src="home-logo-pet-v2.png" className="w-[100px] sm:w-[200px]"/> */}
                <SVGLogo width={140}/>
              </Link>
            </div>
        </>
    )
}

export default Logo