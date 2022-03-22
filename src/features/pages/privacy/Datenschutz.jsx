import Footer from "../../components/footer/Footer";
import NavbarChooser from "../../components/navbar-chooser/NavbarChooser";
import styles from "./styles.module.css";

const Datenschutz = () => {
  return (
      <div>
      <NavbarChooser />
      <div className={`${styles.container}`}>Datenschutz</div>
      <Footer />
    </div>
  )
}

export default Datenschutz