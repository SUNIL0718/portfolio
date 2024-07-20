import React from "react";
import "./about.css";
import award from "../../img/award.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://contrastly.com/wp-content/uploads/focus-1-1.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          perspiciatis necessitatibus, iure odit facere eius?
        </p>
        <p className="i-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          consequatur consectetur dolore optio facere impedit, est, repudiandae
          vel cum ducimus culpa deleniti quia nam. Voluptatibus eligendi
          molestiae officiis in rem.
        </p>
        <div className="a-award">
          <img src={award} alt="" className="a-award-img" />
          <div className="a-award-text">
            <h4 className="a-award-title">International Design Award 2021</h4>
            <p className="a-award-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae quia perferendis dolores cupiditate exercitationem qui
              sunt ipsam, nam eveniet rem ad, a laborum aliquid eaque facilis
              iusto est reiciendis quisquam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
