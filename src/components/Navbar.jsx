import React from "react";
import logo from "../assets/images/Logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-silver sticky-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" height="24" />
        </a>

        {/* Navbar Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Section */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 d-flex gap-3">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Feature
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Testimonial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FAQ
              </a>
            </li>
          </ul>
          <div className="d-block d-lg-none gap-2">
          <button className="btn ps-0">Login</button>
          <button className="btn btn-success">Sign in</button>
        </div>
        </div>

        {/* Buttons on the right */}
        <div className="d-none d-lg-flex gap-2">
          <button className="btn primary-text">Login</button>
          <button className="btn bg-green white-text">Sign in</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
