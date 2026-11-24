import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../StoreContext.jsx";

export default function Login() {
  const { login } = useStore();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const err = login(form.email.trim(), form.password);
    if (err) setError(err);
    else navigate("/");
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <label>Email</label>
      <input type="email" name="email" value={form.email} onChange={onChange} required />
      <label>Password</label>
      <input type="password" name="password" value={form.password} onChange={onChange} required />
      <button className="btn" type="submit">Login</button>
      <p>New here? <Link to="/signup">Create an account</Link></p>
    </form>
  );
}
