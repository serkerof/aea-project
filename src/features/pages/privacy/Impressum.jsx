import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import NavbarChooser from "../../components/navbar-chooser/NavbarChooser";
import styles from "./styles.module.css";

const Impressum = () => {
  return (
    <div>
      <NavbarChooser />
      <div className={`${styles.container}`}>
        <h4>Impressum</h4>
        <p>AEA Dienstleistung</p>
        <p>Von Galen Straße 40</p>
        <p>33129 Delbrück</p>
        <p>Deutschland</p>
        <p>Tel.: +4915174338815</p>
        <p>E-Mail: a.e.a.dienstleistungen@gmail.com</p>
        <p>Website: aea-dienste.de</p>
        <h4>Datenschutz:</h4>
        <p>
          Die Datenschutzerklärung finden Sie{" "}
          <Link to={"/datenschutz"}> hier. </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Impressum;
