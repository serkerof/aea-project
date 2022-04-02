import { useState, useEffect } from "react";
import Hamburger from "../hamburger/Hamburger";
import Navbar from "../navbar/Navbar";

const NavbarChooser = () => {
  const [displayHamburgerMenu, setDisplayHamburgerMenu] =
    useState("display-none");

  useEffect(() => {
    displayHamburgerMenu.includes("animate__backOutRight") &&
      setTimeout(() => {
        setDisplayHamburgerMenu("display-none");
      }, 700);
  }, [displayHamburgerMenu]);

  return (
    <div>
      {displayHamburgerMenu != "display-none" ? (
        <Hamburger
          displayHamburgerMenu={displayHamburgerMenu}
          setDisplayHamburgerMenu={setDisplayHamburgerMenu}
        />
      ) : (
        <Navbar setDisplayHamburgerMenu={setDisplayHamburgerMenu} />
      )}
    </div>
  );
};

export default NavbarChooser;
