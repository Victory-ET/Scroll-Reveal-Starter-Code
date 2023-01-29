import React from "react";

function About() {
  return (
    <div className="About__container" id="About">
      <h1 className="About__title">About Us</h1>
      <div className="flex justify-center items-start">
        <p className="About__description">
          Make your dream home a reality using our advanced building
          technologies. Customize and everything visualize all from a digital
          display. There are no limitations with AI.
        </p>
      </div>
      <div className="About__cards">
        <div className="About__card">
          <div className="About__card__image">
            <img
              src={"/building.png"}
              alt="AI"
              className="About__card__image__img"
            />
          </div>
          <div className="About__card__content">
            <h1 className="About__card__content__title">Best Architecture</h1>
            <p className="About__card__content__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptas, quod, quia, voluptates quae voluptatibus quidem
              exercitationem quos voluptatum quibusdam quas. Quisquam, quae
            </p>
          </div>
        </div>
        <div className="About__card">
          <div className="About__card__image">
            <img
              src={"/building.png"}
              alt="AI"
              className="About__card__image__img"
            />
          </div>
          <div className="About__card__content">
            <h1 className="About__card__content__title">World Wide Network</h1>
            <p className="About__card__content__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptas, quod, quia, voluptates quae voluptatibus quidem
              exercitationem quos voluptatum quibusdam quas. Quisquam, quae
            </p>
          </div>
        </div>
        <div className="About__card">
          <div className="About__card__image">
            <img
              src={"/building.png"}
              alt="AI"
              className="About__card__image__img"
            />
          </div>
          <div className="About__card__content">
            <h1 className="About__card__content__title">Professional Team</h1>
            <p className="About__card__content__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptas, quod, quia, voluptates quae voluptatibus quidem
              exercitationem quos voluptatum quibusdam quas. Quisquam, quae
            </p>
          </div>
        </div>
      </div>
      {/* Read more section */}
      <div className="About__ReadMore">
        <div className="About__ReadMore__Img">
          <img src={"/ai.png"} alt="AI" className="About__card__image__img" />
        </div>
        <div className="About__ReadMore__Content">
          <div className=" z-[2]">
            <h1>We are Experts in Building Dreams</h1>
            <p>
              Let us build the home you desire. Drag and drop features onto your
              home design, if you can imagine it, you can have it
            </p>
            <button className="landing__left__content__button__getAQuote">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
