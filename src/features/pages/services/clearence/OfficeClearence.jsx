import { useState } from "react";
import Tag from "../../../components/tag/Tag";
import ClearenceServicesLinks from "../../../components/clearence-services-links/clearenceServicesLinks";
import firmenaufloesungImg from "./assets/img/firmenaufloesung.jpg";
import styles from "./../services.module.css";
import ServiceOffer from "../../../components/offer/ServiceOffer";
const OfficeClearence = () => {
  const [openDialog, setOpenDialog] = useState();

  const closeDialog = () => {
    setOpenDialog(null);
  };
  return (
    <div className={`${styles.container}`}>
           {/* <Helmet>
        <title>Kellerauflösung</title>
        <meta
          name='description'
          content='Wir bieten im bereich Haushaltsauflösung...'
        />
      </Helmet> */}
      <ClearenceServicesLinks currentService='office' />
      <h1 className={`${styles.topic_title}`}>Firmenauflösung</h1>
      <img
        src={firmenaufloesungImg}
        alt='Firmenauflösung'
        className={`${styles.topic_image}`}
      />
      <Tag />
      <ServiceOffer
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        closeDialog={closeDialog}
      />
    </div>
  );
};

export default OfficeClearence;
