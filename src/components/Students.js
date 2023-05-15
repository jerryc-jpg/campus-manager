import React from "react";
import { useSelector } from "react-redux";

const Students = () => {
    const { students, campuses } = useSelector((state) => state);
    return (
        <ul>
        {students.map((student) => {
            const campus = campuses.find((campus) => campus.id === student.campusId);
            return (
            <li key={student.id}>
                <strong> {student.firstName} {student.lastName} - Attends {campus.name}</strong>
                <br />
                <img src={student.imageUrl} id="student-image"/>
                <br />
                <div> GPA: {student.gpa}</div>
                <div> Email: {student.email}</div>
                
            </li>
            );
        })}
        </ul>
    );
    }

export default Students;