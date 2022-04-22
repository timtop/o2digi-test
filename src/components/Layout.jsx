import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./layout.css";

function Layout({ children }) {
  return (
    <div className="layout ">
      <Header />
      <div className="layout-content">{children}</div>

      <div className="layout-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
