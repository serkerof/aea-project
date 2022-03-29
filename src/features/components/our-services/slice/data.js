import houseClearanceSvg from "./../assets/icon/haushaltsaufloesung.svg";
import clearingOutSvg from "./../assets/icon/entruempelung.svg";
import smallMovesSvg from "./../assets/icon/kleine-umzuege.svg";
import gardenMaintenanceSvg from "./../assets/icon/gartenpflege.svg";
import housecleaningSvg from "./../assets/icon/hausreinigung.svg";
import glassCleaningSvg from "./../assets/icon/glasreinigung.svg";

export const servicesData = {
  ids: [
    "houseClearance",
    "clearingOut",
    "smallMoves",
    "gardenMaintenance",
    "housecleaning",
    "glassCleaning",
  ],
  entities: {
    houseClearance: {
      id: "houseClearance",
      title: "Haushaltsauflösung",
      description: "wir bieten Ihnen best möglichem service!",
      icon: houseClearanceSvg,
      imageAlt: "Haushaltsauflösung AEA Dienste Paderborn",
      link: "/haushaltsaufloesung",
    },
    clearingOut: {
      id: "clearingOut",
      title: "Entrümpelung",
      description: "wir bieten Ihnen best möglichem service!",
      icon: clearingOutSvg,
      imageAlt: "Entrümpelung AEA Dienste Paderborn",
      link: "/entruempelung",
    },
    smallMoves: {
      id: "smallMoves",
      title: "Kleine Umzüge",
      description: "wir bieten Ihnen best möglichem service!",
      icon: smallMovesSvg,
      imageAlt: "Kleine Umzüge AEA Dienste Paderborn",
      link: "/kleine-umzuege",
    },
    gardenMaintenance: {
      id: "gardenMaintenance",
      title: "Gartenpflege",
      description: "wir bieten Ihnen best möglichem service!",
      icon: gardenMaintenanceSvg,
      imageAlt: "Gartenpflege AEA Dienste Paderborn",
      link: "/gartenpflege",
    },
    housecleaning: {
      id: "housecleaning",
      title: "Hausreinigung",
      description: "wir bieten Ihnen best möglichem service!",
      icon: housecleaningSvg,
      imageAlt: "Hausreinigung AEA Dienste Paderborn",
      link: "/hausreinigung",
    },

    glassCleaning: {
      id: "glassCleaning",
      title: "Glasreinigung",
      description: "wir bieten Ihnen best möglichem service!",
      icon: glassCleaningSvg,
      imageAlt: "Glasreinigung AEA Dienste Paderborn",
      link: "/glasreinigung",
    },
  },
};
