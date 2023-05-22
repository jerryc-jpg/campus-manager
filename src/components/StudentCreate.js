import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createStudent } from "../store";

const StudentCreate = () => {
  const { campuses } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [campusId, setCampusId] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const student = { firstName, lastName, email, campusId };
    await dispatch(createStudent(student));
    navigate("/students");
  };

  return (
    <div>
      <h1>Add a Student</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="campusId">Campus</label>
          <select value={campusId} onChange={event => setCampusId(event.target.value)}>
            <option value="">-- none --</option>
            {campuses.map((campus) => {
              return (
                <option key={campus.id} value={campus.id}>
                  {campus.name}
                </option>
              );
            })}
          </select>
        </div>
        <button disabled={firstName === '' || lastName === '' || email === '' || campusId === ''} type="submit">Create</button>
      </form>
    </div>
  );
};

export default StudentCreate;
