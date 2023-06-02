import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: "",
  menu: [],
  error: "",
};

export const fetchMenu = createAsyncThunk("menu/fetchMenu", () => {
  return axios
    .get("http://localhost:8000/api/menu")
    .then((response) => response.data);
});

const menuSLice = createSlice({
  name: "menu",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMenu.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchMenu.fulfilled, (state, action) => {
      state.loading = false;
      state.menu = action.payload;
      state.error = "";
    });

    builder.addCase(fetchMenu.rejected, (state, action) => {
      state.loading = false;
      state.menu = [];
      state.error = action.error.message;
    });
  },
});

export default menuSLice.reducer;
