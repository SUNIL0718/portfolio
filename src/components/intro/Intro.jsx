import React from "react";
import "./intro.css";
import Me from "../../img/Me.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">SUNIL KUMAR</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Photohgrapher</div>
              <div className="i-title-item">Writter</div>
              <div className="i-title-item">Content Crater</div>
            </div>
          </div>
          <p className="i-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            consequatur consectetur dolore optio facere impedit, est,
            repudiandae vel cum ducimus culpa deleniti quia nam. Voluptatibus
            eligendi molestiae officiis in rem.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
