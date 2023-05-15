import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { fetchCampuses, fetchStudents } from "../store";
import Campuses from "./Campuses";
import Students from "./Students";

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
          <Link to="/">Acme Schools</Link>
        </h1>
        <Routes>
          <Route path="/campuses" element={<Campuses />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:id" element={<Students />} />
          <Route path="/campuses/:id" element={<Campuses />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Main;
