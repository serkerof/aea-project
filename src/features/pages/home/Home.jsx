import OurServiceChooser from "../../components/our-services/OurServiceChooser";
import styles from "./home.module.css";
import SliderService from "./../../components/slider-services/SliderService";
import Liquidation from "../../components/liquidation/Liquidation";
import serviceLogo from "./assets/img/service.svg";
import serviceSectionImg from "./assets/img/section.jpg";
import nightServiceImg from "./assets/icon/rundumdieuhr.svg";
import Profit from "../../components/profits/Profit";
import ContactForm from "../../components/contact-form/ContactForm";

const Home = ({ contactFormRef }) => {
  return (
    <div className={`${styles.container}`}>
      <OurServiceChooser />

      <div
        className={`${styles.about_company} d-flex align-center justify-center flex-wrap`}
      >
        <div className={`${styles.info_section}`}>
          <h2 className={`${styles.title}`}>AEA Dienstleistungen</h2>
          <p className={`${styles.service_desc}`}>
            Wenn es um vertrauen oder zuverläsigem Arbeit geht, wir sind da
            bereit. Unsere Ziel ist Ihre wünsche schnell und im bestem Zustand
            erledigen. Bei uns sind Sie auch garantiert. Wir freuen uns auf
            Zusammenarbeit!
            <br />
            <strong className={`${styles.service_subtitle}`}>
              Ihre AEA Team
            </strong>
          </p>
          <button
            className={`${styles.contact_btn}`}
            onClick={() =>
              contactFormRef.current.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Kontaktieren
          </button>
        </div>
        <div className={`${styles.img_section}`}>
          <img
            className={`${styles.img}`}
            src={serviceSectionImg}
            alt='Wir freuen uns zusammenarbeit'
          />
        </div>
      </div>
      <Liquidation />
      <div
        className={`${styles.night_service}  d-flex align-center justify-center flex-wrap`}
      >
        <div
          className={`${styles.img_section} d-flex align-center justify-center `}
        >
          <img
            className={`${styles.img}`}
            src={nightServiceImg}
            alt='rund um die Uhr für Sie Da!'
          />
        </div>
        <div className={`${styles.info_section}`}>
          <h2 className={`${styles.title}`}>
            Habt Ihr im Mitternacht störung?
          </h2>
          <h3 className={`${styles.sub_title}`}>
            <div className={`${styles.divider}`}></div>
            Gerne bieten wir unsere Dienstleistungen auch im Mitternacht.{" "}
          </h3>
          <p className={`${styles.service_desc}`}>
            Als AEA Team wir wollen immer auf unseren Kunden Seite sein und in
            jederzeit helfen! Wenn Sie Probleme im Mitternacht oder Wünsch
            Termine am Wochenende haben ist egal! Wir sind rund um die Uhr und
            ganzes Woche für Sie da!
          </p>
          <button
            className={`${styles.contact_btn}`}
            onClick={() =>
              contactFormRef.current.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Kontaktieren
          </button>
        </div>
      </div>
      <Profit />
      {/* <SliderService /> */}

      <div className={`${styles.hint}`}>
        Damit wir Ihnen Schnellstmöglich helfen können bitte füllen Sie unsere
        Befragung!
      </div>

      <ContactForm contactFormRef={contactFormRef} />
    </div>
  );
};

export default Home;
