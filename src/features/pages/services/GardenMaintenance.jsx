import Tag from "../../components/tag/Tag";
import styles from "./services.module.css";
import sectionImg from "./assets/img/gartenpflege.jpg";

const GardenMaintenance = () => {
  const tags = ["Gartenpflege"];

  return (
    <div className={`${styles.container}`}>
      <h1 className={`${styles.topic_title}`}>Gartenpflege</h1>
      <img
        src={sectionImg}
        alt='gartenpflege'
        className={`${styles.topic_image}`}
      />
      <p>
        Eine gepflegte Grünfläche trägt viel zum äußeren Erscheinungsbild bei.
        Damit der Garten nach der Fertigstellung in allen Farben erblühen kann,
        ist kompetente und ausführliche Arbeit erforderlich. Zu unseren
        Leistungen im Bereich der Gartenpflege gehören Baumpflege,
        Pflanzenschutz und Pflanzenschnitt, Schädlingsbekämpfung sowie
        Rasenpflege. Wir stehen jederzeit zur Verfügung, egal ob es sich um
        einen kleinen Privatgarten oder eine große Gartenanlage handelt.
      </p>
      <p>
        Wo die Pflanzen, Bäume und Sträucher stehen, wo Rasen wächst und Gärten
        angelegt sind, muss auch sorgfältig und kompetent gepflegt werden. Denn
        Blumen und Sträucher benötigen Wasser und Schutz vor Schädlingen.
        Angelegte Wege im Garten oder Park können nur dann ihre Wirkung
        entfalten, wenn Sie regelmäßig gesäubert und gepflegt werden.
      </p>
      <Tag tags={tags} />
    </div>
  );
};

export default GardenMaintenance;
