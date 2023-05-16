import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleStudent } from '../store';
import { useParams, Link } from 'react-router-dom';

const Student = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const student = useSelector((state) => state.students.find((student) => student.id === id * 1));
    const campus = useSelector((state) => state.campuses.find((campus) => campus.id === student.campusId));
    React.useEffect(() => {
        dispatch(fetchSingleStudent(id));
    }, [id]);

    if (!student) {
        return null;
    }
    if (!campus) {
        return null;
    }

    return ( 
        <div>
            <h1>{student.firstName} {student.lastName}</h1>
            <img src={student.imageUrl} id="student-image"/>
            <div>{student.email}</div>
            <div>Attends:<Link to={`/campuses/${campus.id}`}>{campus.name}</Link></div>
            <div>GPA: {student.gpa}</div>
        </div>
    );
}

export default Student;
