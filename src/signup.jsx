

import "./auth.css";
import { useNavigate } from "react-router-dom";

export default function signup() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("LOGIN CLICKED");
    navigate("/dashboard");
  };




  return (
    <div className="sign">
      <div className="signup-box">
      <h1>Registration Form</h1>

      <input
        type="text"
        placeholder="Name / Email"
        required
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        required
      />
      <br /><br />

      <input
        type="password"
        placeholder="New Password"
        required
      />
      <br /><br />

      <button>CREATE ACCOUNT</button><br></br>

      <p>
        Already have an account?{" "}
          <a href="#" onClick={() => setPage("login")}>login</a>
      </p>
     </div>
    </div>
  );
}
