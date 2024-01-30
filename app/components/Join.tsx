import React from "react";
import Image from "next/image";
import img1 from "../assets/img/about.jpg";

const Join: React.FC = () => {
  return (
    <section id="join" className="join section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h4>Looking to collaborate?</h4>
            <br />
            <p>Join our growing community</p>
          </div>
        </div>
      </div>
      <div className="text-left">
        <a className="joinbut">Use POE</a>
      </div>
    </section>
  );
};

export default Join;
