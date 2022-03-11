import servicesReducer from "../features/components/our-services/slice/servicesSlice";
import profitReducer from "../features/components/slider-profit/profit-slice/profitSlice";
import contactDataReducer from "../features/data/contactDataSlice";
import clearenceServiceReducer from "../features/pages/services/slice/clearenceServiceSlice";

const rootReducer = {
  profit: profitReducer,
  contactData: contactDataReducer,
  clearenceService: clearenceServiceReducer,
  services: servicesReducer,
};

export default rootReducer;
