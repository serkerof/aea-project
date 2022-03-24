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
            <img src={visitImg} alt='' className={`${styles.icon}`} />
          </div>
          <div className={`${styles.paragraph}`}>
            <h5 className={`${styles.step_title}`}>Kostenlose Besuch</h5>
            <p className={`${styles.desc}`}>
              Wir werden an einem vereinbartem Ort ohne zusätzlichem kosten
              treffen.
            </p>
          </div>
        </div>
        <div className={`${styles.outer} ${styles.red}`}>
          <div
            className={`${styles.circle_outer} d-flex justify-center align-center`}
          >
            <img src={reliablityImg} alt='' className={`${styles.icon}`} />
          </div>
          <div className={`${styles.paragraph}`}>
            <h5 className={`${styles.step_title}`}>Feste Preis</h5>
            <p className={`${styles.desc}`}>
              Sie werden keine versteckte kosten erhalten.
            </p>
          </div>
        </div>
        <div className={`${styles.outer} ${styles.purple}`}>
          <div
            className={`${styles.circle_outer} d-flex justify-center align-center`}
          >
            <img src={serviceImg} alt='' className={`${styles.icon}`} />
          </div>
          <div className={`${styles.paragraph}`}>
            <h5 className={`${styles.step_title}`}>Unsere Dienst</h5>
            <p className={`${styles.desc}`}>
              Wir werden uns mit zuverlässigkeit um Ihrer gewünschte Dienst
              kümmern.
            </p>
          </div>
        </div>
        <div className={`${styles.outer} ${styles.brown}`}>
          <div
            className={`${styles.circle_outer} d-flex justify-center align-center`}
          >
            <img src={keyReadyImg} alt='' className={`${styles.icon}`} />
          </div>
          <div className={`${styles.paragraph}`}>
            <h5 className={`${styles.step_title}`}>Schlüssel Fertig</h5>
            <p className={`${styles.desc}`}>
              Sie werden alle beaauftragte Artbeits erlefigt die Schlüssel
              bekommen.
            </p>
          </div>
        </div>
        <div className={`${styles.outer} ${styles.blue}`}>
          <div
            className={`${styles.circle_outer} d-flex justify-center align-center`}
          >
            <img src={priceImg} alt='' className={`${styles.icon}`} />
          </div>
          <div className={`${styles.paragraph}`}>
            <h5 className={`${styles.step_title}`}>Tätigkeiten und Rechnung</h5>
            <p className={`${styles.desc}`}>
              Am ende bekommen Sie alle von uns geleistete Tätigkeiten sowie
              Rechnung.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Liquidation;
