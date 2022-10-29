import React from "react";
import { Link } from "react-router-dom";
import error from "../components/image/error.svg";

const Error = () => {
  return (
    <section className="error__section section">
      <div className="error__container">
        <figure className="error__container--image">
          <img src={error} alt="hero" className="error-image" />
        </figure>
        <button type="button" className="btn">
          {<Link to="/">Go home</Link>}
        </button>
      </div>
    </section>
  );
};

export default Error;
