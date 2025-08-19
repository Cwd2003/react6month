import React from "react";

const Hero = () => {
  return (
    <section className="bg-light py-5">
      <div className="container d-flex align-items-center">
        <div className="row w-100">
          <div className="col-lg-7">
            <h1 className="display-5 fw-bold">WELCOME TO MEDILAB</h1>
            <p className="lead">
              We are team of talented designers making websites with Bootstrap
            </p>
          </div>
          <div className="col-lg-5 text-center">
            <img
              src="https://bootstrapmade.com/demo/templates/Medilab/assets/img/hero-bg.jpg"
              className="img-fluid rounded"
              alt="Doctor"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
