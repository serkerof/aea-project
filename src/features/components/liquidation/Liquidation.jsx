import styles from "./styles.module.css";
import visitImg from "./assets/icon/freie-besuch.png";
import reliablityImg from "./assets/icon/taetigkeiten.png";
import serviceImg from "./assets/icon/dienstleisten.png";
import keyReadyImg from "./assets/icon/schluessel-fertig.png";
import priceImg from "./assets/icon/feste-preise.png";

const Liquidation = () => {
  return (
    <div className={`${styles.container}`}>
      <h2 className={`${styles.title}`}>Unsere Ablaufprozess</h2>
      <div className={`${styles.process_container}`}>
        <div className={`${styles.outer} ${styles.orange}`}>
          <div
            className={`${styles.circle_outer} d-flex justify-center align-center`}
          >
            <img
              src={visitImg}
              alt='Kostenlose Besuch'
              className={`${styles.icon}`}
            />
          </div>
          <div className={`${styles.paragraph}`}>
            <h5 className={`${styles.step_title}`}>Kostenloser Besichtigung</h5>
            <p className={`${styles.desc}`}>
              Wir werden an einem vereinbarten Ort treffen und ein kostenloses
              Angebot machen.
            </p>
          </div>
        </div>
        <div className={`${styles.outer} ${styles.red}`}>
          <div
            className={`${styles.circle_outer} d-flex justify-center align-center`}
          >
            <img
              src={reliablityImg}
              alt='Feste Preis'
              className={`${styles.icon}`}
            />
          </div>
          <div className={`${styles.paragraph}`}>
            <h5 className={`${styles.step_title}`}>Transparente Preise</h5>
            <p className={`${styles.desc}`}>
              Sie werden keine versteckte Kosten erhalten.
            </p>
          </div>
        </div>
        <div className={`${styles.outer} ${styles.purple}`}>
          <div
            className={`${styles.circle_outer} d-flex justify-center align-center`}
          >
            <img
              src={serviceImg}
              alt='Unsere Tätigkeiten leisten'
              className={`${styles.icon}`}
            />
          </div>
          <div className={`${styles.paragraph}`}>
            <h5 className={`${styles.step_title}`}>Unsere Dienst</h5>
            <p className={`${styles.desc}`}>
              Das freundliche Team unserer arbeitet nach den höchsten
              Qualitätsstandards.
            </p>
          </div>
        </div>
        <div className={`${styles.outer} ${styles.brown}`}>
          <div
            className={`${styles.circle_outer} d-flex justify-center align-center`}
          >
            <img
              src={keyReadyImg}
              alt='Schlüssel fertig Abgabe'
              className={`${styles.icon}`}
            />
          </div>
          <div className={`${styles.paragraph}`}>
            <h5 className={`${styles.step_title}`}>Schlüsselfertige Arbeit</h5>
            <p className={`${styles.desc}`}>
              Wir planen und realisieren für Sie! Unsere Schlüsselfertige Arbeit
              wird Sie begeistern.
            </p>
          </div>
        </div>
        {/* <div className={`${styles.outer} ${styles.blue}`}>
          <div
            className={`${styles.circle_outer} d-flex justify-center align-center`}
          >
            <img
              src={priceImg}
              alt='Tätigkeiten und Rechnung'
              className={`${styles.icon}`}
            />
          </div>
          <div className={`${styles.paragraph}`}>
            <h5 className={`${styles.step_title}`}>
              Tätigkeitsbeschreibung und Rechnung
            </h5>
            <p className={`${styles.desc}`}>
              Selbstverständlich am Ende bekommen Sie von uns eine detaillierte
              Beschreibung und eine Rechnung für die geleistete Tätigkeiten.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Liquidation;
