import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    currentStepNumber: 1,
    stepOneData: { stepName: "", data: [] },
    stepTwoData: { stepName: "", data: [] },
    stepThreeData: { stepName: "", data: [] },
    stepFourData: { stepName: "", data: [] },
    stepFiveData: { stepName: "", data: [] },
    stepSixData: { stepName: "", data: [] },
    stepSevenData: { stepName: "", data: [] },
    stepEightData: { stepName: "", data: [] },
  },
  reducers: {
    updateCurrentStep: (state, action) => {
      state.currentStepNumber = action.payload;
    },
    setStepOneData: (state, action) => {
      state.stepOneData.data = action.payload;
    },
    setStepTwoData: (state, action) => {
      state.stepTwoData.data = action.payload;
    },
    setStepThreeData: (state, action) => {
      state.stepThreeData.data = action.payload;
    },
    setStepFourData: (state, action) => {
      state.stepFourData.data = action.payload;
    },
    setStepFiveData: (state, action) => {
      state.stepFiveData.data = action.payload;
    },
    setStepSixData: (state, action) => {
      state.stepSixData.data = action.payload;
    },
    setStepSevenData: (state, action) => {
      state.stepSevenData.data = action.payload;
    },
    setStepEightData: (state, action) => {
      state.stepEightData.data = action.payload;
    },
  },
});

export const {
  updateCurrentStep,
  stepOneData,
  stepTwoData,
  stepThreeData,
  stepFourData,
  stepFiveData,
  stepSixData,
  stepSevenData,
  stepEightData,
} = formSlice.actions;

export default formSlice.reducer;
