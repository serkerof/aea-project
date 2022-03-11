import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { useSelector } from "react-redux";
import ContactBar from "../../components/contact-bar/ContactBar";
import ContactForm from "../../components/contact-form/ContactForm";
import OurServiceChooser from "../../components/our-services/OurServiceChooser";
import styles from "./home.module.css";
import SliderService from "./../../components/slider-services/SliderService";
const Home = () => {
  return (
    <div className={`${styles.container}`}>
      <OurServiceChooser />
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
