import liquidationImg from "./assets/img/ablaufprozess.jpg";
import styles from "./style.module.css";
const Liquidation = () => {
  return (
    <div>
      <img
        className={`${styles.img}`}
        src={liquidationImg}
        alt='ablaufprozesse ihre dienste bei aea dienstleistungen'
      />
    </div>
  );
};

export default Liquidation;
