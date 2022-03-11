import ClearenceServicesLinks from "../../components/clearence-services-links/clearenceServicesLinks";
import Tag from "../../components/tag/Tag";
import firmenaufloesungImg from "./assets/img/firmenaufloesung-bielefeld.jpg";
import styles from "./services.module.css";

const OfficeClearence = () => {
  return (
    <div className={`${styles.container}`}>
      <ClearenceServicesLinks currentService='office' />
      <h1 className={`${styles.topic_title}`}>Firmenauflösung</h1>
      <img
        src={firmenaufloesungImg}
        alt=''
        className={`${styles.topic_image}`}
      />
      <section>
        <p>
          Wenn ein Unternehmen wegen Insolvenz geschlossen werden muss, können
          Sie sehr kostengünstig und schnell eine ordnungsgemäße Firmenauflösung
          durch unser Unternehmen durchführen lassen. Wir schicken die während
          der Auflösung angesammelten Möbel und Elektrogeräte zum Recycling auf
          eine Mülldeponie. Wenn Sie uns jetzt mit einer Firmenauflösung
          beauftragen möchten, müssen Sie uns nur anrufen. Wenn das Geschäft
          liquidiert wird, bieten wir robuste Abfallsammelbehälter für die
          Unternehmensauflösung an.
        </p>
        <p>
          Als Premium-Dienstleister verfügt unser Entrümpelungsunternehmen in
          Bielefeld immer über die notwendige Ausrüstung, um ein Unternehmen
          aufzulösen. Ob Fahrzeuge, Apparatur oder Facharbeiter – wir bieten
          Ihnen alles, was Sie für eine erfolgreiche Auflösung Ihres
          Unternehmens benötigen. Dank unserer langjährigen Erfahrung sind wir
          in der Lage, kundenorientierte Dienstleistungen sowohl für kleine
          Auflösungen als auch für komplexe Firmenliquidationen anzubieten.
          Unser Service ist immer optimal auf Ihre Anforderungen zugeschnitten.
          Dementsprechend planen wir gemeinsam mit Ihnen die Auflösung des
          Unternehmens im Voraus und entscheiden, welche Arbeiten zu erledigen
          sind. Darüber hinaus werden individuelle Wünsche berücksichtigt,
          ebenso wie der Einsatz des richtigen Werkzeugs. Wir machen Sie auf die
          Einhaltung der festgelegten Zeitpläne aufmerksam.
        </p>
      </section>

      <section>
        <h2 className={`${styles.section_title}`}>
          Auflösung von Unternehmen in Bielefeld
        </h2>
        <p>
          Wenn Sie einen Umzug planen, Büroräume wechseln oder ein ganzes Lager
          verlegen möchten, übernehmen wir als Experten der Entrümpelung in
          Bielefeld diese Arbeit gerne für Sie. Richten Sie schnell und einfach
          eine kostenlose Anfrage an uns. In diesem Zusammenhang können alle
          Fragen und Anliegen geklärt werden. Wir stellen Ihnen dann einen
          zuverlässigen, transparenten und vor allem verbindlichen
          Kostenvoranschlag zur Verfügung. Sie können immer sicher sein, dass
          der von uns angegebene Auflösungspreis komplex ist.
        </p>
        <p>
          Sie wollen Geschäftsräume, Büros, Lagerhäuser, Hallen, Freiflächen
          oder andere Bereiche auflösen? Covid hat viele Unternehmen und
          Selbstständige betroffen. Staatliche Beschränkungen haben viele Firmen
          in Deutschland schmerzlich getroffen. Wir stehen Ihnen in dieser Zeit
          zur Seite! Denn mit uns als professionelles Auflösungsunternehmen ist
          die Aufgabe schnell erledigt, da wir über viel Erfahrung auf diesem
          Gebiet verfügen. Wir sind sehr gut mit Dienstleistern wie
          Entsorgungsunternehmen und Wohltätigkeitsorganisationen vernetzt und
          bestens mit behördlichen Vorschriften wie Parkausweisen vertraut.
        </p>
        <p>
          Dank unserer Spezialisten aus der Entrümpelung sind auch große
          Projekte kein Problem. Unsere Mitarbeiter wissen genau, welche
          Schritte erforderlich sind, um einen zuverlässigen, schnellen und vor
          allem sauberen Betrieb zu gewährleisten. Im Gesamtpreis sind auch
          Einzelhandels- und Büromöbel, Komponenten, Edelmetalle, Lager,
          Lagerbestände und Ausrüstungen enthalten. Darüber hinaus unterstützen
          wir Sie gerne beim Verkauf der restlichen Waren und kümmern uns
          zuverlässig um das Designkonzept.
        </p>
      </section>
      <section>
        <h2 className={`${styles.section_title}`}>
          Liquidation eines Büros oder Auflösung eines Lagers in Bielefeld
        </h2>
        <p>
          Alle Unternehmen und Firmen begannen irgendwann und fingen klein an.
          Bei der Erweiterung oder Auswahl eines neuen Standortes ergeben sich
          mehrere Herausforderungen: Neue Räumlichkeiten müssen gefunden,
          renoviert und eingerichtet werden. Im Idealfall sollte die Arbeit
          reibungslos fortgesetzt werden. Dies ist für gewöhnlich eine
          angespannte Handlung. Mit uns können Sie die alten Räumlichkeiten
          schnell vergessen und sich auf neue Projekte und den neuen
          Arbeitsplatz konzentrieren. Sind Ihre alten Büros immer noch voll mit
          unbenutzten Tischen, Stühlen, Druckern, Bartheken, Farbtischen und
          Resten von Renovierungsarbeiten? Kontaktieren Sie uns, wir erledigen
          den Rest.
        </p>
        <p>
          Insolvenz ist oft stressig und sowohl für den Unternehmer als auch
          unter bestimmten Umständen für den Insolvenzverwalter äußerst
          frustrierend. Wir kümmern uns um die nervigen Details in einem solchen
          Fall. Beim Transport von Materialien aus der Liquidation des
          Unternehmens achten wir auf die professionelle und vorgeschriebene
          Entsorgung. Wir übergeben alle Räumlichkeiten sauber, gleichzeitig
          sind Kosteneffizienz, Sicherheit und Termintreue die absoluten
          Eckpfeiler unserer seriösen Arbeit. Wir können auch ganze Unternehmen
          oder einzelne Filialen und Geschäftsräume für Sie kompetent und
          professionell auflösen.
        </p>
      </section>
      <Tag />
    </div>
  );
};

export default OfficeClearence;
