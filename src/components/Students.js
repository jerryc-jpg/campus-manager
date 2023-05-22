import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteStudent } from "../store";

const Students = () => {
  const { students, campuses } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(students);
  return (
    <div>
      <Link to="/students/create">Add a Student</Link>
      <ul>
        {students.map((student) => {
          const campus = campuses.find(
            (campus) => campus.id === student.campusId
          );
          return (
            <li key={`${student.id}-${campus ? campus.id : "unknown"}`}>
              <strong>
                <Link to={`/students/${student.id}`}>
                  {student.firstName} {student.lastName}
                </Link>{" "}
                - Attends {campus ? campus.name : "No Campus"}
              </strong>
              <div>
                <img src={student.imageUrl} id="student-image" />
                <p>{student.email}</p>
                <p>GPA: {student.gpa}</p>
                <button onClick={() => dispatch(deleteStudent(student.id))}>Delete Student</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Students;
