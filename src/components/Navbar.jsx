import React from "react";
import logo from "../assets/images/Logo.svg";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-silver">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src={logo} alt="Logo" height="24" />
        </a>

        {/* Navbar Toggle Button */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Section */}
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0 d-flex gap-3">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Service
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Feature
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Product
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Testimonial
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                FAQ
              </a>
            </li>
          </ul>
          <div className="d-block d-lg-none gap-2">
          <button class="btn ps-0">Login</button>
          <button class="btn btn-success">Sign in</button>
        </div>
        </div>

        {/* Buttons on the right */}
        <div className="d-none d-lg-flex gap-2">
          <button class="btn primary-text">Login</button>
          <button class="btn bg-green white-text">Sign in</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
