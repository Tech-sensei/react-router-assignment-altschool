import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { links, socials } from "./data";
import Logo from "../components/image/logo.svg";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [toggle, setToggle] = useState(false);

  const navMenu = useRef(null);

  useEffect(() => {
    showLinks
      ? navMenu.current.classList.add("show-menu")
      : navMenu.current.classList.remove("show-menu");
  }, [showLinks]);

  const toggleNav = () => {
    setShowLinks(!showLinks);
    setToggle(!toggle);
  };
  const navLinkClose = () => {
    setShowLinks(false);
    setToggle(!toggle);
  };

  return (
    <header className="header">
      <nav className="nav section">
        <div className="nav__logo">
          <img src={Logo} alt="Nav logo" />
        </div>

        <div className="nav__menu" ref={navMenu}>
          <ul className="nav__list">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li className="nav__item" key={id}>
                  <Link to={url} className="nav__link" onClick={navLinkClose}>
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {socials.map((social) => {
            const { id, url, icon } = social;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>

        <div className="nav__toggle">
          <button className="nav__btn" onClick={toggleNav}>
            {toggle ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
