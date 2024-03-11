import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { FormRow } from "../../components";
import { updateUser } from "../../features/user/userSlice";

function Profile() {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
    location: user?.location || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName, location } = userData;
    if (!name || !email || !lastName || !location) {
      toast.warn("Please fill out all fields!");
    }
    dispatch(updateUser(userData));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Profile</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={userData.name}
            handleChange={handleChange}
            labelText="Name"
          />
          <FormRow
            type="text"
            name="lastName"
            value={userData.lastName}
            handleChange={handleChange}
            labelText="Last name"
          />
          <FormRow
            type="text"
            name="email"
            value={userData.email}
            handleChange={handleChange}
            labelText="Email"
          />
          <FormRow
            type="text"
            name="location"
            value={userData.location}
            handleChange={handleChange}
            labelText="Location"
          />
          <button
            type="submit"
            className="btn btn-block"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            {isLoading ? "Please wait..." : "Save"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
}

export default Profile;
