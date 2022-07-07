import houseClearanceSvg from "./../assets/icon/haushaltsaufloesung.svg";
import clearingOutSvg from "./../assets/icon/entruempelung.svg";
import smallMovesSvg from "./../assets/icon/kleine-umzuege.svg";
import gardenMaintenanceSvg from "./../assets/icon/gartenpflege.svg";
import housecleaningSvg from "./../assets/icon/hausreinigung.svg";
import glassCleaningSvg from "./../assets/icon/glasreinigung.svg";

export const servicesData = { 
  ids: [
    "clearingOut",
    "movingOut",
    "gardenMaintenance",
    "cleaning",
  ],
  entities: {
    clearingOut: {
      id: "clearingOut",
      title: "Haushaltsauflösung & Entrümpelung",
      description: "wir bieten Ihnen best möglichem service!",
      icon: clearingOutSvg,
      imageAlt: "Entrümpelung AEA Dienste Paderborn",
      link: "/haushaltsaufloesung-und-entruempelung",
    },
    movingOut: {
      id: "movingOut",
      title: "Umzüge",
      description: "wir bieten Ihnen best möglichem service!",
      icon: smallMovesSvg,
      imageAlt: "Kleine Umzüge AEA Dienste Paderborn",
      link: "/umzuege",
    },
    gardenMaintenance: {
      id: "gardenMaintenance",
      title: "Gartenpflege",
      description: "wir bieten Ihnen best möglichem service!",
      icon: gardenMaintenanceSvg,
      imageAlt: "Gartenpflege AEA Dienste Paderborn",
      link: "/gartenpflege",
    },
    cleaning: {
      id: "cleaning",
      title: "Reinigung",
      description: "wir bieten Ihnen best möglichem service!",
      icon: housecleaningSvg,
      imageAlt: "Reinigung AEA Dienste Paderborn",
      link: "/reinigung",
    },

  },
};
