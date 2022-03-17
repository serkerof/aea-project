import { useEffect, useState } from "react";
import styles from "./styles.module.css";
const Floor = ({ currentValue, setCurrentAnswer }) => {
  const [selectedFloor, setSelectedFloor] = useState(currentValue);

  const floors = {
    keller: "Keller",
    eg: "E.G",
    firstFloor: "1.E.",
    secondFloor: "2.E.",
    thirdFloor: "3.E.",
  };

  useEffect(() => {
    setSelectedFloor(currentValue);
  }, [currentValue]);

  useEffect(() => {
    selectedFloor !== "" &&
      selectedFloor !== " " &&
      setCurrentAnswer(
        !isNaN(selectedFloor) ? selectedFloor + ".E." : selectedFloor
      );
  }, [selectedFloor]);

  return (
    <div className='d-flex flex-wrap justify-around'>
      <button
        className={`${styles.floor_btn} ${
          selectedFloor === floors.keller && styles.selected
        }`}
        onClick={() => {
          setSelectedFloor(floors.keller);
        }}
      >
        {floors.keller}
      </button>
      <button
        className={`${styles.floor_btn} ${
          selectedFloor === floors.eg && styles.selected
        }`}
        onClick={() => {
          setSelectedFloor(floors.eg);
        }}
      >
        {floors.eg}
      </button>
      <button
        className={`${styles.floor_btn} ${
          selectedFloor === floors.firstFloor && styles.selected
        }`}
        onClick={() => {
          setSelectedFloor(floors.firstFloor);
        }}
      >
        {floors.firstFloor}
      </button>
      <button
        className={`${styles.floor_btn} ${
          selectedFloor === floors.secondFloor && styles.selected
        }`}
        onClick={() => {
          setSelectedFloor(floors.secondFloor);
        }}
      >
        {floors.secondFloor}
      </button>
      <button
        className={`${styles.floor_btn} ${
          selectedFloor === floors.thirdFloor && styles.selected
        }`}
        onClick={() => {
          setSelectedFloor(floors.thirdFloor);
        }}
      >
        {floors.thirdFloor}
      </button>
      <label className={`${styles.floor_input_label}`}>
        Wenn Sie nicht gefunden haben, tippen Sie hier ein
      </label>
      <input
        className={`${styles.floor_input}`}
        placeholder='0'
        type='text'
        value={selectedFloor}
        onChange={(e) => {
          setSelectedFloor(e.target.value);
        }}
      />
    </div>
  );
};

export default Floor;
