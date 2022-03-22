import { useEffect, useState } from "react";
import styles from "./offer.module.css";
import { IoMdReturnLeft } from "react-icons/io";
import Questions from "./questions/Questions";
import ContactFormDialog from "../contact-form/ContactFormDialog";

const OfferDialog = ({ setStatus }) => {
  const [selectedComponent, setSelectedComponent] = useState();
  const [screenWidth, setScreenWidth] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const updateDimensions = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    screenWidth > 1024 ? setIsDesktop(true) : setIsDesktop(false);
  }, [screenWidth]);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
  }, []);

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
      <IoMdReturnLeft size={25} />
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
          <h2 className={`${styles.title}`}>Kontaktiere Uns</h2>
          <div className={styles.divider}></div>
          <h3 className={`${styles.sub_title}`}>
            Um schnelle Erledigung Ihre wünsche kontaktieren Sie bitte uns!
          </h3>
          <div className={`${isDesktop && "d-grid two-column"}`}>
            <div className={`${styles.item_box} ${styles.offering}`}>
              <h4 className={`${styles.topic_title}`}>Befragung</h4>
              <p className={`${styles.desc}`}>
                Tragen Sie gefragte fragen damit wir uns schnell um Ihre
                Anliegen kümmern können!
              </p>
              <button
                className={`${styles.get_offer_btn}`}
                onClick={() => {
                  openSelectedComponent(<Questions />);
                }}
              >
                Angebot Erhalten
              </button>
              <p className={`${styles.hint}`}>
                Dauer: <strong> 2 Minuten!</strong>
              </p>
            </div>
            <div className={`${styles.item_box} ${styles.contact_form}`}>
              <h4 className={`${styles.topic_title}`}>Kontakt Form</h4>
              <p className={`${styles.desc}`}>
                Wenn Sie Fragen haben können Sie sehr schnell über unsere
                Kontakt Form uns einreichen!
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
