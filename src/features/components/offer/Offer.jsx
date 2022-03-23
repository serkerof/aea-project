import styles from "./offer.module.css";
import { FiUser } from "react-icons/fi";
import { useState } from "react";
const Offer = ({ setStatus }) => {
  const [showMessage, setShowMessage] = useState(true);

  setTimeout(() => {
    setShowMessage(false);
  }, 5000);

  return (
    <div
      className={`${styles.offer_container} d-flex slide-from-right align-center`}
    >
      {showMessage && (
        <p className={`${styles.offer_message}`}>
          Wollen Sie von uns ein angebot bekommen?
        </p>
      )}
      <button className={`${styles.button}`} onClick={() => setStatus(true)}>
        <FiUser size={35} />
      </button>
    </div>
  );
};

export default Offer;
