import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignIn() {
   
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  
  const handleClick = (e) => {
    e.preventDefault();
   
    axios.post(
      `${process.env.REACT_APP_BASEURL}/user/login`,
      {email, password },
      { withCredentials: true }
    )
      .then((res) => {
        console.log(res.data)
        toast.success(res.data.message);
      })
      .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div
     className="min-vh-100 d-flex align-items-center justify-content-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1497445462247-4330a224fdb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080')", // New background image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
    >
      <div
        className="container p-4 bg-white rounded shadow-lg d-flex flex-column align-items-center gap-4"
        style={{ maxWidth: "400px", opacity: 0.95 }}
      >
        <div className="text-center mb-4">
          <h2 className="font-weight-bold text-dark">Log In Page</h2>
          <p className="text-muted">Access your account</p>
        </div>

        {/* Right Section (Form) */}
        <div className="w-100">
          <form className="d-flex flex-column gap-3" onClick={handleClick}>
            {/* Email Input */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Your email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Your password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="**********"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">
              Sign In
            </button>
          </form>

          {/* Sign-Up Link */}
          <div className="text-center small mt-3">
            <span>Don't have an account? </span>
            <Link to="/signup" className="text-primary">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
