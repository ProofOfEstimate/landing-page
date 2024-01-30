import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="featured-services" className="featured-services">
      <div className="container">

        <div className="row">
          <div className="col-md-4 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4 className="title"><a href="">Lorem Ipsum</a></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div className="col-md-4 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
              <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div className="col-md-4 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4 className="title"><a href="">Magni Dolores</a></h4>
              <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          

        </div>

      </div>
    </section>
  );
};

export default Features;
