import { useState } from "react";
import Tag from "../../../components/tag/Tag";
import ClearenceServicesLinks from "../../../components/clearence-services-links/clearenceServicesLinks";
import sectionImg from "./assets/img/kelleraufloesung.jpg";
import styles from "./../services.module.css";
import ServiceOffer from "../../../components/offer/ServiceOffer";
const GarageClearence = () => {
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
      <ClearenceServicesLinks currentService='garage' />
      <h1 className={`${styles.topic_title}`}>Kellerauflösung</h1>
      <img
        src={sectionImg}
        alt='kellerauflösung'
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

export default GarageClearence;
