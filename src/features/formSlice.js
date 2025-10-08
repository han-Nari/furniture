import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  country: "",
  names: "",
  lastName: "",
  companyName: "",
  address: "",
  apartment: "",
  states: "",
  zip: "",
  email: "",
  phone: "",
  message: "",
  saved: JSON.parse(localStorage.getItem("account")) || [],
};

const formSlice = createSlice({
  name: "accountForm",

  initialState,
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setName: (state, action) => {
      state.names = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setCompany: (state, action) => {
      state.companyName = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setStates: (state, action) => {
      state.states = action.payload;
    },
    setApartment: (state, action) => {
      state.apartment = action.payload;
    },
    setZip: (state, action) => {
      state.zip = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    clearForm: (state) => {
      state.country = "";
      state.names = "";
      state.lastName = "";
      state.companyName = "";
      state.address = "";
      state.apartment = "";
      state.states = "";
      state.zip = "";
      state.email = "";
      state.phone = "";
      state.message = "";
    },
    saved: (state, action) => {
      state.saved.push(action.payload);
      localStorage.setItem("account", JSON.stringify(state.saved));
    },
  },
});

export const {
  setCountry,
  setName,
  setLastName,
  setCompany,
  setAddress,
  setStates,
  setApartment,
  setZip,
  setEmail,
  setPhone,
  setMessage,
  clearForm,
  saved,
} = formSlice.actions;
export default formSlice.reducer;
