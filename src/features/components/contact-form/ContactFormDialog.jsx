import ContactForm from "./ContactForm";
import { useSelector } from "react-redux";
import { selectAllContactData } from "../../data/contactDataSlice";
import {
  Call,
  Instagram,
  Facebook,
  WhatsApp,
  Email,
} from "@mui/icons-material";
import styles from "./styles.module.css";
import Responsive from "../../responsive/Responsive";

const ContactFormDialog = ({ setStatus }) => {
  const [email, phone, instagram, facebook, whatsapp] =
    useSelector(selectAllContactData);
  const isDesktop = Responsive().isDesktop;

  return (
    <div
      className={`${styles.dialog_container} d-flex align-center justify-center`}
    >
      <button
        className={`${styles.close_btn}`}
        onClick={() => {
          setStatus(false);
          document.body.style.overflow = "auto";
        }}
      >
        X
      </button>
      <div className={`${styles.form_container}`}>
        {isDesktop ? (
          ""
        ) : (
          <div
            className={`${styles.header} d-flex direction-column justify-center align-center`}
          >
            <h2 className={`${styles.dialog_title}`}>Kontakt form</h2>
            <div
              className={` ${styles.dialog_media_group} d-flex justify-between`}
            >
              <a href={facebook.link} className={`${styles.link}`}>
                <Instagram className={`${styles.dialog_icon}`} />
              </a>
              <a href={instagram.link} className={`${styles.link}`}>
                <Facebook className={`${styles.dialog_icon}`} />
              </a>
              <a href={whatsapp.link} className={`${styles.link}`}>
                <WhatsApp size={20} className={`${styles.dialog_icon}`} />
              </a>
            </div>
          </div>
        )}
        {isDesktop ? (
          <ContactForm />
        ) : (
          <ContactForm visibilityClass={"display-none"} />
        )}
        {isDesktop ? (
          ""
        ) : (
          <div className={`${styles.data}`}>
            <a
              href={`emailto: ${email.address}`}
              className='d-flex align-center'
            >
              <Email className={`${styles.icon}`} />
              &nbsp; {email.address}
            </a>
            <a
              href={`tel:${phone.number} `}
              className='d-flex align-center'
            >
              <Call className={`${styles.icon}`} />
              &nbsp; {phone.number}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactFormDialog;
