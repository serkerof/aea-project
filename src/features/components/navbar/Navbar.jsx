import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import styles from "./navbar.module.css";
const Navbar = ({ setDisplayHamburgerMenu }) => {
  const navigate = useNavigate();

  const links = (
    <ul className={`${styles.navlink} d-flex mobile-none tablet-none`}>
      <li className={`${styles.item}`}>Leistungen</li>
      <li className={`${styles.item}`}>Über uns</li>
      <li className={`${styles.item}`}>Kontakt</li>
    </ul>
  );

  return (
    <div className={`${styles.navbar} d-flex align-center justify-between`}>
      <img
        className={`${styles.logo}`}
        src={logo}
        alt=''
        onClick={() => navigate("/")}
      />
      <span
        className={`${styles.hamburger_icon_container} desktop-none`}
        onClick={() => setDisplayHamburgerMenu(true)}
      >
        <GiHamburgerMenu size={30} className={`${styles.hamburger_icon}`} />
      </span>
      {links}
    </div>
  );
};

export default Navbar;
