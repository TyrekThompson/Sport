
import React from "react";
import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div>
      <header className="header">
        <nav className="header--nav">
          <Link to="/"><i class="car"></i></Link>

          <h2 className="nav-ul">
            <Link to="/">
              </Link>
          </h2>
          <ul className="nav-ul">
              <Link className="blue" to="/">JAYLEN RAYNOR </Link>
            </ul>
          
            <ul className="nav-ul">
              <Link className="blue" to="/Product">SCHOLARSHIP OFFERS  </Link>
            </ul>
          <ul>
            <ul className="nav-ul">
              <Link className="blue" to="/Contact">CONTACT ME </Link>
            </ul>
          </ul>
        </nav>
      </header>
    </div>
  );
}