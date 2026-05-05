

import "./auth.css";


export default function Signup({ setPage }){
  return (
    <div className="sign">
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

      <button>CREATE ACCOUNT</button>

      <p>
        Already have an account?{" "}
          <a href="#" onClick={() => setPage("login")}>login</a>
      </p>
    </div>
  );
}