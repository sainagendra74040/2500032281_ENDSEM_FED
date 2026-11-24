import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cols">
        <div>
          <h4>LaptopZone</h4>
          <p>Your one-stop shop for HP, Lenovo, Asus, Dell and more.</p>
        </div>
        <div>
          <h4>Links</h4>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <p>📧 support@laptopzone.com</p>
          <p>📞 +91 98765 43210</p>
        </div>
      </div>
      <p className="copy">© {new Date().getFullYear()} LaptopZone. College project.</p>
    </footer>
  );
}
