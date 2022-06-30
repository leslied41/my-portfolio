import React, { useState, useEffect } from "react";
import "./SimpleNavbar.scss";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ReorderIcon from "@material-ui/icons/Reorder";
var throttle = require("lodash.throttle");

interface Props {}

const SimpleNavbar = (props: Props) => {
  const [expandNav, setExpandNav] = useState(false);
  const location = useLocation();
  const [shadow, setShadow] = useState(false);
  useEffect(() => {
    setExpandNav(false);
  }, [location]);
  useEffect(() => {
    const checkShadow = () => {
      if (window.scrollY > 10) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    const throttleFn = throttle(() => {
      checkShadow();
    }, 100);
    window.addEventListener("scroll", throttleFn);
    return () => {
      window.removeEventListener("scroll", throttleFn);
    };
  }, []);
  return (
    <div
      className={
        expandNav
          ? "simple-navbar open"
          : shadow
          ? "simple-navbar shadow"
          : "simple-navbar"
      }
    >
      <div className="nav-icon">
        <ReorderIcon
          onClick={() => {
            setExpandNav(!expandNav);
          }}
        />
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <HashLink to="/#projectsList">
          <span> Projects</span>
        </HashLink>
        <Link to="/layout/experience">
          <span> Experience</span>
        </Link>
      </div>
    </div>
  );
};
export default SimpleNavbar;
