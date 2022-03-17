import OurServiceChooser from "../../components/our-services/OurServiceChooser";
import styles from "./home.module.css";
import SliderService from "./../../components/slider-services/SliderService";
import Liquidation from "../../components/liquidation/Liquidation";
import serviceLogo from "./assets/img/service.svg";
import OfferChooser from "../../components/offer/OfferChooser";
import { useState } from "react";
import OfferDialog from "../../components/offer/OfferDialog";
import Profit from "../../components/profits/Profit";

const Home = ({ showAd, setShowAd }) => {
  return (
    <div className={`${styles.container}`}>
      {showAd && <OfferDialog setStatus={setShowAd} />}
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
      <OfferChooser />
      {/* <SliderService /> */}

      {/* <section>
                <h3>Möchten Sie in Ihrem Haus etwas ändern und haben Sie kein Zeit dafür!</h3>
                <span className="title-divider"></span>
                <h5>Kein Problem! Wir sind rund um die Uhr für Sie da, und kümmern uns gerne an Ihre Wünsche</h5>
            </section>
            <section>
                <div>
                    <h2>Wilkommen zu A.E.A Dienstleistungen</h2>
                    <span className="title-divider"></span>
                    <p>Wir sind mit unsere Zuverlässigkeit gerne für Sie Da!</p>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                        saepe! Tempore placeat molestias atque, optio totam porro voluptate
                        consectetur, ratione nobis consequuntur rem quo. Alias qui nisi
                        aperiam doloremque molestiae?
                    </p>
                    <button>Erfahre Mehr</button>
                </div>
            </section>

            <section>
                <h2>Wollen Sie wieder säubere Räume?</h2>
                <span className="title-divider"></span>
                <p>Dann sind wir richtige Wahl für Sie!</p>
                <p>Um mehr über unsere Haushaltslösung dienst zu erfarhen Klicken Sie den Button</p>
                <button>Erfahre Mehr</button>
            </section>
            <section>
                <h3>Wir bieten unsere dienste in diesem Städte!</h3>
             
                <img src="" alt="" />
            </section>
            <section>

            </section>

            <section>
                <h2>Unsere dienste im Bereich Haushalt!</h2>
            </section>

            <section>
                <h2>Ablauf der Haushaltslösung Prozess!</h2>
            </section>
 */}
    </div>
  );
};

export default Home;
