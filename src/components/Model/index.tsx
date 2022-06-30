import React, { FC, useRef, useEffect, useState } from "react";
import "./index.scss";
import HandshakeIcon from "@mui/icons-material/Handshake";
import CloseIcon from "@material-ui/icons/Close";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import hand from "../../assets/hand.svg";

interface Props {
  openModel: boolean;
  setOpenModel: (openModel: boolean) => void;
}

const ContactModel: FC<Props> = ({ openModel, setOpenModel }) => {
  const handRef = useRef<HTMLImageElement | null>(null);
  const [mosuePostion, setMosuePostion] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMosuePostion({ x: e.clientX, y: e.clientY });
    };
    openModel && window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [openModel]);

  useEffect(() => {
    if (openModel) document.body.style.overflow = "hidden";
    if (!openModel) document.body.style.overflow = "unset";
  }, [openModel]);

  useEffect(() => {
    if (!handRef.current) return;
    handRef.current.style.top = `${mosuePostion.y - 50}px`;
    handRef.current.style.left = `${mosuePostion.x - 150}px`;
  }, [mosuePostion]);
  return (
    <div className={openModel ? "model open" : "model"}>
      <CloseIcon
        className="closeIcon"
        onClick={() => {
          setOpenModel(!openModel);
        }}
      />
      <h2>Contact me</h2>

      <a href="mailto:leslied41@gmail.com">
        leslied41@gmail.com
        {/* <HandshakeIcon ref={handRef} /> */}
        <img src={hand} alt="hand" ref={handRef} />
      </a>
      <div className="socialMedia">
        <div className="title">
          <p>seems likes a social guy?</p>
          <p>Not really!</p>
        </div>

        <div className="platforms">
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon />
          <LinkedInIcon />
        </div>
      </div>
    </div>
  );
};
export default ContactModel;
