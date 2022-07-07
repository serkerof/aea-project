import { useState } from "react";
import Tag from "../../../components/tag/Tag";
import ClearenceServicesLinks from "../../../components/clearence-services-links/clearenceServicesLinks";
import sectionImg from "./assets/img/haushaltsaufloesung.jpg";
import styles from "./../services.module.css";
import ServiceOffer from "../../../components/offer/ServiceOffer";

const HomeClearence = () => {
  const [openDialog, setOpenDialog] = useState();

  const closeDialog = () => {
    setOpenDialog(null);
  };

  const tags = [
    "Büroauflösung",
    "Wohnungsauflösung",
    "Haushaltsauflösung",
    "Entrümpelung",
  ];
  
  return (
    <div className={`${styles.container} ${styles.home_clearence}`}>
      <ClearenceServicesLinks currentService='home' />
      <h1 className={`${styles.topic_title}`}>
        Haushaltsauflösung und Entrümpelung
      </h1>
      <img
        src={sectionImg}
        alt='haushaltsauflösung'
        className={`${styles.topic_image}`}
      />
      <p>
        Wir sorgen dafür, dass Ihr Umzug mit verbundener Auflösung des Hauses
        ganz einfach wird. Gern erstellen wir Ihnen ein Angebot – natürlich
        kostenlos. Wir bieten Ihnen Hilfe bei der Entrümpelung zu jedem von
        Ihnen gewünschten Termin. Gern schauen wir uns vorab Ihre Wohnung oder
        Ihr Haus an, damit wir reell einschätzen können, wie hoch der Aufwand
        sein wird. Auch die Besichtigung führen wir natürlich kostenlos
        durch.Wir sorgen dafür, dass Ihr Umzug mit verbundener Auflösung des
        Hauses ganz einfach wird. Gern erstellen wir Ihnen ein Angebot –
        natürlich kostenlos. Wir bieten Ihnen Hilfe bei der Entrümpelung zu
        jedem von Ihnen gewünschten Termin. Gern schauen wir uns vorab Ihre
        Wohnung oder Ihr Haus an, damit wir reell einschätzen können, wie hoch
        der Aufwand sein wird. Auch die Besichtigung führen wir natürlich
        kostenlos durch.
      </p>
      <ul>
        <h3>Ein Teil unserer Leistungen sind:</h3>
        <li>
          • Kostenloses Angebot anhand Ihre Informationen (telefonisch sowie
          elektronisch) oder vor Ort
        </li>
        <li>• Zeitliche und ressourcentechnische Planung des Umzugs</li>
        <li>
          • Wir stellen Ihnen alle notwendige Verpackungsmaterial zur Vefügung
        </li>
        <li>• Wir demontieren Ihre Möbeln</li>
        <li>• Wir packen die Möbel sorgfältig wieder aus</li>
        <li>
          • Wir montieren Deine Möbel/Küche und nehmen das Verpackungsmaterial
          wieder mit
        </li>
        <li>• Transportsicheres Verpacken der Möbel ist unsere Aufgabe</li>
        <li>• Beladen des Umzugswagens</li>
        <li>• Entladen des Umzugswagens</li>
        <li>• Ladungssicherung mit Spanngurten durch unsere Profis</li>
        <li>• Transport des Umzugsgutes an die Entladeadresse</li>
        <li>• Wir stellen Deine Gegenstände dorthin wo Du möchtest</li>
      </ul>
      <Tag tags={tags} />
      <ServiceOffer
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        closeDialog={closeDialog}
      />
    </div>
  );
};

export default HomeClearence;
