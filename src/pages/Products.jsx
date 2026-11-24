import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import { products } from "../data.js";

export default function Products() {
  const [params] = useSearchParams();
  const brand = params.get("brand");
  const list = brand ? products.filter((p) => p.brand === brand) : products;

  return (
    <>
      <h2>{brand ? `${brand} Laptops` : "All Laptops"}</h2>
      {list.length === 0 ? (
        <p>No laptops found.</p>
      ) : (
        <div className="grid">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </>
  );
}
