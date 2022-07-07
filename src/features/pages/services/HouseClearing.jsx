import Tag from "../../components/tag/Tag";
import styles from "./services.module.css";

const Clearing = () => {
  const tags = [
    "Hausreinigung",
    "Glasreinigung",
    "Büroreinigung",
    "Gebäudereinigung",
  ];

  return (
    <div className={`${styles.container} ${styles.house_cleaning}`}>
      <h1 className={`${styles.topic_title}`}>Reinigung</h1>
      <p>
        Egal, ob Privathaushalte, gewerbliche Objekte, Gastronomiebetriebe oder
        Büro- und Praxisräume, wir bieten unsere Leistungen in den genannten
        Bereichen an. Wir beraten Sie gerne und stellen Ihnen ein persönliches
        Leistungspaket für die Gebäudereinigung zusammen. Das freundliche Team
        unserer Reinigungsfirma arbeitet nach den höchsten Qualitätsstandards.
        Im Bedarfsfall ist unser <strong>24h-Stunden-Service </strong> für alle
        Kunden rund um die Uhr erreichbar.
      </p>
      <ul>
        <h3>
          <strong> Zu den einigen unseren Leistungen gehören: </strong>
        </h3>
        <li>• Hausreinigung</li>
        <li>• Grünflächenbetreuung</li>
        <li>• Gehsteigreinigung</li>
        <li>• Unterhaltsreinigung</li>
        <li>• Grundreinigung</li>
        <li>• Küchenreinigung</li>
        <li>
          • Reinigung für alle Objekte unter Verwendung von
          Bio-Reinigungsmitteln
        </li>
      </ul>
      <Tag tags={tags} />
    </div>
  );
};

export default Clearing;
