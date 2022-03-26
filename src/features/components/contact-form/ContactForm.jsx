import styles from "./styles.module.css";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import { selectAllContactData } from "../../data/contactDataSlice";
import { BsInstagram, BsTelephone } from "react-icons/bs";
import {
  AiFillFacebook,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import { useState, useRef } from "react";
import ConfirmationDialog from "../confirmation-dialog/ConfirmationDialog";
import Responsive from "../../responsive/Responsive";

const ContactForm = ({ contactFormRef, visibilityClass }) => {
  const [email, phone, instagram, facebook, whatsapp] =
    useSelector(selectAllContactData);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const isDesktop = Responsive().isDesktop;
  let formRef = useRef();

  const handleSubmit = (e) => {
    formRef.reset();
    setIsFormSubmitted(true);
    emailjs
      .sendForm(
        "service_ebbwn4f",
        "template_ev9nfxr",
        e.target,
        "i_Sr8vndWQHxXL_e6"
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    e.preventDefault();
  };

  return (
    <div
      className={`${styles.container} d-flex justify-center align-center `}
      ref={contactFormRef}
    >
      <div
        className={`${styles.context_container} ${
          isDesktop && "d-grid two-column"
        } `}
      >
        <div className={`${styles.contact_us} ${visibilityClass}`}>
          <div>
            <h3 className={`${styles.title}`}>Kontaktieren Sie uns!</h3>
            <p className={`${styles.desc}`}>
              Wir sind rund um die Uhr für Sie Da! <br /> Um Ihrer Anfragen
              Schnellstmöglich beantworten zu können. Kontaktieren Sie uns!
            </p>
          </div>
          <div className={`${styles.data}`}>
            <a
              href={`emailto: ${email.address}`}
              className='d-flex align-center'
            >
              <AiOutlineMail size={20} className={`${styles.icon}`} />
              &nbsp; {email.address}
            </a>
            <a href={`tel:${phone.number} `} className='d-flex align-center'>
              <BsTelephone size={20} className={`${styles.icon}`} />
              &nbsp; {phone.number}
            </a>
          </div>
          <div
            className={`${styles.social_media_group} d-flex justify-between`}
          >
            <a href={facebook.link} className={`${styles.link}`}>
              <BsInstagram size={20} className={`${styles.icon}`} />
            </a>
            <a href={instagram.link} className={`${styles.link}`}>
              <AiFillFacebook size={20} className={`${styles.icon}`} />
            </a>
            <a href={whatsapp.link} className={`${styles.link}`}>
              <AiOutlineWhatsApp size={20} className={`${styles.icon}`} />
            </a>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className={`${styles.contact_form}`}
          ref={(ref) => (formRef = ref)}
        >
          <h3 className={`${styles.title}`}>Sende uns eine Nachrict!</h3>
          <div className={`${styles.name_input} d-flex`}>
            <input type='text' name='forename' placeholder='Vorname' />
            <input type='text' name='surname' placeholder='Nachname' />
          </div>
          <input type='text' name='email' placeholder='Ihre Email' />
          <textarea name='message' placeholder='Ihre Nachricht' />
          <button className={styles.submit_btn}>Abschicken</button>
        </form>
        {isFormSubmitted && (
          <ConfirmationDialog setStatus={setIsFormSubmitted} />
        )}
      </div>
    </div>
  );
};

export default ContactForm;
