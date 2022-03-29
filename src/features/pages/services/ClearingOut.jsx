import Tag from "../../components/tag/Tag";
import sectionImg from "./assets/img/entruempelung.jpg";
import styles from "./services.module.css";
import { useState } from "react";
import ServiceOffer from "../../components/offer/ServiceOffer";

const ClearingOut = () => {
  const [openDialog, setOpenDialog] = useState();

  const closeDialog = () => {
    setOpenDialog(null);
  };
  return (
    <div >
      <div className={`${styles.container}`}>
        {/* <Helmet>
        <title>Kellerauflösung</title>
        <meta
          name='description'
          content='Wir bieten im bereich Haushaltsauflösung...'
        />
      </Helmet> */}
        <h1 className={`${styles.topic_title}`}>Entrümpelung</h1>
        <img
          src={sectionImg}
          alt='entrümpelung AEA dienste Bielefeld'
          className={`${styles.topic_image}`}
        />
        <Tag />
        <ServiceOffer
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          closeDialog={closeDialog}
        />
      </div>
    </div>
  );
};

export default ClearingOut;
