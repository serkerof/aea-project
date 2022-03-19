import { useState } from "react";
import ContactForm from "./ContactForm";
import styles from "./styles.module.css";
const ContactFormDialog = ({ setStatus }) => {
  return (
    <div
      className={`${styles.dialog_container} d-flex align-center justify-center`}
    >
      <button
        className={`${styles.close_btn}`}
        onClick={() => {
          setStatus(false);
        }}
      >
        X
      </button>
      <ContactForm visibilityClass={"display-none"} />
    </div>
  );
};

export default ContactFormDialog;
