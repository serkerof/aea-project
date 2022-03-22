import ContactForm from "../../components/contact-form/ContactForm";
import Footer from "../../components/footer/Footer";
import NavbarChooser from "../../components/navbar-chooser/NavbarChooser";
import styles from "./styles.module.css";

const Contact = () => {
  return (
    <div >
      <NavbarChooser />
      <div className={`${styles.container}`}> 
      <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
