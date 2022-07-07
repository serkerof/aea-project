import { Route, Routes } from "react-router-dom";
import HomeDashboard from "./features/pages/home/HomeDashboard";
import ApartmentClearence from "./features/pages/services/clearence/ApartmentClearence";
import GarageClearence from "./features/pages/services/clearence/GarageClearence";
import HomeClearence from "./features/pages/services/clearence/HomeClearence";
import OfficeClearence from "./features/pages/services/clearence/OfficeClearence";
import ServicesDashboard from "./features/pages/services/ServicesDashboard";
import GardenMaintenance from "./features/pages/services/GardenMaintenance";
import Clearing from "./features/pages/services/HouseClearing";
import MovingOut from "./features/pages/services/MovingOut";
import About from "./features/pages/about/About";
import Contact from "./features/pages/contact/Contact";
import DrainCleaning from "./features/pages/services/DrainCleaning";
import Impressum from "./features/pages/privacy/Impressum";
import Datenschutz from "./features/pages/privacy/Datenschutz";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeDashboard />} />
      {/* ====== Services ====== */}
      {/* Clearence */}
      <Route
        path='/haushaltsaufloesung-und-entruempelung'
        element={<ServicesDashboard component={<HomeClearence />} />}
      />
      {/* <Route
        path='/wohnungsaufloesung'
        element={<ServicesDashboard component={<ApartmentClearence />} />}
      />
      <Route
        path='/firmenaufloesung'
        element={<ServicesDashboard component={<OfficeClearence />} />}
      />
      <Route
        path='/kelleraufloesung'
        element={<ServicesDashboard component={<GarageClearence />} />}
      /> */}
      {/* Rest */}
      <Route
        path='/gartenpflege'
        element={<ServicesDashboard component={<GardenMaintenance />} />}
      />
      <Route
        path='/reinigung'
        element={<ServicesDashboard component={<Clearing />} />}
      />
      {/* <Route
        path='/glasreinigung'
        element={<ServicesDashboard component={<GlassClearing />} />}
      /> */}
      <Route
        path='/umzuege'
        element={<ServicesDashboard component={<MovingOut />} />}
      />
      <Route
        path='/abflussreinigung'
        element={<ServicesDashboard component={<DrainCleaning />} />}
      />
      <Route path='/ueber-uns' element={<About />} />
      <Route path='/kontakt' element={<Contact />} />
      <Route path='/impressum' element={<Impressum />} />
      <Route path='/datenschutz' element={<Datenschutz />} />
    </Routes>
  );
}

export default App;
