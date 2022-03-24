import React from "react";
import Questions from "./questions/Questions";
import styles from "./offer.module.css";
const ServiceOffer = ({ openDialog, setOpenDialog, closeDialog }) => {
  return (
    <div className={`${styles.service_offer_container} `}>
      <div className={`${styles.item_box} ${styles.offering} `}>
        <h4 className={`${styles.topic_title}`}>Befragung</h4>
        <p className={`${styles.desc}`}>
          Tragen Sie gefragte fragen damit wir uns schnell um Ihre Anliegen
          kümmern können!
        </p>
        <button
          className={`${styles.get_offer_btn}`}
          onClick={() => {
            setOpenDialog(<Questions handleCloseDialog={closeDialog} />);
          }}
        >
          Angebot Erhalten
        </button>
        <p className={`${styles.hint}`}>
          Dauer: <strong> 2 Minuten!</strong>
        </p>
      </div>
      {openDialog && (
        <div
          className={`${styles.dialog_container} d-flex align-center justify-center `}
        >
          <button className={`${styles.close_btn}`} onClick={closeDialog}>
            X
          </button>
          {openDialog}
        </div>
      )}
    </div>
  );
};

export default ServiceOffer;
