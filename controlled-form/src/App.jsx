import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      username: "",
      email: "",
      role: "",
    });
  };

  return (
    <>
      <h3>Controlled Form </h3>

      <form onClick={handleSubmit}>
        {/* Username */}
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            placeholder="Enter your username"
            onChange={handleChange}
          />
        </div>
        {/* Email */}
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </div>
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

        {/* Submit */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
