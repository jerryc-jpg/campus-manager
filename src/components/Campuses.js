import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCampus } from "../store";

const Campuses = () => {
  const { campuses, students } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <Link to="/campuses/create">Add Campus</Link>
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
              <button onClick={() => {dispatch(deleteCampus(campus.id))}}>
                Delete Campus
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Campuses;
