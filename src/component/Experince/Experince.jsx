import React from "react";
import "./Experince.css";
import Track from "./Track";

const Experience = () => {

  const dataFront = [
    { clname: "html", lang: "html" },
    { clname: "css", lang: "css" },
    { clname: "bts", lang: "bootstrap" },
    { clname: "js", lang: "javaScript" },
    { clname: "react", lang: "react js" },
  ];

  const dataBack = [
    { clname: "Mongo", lang: "MongoDB" },
    { clname: "php", lang: "PHP" },
    { clname: "express", lang: "Express" },
    { clname: "python", lang: "Python" },
  ];

  const dataother = [
    { clname: "c", lang: "C++" },
    { clname: "photoshop", lang: "PhotoShop" },
    { clname: "ds", lang: "Data Structure" },
    { clname: "datasceince", lang: "Data Science" },
    { clname: "dataanlysis", lang: "Data Anlysis" },
  ]

  return (
    <section id="myexperience">
      <div className="container">
        <div className="header-section">
          <h5>get to know</h5>
          <h1> my experience</h1>
        </div>

        <div className="main-content-exper">
        <Track data = {dataFront} nameTrack = "Front End Developer" />
        <Track data = {dataBack} nameTrack = "back End Developer" />
        <Track data = {dataother} nameTrack = "other skills" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
