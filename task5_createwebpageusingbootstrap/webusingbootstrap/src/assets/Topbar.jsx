import React from "react";

const Topbar = () => {
  return (
    <div className="bg-primary text-white py-2">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <i className="bi bi-envelope me-2"></i> contact@example.com
          <span className="ms-3">
            <i className="bi bi-phone me-2"></i> +1 5589 55488 55
          </span>
        </div>
        <div>
          <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
          <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-white me-3"><i className="bi bi-instagram"></i></a>
          <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
