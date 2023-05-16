import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { fetchCampuses, fetchStudents } from "../store";
import Campuses from "./Campuses";
import Students from "./Students";
import SingleCampus from "./Campus";
import SingleStudent from "./Student";

const Main = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCampuses());
    dispatch(fetchStudents());
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <Link to="/campuses">Campuses</Link>
          <Link to="/students">Students</Link>
        </nav>
        <h1>
          Acme Schools
        </h1>
        <Routes>
          <Route path="/campuses" element={<Campuses />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:id" element={<SingleStudent />} />
          <Route path="/campuses/:id" element={<SingleCampus />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Main;
