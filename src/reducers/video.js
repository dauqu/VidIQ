import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../components/Constant/API";

const initialState = {
  videos: [],
};

export const addVideos = createAsyncThunk("video/addVideos", async (file) => {
    const formdata = new FormData();
    formdata.append("video", file);
    const response = await axios.post(`${API}/upload/uploadVideo`, formdata)
    return response.data;

});

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: {
    [addVideos.fulfilled]: (state, action) => {
      state.videos.push(action.payload);
    },
  },
  devTools: true,
});

// Action creators are generated for each case reducer function
export const { } = counterSlice.actions;

export default counterSlice.reducer;
