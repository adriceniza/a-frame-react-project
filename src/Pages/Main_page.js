import React from "react";
import Navbar from "../components/Navbar";
import "./Mainpage.css";
import Aboutus from "../components/Aboutus";
import { Link } from "react-router-dom";
import preview from "../assets/preview.mp4";
const Main_page = () => {
  return (
    <div className="mainPage">
      <Navbar />
      <section id="Home" className="index">
        <h1 className="text-h1">InRoom</h1>
      </section>
      <section id="Aboutus">
        <Aboutus />
      </section>

      <section id="previewCSS">
        <Link to="/Game">
          <video src={preview} autoPlay loop />
        </Link>
      </section>
    </div>
  );
};

export default Main_page;
