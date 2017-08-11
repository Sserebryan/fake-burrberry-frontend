import React from "react";
import styled from "styled-components";

import Title from "./Title";
import Buttons from "./Buttons";

const Colour = styled.section`
  padding: 1rem .5rem 0;

  @media (min-width: 48rem) {
    padding: 1rem 0rem 0rem;
  }
`;

export default function(props) {
  var activeColourName;
  props.colours.forEach(function(element) {
    if (element.isActive) {
      activeColourName = element.name;
    }
  });
  return (
    <Colour>
      <Title name = {activeColourName} />
      <Buttons colours={props.colours} />
    </Colour>
  );
}
