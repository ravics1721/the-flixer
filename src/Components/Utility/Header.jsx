import React from "react";
import { Link } from "react-router-dom";
import "../Style/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="h-row">
        <div className="h-brand">
          <Link to="/" className="h-link">
            <h1 className="h-title">The Flixer</h1>
          </Link>
          {/* <div className="h-option">
            <div>
              <span className="h-text">
                <Link to="/movies" className="h-link">
                  Movies
                </Link>
              </span>
              <span className="h-text">
                <Link to="/tv-shows" className="h-link">
                  TV Shows
                </Link>
              </span>
            </div>
          </div> */}
        </div>

        <div className="h-action">
          <Link to="/search" className="h-link">
            <i class="ri-search-line ri-2x"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
