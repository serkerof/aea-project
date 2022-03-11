import styles from "./style.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAllClearenceServices } from "../../pages/services/slice/clearenceServiceSlice";

const ClearenceServicesLinks = ({ currentService }) => {
  const navigate = useNavigate();
  const clearenceServices = useSelector(selectAllClearenceServices);

  return (
    <div className={`${styles.services_container}`}>
      <h2 className={`${styles.services_title}`}>
        Welche Auflösung Dienst brauchen Sie?
      </h2>
      <div className={`${styles.service_group} d-flex flex-wrap `}>
        {clearenceServices.map(
          (service) =>
            service.id !== currentService && (
              <button
                className={`${styles.item_box} d-flex align-center`}
                onClick={() => {
                  navigate(service.link);
                }}
              >
                <img
                  className={`${styles.icon}`}
                  src={service.icon}
                  alt={service.imgAlt}
                />
                <h2 className={`${styles.title}`}>&nbsp; {service.title}</h2>
              </button>
            )
        )}
      </div>
    </div>
  );
};

export default ClearenceServicesLinks;
