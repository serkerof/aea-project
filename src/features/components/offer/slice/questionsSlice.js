import { createEntityAdapter, createSlice, current } from "@reduxjs/toolkit";
import { questions } from "./data";

const questionsAdapter = createEntityAdapter({
  selectId: (item) => item.id,
  sortComparer: (previous, current) => previous.id.localCompare(current.id),
});

const initialState = {
  status: "idle",
  error: null,
  currentQuestion: {},
  data: questions,
};

const questionsSlice = createSlice(sliceInvoker());

function sliceInvoker() {
  return {
    name: "questions",
    initialState,
    reducers: {},
    extraReducers: {},
  };
}

export const { selectAll: selectAllQuestions, selectById: selectQuestion } =
  questionsAdapter.getSelectors((state) => state.questions.data);

export default questionsSlice.reducer;
