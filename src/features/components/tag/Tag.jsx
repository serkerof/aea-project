import styles from "./tag.module.css";
const Tag = ({ tags }) => {
  return (
    <div className={`${styles.tag_container}`}>
      Tags:
      <h5 className={`${styles.tag}`}>Paderborn</h5>
      <h5 className={`${styles.tag}`}>Bielefeld</h5>
      <h5 className={`${styles.tag}`}>Dortmund</h5>
      <h5 className={`${styles.tag}`}>Paderborn</h5>
      {tags.map((tag) => (
        <h5 className={`${styles.tag}`}>{tag}</h5>
      ))}
    </div>
  );
};

export default Tag;
