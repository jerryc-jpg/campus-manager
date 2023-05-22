import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCampus } from "../store";
import { useNavigate } from "react-router-dom";

const CampusCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const campus = { name, imageUrl, address, description }
    await dispatch(createCampus(campus));
    navigate("/campuses");
  };

  return (
    <div>
      <h1>Add a Campus</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL</label>
          <input
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
          />
        </div>
        <button disabled={name === "" || address === '' || description === '' || imageUrl === ''}type="submit">Create Campus</button>
      </form>
    </div>
  );
};

export default CampusCreate;
