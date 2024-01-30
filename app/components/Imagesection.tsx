import React from "react";
import Image from "next/image";
import img1 from "../assets/img/about1.png";
import img2 from "../assets/img/about2.png";

const Imagesection: React.FC = () => {
  return (
    <section id="about" className="about section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Image src={img1} className="img-fluid" alt="" style={{borderRadius: "10px"}} />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center">
            <Image src={img2} className="img-fluid" alt="" style={{borderRadius: "10px"}} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Imagesection;
