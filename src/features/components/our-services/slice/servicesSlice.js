import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { servicesData } from "./data";

const servicesAdapter = createEntityAdapter({
  selectId: (service) => service.id,
  sortComparer: (previous, current) => previous.id.localeComparer(current.id),
});

const initialState = {
  status: "idle",
  error: null,
  currentService: {},
  data: servicesData,
};

const serviceSlice = createSlice(sliceInvoker());

function sliceInvoker() {
  return {
    name: "services",
    initialState,
    reducers: {},
    extraReducers: {},
  };
}

export const { selectAll: selectAllServices, selectById: selectService } =
  servicesAdapter.getSelectors((state) => state.services.data);

export default serviceSlice.reducer;
