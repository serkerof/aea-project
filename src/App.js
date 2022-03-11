import { Route, Routes } from "react-router-dom";
import HomeDashboard from "./features/pages/home/HomeDashboard";
import ApartmentClearence from "./features/pages/services/ApartmentClearence";
import GarageClearence from "./features/pages/services/GarageClearence";
import HomeClearence from "./features/pages/services/HomeClearence";
import OfficeClearence from "./features/pages/services/OfficeClearence";
import ServicesDashboard from "./features/pages/services/ServicesDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeDashboard />} />
      <Route path="/haushaltsaufloesung" element={<ServicesDashboard component={<HomeClearence />} />} />
      <Route path="/wohnungsaufloesung" element={<ServicesDashboard component={<ApartmentClearence />} />} />
      <Route path="/firmenaufloesung" element={<ServicesDashboard component={<OfficeClearence />} />} />
      <Route path="/kelleraufloesung" element={<ServicesDashboard component={<GarageClearence />} />} />
    </Routes>
  );
}

export default App;
