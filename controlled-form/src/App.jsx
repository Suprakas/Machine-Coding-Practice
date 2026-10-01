import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    role: "",
    isSubscribed: false,
    experience: "",
    bio: "",
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

  //   const handleChange = (e) => {
  //   const { name, type, value, checked } = e.target;

  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: type === "checkbox" ? checked : value,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMITTED", formData);

    setFormData({
      username: "",
      email: "",
      role: "",
      isSubscribed: false,
      experience: "",
      bio: "",
    });
  };

  return (
    <>
      <h3>Controlled Form </h3>

      <form onSubmit={handleSubmit}>
        {/* Username */}

        <FormInput
          label="Username"
          type="text"
          name="username"
          value={formData.username}
          placeholder="Enter your username"
          onChange={handleChange}
        />

        {/* Email */}
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
        />

        {/* Role */}
        <div>
          <label>Role</label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="">Select a role</option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="fullstack">FullStack Developer</option>
          </select>
        </div>

        {/* Checked */}

        <div>
          <label>
            <input
              type="checkbox"
              name="isSubscribed"
              checked={formData.isSubscribed}
              onChange={handleChange}
            />
            Subscribe to newsletter
          </label>
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
            Junior
          </label>
        </div>

        <div>
          <label>
            <input
              type="radio"
              name="experience"
              value="mid-senior"
              checked={formData.experience === "mid-senior"}
              onChange={handleChange}
            />
            Mid-Senior
          </label>
        </div>

        <div>
          <label>
            <input
              type="radio"
              name="experience"
              value="senior"
              checked={formData.experience === "senior"}
              onChange={handleChange}
            />
            Senior
          </label>
        </div>

        {/* bio */}

        <div>
          <label>Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Tell us about yourself ?"
          />
        </div>
        {/* Submit */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
