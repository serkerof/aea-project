import { useState } from "react";
import styles from "./offer.module.css";
import { IoMdReturnLeft } from "react-icons/io";
import { GrFormNextLink } from "react-icons/gr";
import Questions from "./questions/Questions";

const OfferDialog = ({ setStatus }) => {
  const [selectedComponent, setSelectedComponent] = useState();

  const contact = <div>Contact</div>;

  const returnButton = selectedComponent && (
    <button
      className={`${styles.return_btn} d-flex align-center `}
      onClick={() => setSelectedComponent(null)}
    >
      <IoMdReturnLeft size={25} />
    </button>
  );

  return (
    <div
      className={`${styles.dialog_container} d-flex align-center justify-center `}
    >
      <button
        className={`${styles.close_btn}`}
        onClick={() => setStatus(false)}
      >
        X
      </button>
      {returnButton}
      {selectedComponent ?? (
        <div
          className={`${styles.offering_button_group} d-flex direction-column justify-center`}
        >
          <h2 className={`${styles.title}`}>
            Um schnelle Erledigung Ihre wünsche kontaktieren Sie bitte uns!
          </h2>
          <button
            className={`${styles.item}`}
            onClick={() => {
              setSelectedComponent(<Questions />);
            }}
          >
            Angebot Erhalten
          </button>
          <button
            className={`${styles.item}`}
            onClick={() => {
              setSelectedComponent(contact);
            }}
          >
            Kontaktieren
          </button>
        </div>
      )}
    </div>
  );
};

export default OfferDialog;
