import React, { MouseEvent } from "react";
import { Link } from "react-router-dom";

function ProductHeader() {
  const handleClick = (id: string) => (e: MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="header-navigation">
      {/* Use the Link component for client-side routing */}
      <Link to="/">
        <h1 className="header-logo">ATEXPLASTIC</h1>
      </Link>
      <div className="middle-navigation">
        <Link
          to="/"
          className="header-nav-item active hover-underline-animation"
        >
          Kezdőlap
        </Link>

        {/* Hash links to scroll to sections */}
        <Link
          to="/#products"
          className="header-nav-item hover-underline-animation"
        >
          Termékek
        </Link>
        <Link
          to="/#customproduct"
          className="header-nav-item hover-underline-animation"
        >
          Személyre szabás
        </Link>
      </div>
      <button onClick={handleClick("contact")} className="contact-button">
        Kapcsolat
      </button>
    </nav>
  );
}

export default ProductHeader;
