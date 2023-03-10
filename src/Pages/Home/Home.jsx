import React from "react";
import Featured from "../../Components/Featured/Featured";
import Slides from "../../Components/Slides/Slides";
import TrustedBy from "../../Components/TrustedBy/TrustedBy";
import { cards , projects } from "../../data";
import ProjCard from "../../Components/Projectcard/ProjCard";
import CatCard from "../../Components/CatCard/CatCard";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slides slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => {
          return <CatCard key={card.id} item={card} />;
        })}
      </Slides>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A Whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The Best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>
            <p>
              Questions? Our round-the-clock support team is available to help
              anytime, anywhere.
            </p>
          </div>
          <div className="item">
            <video src="./img/fiverr.mp4" controls></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              fiverr <span>business.</span>
            </h1>
            <h1>A Business solutions designed for the teams</h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager{" "}
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace{" "}
            </div>
            <button className="business-button">Explore Fiverr Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slides slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => {
          return <ProjCard key={card.id} item={card} />;
        })}
      </Slides>
    </div>
  );
};

export default Home;
