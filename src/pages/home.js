import React from "react";
import Hero from "../components/image/hero.svg";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <section className="hero__section section">
      <div className="hero__container">
        <div className="hero__container--contents">
          <h4>So, you want user data</h4>
          <h3>
            Random <span>User</span>
          </h3>
          <p>
            Easily generate fake data for populating your mockups and testing
            your applications. With user snippets & libraries like Faker along
            with a complete programming language, you have full control over the
            output of your API.
          </p>
          <button type="button" className="btn">
            {<Link to="/about">Learn More</Link>}
          </button>
        </div>

        <figure className="hero__container--image">
          <img src={Hero} alt="hero" className="hero-image" />
        </figure>
      </div>
      <Outlet />
    </section>
  );
};

export default Home;
