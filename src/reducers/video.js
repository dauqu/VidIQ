import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../components/Constant/API";

const initialState = {
  loading: false,
  videos: [],
  message: "",
};

export const addVideos = createAsyncThunk("video/addVideos", async (file) => {
  const formdata = new FormData();
  formdata.append("video", file);
  const response = await axios.post(`${API}/upload/uploadVideo`, formdata);
  return response.data.videoData;
});

export const getVideos = createAsyncThunk("video/getVideos", async () => {
  const response = await axios.get(`${API}/upload`);
  return response.data.videoData;
});

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: {
    [addVideos.pending]: (state, action) => {
      state.loading = true;
    },
    [addVideos.fulfilled]: (state, action) => {
      state.videos.push(action.payload);
      state.loading = false;
      state.message = "success";
    },
    [getVideos.fulfilled]: (state, action) => {
      state.videos = action.payload;
    },
    // for error
    [addVideos.rejected]: (state, action) => {
      state.loading = false;
      state.message = "error";
    },
  },
  devTools: true,
});

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions;

export default counterSlice.reducer;
