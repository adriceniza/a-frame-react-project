import React from "react";
import Navbar from "../components/Navbar";
import "./Mainpage.css";
import Aboutus from "../components/Aboutus";
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
      <section id="testsection"></section>
    </div>
  );
};

export default Main_page;
