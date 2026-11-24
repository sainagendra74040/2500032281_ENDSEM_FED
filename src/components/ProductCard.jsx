import { Link } from "react-router-dom";
import LaptopImage from "./LaptopImage.jsx";
import { formatPrice } from "../data.js";
import { useStore } from "../StoreContext.jsx";

export default function ProductCard({ product }) {
  const { addToCart } = useStore();
  return (
    <div className="card">
      <Link to={`/products/${product.id}`}>
        <LaptopImage brand={product.brand} color={product.color} />
      </Link>
      <div className="card-body">
        <span className="badge">{product.brand}</span>
        <h3>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="muted">
          {product.ram} • {product.storage}
        </p>
        <div className="card-foot">
          <strong>{formatPrice(product.price)}</strong>
          <button className="btn small" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
