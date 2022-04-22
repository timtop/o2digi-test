import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./header.css";

function Header() {
  // const [active, setActive] = useState(true);
  const [id, setId] = useState();

  console.log(id);

  const items = [
    "Products",
    "Bike Types",
    "About Us",
    "Testimonials",
    "Contact",
  ];
  return (
    <div className="nav-bg">
      <div className="container">
        <div className="nav">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <ul className="nav-items">
            {items.map((item, index) => (
              <li
                onClick={() => setId(index)}
                className={id === index ? "active" : "unactive"}
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
