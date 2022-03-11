import React, { useState } from "react";
import { useSelector } from "react-redux";
import OurServices from "./OurServices";
import OurServicesDialog from "./OurServicesDialog";
import { selectAllServices } from "./slice/servicesSlice";
import { useNavigate } from "react-router-dom";
import styles from "./ourServices.module.css";

const OurServiceChooser = () => {
  const navigate = useNavigate();
  const allServicesData = useSelector(selectAllServices);
  const [dialogStatus, setDialogStatus] = useState(false);
  const allServices = allServicesData.map((service) => (
    <div
      className={`${styles.item_box} d-flex direction-column justify-center align-center `}
      key={service.id}
      onClick={() => {
        navigate(service.link);
      }}
    >
      <img
        className={`${styles.icon}`}
        src={service.icon}
        alt={service.imageAlt}
      />
      <h3 className={`${styles.service_title}`}>{service.title}</h3>
      <h5 className={`${styles.service_desc}`}>{service.description}</h5>
    </div>
  ));

  return dialogStatus ? (
    <OurServicesDialog
      allServices={allServices}
      setDialogStatus={setDialogStatus}
    />
  ) : (
    <OurServices allServices={allServices} setDialogStatus={setDialogStatus} />
  );
};

export default OurServiceChooser;
