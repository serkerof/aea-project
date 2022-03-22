import Footer from "../../components/footer/Footer";
import NavbarChooser from "../../components/navbar-chooser/NavbarChooser";
import styles from "./styles.module.css";

const Impressum = () => {
  return (
     <div>
      <NavbarChooser />
      <div className={`${styles.container}`}>Impressum</div>
      <Footer />
    </div>
  )
}

export default Impressum