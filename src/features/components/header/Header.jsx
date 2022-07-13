import styles from "./header.module.css";
import NavbarChooser from "../../components/navbar-chooser/NavbarChooser";

const Header = ({ contactFormRef }) => {
  return (
    <div className={`${styles.header_container} d-flex align-center`}>
      <NavbarChooser />
      <div
        className={` ${styles.context_container} d-flex flex-wrap justify-center`}
      >
        <div className={`${styles.paragraph} d-flex direction-column `}>
          <h1>A. E. A. Dienstleistungen</h1>
          <h3>
            Ihr zuverlässiger Partner für Umzüge, Reinigungsarbeiten,
            Haushaltsauflösungen und Gartenpflege.
          </h3>
        </div>
        <div
          className={`${styles.cities} d-flex direction-column align-center justify-center`}
        >
          <li>Paderborn</li>
          <li>Bielefeld</li>
          <li>Gütersloh</li>
          <li>Lippstadt</li>
          <li>Soest</li>
        </div>
      </div>
    </div>
  );
};

export default Header;
