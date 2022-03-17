import houseClearenceImg from "./../assets/img/haushaltsaufloesung.jpg";
import entruempelungImg from "./../assets/img/haushaltsaufloesung.jpg";
import houseImg from "./../assets/img/haushaltsaufloesung-.jpg";
import apartmentImg from "./../assets/img/wohnungaufloesung.jpg";
import officeImg from "./../assets/img/firmenaufloesung.jpg";

export const questions = {
  ids: [1, 2, 3, 4, 5, 6, 7],
  entities: {
    1: {
      id: "service",
      name: "Welche Dienstleistung brauchen Sie?",
      topic: "Dienstleistung",
      hasOptions: true,
      options: [
        {
          id: 1,
          title: "Haushaltsauflösung",
          img: houseClearenceImg,
          imgAlt: "Hauhaltsauflösung durch A.E.A Dienste",
        },
        {
          id: 2,
          title: "Entrümpelung",
          img: entruempelungImg,
          imgAlt: "Entrümpelung durch A.E.A Dienste",
        },
      ],
    },
    2: {
      id: "placementType",
      topic: "Objekt Typ",
      name: "Um welchem Typ Objekt handelt sich?",
      hasOptions: true,
      options: [
        {
          id: 1,
          title: "Haus",
          img: houseImg,
          imgAlt: "Hauhaltsauflösung durch A.E.A Dienste",
        },
        {
          id: 2,
          title: "Betrieb",
          img: officeImg,
          imgAlt: "Firmenaufloesung durch A.E.A Dienste",
        },
        {
          id: 3,
          title: "Wohnung",
          img: apartmentImg,
          imgAlt: "Wohnungsauflösung durch A.E.A Dienste",
        },
      ],
    },
    3: {
      id: "placementSize",
      topic: "Objekt Größe",
      hasOptions: false,
      name: "Wie viel Quadratmeter hat Ihrer Objekt?",
    },
    4: {
      id: "floor",
      topic: "Etage",
      hasOptions: false,
      name: "In welchem Etage wohnen Sie?",
    },
    5: {
      id: "parking",
      topic: "Parkplatz",
      hasOptions: false,
      name: "Haben Sie freie Parkplatz?",
    },
    6: {
      id: "wishedAppointment",
      topic: "WunschTermin",
      hasOptions: false,
      name: "Wann ist Ihre Wunschtermin?",
    },
    7: {
      id: "contactData",
      topic: "Kontakt Daten",
      hasOptions: false,
      name: "Ihre Kontakt Daten",
    },
  },
};
