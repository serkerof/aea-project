import { useState } from "react";
import Tag from "../../../components/tag/Tag";
import ClearenceServicesLinks from "../../../components/clearence-services-links/clearenceServicesLinks";
import sectionImg from "./assets/img/haushaltsaufloesung-bielefeld.jpg";
import styles from "./../services.module.css";
import ServiceOffer from "../../../components/offer/ServiceOffer";

const HomeClearence = () => {
  const [openDialog, setOpenDialog] = useState();

  const closeDialog = () => {
    setOpenDialog(null);
  };
  return (
    <div className={`${styles.container}`}>
      <ClearenceServicesLinks currentService='home' />
      <h1 className={`${styles.topic_title}`}>Haushaltsauflösung</h1>
      <img
        src={sectionImg}
        alt='haushaltsauflösung'
        className={`${styles.topic_image}`}
      />
      <section>
        <h2 className={`${styles.section_title}`}>
          Haushaltsauflösung in Bielefeld
        </h2>
        <p>
          Müssen Sie Termine bei einer Haushaltsauflösung einhalten? Dann sind
          Sie hier an der richtigen Adresse! Wir bieten Ihnen pünktlich und in
          kurzer Zeit professionelle Haushaltsauflösungen in Bielefeld. Die
          Haushaltsauflösung ist komplexer und umfangreicher als Sie denken,
          aber die Fachleute von unserem Entrümpelungsunternehmen sind auf Ihrer
          Seite.
        </p>
        <p>
          Dank unserer langjährigen Tätigkeit im Liquidationssektor sind wir zu
          Spezialisten geworden. Wir werden im Voraus ein passendes Angebot für
          Sie berechnen. Anschließend führen wir so schnell wie möglich eine
          reibungslose Auflösung des Haushalts durch. Gerne übernehmen wir den
          Transport der Sachen in die neuen vier Wände. Mit uns kommen keine
          versteckten Kosten während der Haushaltsauflösungen in Bielefeld auf.
          Wir vereinbaren mit Ihnen im Voraus einen Preis für unsere
          Dienstleistungen.
        </p>
        <p>
          Sie zahlen nur, wenn die Auflösung Ihres Haushalts für Sie überzeugend
          ausgeführt wurde. Wir kaufen alle nützlichen Gegenstände wie
          Elektrogeräte oder Antiquitäten, was die Gesamtkosten für die
          Haushaltsauflösung senkt. Darüber hinaus sind unsere Mitarbeiter bei
          Auflösung von Haushalten versichert. Wir können Ihnen auch ein faires
          und angemessenes Angebot unterbreiten, falls Wertsachen oder
          Gegenstände nicht zum Recycling geschickt werden.
        </p>
      </section>

      <section>
        <h2 className={`${styles.section_title}`}>
          Kosten für eine Haushaltsauflösung in Bielefeld
        </h2>
        <p>
          Die Kosten für die Auflösung eines Haushalts hängen in Bielefeld von
          vielen Faktoren ab. Bei der Preisermittlung werden die Art des Abfalls
          (z. B. Chemikalien, sperrige Gegenstände), die Menge, möglicherweise
          die Transportkosten zum neuen Wohnort und die erforderlichen
          Arbeitszeiten berücksichtigt. Aus diesem Grund können wir vorab und
          pauschal keine festen Preise anbieten, da die Entscheidung bei jedem
          Haushalt individuell ist.
        </p>
        <ul>
          <li>
            Welche Leistungen sind bei der Auflösung eines Haushalts enthalten?
            Wenn der Haushalt aufgelöst wird, sind folgende Leistungen auf
            Wunsch gerne im Gesamtpreis inbegriffen:
          </li>
          <li>Entfernen von Tapeten, Laminat, Fliesen, Teppich</li>
          <li>Demontage aller Art, wie z. B. Küchen</li>
          <li>Entfernung von Nägeln, Lampen, Styropor</li>
          <li>
            Professionelle Trennung von wiederverwertbaren Materialien und
            Abfällen
          </li>
          <li>Reinigung mit einem Besen</li>
          <li>Transport und ordnungsgemäße Entsorgung</li>
        </ul>
        <p>
          Dazu können Sie verschiedene Dienstleistungen wie die Grundreinigung
          mit bestellen. Wir sind ebenso Ihr Partner, wenn es um Müllabfuhr,
          Wohnungsliquidation oder Haushaltsauflösungen geht. Unsere
          Entrümpelungsfirma ist auf die unbeschwerte Auflösung oder Räumung von
          Unternehmen spezialisiert.
        </p>
      </section>
      <section>
        <h2 className={`${styles.section_title}`}>
          Schnelligkeit einer Haushaltsauflösung in Bielefeld
        </h2>
        <p>
          Unser erfahrenes Entrümpelungs-Team ermöglicht es uns, eine
          Haushaltsauflösung in Bielefeld schnell und professionell auszuführen.
          Nach einem kostenlosen Besuch erhalten Sie ein individuelles Angebot
          und wir legen sofort ein verbindliches Fälligkeitsdatum fest. Gerne
          berücksichtigen wir den gewünschten Termin für die Liquidation des
          Haushalts und übergeben Ihnen die Räumlichkeiten in einem gepflegten
          Zustand. Lassen Sie sich von unserem gut eingespielten Team
          überzeugen! Unser Entrümpelungsunternehmen ist Ihr professioneller
          Partner für die kompetente Auflösung von Haushalten in Bielefeld und
          Umgebung. Wir sind mit der schnellen und diskreten Liquidation von
          Wohnungen und Häusern aller Art und Größe beschäftigt. Von der
          kleinsten Wohnung bis zum Haus führen wir Haushaltslösungen und die
          Entsorgung von Müll für Sie fachmännisch aus. Mit dem entsprechenden
          Know-how und der fachgerechten Strategie unterstützen wir Sie als
          professioneller Haushaltsliquidator im Falle einer bevorstehenden
          Auflösung. Wir organisieren nicht nur die Evakuierung des Haushalts,
          sondern sorgen uns auch um eine saubere Ausführung.
        </p>
      </section>
      <Tag />
      <ServiceOffer
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        closeDialog={closeDialog}
      />
    </div>
  );
};

export default HomeClearence;
