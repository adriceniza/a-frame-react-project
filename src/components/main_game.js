import "aframe";
import "aframe-animation-component";
import "aframe-particle-system-component";
import "babel-polyfill";
import { Entity, Scene } from "aframe-react";
import React, { useState } from "react";
import Triana from "../assets/triana.jpg";
import museopg from "../assets/museopg.jpg";
import Palacete from "../assets/nulaspalmas.jpg";
import Pilar from "../assets/plazapilarnuevo.jpg";
import Teatro from "../assets/teatro.jpg";
import road from "../assets/road_rocks.jpg";
import Abad from "../assets/sanantonioabad.jpg";
import plazaSantaana from "../assets/plazasantaana.jpg";
import videoPalacete from "../assets/VídeoPalacete.mp4";

const Main_game = () => {
  /* Thumbnails */

  let triana = {
    shader: "flat",
    src: "thumbs/TRIANA-THUMB.jpg",
  };
  let teatro = {
    shader: "flat",
    src: "thumbs/Teatro800.jpg",
  };
  let abad = {
    shader: "flat",
    src: "thumbs/SanAntonioAbad800.jpg",
  };
  let pilarnuevo = {
    shader: "flat",
    src: "thumbs/Pilarnuevo800.jpg",
  };
  let palacete = {
    shader: "flat",
    src: "thumbs/Palacete800.jpg",
  };
  let perezGaldos = {
    shader: "flat",
    src: "thumbs/MuseoPérezGaldós800.jpg",
  };
  let CATEDRAL = {
    shader: "flat",
    src: "thumbs/Catedral800.jpg",
  };
  let vegueta = {
    shader: "flat",
    src: "thumbs/MercadoVegueta800.jpg",
  };

  /* Hook to change the environment depending on the id of the thumb*/

  const [sky, setSky] = useState("triana");

  const handleOver = (event) => {
    let entorno = event.target.id;
    setSky(entorno);
    console.log(sky);
    if (entorno === "triana") {
      trianaProps();
    } else {
      trianaPropsFalse();
    }
  };

  const playVideo = () => {
    const video = document.querySelector("#video");
    video.play();
  };
  const stopVideo = () => {
    const video = document.querySelector("#video");
    video.pause();
    video.currentTime = 0;
  };

  const trianaProps = () => {
    document.getElementById("barraTriana").setAttribute("visible", true);
    document.getElementById("pantallaTriana").setAttribute("visible", true);
    document.getElementById("textoTriana").setAttribute("visible", true);
    document.getElementById("videoTriana").setAttribute("visible", true);
  };
  const trianaPropsFalse = () => {
    document.getElementById("barraTriana").setAttribute("visible", false);
    document.getElementById("pantallaTriana").setAttribute("visible", false);
    document.getElementById("textoTriana").setAttribute("visible", false);
    document.getElementById("videoTriana").setAttribute("visible", false);
    stopVideo();
  };

  return (
    <div>
      <Scene>
        <a-assets>
          {/* Sky environments and floor*/}
          <img id="pilarnuevo" src={Pilar} />
          <img id="museopg" src={museopg} />
          <img id="triana" src={Triana} />
          <img id="teatro" src={Teatro} />
          <img id="vegueta" src={vegueta} />
          <img id="palacete" src={Palacete} />
          <img id="plazasantaana" src={plazaSantaana} />
          <img id="abad" src={Abad} />
          <img id="road" src={road} />
          <video loop="false" id="video" src={videoPalacete} />
        </a-assets>
        <Entity
          primitive="a-plane"
          src="#road"
          rotation="-90 -6 0"
          height="25"
          width="25"
        />
        <Entity primitive="a-light" type="ambient" color="#445451" />
        <Entity
          primitive="a-light"
          type="point"
          intensity="2"
          position="2 4 4"
        />
        <Entity
          primitive="a-sky"
          height="14"
          radius="10"
          src={`#${sky}`}
          width="14"
          position={{ x: 0, y: 4, z: -1 }}
        />
        <Entity
          text={{
            value: "Bienvenido a la experiencia virtual de InRoom",
            align: "center",
            color: "black",
            height: 6,
            width: 6,
            font: "https://cdn.aframe.io/fonts/DejaVu-sdf.fnt",
          }}
          position={{ x: 0, y: 3, z: -4.8 }}
        />
        <Entity
          text={{
            value: "Elige un entorno mirando hacia la miniatura que quieras.",
            align: "center",
            color: "black",
            height: 6,
            width: 6,
            font: "https://cdn.aframe.io/fonts/DejaVu-sdf.fnt",
          }}
          position={{ x: 0, y: 1, z: -4.8 }}
        />
        <Entity
          geometry={{ primitive: "plane", height: 0.8 }}
          position={{ x: -3.28, y: 2, z: -4.8 }}
          material={perezGaldos}
          events={{ mouseenter: handleOver }}
          id={"museopg"}
          animation__scale={{
            property: "scale",
            dir: "alternate",
            dur: 1000,
            loop: true,
            to: "1.04 1.04 1",
          }}
        />
        <Entity
          geometry={{ primitive: "plane", height: 0.8 }}
          position={{ x: -2.2, y: 2, z: -4.8 }}
          material={abad}
          events={{ mouseenter: handleOver }}
          id={"abad"}
          animation__scale={{
            property: "scale",
            dir: "alternate",
            dur: 1000,
            loop: true,
            to: "1.04 1.04 1",
          }}
        />
        <Entity
          geometry={{ primitive: "plane", height: 0.8 }}
          position={{ x: -1.12, y: 2, z: -4.8 }}
          material={pilarnuevo}
          events={{ mouseenter: handleOver }}
          id={"pilarnuevo"}
          animation__scale={{
            property: "scale",
            dir: "alternate",
            dur: 1000,
            loop: true,
            to: "1.04 1.04 1",
          }}
        />
        <Entity
          geometry={{ primitive: "plane", height: 0.8 }}
          position={{ x: -0.04, y: 2, z: -4.8 }}
          material={CATEDRAL}
          events={{ mouseenter: handleOver }}
          id={"plazasantaana"}
          animation__scale={{
            property: "scale",
            dir: "alternate",
            dur: 1000,
            loop: true,
            to: "1.04 1.04 1",
          }}
        />
        <Entity
          geometry={{ primitive: "plane", height: 0.8 }}
          material={palacete}
          position={{ x: 1.05, y: 2, z: -4.8 }}
          id={"palacete"}
          events={{ mouseenter: handleOver }}
          animation__scale={{
            property: "scale",
            dir: "alternate",
            dur: 1000,
            loop: true,
            to: "1.04 1.04 1",
          }}
        />
        <Entity
          geometry={{ primitive: "plane", height: 0.8 }}
          material={triana}
          id={"triana"}
          position={{ x: 2.124, y: 2, z: -4.8 }}
          events={{ mouseenter: handleOver }}
          animation__scale={{
            property: "scale",
            dir: "alternate",
            dur: 1000,
            loop: true,
            to: "1.04 1.04 1",
          }}
        />
        <Entity
          geometry={{ primitive: "plane", height: 0.8 }}
          material={teatro}
          id={"teatro"}
          position={{ x: 3.21, y: 2, z: -4.8 }}
          events={{ mouseenter: handleOver }}
          animation__scale={{
            property: "scale",
            dir: "alternate",
            dur: 1000,
            loop: true,
            to: "1.04 1.04 1",
          }}
        />
        <Entity
          geometry={{
            primitive: "box",
            depth: 0.4,
            height: 1,
            width: 7.8,
          }}
          material={{ color: "#000" }}
          position={{ x: 0, y: 2, z: -5.1 }}
        />
        <Entity
          geometry={{
            primitive: "box",
            depth: 0.4,
            height: 1,
            width: 7.8,
          }}
          material={{ color: "#fff" }}
          position={{ x: 0, y: 3, z: -5.1 }}
        />
        <Entity
          geometry={{
            primitive: "box",
            depth: 0.4,
            height: 1,
            width: 7.8,
          }}
          material={{ color: "#fff" }}
          position={{ x: 0, y: 1, z: -5.1 }}
        />
        <Entity
          visible="false"
          id={"pantallaTriana"}
          geometry={{
            primitive: "box",
            depth: 0.4,
            height: 3,
            width: 4.8,
          }}
          material={{ color: "#000" }}
          position={{ x: 0, y: 5.5, z: -5.1 }}
          rotation="20 0 0"
        />
        <Entity
          visible="false"
          id={"barraTriana"}
          geometry={{
            primitive: "box",
            depth: 0.4,
            height: 0.5,
            width: 4.8,
          }}
          material={{ color: "#fff" }}
          position={{ x: 0, y: 3.9, z: -5.1 }}
          rotation="20 0 0"
        />
        <Entity
          classname={"trianaProps"}
          visible="false"
          id={"textoTriana"}
          text={{
            value: "Mira hacia la pantalla",
            align: "center",
            color: "black",
            height: 6,
            width: 6,
            font: "https://cdn.aframe.io/fonts/DejaVu-sdf.fnt",
          }}
          position={{ x: 0, y: 3.8, z: -4.8 }}
          rotation="20 0 0"
        />
        <Entity
          id={"videoTriana"}
          visible="false"
          primitive="a-video"
          src="#video"
          position={{ x: 0, y: 5.3, z: -4.7 }}
          rotation="20 0 0"
          height="2.7"
          width="4.3"
          events={{ mouseenter: playVideo }}
        />

        {/* 
        <Entity
          animation__scale={{
            property: "scale",
            dir: "alternate",
            dur: 1000,
            loop: true,
            to: "2 2 1",
          }}
          geometry={{
            primitive: "box",
            depth: 0.1,
            height: 0.1,
            width: 0.1,
            radius: 1,
          }}
          material={{ color: "#24CAFF" }}
          position={{ x: 0, y: 1.5, z: -1 }}
        /> */}
        <Entity primitive="a-camera">
          <Entity
            primitive="a-cursor"
            animation__click={{
              property: "scale",
              startEvents: "mouseenter",
              from: "0.1 0.1 0.1",
              to: "1 1 1",
              dur: 150,
            }}
          />
        </Entity>
      </Scene>
    </div>
  );
};

export default Main_game;
