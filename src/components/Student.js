import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStudent } from "../store";
import { useParams, Link, useNavigate } from "react-router-dom";

const Student = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { students, campuses } = useSelector((state) => state);
  const navigate = useNavigate();

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [campusId, setCampusId] = React.useState("");
  const [gpa, setGpa] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");

  React.useEffect(() => {
    const student = students.find((student) => student.id === id * 1);
    if (student) {
      setFirstName(student.firstName);
      setLastName(student.lastName);
      setEmail(student.email);
      setCampusId(student.campusId);
      setGpa(student.gpa);
      setImageUrl(student.imageUrl);
    }
  }, [id]);

  const updateStudentInfo = async (event) => {
    event.preventDefault();
    const student = {
      firstName,
      lastName,
      email,
      gpa,
      imageUrl,
      campusId: campusId * 1,
      id,
    };
    await dispatch(updateStudent(student));
    navigate(`/students`);
  };

  return (
    <div>
      <form onSubmit={updateStudentInfo}>
        <input
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          placeholder="First Name"
        />
        <input
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          placeholder="Last Name"
        />
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
        />
        <input
          value={gpa}
          onChange={(event) => setGpa(event.target.value)}
          placeholder="GPA"
        />
        <input
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
          placeholder="Image URL"
        />
        <select
          value={campusId}
          onChange={(event) => setCampusId(event.target.value)}
        >
          <option value="">-- none --</option>
          {campuses.map((campus) => {
            return (
              <option key={campus.id} value={campus.id}>
                {campus.name}
              </option>
            );
          })}
        </select>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Student;
