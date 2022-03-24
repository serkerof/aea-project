import { useSelector } from "react-redux";
import { selectAllContactData } from "../../data/contactDataSlice";
import { useNavigate } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { AiFillFacebook, AiOutlineWhatsApp } from "react-icons/ai";
import styles from "./footer.module.css";

const Footer = () => {
  const navigate = useNavigate();
  const [email, phone, instagram, facebook, whatsapp] =
    useSelector(selectAllContactData);
  return (
    <div className={`${styles.container} d-flex flex-wrap justify-between`}>
      <div className={`${styles.contact_container}`}>
        <h5>
          Kontakt
          <div className={`${styles.divider}`}></div>
        </h5>

        <ul className={`${styles.contact_list}`}>
          <li>
            <strong> A.E.A Dienstleistungen</strong>
          </li>

          <li>
            <a href={`tel:${phone.number}`}> {phone.number}</a>
          </li>
          <li>
            <a href={`mailto:${email.address}`}> {email.address}</a>
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
      <div>
        <h5>
          Nützliches
          <div className={`${styles.divider}`}></div>
        </h5>
        <ul className={`${styles.region_list}`}>
          <li
            onClick={() => {
              navigate("/kontakt");
            }}
          >
            Kontakt
          </li>
          <li
            onClick={() => {
              navigate("/impressum");
            }}
          >
            Impressum
          </li>
          <li
            onClick={() => {
              navigate("/datenschutz");
            }}
          >
            Datenschutz
          </li>
        </ul>
      </div>
      <div>
        <h5>
          Unsere Leistungen
          <div className={`${styles.divider}`}></div>
        </h5>

        <ul className={`${styles.services_list}`}>
          <li
            onClick={() => {
              // navigate("/haushaltsaufloesung");
            }}
          >
            Haushaltsauflösung
          </li>
          <li
            onClick={() => {
              // navigate("/entruempelung");
            }}
          >
            Entrümpelung
          </li>
          <li
            onClick={() => {
              // navigate("/kleine-umzuege");
            }}
          >
            Kleine Umzüge
          </li>
          <li
            onClick={() => {
              // navigate("/hausreinigung");
            }}
          >
            Hausreinigung
          </li>
          <li
            onClick={() => {
              // navigate("/glasreinigung");
            }}
          >
            Glasreinigung
          </li>
          <li
            onClick={() => {
              // navigate("/gartenpflege");
            }}
          >
            Gartenpflege
          </li>
          <li
            onClick={() => {
              // navigate("/abflussreinigung");
            }}
          >
            Abflussreinigung
          </li>
        </ul>
      </div>
      <div>
        <h5>
          Service Gebiet
          <div className={`${styles.divider}`}></div>
        </h5>
        <ul className={`${styles.region_list}`}>
          <li>Paderborn</li>
          <li>Bielefeld</li>
          <li>Dormund</li>
          <li>Gütersohl</li>
          <li>Lippstadt</li>
          <li>Soest</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
