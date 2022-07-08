import { useState } from "react";
import styles from "./offer.module.css";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import Questions from "./questions/Questions";
import ContactFormDialog from "../contact-form/ContactFormDialog";
import Responsive from "../../responsive/Responsive";

const OfferDialog = ({ setStatus }) => {
  const [selectedComponent, setSelectedComponent] = useState();
  const isDesktop = Responsive().isDesktop;

  const handleClose = () => {
    document.body.style.overflow = "auto";
    setSelectedComponent(null);
    setStatus(false);
  };

  const openSelectedComponent = (component) => {
    setSelectedComponent(component);
    document.body.style.overflow = "hidden";
  };

  const returnButton = selectedComponent && (
    <button
      className={`${styles.return_btn} d-flex align-center `}
      onClick={() => setSelectedComponent(null)}
    >
      <KeyboardReturnIcon />
    </button>
  );

  return (
    <div
      className={`${styles.dialog_container} d-flex align-center justify-center `}
    >
      <button
        className={`${styles.close_btn}`}
        onClick={() => {
          handleClose();
        }}
      >
        X
      </button>
      {returnButton}
      {selectedComponent ?? (
        <div
          className={`${styles.offering_button_group} "d-flex direction-column justify-center"
          `}
        >
          <h2 className={`${styles.title}`}>Kontaktieren Sie Uns</h2>
          <div className={styles.divider}></div>
  
          <div className={`${isDesktop && "d-grid two-column"}`}>
            <div className={`${styles.item_box} ${styles.offering}`}>
              <h4 className={`${styles.topic_title}`}>Kostenloses Angebot</h4>
              <p className={`${styles.desc}`}>
                Füllen Sie bitte das Formular um ein schnelles Angebot zu
                erhalten.
              </p>
              <button
                className={`${styles.get_offer_btn}`}
                onClick={() => {
                  openSelectedComponent(
                    <Questions handleCloseDialog={handleClose} />
                  );
                }}
              >
                Angebot Erhalten
              </button>
              <p className={`${styles.hint}`}>
                Dauer: <strong> 2 Minuten!</strong>
              </p>
            </div>
            <div className={`${styles.item_box} ${styles.contact_form}`}>
              <h4 className={`${styles.topic_title}`}>Kontaktformular</h4>
              <p className={`${styles.desc}`}>
                Haben Sie andere Fragen? Dann kontaktieren Sie uns um eine
                schnelle Rückmeldung zu bekommen. Wir helfen Ihnen gerne weiter!
              </p>
              <button
                className={`${styles.contact_btn}`}
                onClick={() => {
                  openSelectedComponent(
                    <ContactFormDialog setStatus={setStatus} />
                  );
                }}
              >
                Kontaktieren
              </button>
              <p className={`${styles.hint}`}>
                Dauer: <strong> 2 Minuten!</strong>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfferDialog;
