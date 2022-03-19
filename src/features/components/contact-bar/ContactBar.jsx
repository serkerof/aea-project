import styles from "./contactBar.module.css";
import { BsTelephone } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { useSelector } from "react-redux";
import { selectContactData } from "../../data/contactDataSlice";
import { useState } from "react";

const ContactBar = ({ contactFormRef }) => {
  const phone = useSelector((state) => selectContactData(state, "phone"));
  const [dialog, setDialog] = useState(null);
  return (
    <div
      className={`${styles.contact_bar} slide-from-bottom desktop-none d-flex`}
    >
      {dialog}
      <a
        href={`tel:${phone.number}`}
        className={`${styles.icon_container} d-flex justify-center`}
      >
        <BsTelephone className={`${styles.icon}`} size={24} />
        <p className={`${styles.sub_title}`}>&nbsp; Anrufen</p>
      </a>
      <div
        className={`${styles.icon_container} d-flex justify-center`}
        onClick={() =>
          contactFormRef ? contactFormRef.current.scrollIntoView({behavior: 'smooth'}) : setDialog()
        }
      >
        <BiMessageDetail className={`${styles.icon}`} size={26} />
        <p className={`${styles.sub_title}`}>&nbsp; Kontaktieren</p>
      </div>
    </div>
  );
};

export default ContactBar;
