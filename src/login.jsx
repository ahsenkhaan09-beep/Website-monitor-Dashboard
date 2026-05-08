import "./auth.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("LOGIN CLICKED");
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <h1>Site Guard</h1>

      <form onSubmit={handleLogin}>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
        </div>

        <div className="input-box">
          <input type="password" placeholder="Password" required />
        </div>

        <button className="login-btn" type="submit">
          Login
        </button>
      </form>

      <div className="signup-link">
        Don't have an account?{" "}
        <a href="#" onClick={() => navigate("/Signup")}>
          signup
        </a>
      </div>
    </div>
  );
}