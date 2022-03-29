import styles from "./contactBar.module.css";
import CallIcon from '@mui/icons-material/Call';
import MessageIcon from '@mui/icons-material/Message';
import { useSelector } from "react-redux";
import { selectContactData } from "../../data/contactDataSlice";
import { useState } from "react";
import ContactFormDialog from "../contact-form/ContactFormDialog";

const ContactBar = ({ contactFormRef }) => {
  const phone = useSelector((state) => selectContactData(state, "phone"));
  const [status, setStatus] = useState(false);

  return status ? (
    <ContactFormDialog setStatus={setStatus} />
  ) : (
    <div
      className={`${styles.contact_bar} slide-from-bottom desktop-none d-flex`}
    >
      {status}
      <a
        href={`tel:${phone.number}`}
        className={`${styles.icon_container} d-flex justify-center`}
      >
        <CallIcon className={`${styles.icon}`}  />
        <p className={`${styles.sub_title}`}>&nbsp; Anrufen</p>
      </a>
      <div
        className={`${styles.icon_container} d-flex justify-center`}
        onClick={() =>
          contactFormRef
            ? contactFormRef.current.scrollIntoView({ behavior: "smooth" })
            : setStatus(true)
        }
      >
        <MessageIcon className={`${styles.icon}`}  />
        <p className={`${styles.sub_title}`}>&nbsp; Kontaktieren</p>
      </div>
    </div>
  );
};

export default ContactBar;
