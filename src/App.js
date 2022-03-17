import { Route, Routes } from "react-router-dom";
import HomeDashboard from "./features/pages/home/HomeDashboard";
import ApartmentClearence from "./features/pages/services/clearence/ApartmentClearence";
import GarageClearence from "./features/pages/services/clearence/GarageClearence";
import HomeClearence from "./features/pages/services/clearence/HomeClearence";
import OfficeClearence from "./features/pages/services/clearence/OfficeClearence";
import ClearingOut from "./features/pages/services/ClearingOut";
import ServicesDashboard from "./features/pages/services/ServicesDashboard";
import GardenMaintenance from "./features/pages/services/GardenMaintenance";
import HouseClearing from "./features/pages/services/HouseClearing";
import GlassClearing from "./features/pages/services/GlassClearing";
import SmallMove from "./features/pages/services/SmallMove";
import About from "./features/pages/about/About";
import Questions from "./features/components/offer/questions/Questions";
function App() {
 

  return (
    <Routes>
      <Route path='/' element={<HomeDashboard />} />
      {/* ====== Services ====== */}
      {/* Clearence */}
      <Route
        path='/haushaltsaufloesung'
        element={<ServicesDashboard component={<HomeClearence />} />}
      />
      <Route
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
      />
      {/* Rest */}
      <Route
        path='/entruempelung'
        element={<ServicesDashboard component={<ClearingOut />} />}
      />
      <Route
        path='/gartenpflege'
        element={<ServicesDashboard component={<GardenMaintenance />} />}
      />
      <Route
        path='/hausreinigung'
        element={<ServicesDashboard component={<HouseClearing />} />}
      />
      <Route
        path='/glasreinigung'
        element={<ServicesDashboard component={<GlassClearing />} />}
      />
      <Route
        path='/kleine-umzuege'
        element={<ServicesDashboard component={<SmallMove />} />}
      />
      <Route
        path='/ueber-uns'
        element={<ServicesDashboard component={<About />} />}
      />
    </Routes>
  );
}

export default App;
