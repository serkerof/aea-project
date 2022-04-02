import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import styles from "./navbar.module.css";

const Navbar = ({ setDisplayHamburgerMenu }) => {
  const navigate = useNavigate();
  const [submenuHover, setSubmenuHover] = useState({ services: false });

  const handleSubmenuHover = (key, value) => {
    setSubmenuHover({ [key]: value });
  };

  const subMenu = (
    <ul className={`${styles.submenu}`}>
      <li
        className={`${styles.sub_link}`}
        onClick={() => {
          // navigate("/haushaltsaufloesung");
        }}
      >
        Haushaltsauflösung
      </li>
      <li
        className={`${styles.sub_link}`}
        onClick={() => {
          // navigate("/entruempelung");
        }}
      >
        Entrümpelung
      </li>
      <li
        className={`${styles.sub_link}`}
        onClick={() => {
          // navigate("/kleine-umzuege");
        }}
      >
        Kleine Umzüge
      </li>
      <li
        className={`${styles.sub_link}`}
        onClick={() => {
          // navigate("/gartenpflege");
        }}
      >
        Gartenpflege
      </li>
      <li
        className={`${styles.sub_link}`}
        onClick={() => {
          // navigate("/hausreinigung");
        }}
      >
        Hausreinigung
      </li>
      <li
        className={`${styles.sub_link}`}
        onClick={() => {
          // navigate("/glasreinigung");
        }}
      >
        Glasreinigung
      </li>
    </ul>
  );

  const links = (
    <ul className={`${styles.navlink} d-flex mobile-none tablet-none`}>
      <li
        className={`${styles.item}`}
        onMouseEnter={() => handleSubmenuHover("services", true)}
        onMouseLeave={() => handleSubmenuHover("services", false)}
      >
        Leistungen
        {submenuHover.services === true && subMenu}
      </li>
      <li className={`${styles.item}`} onClick={() => navigate("/ueber-uns")}>
        Über uns
      </li>
      <li className={`${styles.item}`} onClick={() => navigate("/kontakt")}>
        Kontakt
      </li>
    </ul>
  );

  return (
    <div className={`${styles.navbar} d-flex align-center justify-between`}>
      <img
        className={`${styles.logo}`}
        src={logo}
        alt='AEA Dienstleistungen Logo'
        onClick={() => navigate("/")}
      />
      <span
        className={`${styles.hamburger_icon_container} desktop-none`}
        onClick={() => setDisplayHamburgerMenu("animate__animated animate__backInDown")}
      >
        <MenuIcon fontSize="large" className={`${styles.hamburger_icon}`} />
      </span>
      {links}
    </div>
  );
};

export default Navbar;
