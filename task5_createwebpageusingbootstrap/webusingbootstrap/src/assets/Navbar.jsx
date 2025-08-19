import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">Medilab</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Departments</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Doctors</a></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Dropdown</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
              </ul>
            </li>
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
          </ul>
          <a href="#" className="btn btn-primary ms-lg-3">Make an Appointment</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
