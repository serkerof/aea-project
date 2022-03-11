import AliceCarousel from "react-alice-carousel"
import styles from "./sliderProfit.module.css";
import 'react-alice-carousel/lib/alice-carousel.css';
import { useSelector } from "react-redux";
import { selectAllProfits } from "./profit-slice/profitSlice";



const SliderProfit = () => {
    const allProfits = useSelector(selectAllProfits);
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 }
    };
    const renderedItems = allProfits.map(item => {
        return (
            <div className={`${styles.profit_section} d-flex direction-column align-center justify-center`}>
                <img className={`${styles.img}`} src={item.icon} alt="" />
                <p className={`${styles.img_subtitle}`}>
                    {item.title}
                </p>
            </div>
        )
    })

    return (
        <div className={`${styles.container} d-flex direction-column align-center justify-center`}>
            <h4  className={`${styles.profit_title}`}>Ihre profits</h4>
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
                autoPlayStrategy={'none'}
            />
        </div>
    )
}

export default SliderProfit