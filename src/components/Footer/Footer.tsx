import React, { useState } from "react";
import "./Footer.scss";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
interface Props {}

const Footer = (props: Props) => {
  const [year, setYear] = useState(new Date().getFullYear());
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.instagram.com/leslied41/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon className="icon" />
        </a>
        <a
          href="https://www.facebook.com/leslie.duan.96"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/leslie-duan-641853121/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon className="icon" />
        </a>
        <a href="mailto:leslied41@gmail.com">
          <EmailIcon className="icon" />
        </a>
      </div>
      <p>
        &copy; <span>{year}</span> Leslie Duan
      </p>
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <ArrowUpwardIcon />
      </button>
    </div>
  );
};

export default Footer;
