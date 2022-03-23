import OurServiceChooser from "../../components/our-services/OurServiceChooser";
import styles from "./home.module.css";
import SliderService from "./../../components/slider-services/SliderService";
import Liquidation from "../../components/liquidation/Liquidation";
import serviceLogo from "./assets/img/service.svg";
import Profit from "../../components/profits/Profit";
import ContactForm from "../../components/contact-form/ContactForm";

const Home = ({ contactFormRef }) => {
  return (
    <div className={`${styles.container}`}>
      <OurServiceChooser />
      <div className='d-flex direction-column align-center justify-center'>
        <img className={`${styles.service_logo}`} src={serviceLogo} alt='' />
        <p className={`${styles.service_desc}`}>
          Wenn es um vertrauen oder zuverläsigem Arbeit geht, wir sind da
          bereit. Unsere Ziel ist Ihre wünsche schnell und im bestem Zustand
          erledigen. Bei uns sind Sie auch garantiert. Wir freuen uns auf
          zusammenarbeit!
        </p>
        <strong className={`${styles.service_subtitle}`}>Ihre AEA Team</strong>
      </div>
      <Liquidation />
      <div className='d-flex direction-column align-center justify-center'>
        <img className={`${styles.service_logo}`} src={serviceLogo} alt='' />
        <p className={`${styles.service_desc}`}>
          Wenn es um vertrauen oder zuverläsigem Arbeit geht, wir sind da
          bereit. Unsere Ziel ist Ihre wünsche schnell und im bestem Zustand
          erledigen. Bei uns sind Sie auch garantiert. Wir freuen uns auf
          zusammenarbeit!
        </p>
        <strong className={`${styles.service_subtitle}`}>Ihre AEA Team</strong>
      </div>
      <Profit />
      {/* <SliderService /> */}

      <ContactForm contactFormRef={contactFormRef} />
    </div>
  );
};

export default Home;
