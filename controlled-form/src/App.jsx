import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    role: "",
    isSubscribed: false,
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
    });
  };

  return (
    <>
      <h3>Controlled Form </h3>

      <form onSubmit={handleSubmit}>
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

        {/* Checked */}

        <div>
          <label>
            <input
              type="checkbox"
              name="isSubscribed"
              value={formData.isSubscribed}
              onChange={handleChange}
            />
            Subscribe to newsletter
          </label>
        </div>

        {/* Submit */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
