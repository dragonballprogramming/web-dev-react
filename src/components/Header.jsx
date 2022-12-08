import React from "react";

function Header() {
    return   <header>
   <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#page-top"><img class="logo-img-header" src="img/logo-img.png" alt="Colorad" /></a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ms-auto">
                  <li className="nav-item"><a class="nav-link nav-color" href="#about">About</a></li>
                  <li className="nav-item"><a class="nav-link nav-color" href="#projects">Services</a></li>
                  <li className="nav-item"><a class="nav-link nav-color" href="#signup">Contact</a></li>
              </ul>
          </div>
      </div>
  </nav>
    </header>
}

export default Header;
