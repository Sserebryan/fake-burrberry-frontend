import React from "react";
import styled from "styled-components";

import Title from "./Title";
import Gallery from "./Gallery";
import Price from "./Price";
import Colour from "./Colour";
import Activity from "./Activity";
import Container from "../Common/Container";
import Row from "../Common/Row";
import Info from "./Info";

const photos = [
  {
    alt: "Long Cotton Gabardine Car Coat",
    src: process.env.PUBLIC_URL + "/images/bitmap_4.png"
  },
  {
    alt: "Long Cotton Gabardine Car Coat",
    src: process.env.PUBLIC_URL + "/images/bitmap_3.png"
  },
  {
    alt: "Long Cotton Gabardine Car Coat",
    src: process.env.PUBLIC_URL + "/images/bitmap_2.png"
  },
  {
    alt: "Long Cotton Gabardine Car Coat",
    src: process.env.PUBLIC_URL + "/images/bitmap.png"
  }
];

const colours = [
  {
    name: "Black",
    colour: "#232122",
    isActive: false
  },
  {
    name: "Honey",
    colour: "#cfa880",
    isActive: true
  }
];

const value = 110000;
const article = 39428531;

const Texts = [
  "A refined car coat crafted in protective cotton gabardine.",
  "Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and breathable fabric that protects against wind and rain.",
  "Raglan sleeves and a concealed button closure complement the clean tailored lines.",
  "The piece is finished with a distinctive check undercollar."
];

const List = ["Coat length: 98cm/38.6in. This is based on a size UK 48 as proportions change slightly according to size.",
"Outer: 100% cotton","Check lining: 100% cotton","Sleeve lining: 100% viscose","Buttons: buffalo horn","Specialist dry clean","Made in Europe","Item 39428531"];

export default () =>
  <section>
    <Container>
      <Title title="Long Cotton Gabardine Car Coat" />
    </Container>
    <Container>
      <Title title="Long Cotton Gabardine Car Coat" />
    </Container>
    <div className="container">
      <Title title="Long Cotton Gabardine Car Coat" />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-7">
          <Gallery photos={photos} />
        </div>
        <div className="col-xs-12 col-md-5">
          <Price value={value} article={article} />
          <Colour colours={colours} />
          <Activity />
        </div>
      </div>
    </div>
    <Info text={Text} list={List} titleName="Description"/>
    <Info isShipping={true} titleName="Shipping & returns"/>
  </section>;
