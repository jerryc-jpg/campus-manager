/* Here is where you will configure the store 

*/ 
import axios from "axios";
import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchStudents = createAsyncThunk("fetchStudents", async () => {
  const { data } = await axios.get("/api/students");
  return data;
});

const fetchCampuses = createAsyncThunk("fetchCampuses", async () => {
  const { data } = await axios.get("/api/campuses");
  return data;
});

const studentsSlice = createSlice({
  name: "students",
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchStudents.fulfilled]: (state, action) => action.payload
  }
});

const campusesSlice = createSlice({
  name: "campuses",
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchCampuses.fulfilled]: (state, action) => action.payload
  }
});

const store = configureStore({
  reducer: {
    students: studentsSlice.reducer,
    campuses: campusesSlice.reducer
  }
});

export default store;
export { fetchStudents, fetchCampuses };