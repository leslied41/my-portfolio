import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import ReorderIcon from "@material-ui/icons/Reorder";
import CloseIcon from "@material-ui/icons/Close";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { projectData } from "../../assets/projectData";
import ContactModel from "../Model";
import { HashLink } from "react-router-hash-link";

var throttle = require("lodash.throttle");

interface Props {}

const Navbar = (props: Props) => {
  const [expandNavbar, setExpandNavbar] = useState<boolean>(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(0);
  const [openModel, setOpenModel] = useState(false);
  const throttleFn = throttle(() => {
    setScrolled(window.pageYOffset);
  }, 100);
  useEffect(() => {
    window.addEventListener("scroll", throttleFn);
    return () => {
      window.removeEventListener("scroll", throttleFn);
    };
  }, []);

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);
  return (
    <>
      <ContactModel openModel={openModel} setOpenModel={setOpenModel} />
      <div
        className={
          scrolled
            ? expandNavbar
              ? "navbar postionSwap open"
              : "navbar postionSwap "
            : expandNavbar
            ? "navbar open"
            : "navbar"
        }
      >
        <div className="toggleBtn">
          <button onClick={() => setExpandNavbar(!expandNavbar)}>
            {expandNavbar ? (
              <CloseIcon className="icon" />
            ) : (
              <div>
                <ReorderIcon className="icon" />
                <span className="icon-menu">Menu</span>
              </div>
            )}
          </button>
          {/* <p>My Portfolio</p> */}
          <button className="contact" onClick={() => setOpenModel(!openModel)}>
            Contact
          </button>
        </div>
        <div className="links">
          <div className="nav-item">
            <HashLink smooth to="#homeAnchor" className="nav-item-title">
              <div className="title-div">
                <span>Home</span>
                <span>Home</span>
              </div>
            </HashLink>
          </div>
          <div className="nav-item">
            <HashLink
              smooth
              to="#projectsList"
              className="nav-item-title"
              onClick={() => {
                setExpandNavbar(false);
              }}
            >
              <div className="title-div">
                <span>Projects</span>
                <span>Projects</span>
              </div>
            </HashLink>
            <ul>
              {projectData.map((p) => {
                const { id, name } = p;
                return (
                  <Link to={`layout/projects/${id}`} key={id}>
                    <li key={id} className="projectName">
                      {name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="nav-item">
            <Link to="layout/experience" className="nav-item-title">
              <div className="title-div">
                <span>Experience</span>
                <span>Experience</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="navbar-icons">
          <InstagramIcon className="icon" />
          <TwitterIcon className="icon" />
          <FacebookIcon className="icon" />
          <LinkedInIcon className="icon" />
        </div>
      </div>
    </>
  );
};
export default Navbar;
