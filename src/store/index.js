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

const createStudent = createAsyncThunk("createStudent", async (student) => {
  try {
    const { data } = await axios.post("/api/students", student);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const createCampus = createAsyncThunk("createCampus", async (campus) => {
  try {
    const response = await axios.post("/api/campuses", campus);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const updateStudent = createAsyncThunk("updateStudent", async (student) => {
  try {
    const { data } = await axios.put(`/api/students/${student.id}`, student);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const updateCampus = createAsyncThunk("updateCampus", async (campus) => {
  try {
    const { data } = await axios.put(`/api/campuses/${campus.id}`, campus);
    return data;
  } catch (error) {
    console.log(error);
  }
});


const deleteStudent = createAsyncThunk("deleteStudent", async (id) => {
  try {
    await axios.delete(`/api/students/${id}`);
    return id;
  } catch (error) {
    console.log(error);
  }
});

const deleteCampus = createAsyncThunk("deleteCampus", async (id) => {
  try {
    await axios.delete(`/api/campuses/${id}`);
    return id;
  } catch (error) {
    console.log(error);
  }
});

const studentsSlice = createSlice({
  name: "students",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStudents.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(createStudent.fulfilled, (state, action) => {
      return [...state, action.payload];
    });
    builder.addCase(deleteStudent.fulfilled, (state, action) => {
      return state.filter((student) => student.id !== action.payload);
    }
    )
    builder.addCase(updateStudent.fulfilled, (state, action) => {
      console.log(action.payload);
      return state.map((student) => student.id === action.payload.id ? action.payload : student);
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
    builder.addCase(createCampus.fulfilled, (state, action) => {
      return [...state, action.payload];
    });
    builder.addCase(deleteCampus.fulfilled, (state, action) => {
      return state.filter((campus) => campus.id !== action.payload);
    }
    );
    builder.addCase(updateCampus.fulfilled, (state, action) => {
      return state.map((campus) => campus.id === action.payload.id ? action.payload : campus);
    }
    );
  },
});

const store = configureStore({
  reducer: {
    students: studentsSlice.reducer,
    campuses: campusesSlice.reducer,
  },
});

export default store;
export {
  fetchStudents,
  fetchCampuses,
  createStudent,
  createCampus,
  deleteStudent,
  deleteCampus,
  updateStudent,
  updateCampus,
};
