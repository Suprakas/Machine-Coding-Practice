import { useState } from "react";

import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    role: "",
    experience: "",
    bio: "",
    subscribe: false,
  });

 const [errors, setErrors] = useState({
  username: "",
  email: "",
  role: "",
  experience: "",
  bio: "",
});

const validateForm = () => {
    let newErrors = {};
    // Username validation
    if(!formData.username.trim()){
      newErrors.username = "Username is required !!"
    } else if (formData.username.trim().length < 3){
      newErrors.username = "Username must be atleast 3 characters."
    }

    // Email Validation

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!formData.email.trim()){
      newErrors.email = "Email field cann't be empty!!"
    } else if (!emailRegex.test(formData.email)){
      newErrors.email = "Please enter a valid email."
    }

    // Role Validation

    if(!formData.role){
      newErrors.role = "Please select a role"
    }

    // Experience Validation
    
    if(!formData.experience){
      newErrors.experience = "Please select your experience"
    }

    setErrors(newErrors);
  }

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    console.log("Submitted Formdata is : ", formData);

    // setFormData({
    //   username: "",
    //   email: "",
    //   role: "",
    //   experience: "",
    //   bio: "",
    //   subscribe: false,
    // });
  };

  
  return (
    <>
      <h3>Form Validation</h3>
      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div>
          <label>Username </label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
          />

          {errors.username && <p>{errors.username}</p>}
        </div>

        {/* Email */}
        <div>
          <label>Email </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && <p>{errors.email}</p>}
        </div>

        {/* Role */}
        <div>
          <label>role </label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="">Select your role</option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="fullstack">Full Stack developer</option>
          </select>

          {errors.role && <p>{errors.role}</p>}
        </div>

        {/* Experience */}
        <div>
        <label>Experience </label>
          <label>
            <input
              type="radio"
              name="experience"
              value="junior"
              checked={formData.experience === "junior"}
              onChange={handleChange}
            />
            0 - 3 years
          </label>
          <label>
            <input
              type="radio"
              name="experience"
              value="mid-senior"
              checked={formData.experience === "mid-senior"}
              onChange={handleChange}
            />
            3-5 years
          </label>
          <label>
            <input
              type="radio"
              name="experience"
              value="senior"
              checked={formData.experience === "senior"}
              onChange={handleChange}
            />
            more than 5 years
          </label>

          {errors.experience && <p>{errors.experience}</p>}
        </div>

        {/* Bio */}
        <div>
          <label>Bio </label>
          <textarea
            name="bio"
            placeholder="Write your bio"
            value={formData.bio}
            onChange={handleChange}
          />
        </div>

        {/* Subscribe Checkbox */}
        <div>
          <label>
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
            />
            Subscribe Checkbox
          </label>
        </div>

        {/* Submit */}

        <button type="submit" name="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
