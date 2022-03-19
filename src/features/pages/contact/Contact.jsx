import React from "react";
import ContactForm from "../../components/contact-form/ContactForm";
import Footer from "../../components/footer/Footer";
import NavbarChooser from "../../components/navbar-chooser/NavbarChooser";

const Contact = () => {
  return (
    <div className='container'>
      <NavbarChooser />
      <ContactForm />
    </div>
  );
};

export default Contact;
