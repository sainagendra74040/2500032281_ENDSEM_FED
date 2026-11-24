import { Link, useNavigate, useParams } from "react-router-dom";
import LaptopImage from "../components/LaptopImage.jsx";
import { formatPrice, products } from "../data.js";
import { useStore } from "../StoreContext.jsx";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useStore();
  const p = products.find((x) => x.id === Number(id));

  if (!p) return <p>Product not found. <Link to="/products">Back to products</Link></p>;

  return (
    <div className="detail">
      <LaptopImage brand={p.brand} color={p.color} />
      <div>
        <span className="badge">{p.brand}</span>
        <h2>{p.name}</h2>
        <h3 className="price">{formatPrice(p.price)}</h3>
        <table className="specs">
          <tbody>
            <tr><td>Processor</td><td>{p.cpu}</td></tr>
            <tr><td>RAM</td><td>{p.ram}</td></tr>
            <tr><td>Storage</td><td>{p.storage}</td></tr>
            <tr><td>Display</td><td>{p.screen}</td></tr>
          </tbody>
        </table>
        <button className="btn" onClick={() => addToCart(p)}>Add to Cart</button>{" "}
        <button className="btn outline" onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}
