import React from "react";
import styled from "styled-components";

const Photo = styled.img.attrs({
    src: props => props.src,
    alt: props => props.alt
})
`
  display: block;
  flex-shrink: 0;
  width: auto;
  height: 400px;
  content: url(${props => props.src});

  object-fit: contain;

  @media (min-width: 48rem) {
    height: 576px;
  }
`;

export default props => <Photo src ={props.photo.src} alt = {props.photo.alt}/>;
