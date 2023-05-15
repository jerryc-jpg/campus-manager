import React from "react";
import { useSelector} from "react-redux";

const Campuses = () => {
    const { campuses, students } = useSelector((state) => state);
    return (
        <ul>
            {campuses.map((campus) => {
                const studentCount = students.filter((student) => student.campusId === campus.id).length;
                return (
                    <li key={campus.id}>
                        <strong>{campus.name}</strong>
                        <br />
                        <img src={campus.imageUrl} id="campus-image" />
                        <div>Students Attending: {studentCount}</div>
                        <div>{campus.address}</div>
                    </li>
                );
            })}


        </ul>
    );
};

export default Campuses;