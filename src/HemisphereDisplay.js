import React from "react";
import "./Hemisphere.css";
import nothernPic from "./Images/nothernHemisphere.jpeg";
import sounthernPic from "./Images/spothernHemisphere.jpeg";

const hemisphereConfig = {
  Nothern: {
    text: "It is nothern hemisphere",
    picture: nothernPic,
  },
  Southern: {
    text: "It is southern hemisphere",
    picture: sounthernPic,
  },
};

const HemisphereDisplay = ({ latitude }) => {
  const hemisphere = latitude > 0 ? "Nothern" : "Southern";

  const { text, picture } = hemisphereConfig[hemisphere];

  return (
    <div className={hemisphere}>
      <div className="ui raised text container segment">
        <div className="image">
          <img src={picture} alt="Hemisphere pics" />
        </div>
        <div className="ui teal bottom attached label">
          You are in the {text}
        </div>
      </div>
    </div>
  );
};

export default HemisphereDisplay;
