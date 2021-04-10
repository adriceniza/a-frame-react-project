import React from "react";
import elrincon from "../assets/elrincon.jpg";
import sancristobal from "../assets/sancristobal.jpg";
import "./Aboutus.css";
export default function Aboutus() {
  return (
    <div className="aboutus__main-container">
      <header>
        <h1>Aboutus</h1>
      </header>

      <div className="information">
        <p>
          Somos un grupo de estudiantes de dos ciclos superiores (DAM Y Turismo)
          , que se han unido para hacer un proyecto sobre la realidad virtual
          enfocada al turismo.
        </p>
      </div>
      <div className="highschool-images">
        <div className="left">
          <img src={elrincon} alt="elrincon" />
        </div>
        <div className="right">
          <img src={sancristobal} alt="sancristobal" />
        </div>
      </div>
    </div>
  );
}
