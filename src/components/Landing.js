import React from "react";
// import AI from "/ai.jpg";

function Landing() {
  return (
    <div className="landing">
      <div className="landing__left">
        <div className="landing__left__content">
          <h1 className="landing__left__content__title">
            <span>We Build with AI's</span> While You Rest
          </h1>
          <p className="landing__left__content__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptas, quod, quia, voluptates quae voluptatibus quidem
            exercitationem quos voluptatum quibusdam quas. Quisquam, quae
          </p>
          <div className="landing__left__content__button">
            <button className="landing__left__content__button__getAQuote">
              Get a Quote
            </button>
            <button className="landing__left__content__button__contactUs">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="landing__right">
        <div className=" landing__right__content">
          <img src={"/ai.png"} alt="AI" className="landing__right__image" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
