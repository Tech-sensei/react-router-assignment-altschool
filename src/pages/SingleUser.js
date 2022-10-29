import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../App";

const SingleUser = () => {
  const { Id } = useParams();
  console.log(Id);

  const { followers } = useContext(UserContext);

  let result = followers.find((val) => val.login.uuid === Id);
  console.log(result);

  const { first, last } = result.name;
  const { email } = result;
  const { large: image } = result.picture;
  const { age } = result.dob;
  const { number, name } = result.location.street;

  return (
    <section className="single__section section">
      <div className="about__header">
        <h3>User Info</h3>
        <div className="underline"></div>
      </div>
      <div className="single__container">
        <div className="single__container--contents">
          <img src={image} alt={`${first} ${last} `} />
          <div>
            <div className="single__info">
              <div className="single__info--desc">
                <h4>Name:</h4>
                <p>{`${first} ${last} `}</p>
              </div>
              <div className="single__info--desc">
                <h4>Email:</h4>
                <p>{email}</p>
              </div>
              <div className="single__info--desc">
                <h4>Age:</h4>
                <p>{age}</p>
              </div>
              <div className="single__info--desc">
                <h4>Address:</h4>
                <p>{`${number} ${name} `}</p>
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="btn">
          {<Link to="/users">back</Link>}
        </button>
      </div>
    </section>
  );
};
export default SingleUser;
