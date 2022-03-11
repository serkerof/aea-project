import { useState } from "react"
import Hamburger from "../hamburger/Hamburger";
import Navbar from "../navbar/Navbar";

const NavbarChooser = () => {
    const [displayHamburgerMenu, setDisplayHamburgerMenu] = useState(false);
    return (
        <div>
            {displayHamburgerMenu
                ? <Hamburger displayHamburgerMenu={displayHamburgerMenu}
                    setDisplayHamburgerMenu={setDisplayHamburgerMenu} />
                : <Navbar displayHamburgerMenu={displayHamburgerMenu}
                    setDisplayHamburgerMenu={setDisplayHamburgerMenu} />
            }

        </div>
    )
}

export default NavbarChooser