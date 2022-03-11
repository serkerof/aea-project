import styles from "./ourServices.module.css";

const OurServicesDialog = ({ allServices, setDialogStatus }) => {
  return (
    <div
      className={`${styles.dialog_container} d-flex justify-center align-center`}
    >
      <div
        className={`${styles.close_btn}`}
        onClick={() => {
          setDialogStatus(false);
        }}
      >
        X
      </div>
      <div
        className={`${styles.service_group} d-flex flex-wrap justify-center`}
      >
        {allServices}
      </div>
    </div>
  );
};

export default OurServicesDialog;
