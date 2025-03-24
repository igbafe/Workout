import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Signup, error, loading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Signup(email, password);
  };
  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>

      <label>Email:</label>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password:</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={loading}>Sign Up</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default SignUp;
