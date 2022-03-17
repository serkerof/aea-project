import styles from "./offer.module.css";
import { FiUser } from "react-icons/fi";
const Offer = ({ setStatus }) => {
  return (
    <div className={`${styles.offer_container} d-flex`}>
      <p className={`${styles.offer_message}`}>
        Wollen Sie von uns ein angebot bekommen?
      </p>
      <button className={`${styles.button}`} onClick={() => setStatus(true)}>
        <FiUser size={35} />
      </button>
    </div>
  );
};

export default Offer;
