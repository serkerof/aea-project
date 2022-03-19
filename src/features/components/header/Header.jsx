import styles from "./header.module.css";
import NavbarChooser from "../../components/navbar-chooser/NavbarChooser";
import { BsInstagram } from "react-icons/bs";
import { AiFillFacebook, AiOutlineWhatsApp } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectAllContactData } from "../../data/contactDataSlice";

const Header = ({ contactFormRef }) => {
  const [email, phone, instagram, facebook, whatsapp] =
    useSelector(selectAllContactData);

  return (
    <div className={`${styles.header_container} d-flex align-center`}>
      <NavbarChooser />
      <div
        className={` ${styles.context_container} d-flex flex-wrap justify-center`}
      >
        <div className={`${styles.paragraph} d-flex direction-column `}>
          <h1>A. E. A. Dienstleistungen</h1>
          <h3>Versuch ist gold Wert</h3>
        </div>
        <div
          className={`${styles.contact_form} d-flex direction-column align-center justify-center`}
        >
          <div className={`${styles.info_section}`}>
            <h5>Email</h5>
            <a href={`mailto:${email.address}`}>{email.address}</a>
            <h5>Kontaktnummer</h5>
            <a href={`tel:${phone.number}`}>{phone.number}</a>
            <div className={`${styles.social_media} d-flex justify-around`}>
              <a href={instagram.link}>
                <BsInstagram className={`${styles.icon}`} size={25} />
              </a>
              <a href={facebook.link}>
                <AiFillFacebook className={`${styles.icon}`} size={25} />
              </a>
              <a href={whatsapp.link}>
                <AiOutlineWhatsApp className={`${styles.icon}`} size={25} />
              </a>
            </div>
          </div>
          <button
            className={`${styles.link_button} d-flex align-center justify-center`}
            onClick={() =>
              contactFormRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Zum Kontakt Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
