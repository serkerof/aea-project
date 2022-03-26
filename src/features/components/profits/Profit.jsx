import Responsive from "../../responsive/Responsive";
import sectionIcon from "./assets/icon/damenhoch.png";
import firstTopicImg from "./assets/icon/freie-besuch.png";
import secondTopicImg from "./assets/icon/zuverlaessigkeit.png";
import thirdTopicImg from "./assets/icon/schnell.png";
import fourthTopicImg from "./assets/icon/schluessel-fertig.png";
import styles from "./styles.module.css";
const Profit = () => {
  const isDesktop = Responsive().isDesktop;

  return (
    <div className={`${styles.container}`}>
      <h2 className={`${styles.title}`}>So profitieren Sie bei uns!</h2>
      <div className={`${styles.divider}`}></div>
      <h3 className={`${styles.sub_title}`}>Unsere Vorteile</h3>
      {/*  */}
      <div className={`${isDesktop && "d-grid two-column"}`}>
        <div
          className={`${styles.profit_box} d-flex justify-center align-center`}
        >
          <img
            src={sectionIcon}
            className={`${styles.section_image}`}
            alt='Wir bieten bestmöglichem Service und Sie profitieren bei unsere Dienstleistungen'
          />
          <div
            className={`${styles.item} ${styles.bg_green} d-flex align-center justify-center`}
          >
            <span className={`${styles.number}`}> 3</span>
          </div>
          <div
            className={`${styles.item} ${styles.bg_aqua} d-flex align-center justify-center`}
          >
            <span className={`${styles.number}`}> 1</span>
          </div>
          <div
            className={`${styles.item} ${styles.bg_yellow} d-flex align-center justify-center`}
          >
            <span className={`${styles.number}`}> 2</span>
          </div>
          <div
            className={`${styles.item} ${styles.bg_purple} d-flex align-center justify-center`}
          >
            <span className={`${styles.number}`}> 4</span>
          </div>
        </div>
        <div>
          <section
            className={`${styles.paragraph_section} ${styles.txt_green}`}
          >
            <h4 className={`${styles.topic_title}`}>Kostenlose Termin</h4>
            <p className={`${styles.topic_desc}`}>
              Sie werden vor Ort kostenlos besucht und ein Angebot bekommen.
            </p>
          </section>
          <section
            className={`${styles.paragraph_section}  ${styles.txt_aqua}`}
          >
            <h4 className={`${styles.topic_title}`}>Wertvolle Dienst </h4>
            <p className={`${styles.topic_desc}`}>
              Mit hohem verantwortungsvoll werden wir uns um von Ihnen
              beauftragte Dienstleistung kümmern.
            </p>
          </section>
          <section
            className={`${styles.paragraph_section} ${styles.txt_yellow}`}
          >
            <h4 className={`${styles.topic_title}`}>Schnell</h4>
            <p className={`${styles.topic_desc}`}>
              Sie werden sehr schnell behandelt und ein Besuchtermin kriegen.
            </p>
          </section>
          <section
            className={`${styles.paragraph_section}  ${styles.txt_purple}`}
          >
            <h4 className={`${styles.topic_title}`}>Schlüssel fertig</h4>
            <p className={`${styles.topic_desc}`}>
              Alle gewünschte und vereinbarte Aufgaben werden erledigt und
              Schlüssel fertig abgegeben.
            </p>
          </section>
        </div>
        <div className={`${styles.icon_group} d-flex justify-center`}>
          <div
            className={`${styles.topic_box} ${styles.bg_green} d-flex align-center justify-center`}
          >
            <img
              src={firstTopicImg}
              className={`${styles.topic_image}`}
              alt='Kostenlose Besuch für Ihre Beauftragte Dienstleistung'
            />
            <div className={`${styles.line}`}></div>
          </div>
          <div
            className={`${styles.topic_box} ${styles.bg_aqua} d-flex align-center justify-center`}
          >
            <img
              src={secondTopicImg}
              className={`${styles.topic_image}`}
              alt='Kostenlose Besuch für Ihre Beauftragte Dienstleistung'
            />
            <div className={`${styles.line}`}></div>
          </div>
          <div
            className={`${styles.topic_box}  ${styles.bg_yellow} d-flex align-center justify-center`}
          >
            <img
              src={thirdTopicImg}
              className={`${styles.topic_image}`}
              alt='Kostenlose Besuch für Ihre Beauftragte Dienstleistung'
            />
            <div className={`${styles.line}`}></div>
          </div>
          <div
            className={`${styles.topic_box} ${styles.bg_purple}  d-flex align-center justify-center`}
          >
            <img
              src={fourthTopicImg}
              className={`${styles.topic_image}`}
              alt='Kostenlose Besuch für Ihre Beauftragte Dienstleistung'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profit;
