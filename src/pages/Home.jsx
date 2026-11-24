import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import { products } from "../data.js";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Find Your Perfect Laptop</h1>
        <p>HP • Lenovo • Asus VivoBook • Dell • Acer • Apple</p>
        <Link to="/products" className="btn">Shop Now</Link>
      </section>

      <h2>Featured Laptops</h2>
      <div className="grid">
        {products.slice(0, 6).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}
