import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    Email: "",
    Password: "",
    Gender: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      Email: "",
      Password: "",
      Gender: "",
    });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          placeholder="Name"
          name="fullName"
          id=""
          value={formData.fullName}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="Email"
          id=""
          value={formData.Email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="Password"
          id=""
          value={formData.Password}
          onChange={handleChange}
        />
        <select
          id=""
          value={formData.Gender}
          name="Gender"
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
