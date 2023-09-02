import { createSlice } from "@reduxjs/toolkit";

const monitorSlice = createSlice({
  name: "monitor",
  initialState: {
    altitude: 0,
    HIS: 0,
    ADI: 0,
  },
  reducers: {
    setAltitude: (state, action) => {
      state.altitude = action.payload;
    },
    setHIS: (state, action) => {
      state.HIS = action.payload;
    },
    setADI: (state, action) => {
      state.ADI = action.payload;
    },
  },
});

export const { setAltitude, setHIS, setADI } = monitorSlice.actions;

export default monitorSlice.reducer;
