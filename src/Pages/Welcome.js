import React from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";
import "../Normalize.css";


export default function Welcome() {
  return (
    <div className="wrapper">
      <Link to="/home">
        <div className="left  ">
          <div className="image main ">
            <div className="centered web">
              <p>web</p>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/Game">
        <div className="right  ">
          <div className="image game ">
            <div className="centered vr">
              <p>VR</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
