import { useState } from "react";
import ContactBar from "../../components/contact-bar/ContactBar";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Home from "./Home";

const HomeDashboard = () => {
  const [status, setStatus] = useState(false);

  const handleScroll = () => {
    if (document.documentElement.scrollTop >= 100) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <div>
      <Header />
      <Home />
      {status && <ContactBar />}
      <Footer/>
    </div>
  );
};

export default HomeDashboard;
