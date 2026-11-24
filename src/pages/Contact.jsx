import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // Demo only: no backend, so just show a confirmation.
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Contact Us</h2>
      {sent && <p className="success">Thanks! Your message has been sent.</p>}
      <label>Name</label>
      <input name="name" value={form.name} onChange={onChange} required />
      <label>Email</label>
      <input type="email" name="email" value={form.email} onChange={onChange} required />
      <label>Message</label>
      <textarea name="message" rows="5" value={form.message} onChange={onChange} required />
      <button className="btn" type="submit">Send Message</button>
    </form>
  );
}
