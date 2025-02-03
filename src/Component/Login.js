import { useState } from "react";
import { Navbar } from "./Navbar";
export  function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for login logic
    console.log("Email:", email, "Password:", password);
  };

  return (
    <>
    <Navbar/>
    <div className="container d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="col-md-4">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
    </>
  );
}
