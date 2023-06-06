import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { fetchCampuses, fetchStudents } from "../store";

import Campuses from "./Campuses";
import Students from "./Students";
import Campus from "./Campus";
import Student from "./Student";
import CampusCreate from "./CampusCreate";
import StudentCreate from "./StudentCreate";

const Main = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCampuses());
    dispatch(fetchStudents());
  }, []);

  return (
    <Router>
      <div>
        <nav class="row">
          <Link to="/campuses" class='col-5'>Campuses</Link>
          <Link to="/students" class='col-2'>Students</Link>
        </nav>
        <h1>Acme Schools</h1>
        <Routes>
          <Route path="/campuses/create" element={<CampusCreate />} />
          <Route path="/students/create" element={<StudentCreate />} />
          <Route path="/campuses" element={<Campuses />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:id" element={<Student />} />
          <Route path="/campuses/:id" element={<Campus />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Main;
