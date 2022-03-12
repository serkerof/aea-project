import { useSelector } from "react-redux";
import { selectAllContactData } from "../../data/contactDataSlice";
import { BsInstagram } from "react-icons/bs";
import {
  AiFillFacebook,
  AiOutlineWhatsApp,
  AiFillCaretDown,
} from "react-icons/ai";
import styles from "./footer.module.css";

const Footer = () => {
  const [email, phone, instagram, facebook, whatsapp] =
    useSelector(selectAllContactData);

  return (
    <div className={`${styles.container} d-flex flex-wrap justify-center`}>
      <div className={`${styles.contact_container}`}>
        <h5>Kontakt uns</h5>
        <div className={`${styles.divider}`}></div>
        <ul className={`${styles.contact_list}`}>
          <li>
            <a href={`mailto:${email.address}`}> {email.address}</a>
          </li>
          <li>
            <a href={`tel:${phone.number}`}> {phone.number}</a>
          </li>
          <li className={`${styles.icon_group} d-flex justify-around`}>
            <a href={`${instagram.link}`}>
              <BsInstagram className={`${styles.icon}`} />
            </a>
            <a href={`${facebook.link}`}>
              <AiFillFacebook className={`${styles.icon}`} />
            </a>
            <a href={`${whatsapp.link}`}>
              <AiOutlineWhatsApp className={`${styles.icon}`} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
