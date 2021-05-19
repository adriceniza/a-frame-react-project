import "aframe";
import "aframe-animation-component";
import "aframe-particle-system-component";
import "babel-polyfill";
import { debounce } from "debounce";
import { Entity, Scene } from "aframe-react";
import React, { useState, useEffect } from "react";
import Triana from "../assets/triana.jpg";
import museopg from "../assets/museopg.jpg";
import Palacete from "../assets/nulaspalmas.jpg";
import Pilar from "../assets/plazapilarnuevo.jpg";
import Teatro from "../assets/teatro.jpg";
import Abad from "../assets/sanantonioabad.jpg";
import plazaSantaana from "../assets/plazasantaana.jpg";
import veguetaSky from "../assets/teatro.jpg";
import videoPalacete from "../assets/VídeoPalacete.mp4";
import audioGaldos1 from "../assets/audios/galdos/1._Museo_Pérez_Galdós[1].m4a";
const Main_game = () => {
  /* Thumbnails */

  let logo = {
    shader: "flat",
    src: "thumbs/logo.png",
    transparent: false,
    color: "#fff",
  };
  let triana = {
    shader: "flat",
    src: "thumbs/TRIANA-THUMB.jpg",
  };
  let teatro = {
    shader: "flat",
    src: "thumbs/Teatro800.jpg",
    transparent: true,
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
  let hamburguerOpened = {
    shader: "flat",
    src: "thumbs/hamburguer_opened.png",
    transparent: true,
  };
  let hamburguerClosed = {
    shader: "flat",
    src: "thumbs/hamburguer_closed.png",
    transparent: false,
  };
  let exitImage = {
    shader: "flat",
    src: "thumbs/exit.png",
    transparent: true,
  };
  let mainLayout = {
    shader: "flat",
    src: "thumbs/layout.png",
  };

  let oldTranvia = {
    shader: "flat",
    src: "oldImages/Tranvia1.jpg",
    transparent: true,
  };
  let oldTeatroPg = {
    shader: "flat",
    src: "oldImages/teatropg.jpg",
    transparent: true,
  };
  let oldPuentepalo = {
    shader: "flat",
    src: "oldImages/puentepalo.jpg",
    transparent: true,
  };
  let oldPilarNuevo = {
    shader: "flat",
    src: "oldImages/PilarNuevo.jpg",
    transparent: true,
  };
  let oldVegueta = {
    shader: "flat",
    src: "oldImages/Vegueta.jpg",
    transparent: true,
  };
  let oldAbad = {
    shader: "flat",
    src: "oldImages/Abad.jpg",
    transparent: true,
  };
  let oldSantaAna = {
    shader: "flat",
    src: "oldImages/santaAna.jpg",
    transparent: true,
  };

  /* Hook to change the environment depending on the id of the thumb*/

  const [sky, setSky] = useState("triana");

  const handleInit = (event) => {
    let timer = setTimeout(() => {
      handleOver(event);
    }, 1500);
    console.log(timer);

    event.target.addEventListener("mouseleave", () => {
      console.log("salgo del target");
      clearTimeout(timer);
    });
  };

  useEffect(() => {
    if (sky != "palacete") {
      stopVideo();
    }
  }, []);
  const handleOver = (event) => {
    let entorno = event.target.id;
    setSky(entorno);
    setTimeout(() => {
      hideMenu();
    }, 100);

    /* If 'entorno' equals triana got to the functions who set the props true */
    if (entorno === "palacete") {
      setPalaceteItems(true);
    } else {
      setPalaceteItems(false);
      stopVideo();
    }
    if (entorno === "triana") {
      setTrianaItems(true);
    } else {
      setTrianaItems(false);
    }
    if (entorno === "abad") {
      setAbadItems(true);
    } else {
      setAbadItems(false);
    }
    if (entorno === "museopg") {
      setMuseoItems(true);
    } else {
      setMuseoItems(false);
    }
    if (entorno === "vegueta") {
      setVeguetaItems(true);
    } else {
      setVeguetaItems(false);
    }
    if (entorno === "plazasantaana") {
      setSantaAnaItems(true);
    } else {
      setSantaAnaItems(false);
    }
    if (entorno === "pilarnuevo") {
      setPilarItems(true);
    } else {
      setPilarItems(false);
    }
    if (entorno === "teatro") {
      setTeatroItems(true);
    } else {
      setTeatroItems(false);
    }
  };

  const [trianaItems, setTrianaItems] = useState(false);
  const [palaceteItems, setPalaceteItems] = useState(false);
  const [pilarItems, setPilarItems] = useState(false);
  const [abadItems, setAbadItems] = useState(false);
  const [veguetaItems, setVeguetaItems] = useState(false);
  const [santaaanaItems, setSantaAnaItems] = useState(false);
  const [teatroItems, setTeatroItems] = useState(false);
  const [museoItems, setMuseoItems] = useState(false);

  /* Exit to the main page */

  const exit = () => {
    window.location = "/";
  };

  /* arrow function to play video of Triana */

  const playVideo = (event) => {
    let timerVideo = setTimeout(() => {
      const video = document.querySelector("#video");
      video.play();
    }, 500);

    event.target.addEventListener("mouseleave", () => {
      console.log("salgo del target");
      clearTimeout(timerVideo);
    });
  };

  const pauseVideo = () => {
    const video = document.querySelector("#video");
    video.pause();
  };

  /* arrow function to stop video of Triana */
  const stopVideo = () => {
    const video = document.querySelector("#video");
    video.pause();
    video.currentTime = 0;
  };

  const [menu, setMenu] = useState(false);

  const hideMenu = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <Scene inspector>
        <a-assets>
          {/* Sky environments and floor*/}
          <img id="pilarnuevo" src={Pilar} />
          <img id="museopg" src={museopg} />
          <img id="triana" src={Triana} />
          <img id="teatro" src={Teatro} />
          <img id="vegueta" src={veguetaSky} />
          <img id="palacete" src={Palacete} />
          <img id="plazasantaana" src={plazaSantaana} />
          <img id="abad" src={Abad} />
          <audio id="teatropgaudio" src={audioGaldos1} />

          {/*Triana video */}
          <video loop="false" id="video" src={videoPalacete} />
        </a-assets>
        <Entity primitive="a-light" type="ambient" color="#445451" />
        <Entity
          primitive="a-light"
          type="point"
          intensity="2"
          position="2 5 4"
        />
        <Entity primitive="a-sky" radius="10" src={`#${sky}`} />
        <Entity
          geometry={{ primitive: "circle", radius: 0.46 }}
          material={menu ? hamburguerOpened : hamburguerClosed}
          id={"logo"}
          position={{ x: -4, y: 3.6, z: -5.6 }}
          events={{ mouseenter: debounce(hideMenu, 500) }}
          animation__scale={{
            property: "scale",
            dir: "alternate",
            dur: 1000,
            loop: true,
            to: "1.04 1.04 1",
          }}
        />
        <Entity
          geometry={{ primitive: "plane", height: 1.2, width: 2 }}
          material={exitImage}
          id={"exitImage"}
          position={{ x: 4, y: 3.85, z: -5.8 }}
          events={{ mouseenter: debounce(exit, 1000) }}
          visible={menu ? true : false}
          animation__scale={{
            property: "scale",
            dir: "alternate",
            dur: 1000,
            loop: true,
            to: "1.04 1.04 1",
          }}
        />
        <Entity
          classname={"menu"}
          geometry={{ primitive: "plane", height: 0.8 }}
          position={{ x: -1.8, y: 1.87888, z: -5.8 }}
          material={perezGaldos}
          events={{ mouseenter: handleInit }}
          id={"museopg"}
          visible={menu ? true : false}
        />
        <Entity
          classname={"menu"}
          geometry={{ primitive: "plane", height: 0.8 }}
          position={{ x: -4.201, y: 1.87888, z: -5.8 }}
          material={vegueta}
          events={{ mouseenter: handleInit }}
          id={"vegueta"}
          visible={menu ? true : false}
        />
        <Entity
          classname={"menu"}
          geometry={{ primitive: "plane", height: 0.8 }}
          position={{ x: -3, y: 1.87888, z: -5.8 }}
          material={abad}
          events={{ mouseenter: handleInit }}
          id={"abad"}
          visible={menu ? true : false}
        />
        <Entity
          classname={"menu"}
          geometry={{ primitive: "plane", height: 0.8 }}
          position={{ x: -0.62, y: 1.87888, z: -5.8 }}
          material={pilarnuevo}
          visible={menu ? true : false}
          events={{ mouseenter: handleInit }}
          id={"pilarnuevo"}
        />
        <Entity
          classname={"menu"}
          geometry={{ primitive: "plane", height: 0.8 }}
          position={{ x: 0.615, y: 1.87888, z: -5.8 }}
          material={CATEDRAL}
          visible={menu ? true : false}
          events={{ mouseenter: handleInit }}
          id={"plazasantaana"}
        />
        <Entity
          classname={"menu"}
          visible={menu ? true : false}
          geometry={{ primitive: "plane", height: 0.8 }}
          material={palacete}
          position={{ x: 1.83, y: 1.87888, z: -5.8 }}
          id={"palacete"}
          events={{ mouseenter: handleInit }}
        />
        <Entity
          classname={"menu"}
          visible={menu ? true : false}
          geometry={{ primitive: "plane", height: 0.8 }}
          material={triana}
          id={"triana"}
          position={{ x: 3.02, y: 1.87888, z: -5.8 }}
          events={{ mouseenter: handleInit }}
        />
        <Entity
          classname={"menu"}
          visible={menu ? true : false}
          geometry={{ primitive: "plane", height: 0.8 }}
          material={teatro}
          id={"teatro"}
          position={{ x: 4.23, y: 1.87888, z: -5.8 }}
          events={{ mouseenter: handleInit }}
        />
        <Entity
          geometry={{
            primitive: "box",
            depth: 0.4,
            height: 5,
            width: 10,
          }}
          visible={menu ? true : false}
          material={mainLayout}
          position={{ x: 0, y: 2, z: -6.1 }}
        />
        {/* /*items----------------------------------------------------------------------------------------------------------------items*/}
        {/*pilarItems*/}
        <Entity
          classname={"pilarnuevoItem"}
          geometry={{ primitive: "plane", height: 2.2, width: 3.4 }}
          position={{ x: -2.9, y: 3, z: 6 }}
          material={oldPilarNuevo}
          visible={pilarItems ? true : false}
          rotation="20 150 0"
        />
        {/*pilarItems*/}
        {/*abadItems*/}
        <Entity
          classname={"abadItem"}
          geometry={{ primitive: "plane", height: 2, width: 3 }}
          position={{ x: -2.7, y: 5.5, z: -5 }}
          material={oldAbad}
          visible={abadItems ? true : false}
          rotation="30 30 0"
        />
        {/*abadItems*/}
        {/*veguetaItems*/}
        <Entity
          classname={"veguetaItem"}
          geometry={{ primitive: "plane", height: 4, width: 5 }}
          position={{ x: 0, y: 4.4, z: -7 }}
          material={oldVegueta}
          visible={veguetaItems ? true : false}
          rotation="20 -15 0"
        />
        {/*veguetaItems*/
        /*santaaanaItems*/}

        <Entity
          classname={"santaAnaItem"}
          geometry={{ primitive: "plane", height: 2.8, width: 3.8 }}
          position={{ x: -5, y: 5, z: -3 }}
          material={oldSantaAna}
          visible={santaaanaItems ? true : false}
          rotation="20 50 0"
        />
        {/*santaaanaItems*/
        /*teatroItems*/}

        <Entity
          classname={"teatroItem"}
          geometry={{ primitive: "plane", height: 3.8, width: 4.8 }}
          position={{ x: -0.1, y: 5, z: 7.4 }}
          material={oldTeatroPg}
          visible={teatroItems ? true : false}
          rotation="20 -180 0"
        />
        <Entity
          classname={"teatroItem"}
          geometry={{ primitive: "plane", height: 4, width: 5 }}
          position={{ x: 6, y: 4.4, z: -1 }}
          material={oldPuentepalo}
          visible={teatroItems ? true : false}
          rotation="20 -85 0"
        />
        <Entity
          classname={"teatroItem"}
          geometry={{ primitive: "plane", height: 4, width: 5 }}
          position={{ x: 6, y: 4.4, z: -1 }}
          material={oldPuentepalo}
          visible={teatroItems ? true : false}
          rotation="20 -85 0"
        />
        {/*teatroItems*/
        /*museoItems*/
        /*museoItems*/
        /*Triana*/
        /*Triana*/}
        <Entity
          classname={"trianaItem"}
          geometry={{ primitive: "plane", height: 4, width: 5 }}
          position={{ x: -1.2, y: 5, z: -6.2 }}
          material={oldTranvia}
          visible={trianaItems ? true : false}
          rotation="22 10 0"
        />

        {/* /*Triana*/
        /*Palacete */}

        <Entity
          visible={palaceteItems ? true : false}
          geometry={{
            primitive: "box",
            depth: 0.4,
            height: 0.5,
            width: 4.8,
          }}
          material={{ color: "#fff" }}
          position={{ x: 0, y: 4.4, z: -5.1 }}
          rotation="20 0 0"
        />
        <Entity
          visible={palaceteItems ? true : false}
          id={"textoTriana"}
          text={{
            value: "Mira hacia la pantalla",
            align: "center",
            color: "black",
            height: 6,
            width: 6,
            font: "https://cdn.aframe.io/fonts/DejaVu-sdf.fnt",
          }}
          position={{ x: 0, y: 4.3, z: -4.8 }}
          rotation="20 0 0"
        />
        <Entity
          visible={palaceteItems ? true : false}
          primitive="a-video"
          src="#video"
          position={{ x: 0, y: 5.8, z: -4.7 }}
          rotation="20 0 0"
          height="2.7"
          width="4.3"
          autoplay="false"
          events={{ mouseenter: playVideo, mouseleave: pauseVideo }}
        />
        {/* /*Palacete*/
        /*items----------------------------------------------------------------------------------------------------------------items*/
        /*Camera*/}
        <Entity primitive="a-camera">
          <Entity
            primitive="a-cursor"
            material={logo}
            geometry="primitive:circle; radius:0.0245"
          />
        </Entity>
        {/*Camera*/}
      </Scene>
    </div>
  );
};

export default Main_game;
