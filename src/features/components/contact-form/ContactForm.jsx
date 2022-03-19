import styles from "./contact-form.module.css";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import { selectAllContactData } from "../../data/contactDataSlice";
import { BsInstagram, BsTelephone } from "react-icons/bs";
import {
  AiFillFacebook,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";

const ContactForm = () => {
  const [email, phone, instagram, facebook, whatsapp] =
    useSelector(selectAllContactData);

  const handleSubmit = (e) => {
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
    <div className={`${styles.container} d-flex justify-center align-center`}>
      <div className={`${styles.context_container} d-flex flex-wrap`}>
        <div className={`${styles.contact_us}`}>
          <div>
            <h3 className={`${styles.title}`}>Kontaktieren Sie uns!</h3>
            <p className={`${styles.desc}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              nobis unde dolores officia nulla nemo doloribus rerum perferendis
              dolor aliquam fugiat eos, corporis distinctio eveniet laudantium
              quos velit odit tempora.
            </p>
          </div>
          <div className={`${styles.data}`}>
            <a
              href={`emailto: ${email.address}`}
              className='d-flex align-center'
            >
              <AiOutlineMail size={25} className={`${styles.icon}`} />
              &nbsp; {email.address}
            </a>
            <a href={`tel:${phone.number} `} className='d-flex align-center'>
              <BsTelephone size={25} className={`${styles.icon}`} />
              &nbsp; {phone.number}
            </a>
          </div>
          <div
            className={`${styles.social_media_group} d-flex justify-between`}
          >
            <a href={facebook.link} className={`${styles.link}`}>
              <BsInstagram size={30} className={`${styles.icon}`} />
            </a>
            <a href={instagram.link} className={`${styles.link}`}>
              <AiFillFacebook size={30} className={`${styles.icon}`} />
            </a>
            <a href={whatsapp.link} className={`${styles.link}`}>
              <AiOutlineWhatsApp size={30} className={`${styles.icon}`} />
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={`${styles.contact_form}`}>
          <h3 className={`${styles.title}`}>Sende uns eine Nachrict!</h3>
          <div className={`${styles.name_input} d-flex`}>
            <input type='text' name='forename' placeholder='Vorname' />
            <input type='text' name='surname' placeholder='Nachname' />
          </div>
          <input type='text' name='email' placeholder='Ihre Email' />
          <textarea name='message' placeholder='Ihre Nachricht' />
          <button className={styles.submit_btn}>Abschicken</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
