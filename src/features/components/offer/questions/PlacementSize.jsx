import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const PlacementSize = ({
  isPreviousQuestion,
  setIsPreviousQuestion,
  currentAnswer,
  setCurrentAnswer,
}) => {
  const [rangeValue, setRangeValue] = useState(currentAnswer);

  useEffect(() => {
    typeof currentAnswer === "string" &&
      setRangeValue(Number(currentAnswer.split(" ")[0])) &&
      setIsPreviousQuestion(false);
  }, [isPreviousQuestion]);

  useEffect(() => {
    setCurrentAnswer(rangeValue + " m2");
  }, [rangeValue]);

  return (
    <form
      action=''
      className={`${styles.range_form} d-flex direction-column align-center`}
    >
      <div>
        <input
          type='number'
          className={`${styles.range_number}`}
          value={rangeValue}
          onChange={(e) => {
            setRangeValue(Number(e.target.value));
          }}
        />
        <span>&nbsp; m²</span>
      </div>
      <input
        type='range'
        className={`${styles.range}`}
        value={rangeValue}
        onChange={(e) => {
          setRangeValue(Number(e.target.value));
        }}
        min='10'
        max='1000'
      />
    </form>
  );
};

export default PlacementSize;
