import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to={"/"}>
        <img
          src="https://res.cloudinary.com/dkpbl67xq/image/upload/v1677370810/logo_m7m4yh.png"
          alt="logo de fixbike"
        />
      </Link>
    </div>
  );
};

export default Logo;
