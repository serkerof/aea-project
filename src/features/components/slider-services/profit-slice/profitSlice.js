import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { profitData } from "./profitData";

const profitAdapter = createEntityAdapter({
  selectId: (profit) => profit.id,
  sortComparer: (preProfit, nextProfit) =>
    preProfit.id.localeComparer(nextProfit.id),
});

const initialState = {
  status: "idle",
  error: null,
  selectedProfit: {},
  profits: profitData,
};

const sliceInvoker = () => {
  return { name: "profit", initialState, reducers: {}, extraReducers: {} };
};

const profitSlice = createSlice(sliceInvoker());

export const {
  selectAll: selectAllProfits,
  selectById: selectProfitById,
  selectIds: selectMemberIds,
} = profitAdapter.getSelectors((state) => state.profit.profits);

export default profitSlice.reducer;
