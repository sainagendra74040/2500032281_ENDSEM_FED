import { Link, useNavigate } from "react-router-dom";
import { formatPrice } from "../data.js";
import { useStore } from "../StoreContext.jsx";

export default function Cart() {
  const { cart, cartTotal, changeQty, removeFromCart, clearCart, user } = useStore();
  const navigate = useNavigate();

  const checkout = () => {
    if (!user) {
      alert("Please login to place your order.");
      navigate("/login");
      return;
    }
    alert("Order placed successfully! Thank you, " + user.name);
    clearCart();
    navigate("/");
  };

  if (cart.length === 0)
    return (
      <>
        <h2>Your Cart</h2>
        <p>Your cart is empty. <Link to="/products">Browse laptops</Link></p>
      </>
    );

  return (
    <>
      <h2>Your Cart</h2>
      <table className="cart-table">
        <thead>
          <tr><th>Product</th><th>Price</th><th>Qty</th><th>Subtotal</th><th></th></tr>
        </thead>
        <tbody>
          {cart.map((i) => (
            <tr key={i.id}>
              <td>{i.name}</td>
              <td>{formatPrice(i.price)}</td>
              <td>
                <button className="qty" onClick={() => changeQty(i.id, -1)}>−</button>
                {i.qty}
                <button className="qty" onClick={() => changeQty(i.id, 1)}>+</button>
              </td>
              <td>{formatPrice(i.price * i.qty)}</td>
              <td><button className="link-btn" onClick={() => removeFromCart(i.id)}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="total">Total: {formatPrice(cartTotal)}</h3>
      <button className="btn" onClick={checkout}>Place Order</button>
    </>
  );
}
