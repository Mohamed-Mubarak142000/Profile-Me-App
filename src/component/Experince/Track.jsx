import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Track = ({ data, ...props }) => {
  const renderFrontEnd = data.map((el) => {
    return (
      <div className="content-skills">
        <div className="skills">
          <h2>
            <span>
              <FaCheckCircle />
            </span>
            {el.lang}
          </h2>

          <div className="range-lang">
            <span className="precentage" id={el.clname}></span>
          </div>
          <h5>experienced</h5>
        </div>
      </div>
    );
  });

  return (

      <div className="child-content-exper">
        <div className="header-child">
          <h3>{props.nameTrack}</h3>
        </div>
        {renderFrontEnd}
      </div>
  );
};

export default Track;
