import styles from "./services.module.css";
import sectionImg from "./assets/img/umzug.jpg";
const MovingOut = () => {
  return (
    <div className={`${styles.container}`}>
      <h1 className={`${styles.topic_title}`}>
        Haushaltsauflösung und Entrümpelung
      </h1>
      <img
        src={sectionImg}
        alt='haushaltsauflösung'
        className={`${styles.topic_image}`}
      />

      <p>
        Unser Hauptgeschäft sind Möbeltransporte, Übersiedlungen ( Umzüge) sowie
        Sonderfahrten.
      </p>
      <p>Jedoch übernehmen wir gerne jeden anderen möglichen Transport.</p>
      <p>Wir garantieren Ihnen vollste Zufriedenheit!</p>
      <p>
        Als Profi für Umzüge und Transporte arbeiten wir immer nach denselben
        Kriterien:
      </p>
      <p>Wir sind schnell, zuverlässig und sauber.</p>
      <p>
        Egal ob Sie innerhalb Bielefeld und Nachbarstädten umziehen oder in ein
        anderes Land übersiedeln – wir sind Ihr zuverlässiger Partner für jeden
        Umzug und dazu noch schnell! Unsere Monteure arbeiten präzise, um Ihr
        Hab und Gut zu schützen, aber auch zuverlässig und schnell. Diese beiden
        Eigenschaften müssen sich schließlich nicht ausschließen.
      </p>
      <p>
        Auch für alle anderen Transporte unterbreiten wir Ihnen gerne ein
        individuelles Angebot – rufen Sie uns einfach an!
      </p>
    </div>
  );
};

export default MovingOut;
