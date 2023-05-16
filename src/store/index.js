/* Here is where you will configure the store 

*/
import axios from "axios";
import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

const fetchStudents = createAsyncThunk("fetchStudents", async () => {
  const { data } = await axios.get("/api/students");
  return data;
});

const fetchCampuses = createAsyncThunk("fetchCampuses", async () => {
  const { data } = await axios.get("/api/campuses");
  return data;
});

const fetchSingleStudent = createAsyncThunk(
  "fetchSingleStudent",
  async (id) => {
    const { data } = await axios.get(`/api/students/${id}`);
    return data;
  }
);

const fetchSingleCampus = createAsyncThunk("fetchSingleCampus", async (id) => {
  const { data } = await axios.get(`/api/campuses/${id}`);
  return data;
});

const studentsSlice = createSlice({
  name: "students",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStudents.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchSingleStudent.fulfilled, (state, action) => {
      const singleStudent = action.payload;
      const existingStudent = state.find(
        (student) => student.id === singleStudent.id
      );

      if (existingStudent) {
        return state.map((student) =>
          student.id === singleStudent.id ? singleStudent : student
        );
      } else {
        return [...state, singleStudent];
      }
    });
  },
});

const campusesSlice = createSlice({
  name: "campuses",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCampuses.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchSingleCampus.fulfilled, (state, action) => {
      const singleCampus = action.payload;
      const existingCampus = state.find(
        (campus) => campus.id === singleCampus.id
      );

      if (existingCampus) {
        return state.map((campus) =>
          campus.id === singleCampus.id ? singleCampus : campus
        );
      } else {
        return [...state, singleCampus];
      }
    });
  },
});

const store = configureStore({
  reducer: {
    students: studentsSlice.reducer,
    campuses: campusesSlice.reducer,
  },
});

export default store;
export { fetchStudents, fetchCampuses, fetchSingleStudent, fetchSingleCampus };
