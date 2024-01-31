import React from "react";
import Image from "next/image";
import img1 from "../assets/img/about.jpg";

const Join: React.FC = () => {
  return (
    <section id="join" className="join section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h4 style={{color: "whitesmoke"}}>Discover Tomorrow, Today</h4>
            <br />
            <p style={{color: "whitesmoke"}}>Launch the Future!</p>
          </div>
        </div>
      </div>
      <div className="text-left">

        <a href="https://poe-solana-beta.vercel.app/" target="_blank" className="joinbut">Lauch App</a>
      </div>
    </section>
  );
};

export default Join;
