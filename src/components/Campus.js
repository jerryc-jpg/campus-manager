import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleCampus } from "../store";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleCampus = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const campus = useSelector((state) =>
    state.campuses.find((campus) => campus.id === id * 1)
  );
  const students = useSelector((state) =>
    state.students.filter((student) => student.campusId === id * 1)
  );
  React.useEffect(() => {
    dispatch(fetchSingleCampus(id));
  }, [id]);

  if (!campus) { // this fixes the error that occurs when you refresh the page
    return null;
  }
  
  return (
    <div>
      <h1>{campus.name}</h1>
      <img src={campus.imageUrl} id="campus-image" />
      <div>Students Attending: {students.length}</div>
      <ul>
        {students.map((student) => {
          return (
            <li key={student.id}>
              <Link to={`/students/${student.id}`}>
                <strong>
                  {student.firstName} {student.lastName}
                </strong>
              </Link>
            </li>
          );
        })}
      </ul>
      <div>{campus.address}</div>
      <div>{campus.description}</div>
    </div>
  );
};

export default SingleCampus;
