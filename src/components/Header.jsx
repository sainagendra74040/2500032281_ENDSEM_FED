import { Link, NavLink, useNavigate } from "react-router-dom";
import { useStore } from "../StoreContext.jsx";

export default function Header() {
  const { cartCount, user, logout } = useStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        💻 LaptopZone
      </Link>

      <nav className="menu">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <div className="header-right">
        <NavLink to="/cart" className="cart-link">
          🛒 Cart <span className="count">{cartCount}</span>
        </NavLink>
        {user ? (
          <>
            <span className="hello">Hi, {user.name}</span>
            <button className="btn small outline" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="btn small outline">Login</NavLink>
            <NavLink to="/signup" className="btn small">Sign Up</NavLink>
          </>
        )}
      </div>
    </header>
  );
}
