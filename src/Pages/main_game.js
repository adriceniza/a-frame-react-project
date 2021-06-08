import "aframe";
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
import audioAbadCasaRoja from "../assets/resultados/audioAbadCasaRoja.mp4";
import audioAbadSeñalPuntero from "../assets/resultados/audioAbadSeñalPuntero.mp4";
import audioPalaceteB from "../assets/resultados/audioPalaceteB.mp4";
import audioPilarNuevo1 from "../assets/resultados/audioPilarNuevo1.mp4";
import audioSantaAna17 from "../assets/resultados/audioSantaAna17.mp4";
import audioSantaAnaCatedral from "../assets/resultados/audioSantaAnaCatedral.mp4";
import audioTeatroEstatua from "../assets/resultados/audioTeatroEstatua.mp4";
import audioTeatroGuiniguada from "../assets/resultados/audioTeatroGuiniguada.mp4";
import audioTeatroPG from "../assets/resultados/audioTeatroPG.mp4";

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
  let play = {
    shader: "flat",
    src: "oldImages/play.png",
    transparent: true,
  };
  let pause = {
    shader: "flat",
    src: "oldImages/pause.png",
    transparent: true,
  };

  /* Hook to change the environment depending on the id of the thumb*/

  const [sky, setSky] = useState("triana");
  const [menu, setMenu] = useState(false);

  const handleInit = (event) => {
    if (!menu) {
      return null;
    } else {
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

        document.querySelector("#videoPalacete").pause();
        document.querySelector("#PalaceteB").pause();
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
    }
  };

  useEffect(() => {
    setSky("triana");
    hideMenu();
  }, []);

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

  const playVideo = () => {
    const video = document.querySelector("#videoPalacete");
    video.play();
  };

  const pauseVideo = () => {
    const video = document.querySelector("#videoPalacete");
    video.pause();
  };
  const playAudioB = () => {
    const video = document.querySelector("#PalaceteB");
    video.play();
  };

  const pauseAudioB = () => {
    const video = document.querySelector("#PalaceteB");
    video.pause();
  };
  const playAudioTeatroGuiniguada = () => {
    const video = document.querySelector("#TeatroGuiniguada");
    video.play();
  };

  const pauseAudioTeatroGuiniguada = () => {
    const video = document.querySelector("#TeatroGuiniguada");
    video.pause();
  };
  const playAudioTeatroEstatua = () => {
    const video = document.querySelector("#TeatroEstatua");
    video.play();
  };

  const pauseAudioTeatroEstatua = () => {
    const video = document.querySelector("#TeatroEstatua");
    video.pause();
  };

  const playAbadCasaRoja = () => {
    const video = document.querySelector("#AbadCasaRoja");
    video.play();
  };
  const pauseAbadCasaRoja = () => {
    const video = document.querySelector("#AbadCasaRoja");
    video.pause();
  };

  const playAbadSeñal = () => {
    const video = document.querySelector("#AbadSeñalPuntero");
    video.play();
  };
  const pauseAbadSeñal = () => {
    const video = document.querySelector("#AbadSeñalPuntero");
    video.pause();
  };

  const playPilarCasaBanca = () => {
    const video = document.querySelector("#PilarNuevo1");
    video.play();
  };
  const pausePilarCasaBlanca = () => {
    const video = document.querySelector("#PilarNuevo1");
    video.pause();
  };

  const playSantaAnaCatedral = () => {
    const video = document.querySelector("#SantaAnaCatedral");
    video.play();
  };
  const pauseSantaAnaCatedral = () => {
    const video = document.querySelector("#SantaAnaCatedral");
    video.pause();
  };
  const playSantaAna17 = () => {
    const video = document.querySelector("#SantaAna17");
    video.play();
  };
  const pauseSantaAna17 = () => {
    const video = document.querySelector("#SantaAna17");
    video.pause();
  };
  const playAudioTeatroPG = () => {
    const video = document.querySelector("#TeatroPG");
    video.play();
  };
  const pauseAudioTeatroPG = () => {
    const video = document.querySelector("#TeatroPG");
    video.pause();
  };

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

          {/*Triana video */}
          <video id="videoPalacete" src={videoPalacete} />
          <video id="AbadCasaRoja" src={audioAbadCasaRoja} />
          <video id="AbadSeñalPuntero" src={audioAbadSeñalPuntero} />
          <video id="PalaceteB" src={audioPalaceteB} />
          <video id="PilarNuevo1" src={audioPilarNuevo1} />
          <video id="SantaAna17" src={audioSantaAna17} />
          <video id="SantaAnaCatedral" src={audioSantaAnaCatedral} />
          <video id="TeatroEstatua" src={audioTeatroEstatua} />
          <video id="TeatroGuiniguada" src={audioTeatroGuiniguada} />
          <video id="TeatroPG" src={audioTeatroPG} />
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
          events={{
            mouseenter: debounce(hideMenu, 1000),
          }}
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
          geometry={{ primitive: "plane", height: 1.2, width: 2 }}
          material={exitImage}
          id={"exitImage"}
          position={{ x: 4, y: 3.85, z: -5.8 }}
          events={
            menu ? { mouseenter: debounce(exit, 1000) } : { mouseenter: null }
          }
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
          geometry={{ primitive: "circle", radius: 0.55 }}
          position={{ x: -1.8, y: 1.87888, z: -5.8 }}
          material={perezGaldos}
          events={{ mouseenter: handleInit }}
          id={"museopg"}
          visible={menu ? true : false}
        />
        <Entity
          classname={"menu"}
          geometry={{ primitive: "circle", radius: 0.55 }}
          position={{ x: -4.201, y: 1.87888, z: -5.8 }}
          material={vegueta}
          events={{ mouseenter: handleInit }}
          id={"vegueta"}
          visible={menu ? true : false}
        />
        <Entity
          classname={"menu"}
          geometry={{ primitive: "circle", radius: 0.55 }}
          position={{ x: -3, y: 1.87888, z: -5.8 }}
          material={abad}
          events={{ mouseenter: handleInit }}
          id={"abad"}
          visible={menu ? true : false}
        />
        <Entity
          classname={"menu"}
          geometry={{ primitive: "circle", radius: 0.55 }}
          position={{ x: -0.62, y: 1.87888, z: -5.8 }}
          material={pilarnuevo}
          visible={menu ? true : false}
          events={{ mouseenter: handleInit }}
          id={"pilarnuevo"}
        />
        <Entity
          classname={"menu"}
          geometry={{ primitive: "circle", radius: 0.55 }}
          position={{ x: 0.615, y: 1.87888, z: -5.8 }}
          material={CATEDRAL}
          visible={menu ? true : false}
          events={{ mouseenter: handleInit }}
          id={"plazasantaana"}
        />

        <Entity
          classname={"menu"}
          visible={menu ? true : false}
          geometry={{ primitive: "circle", radius: 0.55 }}
          material={palacete}
          position={{ x: 1.83, y: 1.87888, z: -5.8 }}
          id={"palacete"}
          events={{ mouseenter: handleInit }}
        />
        <Entity
          classname={"menu"}
          visible={menu ? true : false}
          geometry={{ primitive: "circle", radius: 0.55 }}
          material={triana}
          id={"triana"}
          position={{ x: 3.02, y: 1.87888, z: -5.8 }}
          events={{ mouseenter: handleInit }}
        />
        <Entity
          classname={"menu"}
          visible={menu ? true : false}
          geometry={{ primitive: "circle", radius: 0.55 }}
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
        <Entity
          visible={pilarItems ? true : false}
          id={"pilarCasaBlanca"}
          primitive="a-video"
          src="#PilarNuevo1"
          position={{ x: 7.2, y: 4.7, z: 0.7 }}
          rotation="0 -94 0"
          height="1.6"
          width="1.6"
          autoplay="false"
        />
        <Entity
          visible={pilarItems ? true : false}
          geometry={{
            primitive: "box",
            depth: 0,
            height: 0.3,
            width: 0.4,
          }}
          material={play}
          position={{ x: 6, y: 3.1, z: 0.2 }}
          rotation="0 94 0"
          events={
            pilarItems
              ? { mouseenter: playPilarCasaBanca }
              : { mouseenter: null }
          }
        />
        <Entity
          visible={pilarItems ? true : false}
          geometry={{
            primitive: "box",
            depth: 0,
            height: 0.3,
            width: 0.4,
          }}
          material={pause}
          position={{ x: 6, y: 3.1, z: 0.9 }}
          rotation="0 -94 0"
          events={
            pilarItems
              ? { mouseenter: pausePilarCasaBlanca }
              : { mouseenter: null }
          }
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
        <Entity
          visible={abadItems ? true : false}
          id={"abadCasaRoja"}
          primitive="a-video"
          src="#AbadCasaRoja"
          position={{ x: -7.7, y: 3.5, z: -1 }}
          rotation="0 75 0"
          height="2"
          width="2"
          autoplay="false"
        />
        <Entity
          visible={abadItems ? true : false}
          geometry={{
            primitive: "box",
            depth: 0,
            height: 0.4,
            width: 0.6,
          }}
          material={play}
          position={{ x: -7.7, y: 2, z: -0.5 }}
          rotation="0 -124 0"
          events={
            abadItems ? { mouseenter: playAbadCasaRoja } : { mouseenter: null }
          }
        />
        <Entity
          visible={abadItems ? true : false}
          geometry={{
            primitive: "box",
            depth: 0,
            height: 0.4,
            width: 0.6,
          }}
          material={pause}
          position={{ x: -7.1, y: 2, z: -1.5 }}
          rotation="0 -124 0"
          events={
            abadItems ? { mouseenter: pauseAbadCasaRoja } : { mouseenter: null }
          }
        />
        <Entity
          visible={abadItems ? true : false}
          id={"abadSeñal"}
          primitive="a-video"
          src="#AbadSeñalPuntero"
          position={{ x: 6.2, y: 4, z: -1.7 }}
          rotation="0 -74 0"
          height="1.6"
          width="1.6"
          autoplay="false"
        />
        <Entity
          visible={abadItems ? true : false}
          geometry={{
            primitive: "box",
            depth: 0,
            height: 0.4,
            width: 0.6,
          }}
          material={play}
          position={{ x: 6, y: 2.7, z: -2.1 }}
          rotation="0 -60 0"
          events={
            abadItems ? { mouseenter: playAbadSeñal } : { mouseenter: null }
          }
        />
        <Entity
          visible={abadItems ? true : false}
          geometry={{
            primitive: "box",
            depth: 0,
            height: 0.4,
            width: 0.6,
          }}
          material={pause}
          position={{ x: 6.5, y: 2.7, z: -1.2 }}
          rotation="0 -60 0"
          events={
            abadItems ? { mouseenter: pauseAbadSeñal } : { mouseenter: null }
          }
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
        <Entity
          visible={santaaanaItems ? true : false}
          id={"santaAnaRecurso"}
          primitive="a-video"
          src="#SantaAnaCatedral"
          position={{ x: 2.5, y: 4.5, z: 5.8 }}
          rotation="20 -160 0"
          height="1.1"
          width="1.1"
          autoplay="false"
        />
        <Entity
          visible={santaaanaItems ? true : false}
          geometry={{
            primitive: "box",
            depth: 0,
            height: 0.2,
            width: 0.3,
          }}
          material={play}
          position={{ x: 2.9, y: 3.7, z: 6 }}
          rotation="-20 20 0"
          events={
            santaaanaItems
              ? { mouseenter: playSantaAnaCatedral }
              : { mouseenter: null }
          }
        />
        <Entity
          visible={santaaanaItems ? true : false}
          geometry={{
            primitive: "box",
            depth: 0,
            height: 0.2,
            width: 0.3,
          }}
          material={pause}
          position={{ x: 2.4, y: 3.7, z: 6.2 }}
          rotation="-20 20 0"
          events={
            santaaanaItems
              ? { mouseenter: pauseSantaAnaCatedral }
              : { mouseenter: null }
          }
        />
        <Entity
          visible={santaaanaItems ? true : false}
          id={"santaAna17"}
          primitive="a-video"
          src="#SantaAna17"
          position={{ x: 8, y: 5, z: 0.6 }}
          rotation="30 -90 0"
          height="1.6"
          width="1.6"
          autoplay="false"
        />
        <Entity
          visible={santaaanaItems ? true : false}
          geometry={{
            primitive: "box",
            depth: 0,
            height: 0.3,
            width: 0.3,
          }}
          material={play}
          position={{ x: 6, y: 3, z: 0.1 }}
          rotation="0 -90 0"
          events={
            santaaanaItems
              ? { mouseenter: playSantaAna17 }
              : { mouseenter: null }
          }
        />
        <Entity
          visible={santaaanaItems ? true : false}
          geometry={{
            primitive: "box",
            depth: 0,
            height: 0.3,
            width: 0.3,
          }}
          material={pause}
          position={{ x: 6, y: 3, z: 0.5 }}
          rotation="30 -90 0"
          events={
            santaaanaItems
              ? { mouseenter: pauseSantaAna17 }
              : { mouseenter: null }
          }
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
        <Entity
          visible={teatroItems ? true : false}
          id={"TeatroGuiniguada"}
          primitive="a-video"
          src="#TeatroGuiniguada"
          position={{ x: 6, y: 3.7, z: 5 }}
          rotation="0 -126 0"
          height="1.6"
          width="1.6"
          autoplay="false"
        />
        <Entity
          visible={teatroItems ? true : false}
          geometry={{
            primitive: "box",
            depth: 0,
            height: 0.3,
            width: 0.4,
          }}
          material={play}
          position={{ x: 5.8, y: 2.3, z: 4.3 }}
          rotation="0 -124 0"
          events={
            teatroItems
              ? { mouseenter: playAudioTeatroGuiniguada }
              : { mouseenter: null }
          }
        />
        <Entity
          visible={teatroItems ? true : false}
          geometry={{
            primitive: "box",
            depth: 0,
            height: 0.3,
            width: 0.4,
          }}
          material={pause}
          position={{ x: 5.5, y: 2.3, z: 5 }}
          rotation="0 -124 0"
          events={
            teatroItems
              ? { mouseenter: pauseAudioTeatroGuiniguada }
              : { mouseenter: null }
          }
        />
        <Entity
          visible={teatroItems ? true : false}
          id={"TeatroPG"}
          primitive="a-video"
          src="#TeatroPG"
          position={{ x: -6, y: 3.7, z: 5 }}
          rotation="0 126 0"
          height="1.6"
          width="1.6"
          autoplay="false"
        />
        <Entity
          visible={teatroItems ? true : false}
          geometry={{
            primitive: "box",
            depth: 0,
            height: 0.3,
            width: 0.4,
          }}
          material={play}
          position={{ x: -5.5, y: 2.3, z: 5 }}
          rotation="0 124 0"
          events={
            teatroItems
              ? { mouseenter: playAudioTeatroPG }
              : { mouseenter: null }
          }
        />
        <Entity
          visible={teatroItems ? true : false}
          geometry={{
            primitive: "box",
            depth: 0,
            height: 0.3,
            width: 0.4,
          }}
          material={pause}
          position={{ x: -5.8, y: 2.3, z: 4.3 }}
          rotation="0 124 0"
          events={
            teatroItems
              ? { mouseenter: pauseAudioTeatroPG }
              : { mouseenter: null }
          }
        />
        <Entity
          visible={teatroItems ? true : false}
          id={"TeatroEstatua"}
          primitive="a-video"
          src="#TeatroEstatua"
          position={{ x: -8, y: 1.1, z: 0.5 }}
          rotation="0 90 0"
          height="2"
          width="2"
          autoplay="false"
        />
        <Entity
          visible={teatroItems ? true : false}
          geometry={{
            primitive: "box",
            depth: 0,
            height: 0.4,
            width: 0.6,
          }}
          material={play}
          position={{ x: -8, y: -0.3, z: 0.9 }}
          rotation="0 90 0"
          events={
            teatroItems
              ? { mouseenter: playAudioTeatroEstatua }
              : { mouseenter: null }
          }
        />
        <Entity
          visible={teatroItems ? true : false}
          geometry={{
            primitive: "box",
            depth: 0,
            height: 0.4,
            width: 0.6,
          }}
          material={pause}
          position={{ x: -8, y: -0.3, z: -0 }}
          rotation="0 90 0"
          events={
            teatroItems
              ? { mouseenter: pauseAudioTeatroEstatua }
              : { mouseenter: null }
          }
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
          id={"videoPalaceteB"}
          primitive="a-video"
          src="#PalaceteB"
          position={{ x: 7, y: 3.8, z: -5 }}
          rotation="0 -54 0"
          height="2.3"
          width="2.3"
          autoplay="false"
        />
        <Entity
          visible={palaceteItems ? true : false}
          geometry={{
            primitive: "box",
            depth: 0,
            height: 0.4,
            width: 0.6,
          }}
          material={play}
          position={{ x: 6.3, y: 1.8, z: -5 }}
          rotation="0 130 0"
          events={
            palaceteItems ? { mouseenter: playAudioB } : { mouseenter: null }
          }
        />
        <Entity
          visible={palaceteItems ? true : false}
          geometry={{
            primitive: "box",
            depth: 0,
            height: 0.4,
            width: 0.6,
          }}
          material={pause}
          position={{ x: 7.8, y: 1.8, z: -5 }}
          rotation="0 130 0"
          events={
            palaceteItems ? { mouseenter: pauseAudioB } : { mouseenter: null }
          }
        />
        <Entity
          visible={palaceteItems ? true : false}
          id={"videoPalacete"}
          primitive="a-video"
          src="#videoPalacete"
          position={{ x: 0, y: 5.8, z: -4.7 }}
          rotation="20 0 0"
          height="2.7"
          width="4.3"
          autoplay="false"
        />
        <Entity
          visible={palaceteItems ? true : false}
          geometry={{
            primitive: "box",
            depth: 0,
            height: 0.5,
            width: 0.7,
          }}
          material={play}
          position={{ x: -0.5, y: 3.8, z: -4.9 }}
          rotation="20 0 0"
          events={
            palaceteItems ? { mouseenter: playVideo } : { mouseenter: null }
          }
        />
        <Entity
          visible={palaceteItems ? true : false}
          geometry={{
            primitive: "box",
            depth: 0,
            height: 0.5,
            width: 0.7,
          }}
          material={pause}
          position={{ x: 0.5, y: 3.8, z: -4.9 }}
          rotation="20 0 0"
          events={
            palaceteItems ? { mouseenter: pauseVideo } : { mouseenter: null }
          }
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
