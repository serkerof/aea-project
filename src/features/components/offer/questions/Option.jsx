import styles from "./styles.module.css";
const Option = ({ option, currentAnswer, setCurrentAnswer }) => {
  return (
    <div
      className={`${styles.option_box} ${
        currentAnswer && currentAnswer.id === option.id && styles.selected
      }`}
      onClick={() => {
        setCurrentAnswer(option);
      }}
    >
      <img
        src={option.img}
        alt={option.imgAlt}
        className={`${styles.option_image}`}
      />
      <h3 className={`${styles.option_title}`}>{option.title}</h3>
    </div>
  );
};

export default Option;
