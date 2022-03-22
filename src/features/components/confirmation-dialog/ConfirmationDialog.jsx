import styles from "./styles.module.css";

const ConfirmationDialog = ({ setStatus }) => {
  return (
    <div className={`${styles.container} d-flex align-center justify-center`}>
      <div className={`${styles.context_container}`}>
        <button
          className={`${styles.close_btn}`}
          onClick={() => {
            setStatus(false);
          }}
        >
          X
        </button>
        <h5 className={`${styles.title}`}>
          Sie Haben Erfolgreich ihre Nachricht geschickt!
        </h5>
        <button className={`${styles.ok_btn}`}  onClick={() => {
            setStatus(false);
          }}>Ok</button>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
