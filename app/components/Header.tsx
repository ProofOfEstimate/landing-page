import React from 'react';

const Header: React.FC = () => {
  return (
    <header id="header" className="d-flex align-items-center fixed-top">
      <div className="container d-flex align-items-center justify-content-between">

        <h1 className="logo"><a href="index.html">POE<span>.</span></a></h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" /></a> */}

        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">Features</a></li>
            <li><a className="nav-link scrollto" href="#services">Community</a></li>
                        
            <li><a className="nav-link scrollto" href="#contact">About</a></li>
            <li><button type="button" className="btn btn-warning">
                Use POE
              </button></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>{/* .navbar */}

      </div>
    </header>
  );
};

export default Header;
