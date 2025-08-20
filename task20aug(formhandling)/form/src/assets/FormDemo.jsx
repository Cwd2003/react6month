import React, { useState } from "react";

function FormDemo() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
    dob: "",
    gender: "",
    country: "",
    agree: false,
    color: "",
    range: 50
  });

  const [submitted, setSubmitted] = useState(null);
  const [errors, setErrors] = useState({});

  // Regex patterns
  const patterns = {
    username: /^[A-Za-z]{3,15}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/,
    age: /^[0-9]{1,2}$/,
  };

  // handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // validate
    let newErrors = {};
    if (!patterns.username.test(formData.username)) {
      newErrors.username = "Username must be 3–15 letters only.";
    }
    if (!patterns.email.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
    }
    if (!patterns.password.test(formData.password)) {
      newErrors.password =
        "Password must contain at least 6 chars, 1 uppercase, and 1 number.";
    }
    if (!patterns.age.test(formData.age)) {
      newErrors.age = "Enter a valid age (1–99).";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(formData);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">React Form with 10 Inputs</h2>
      <form onSubmit={handleSubmit} className="border p-3 rounded shadow">

        {/* 1. Text */}
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            value={formData.username}
            onChange={handleChange}
          />
          <small className="text-danger">{errors.username}</small>
        </div>

        {/* 2. Email */}
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
          <small className="text-danger">{errors.email}</small>
        </div>

        {/* 3. Password */}
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
          />
          <small className="text-danger">{errors.password}</small>
        </div>

        {/* 4. Number */}
        <div className="mb-3">
          <label>Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            value={formData.age}
            onChange={handleChange}
          />
          <small className="text-danger">{errors.age}</small>
        </div>

        {/* 5. Date */}
        <div className="mb-3">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            className="form-control"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>

        {/* 6. Radio */}
        <div className="mb-3">
          <label>Gender</label> <br />
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
            className="ms-3"
          />{" "}
          Female
        </div>

        {/* 7. Select */}
        <div className="mb-3">
          <label>Country</label>
          <select
            name="country"
            className="form-control"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">--Select--</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
        </div>

        {/* 8. Checkbox */}
        <div className="mb-3">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />{" "}
          I agree to terms & conditions
        </div>

        {/* 9. Color */}
        <div className="mb-3">
          <label>Favorite Color</label>
          <input
            type="color"
            name="color"
            className="form-control form-control-color"
            value={formData.color}
            onChange={handleChange}
          />
        </div>

        {/* 10. Range */}
        <div className="mb-3">
          <label>Skill Level</label>
          <input
            type="range"
            name="range"
            min="0"
            max="100"
            value={formData.range}
            onChange={handleChange}
            className="form-range"
          />
          <span>{formData.range}</span>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {/* Show submitted data */}
      {submitted && (
        <div className="mt-4">
          <h4>Submitted Data:</h4>
          <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default FormDemo;
