import React, { useContext } from "react";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

// const url = "https://randomuser.me/api/?results=60";

const Users = () => {
  const { users, loading, nextPage, prevPage, pageHandler, followers, page } =
    useContext(UserContext);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <section className="users__section section">
      <div className="users__header">
        <h3>User page</h3>
        <div className="underline"></div>
      </div>
      <article className="users__container">
        {followers.map((user, index) => {
          const { uuid } = user.login;
          const { first, last } = user.name;
          const { email } = user;
          const { large: image } = user.picture;

          return (
            <div className="users__container--contents" key={uuid}>
              <img src={image} className="users-image" alt="username" />
              <div>
                <h4> {`${first} ${last}`}</h4>
                <h6>{email}</h6>
                <button type="button" className="user-btn">
                  <Link to={`/users/${uuid}`}>View Profile</Link>
                </button>
              </div>
            </div>
          );
        })}
      </article>

      {!loading && (
        <div className="pagination__btn">
          <button className="prev-btn" onClick={prevPage}>
            ⏪
          </button>
          {users.map((_, index) => {
            return (
              <button
                className={`${
                  index === page ? "active__page-btn" : "page-btn "
                }`}
                key={index}
                onClick={() => pageHandler(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button className="next-btn" onClick={nextPage}>
            ⏩
          </button>
        </div>
      )}
    </section>
  );
};
export default Users;
