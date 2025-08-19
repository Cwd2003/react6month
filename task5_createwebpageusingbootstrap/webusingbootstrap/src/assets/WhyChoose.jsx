import React from "react";

const WhyChoose = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4">
          {/* Left Blue Box */}
          <div className="col-lg-3">
            <div className="p-4 bg-primary text-white rounded shadow">
              <h3>Why Choose Medilab?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" className="btn btn-light btn-sm">Learn More →</a>
            </div>
          </div>

          {/* Features */}
          <div className="col-lg-9">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="p-4 bg-white shadow rounded text-center">
                  <i className="bi bi-clipboard-check display-5 text-primary"></i>
                  <h5 className="mt-3">Corporis voluptates</h5>
                  <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-4 bg-white shadow rounded text-center">
                  <i className="bi bi-gem display-5 text-primary"></i>
                  <h5 className="mt-3">Ullamco laboris</h5>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-4 bg-white shadow rounded text-center">
                  <i className="bi bi-box-seam display-5 text-primary"></i>
                  <h5 className="mt-3">Labore incidid dolore</h5>
                  <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
