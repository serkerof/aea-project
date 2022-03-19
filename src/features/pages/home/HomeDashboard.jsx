import { useRef, useState } from "react";
import ContactBar from "../../components/contact-bar/ContactBar";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import OfferChooser from "../../components/offer/OfferChooser";
import Home from "./Home";

const HomeDashboard = () => {
  const [status, setStatus] = useState(false);
  const contactFormRef = useRef();

  const handleScroll = () => {
    if (document.documentElement.scrollTop >= 100) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };

  // const [status, setStatus] = useState({ contactBar: false, offer: false });

  // const handleScroll = () => {
  //   if (document.documentElement.scrollTop >= 100) {
  //     setStatus({ contactBar: true, offer: false });
  //   } else if (document.documentElement.scrollTop >= 500) {
  //     setStatus({ contactBar: true, offer: true });
  //   } else {
  //     status.offer === true
  //       ? setStatus({ contactBar: false, offer: true })
  //       : setStatus({ contactBar: false, offer: false });
  //   }
  // };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className='animation'>
      <Header contactFormRef={contactFormRef}/>
      <Home contactFormRef={contactFormRef}/>
      {status && <ContactBar contactFormRef={contactFormRef}/>}
      {status && <OfferChooser />}
      <Footer />
    </div>
  );
};

export default HomeDashboard;
