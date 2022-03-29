import Tag from "../../../components/tag/Tag";
import ClearenceServicesLinks from "../../../components/clearence-services-links/clearenceServicesLinks";
import sectionImage from "./assets/img/wohnungsaufloesung.jpg";
import styles from "./../services.module.css";
import { useState } from "react";
import ServiceOffer from "../../../components/offer/ServiceOffer";
const ApartmentClearence = () => {
  const [openDialog, setOpenDialog] = useState();

  const closeDialog = () => {
    setOpenDialog(null);
  };
  return (
    <div className={`${styles.container}`}>
      {/* <Helmet>
        <title>Wohnungsauflösung</title>
        <meta
          name='description'
          content='Wir bieten im bereich Haushaltsauflösung...'
        />
      </Helmet> */}
      <ClearenceServicesLinks currentService='apartment' />
      <h1 className={`${styles.topic_title}`}>Wohnungsauflösung</h1>
      <img
        src={sectionImage}
        alt='wohnungsauflösung'
        className={`${styles.topic_image}`}
      />
      <Tag />{" "}
      <ServiceOffer
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        closeDialog={closeDialog}
      />
    </div>
  );
};

export default ApartmentClearence;
