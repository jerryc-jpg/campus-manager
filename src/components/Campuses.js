import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Campuses = () => {
  const { campuses, students } = useSelector((state) => state);
  
  return (
    <ul>
      {campuses.map((campus) => {
        const studentCount = students.filter(
          (student) => student.campusId === campus.id
        ).length;
        return (
          <li key={campus.id}>
            <Link to={`/campuses/${campus.id}`}>
              <strong>
                {campus.name} ({studentCount})
              </strong>
            </Link>
            <br />
            <img src={campus.imageUrl} id="campus-image" />
          </li>
        );
      })}
    </ul>
  );
};

export default Campuses;
