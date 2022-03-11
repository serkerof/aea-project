import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { serviceData } from "./data";

const clearenceServiceAdapter = createEntityAdapter({
  selectId: (service) => service.id,
  sortComparer: (previous, current) => previous.id.localeCompare(current.id),
});

const initialState = {
  status: "idle",
  error: null,
  currentData: {},
  services: serviceData,
};

const clearenceServiceSlice = createSlice(sliceInvoker());

function sliceInvoker() {
  return {
    name: "clearenceService",
    initialState,
    reducers: {},
    extraReducers: {},
  };
}

export const {
  selectAll: selectAllClearenceServices,
  selectById: selectClearenceService,
} = clearenceServiceAdapter.getSelectors(
  (state) => state.clearenceService.services
);

export default clearenceServiceSlice.reducer;
