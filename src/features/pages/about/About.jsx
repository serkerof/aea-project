import Footer from "../../components/footer/Footer";
import NavbarChooser from "../../components/navbar-chooser/NavbarChooser";
import styles from "./about.module.css";

const About = () => {
  return (
    <div>
      <NavbarChooser />
      <div className={`${styles.container}`}>
        <h1 className={`${styles.title}`}>Über uns</h1>
        <p>
          Wir bieten wir unsere Dienstleistungen in den Städten Paderborn,
          Bielefeld, Gütersloh, Lippstadt, Soest unseren Kunden an.
        </p>
        <p>
          Wir garantieren unseren Kunden beste Qualität zu fairen Preisen, ob
          Termintransport, Übersiedlung oder Logistiklösungen wir stehen unseren
          Firmen- wie auch Privatkunden rund um die Uhr zur Verfügung. Egal ob
          per Email oder telefonisch, nehmen Sie mit uns Kontakt um ein
          kostenloses Angebot zu bekommen.
        </p>
        <p>Wir sind für Sie da!</p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
