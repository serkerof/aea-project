import AliceCarousel from "react-alice-carousel";
import styles from "./sliderService.module.css";
import "react-alice-carousel/lib/alice-carousel.css";
import { useSelector } from "react-redux";
import { selectAllServices } from "./../our-services/slice/servicesSlice";

const SliderService = () => {
  const allServices = useSelector(selectAllServices);
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  const renderedItems = allServices.map((item) => {
    return (
      <div className={`d-flex direction-column align-center justify-center`}>
        <img className={`${styles.img}`} src={item.icon} alt='' />
        <p className={`${styles.img_subtitle}`}>{item.title}</p>
      </div>
    );
  });

  return (
    <div
      className={`${styles.container} d-flex direction-column align-center justify-center`}
    >
      <h4 className={`${styles.profit_title}`}>Ihre Services</h4>
      <AliceCarousel
        autoPlay
        mouseTracking
        disableButtonsControls
        disableDotsControls
        infinite={true}
        items={renderedItems}
        responsive={responsive}
        autoPlayInterval={3000}
        animationDuration={2000}
        autoPlayStrategy={"none"}
      />
    </div>
  );
};

export default SliderService;
