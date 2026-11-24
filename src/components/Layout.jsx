import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <div className="app">
      <Header />
      <div className="content-wrap">
        <Sidebar />
        <main className="main">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
