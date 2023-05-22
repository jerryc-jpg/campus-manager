import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCampus, deleteStudent } from "../store";
import { useParams, Link, useNavigate } from "react-router-dom";

const SingleCampus = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { campuses, students } = useSelector((state) => state);
  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");

  React.useEffect(() => {
    const campus = campuses.find((campus) => campus.id === id * 1);
    if (campus) {
      setName(campus.name);
      setAddress(campus.address);
      setDescription(campus.description);
      setImageUrl(campus.imageUrl);
    }
  }, [id]);

  const updateCampusInfo = async (event) => {
    event.preventDefault();
    const campus = { name, address, description, imageUrl, id };
    await dispatch(updateCampus(campus));
    navigate(`/campuses`);
  };

  return (
    <div>
      <form onSubmit={updateCampusInfo}>
        <input value={name} onChange={(event) => setName(event.target.value)} />
        <input value={address} onChange={(event) => setAddress(event.target.value)} />
        <input value={description} onChange={(event) => setDescription(event.target.value)} />
        <input value={imageUrl} onChange={(event) => setImageUrl(event.target.value)} />
        <button type="submit">Update</button>
      </form>
      <div>
        <h2>Students Attending</h2>
        <ul>
          {students.map((student) => {
            if (student.campusId === id * 1) {
              return (
                <li key={student.id}>
                  <Link to={`/students/${student.id}`}>
                    {student.firstName} {student.lastName}
                  </Link>
                  <button onClick={() => dispatch(deleteStudent(student.id))}>Delete Student</button>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
    
  );
};


export default SingleCampus;
