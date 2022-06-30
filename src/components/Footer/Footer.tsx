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
        <InstagramIcon />
        <FacebookIcon />
        <LinkedInIcon />
        <EmailIcon />
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
