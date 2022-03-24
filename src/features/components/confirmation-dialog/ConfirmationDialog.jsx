import styles from "./styles.module.css";

const ConfirmationDialog = ({ setStatus, handleCloseDialog }) => {
  const closeDialog = () => {
    setStatus(false);
    handleCloseDialog && handleCloseDialog();
  };

  return (
    <div className={`${styles.container} d-flex align-center justify-center`}>
      <div className={`${styles.context_container}`}>
        <button className={`${styles.close_btn}`} onClick={closeDialog}>
          X
        </button>
        <h5 className={`${styles.title}`}>
          Sie Haben Erfolgreich ihre Nachricht geschickt!
        </h5>
        <button className={`${styles.ok_btn}`} onClick={closeDialog}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
