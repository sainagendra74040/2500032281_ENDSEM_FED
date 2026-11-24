import { createContext, useContext, useEffect, useState } from "react";

const StoreContext = createContext(null);

const load = (key, fallback) => {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
};

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => load("cart", []));
  const [users, setUsers] = useState(() => load("users", []));
  const [user, setUser] = useState(() => load("user", null));

  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem("users", JSON.stringify(users)), [users]);
  useEffect(() => localStorage.setItem("user", JSON.stringify(user)), [user]);

  const addToCart = (product) =>
    setCart((c) => {
      const found = c.find((i) => i.id === product.id);
      if (found) return c.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      return [...c, { ...product, qty: 1 }];
    });

  const changeQty = (id, delta) =>
    setCart((c) =>
      c.map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i)).filter((i) => i.qty > 0)
    );

  const removeFromCart = (id) => setCart((c) => c.filter((i) => i.id !== id));
  const clearCart = () => setCart([]);

  // Demo auth only: data is stored in the browser's localStorage.
  const signup = (name, email, password) => {
    if (users.some((u) => u.email === email)) return "Email already registered.";
    const newUser = { name, email, password };
    setUsers([...users, newUser]);
    setUser({ name, email });
    return null;
  };

  const login = (email, password) => {
    const found = users.find((u) => u.email === email && u.password === password);
    if (!found) return "Invalid email or password.";
    setUser({ name: found.name, email: found.email });
    return null;
  };

  const logout = () => setUser(null);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => s + i.qty * i.price, 0);

  return (
    <StoreContext.Provider
      value={{ cart, cartCount, cartTotal, addToCart, changeQty, removeFromCart, clearCart, user, signup, login, logout }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export const useStore = () => useContext(StoreContext);
