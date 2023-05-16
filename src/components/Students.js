import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Students = () => {
    const { students, campuses } = useSelector((state) => state);
    return (
        <ul>
        {students.map((student) => {
            const campus = campuses.find((campus) => campus.id === student.campusId);
            return (
            <li key={student.id}>
                <strong><Link to={`/students/${student.id}`}>{student.firstName} {student.lastName}</Link> - Attends {campus.name}</strong> 
                <div>
                    <img src={student.imageUrl} id="student-image"/>
                </div>
                
            </li>
            );
        })}
        </ul>
    );
    }

export default Students;