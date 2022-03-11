import NavbarChooser from "../../components/navbar-chooser/NavbarChooser";
import ContactBar from "../../components/contact-bar/ContactBar";
import Footer from "../../components/footer/Footer";

const ServicesDashboard = ({ component }) => {
  return (
    <div>
      <NavbarChooser />
      {component}
      <ContactBar />
      <Footer />
    </div>
  );
};

export default ServicesDashboard;
