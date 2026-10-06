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
    console.log("Submitted Formdata is : ", formData);

    setFormData({
      username: "",
      email: "",
      role: "",
      experience: "",
      bio: "",
      subscribe: false,
    });
  };
  return (
    <>
      <h3>Form Validation</h3>
      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Role */}
        <div>
          <label>role</label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="">Select your role</option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="fullstack">Full Stack developer</option>
          </select>
        </div>

        {/* Experience */}
        <div>
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
        </div>

        {/* Bio */}
        <div>
          <label>Bio</label>
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
