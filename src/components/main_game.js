import "aframe";
import "aframe-animation-component";
import "aframe-particle-system-component";
import "babel-polyfill";
import { Entity, Scene } from "aframe-react";
import React, { useState } from "react";
import Triana from "../assets/triana.jpg";
import museopg from "../assets/museopg.jpg";
import cmoderna from "../assets/nulaspalmas.jpg";
import vegueta from "../assets/plazapilarnuevo.jpg";
import teatro from "../assets/teatro.jpg";
import road from "../assets/road_floor.jfif";

const Main_game = () => {
  /* Defino las thumbs */

  let cmoderna = {
    shader: "flat",
    src: "thumbs/CasamodernistaTriana800.jpg",
  };
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
  let vegueta = {
    shader: "flat",
    src: "thumbs/MercadoVegueta800.jpg",
  };
  /* Instancio los entornos */

  /* Hook para cambiar el entorno al hacer mouseover en las thumbs */

  const [sky, setSky] = useState("triana");

  const handleOver = (event) => {
    let entorno = event.target.id;
    setSky(entorno);
    console.log(entorno);
    console.log("algo hace");
  };

  return (
    <div>
      <Scene>
        <a-assets>
          <img id="museopg" src={museopg} />
          <img id="triana" src={Triana} />
          <img id="teatro" src={teatro} />
          <img id="vegueta" src={vegueta} />
          <img id="cmoderna" src={cmoderna} />
          <img id="road" src={road} />
        </a-assets>

        <Entity
          primitive="a-plane"
          src="#road"
          rotation="-90 -6 0"
          height="30"
          width="30"
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
          position={{ x: -3.199, y: 2, z: -4.8 }}
          material={perezGaldos}
          events={{ mouseenter: handleOver }}
          id={"museopg"}
        />
        <Entity
          geometry={{ primitive: "plane", height: 0.8 }}
          position={{ x: -2.155, y: 2, z: -4.8 }}
          material={abad}
          events={{ mouseenter: handleOver }}
          id={"abad"}
        />
        <Entity
          geometry={{ primitive: "plane", height: 0.8 }}
          position={{ x: -1.075, y: 2, z: -4.8 }}
          material={pilarnuevo}
          events={{ mouseenter: handleOver }}
          id={"pilarnuevo"}
        />

        <Entity
          geometry={{ primitive: "plane", height: 0.8 }}
          position={{ x: -0, y: 2, z: -4.8 }}
          material={cmoderna}
          events={{ mouseenter: handleOver }}
          id={"cmoderna"}
        />
        <Entity
          geometry={{ primitive: "plane", height: 0.8 }}
          material={palacete}
          position={{ x: 1.06, y: 2, z: -4.8 }}
          id={"palacete"}
          events={{ mouseenter: handleOver }}
        />
        <Entity
          geometry={{ primitive: "plane", height: 0.8 }}
          material={triana}
          id={"triana"}
          position={{ x: 2.124, y: 2, z: -4.8 }}
          events={{ mouseenter: handleOver }}
        />
        <Entity
          geometry={{ primitive: "plane", height: 0.8 }}
          material={vegueta}
          id={"vegueta"}
          position={{ x: 3.2, y: 2, z: -4.8 }}
          events={{ mouseenter: handleOver }}
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
