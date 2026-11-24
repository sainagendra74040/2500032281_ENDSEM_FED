import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../StoreContext.jsx";

export default function Signup() {
  const { signup } = useStore();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.password.length < 6) return setError("Password must be at least 6 characters.");
    if (form.password !== form.confirm) return setError("Passwords do not match.");
    const err = signup(form.name.trim(), form.email.trim(), form.password);
    if (err) setError(err);
    else navigate("/");
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <label>Name</label>
      <input name="name" value={form.name} onChange={onChange} required />
      <label>Email</label>
      <input type="email" name="email" value={form.email} onChange={onChange} required />
      <label>Password</label>
      <input type="password" name="password" value={form.password} onChange={onChange} required />
      <label>Confirm Password</label>
      <input type="password" name="confirm" value={form.confirm} onChange={onChange} required />
      <button className="btn" type="submit">Create Account</button>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </form>
  );
}
