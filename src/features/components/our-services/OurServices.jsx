import styles from "./ourServices.module.css";
import AliceCarousel from "react-alice-carousel";
import { useSelector } from "react-redux";
import { selectAllServices } from "./slice/servicesSlice";
import { useNavigate } from "react-router-dom";
import forwardsSvg from "./assets/icon/forwards.svg";
const OurServices = ({ setDialogStatus }) => {
  const navigate = useNavigate();
  const allServicesData = useSelector(selectAllServices);

  const allServices = allServicesData.map((service) => (
    <div
      className={`${styles.item_box} d-flex direction-column justify-center align-center `}
      key={service.id}
      // onClick={() => {
      //   navigate(service.link);
      // }}
    >
      <img
        className={`${styles.icon}`}
        src={service.icon}
        alt={service.imageAlt}
      />
      <h3 className={`${styles.service_title}`}>{service.title}</h3>
      <h5 className={`${styles.service_desc}`}>{service.description}</h5>
      <img
        src={forwardsSvg}
        className={`${styles.link_icon}`}
        alt={`entdecke mehr über ${service.title}`}
      />
    </div>
  ));
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  return (
    <div
      className={`${styles.container} d-flex direction-column justify-center align-center`}
    >
      <h2 className={`${styles.title}`}>Unsere Leistungen</h2>
      <div className={`${styles.title_divider}`}></div>
      <h3 className={`${styles.subtitle}`}>Wir sind für Sie da!</h3>
      {/* <div className={`${styles.service_group} d-flex justify-around`}> */}
      <AliceCarousel
        autoPlay
        mouseTracking
        disableButtonsControls
        disableDotsControls
        infinite={true}
        items={allServices}
        responsive={responsive}
        autoPlayInterval={2000}
        animationDuration={2000}
        autoPlayStrategy={"none"}
      />
      {/* </div> */}
      <button
        className={`${styles.find_more_btn}`}
        onClick={() => {
          setDialogStatus(true);
        }}
      >
        Siehe Alle
      </button>
    </div>
  );
};

export default OurServices;
