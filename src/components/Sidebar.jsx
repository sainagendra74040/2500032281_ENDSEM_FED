import { Link, useSearchParams } from "react-router-dom";
import { brands } from "../data.js";

export default function Sidebar() {
  const [params] = useSearchParams();
  const active = params.get("brand");

  return (
    <aside className="sidebar">
      <h4>Shop by Brand</h4>
      <ul>
        <li>
          <Link to="/products" className={!active ? "active" : ""}>All Laptops</Link>
        </li>
        {brands.map((b) => (
          <li key={b}>
            <Link to={`/products?brand=${b}`} className={active === b ? "active" : ""}>
              {b}
            </Link>
          </li>
        ))}
      </ul>

      <h4>Quick Links</h4>
      <ul>
        <li><Link to="/cart">My Cart</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </aside>
  );
}
