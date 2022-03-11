import styles from "./tag.module.css";
const Tag = () => {
  return (
    <div>
      Tags:
      <h5 className={`${styles.tag}`}>Bielefeld</h5>
      <h5 className={`${styles.tag}`}>Firmenauflösung</h5>
      <h5 className={`${styles.tag}`}>Haushaltsauflösung</h5>
      <h5 className={`${styles.tag}`}>Kellerauflösung</h5>
      <h5 className={`${styles.tag}`}>Wohnungsauflösung</h5>
    </div>
  );
};

export default Tag;
