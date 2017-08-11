import React from "react";
import styled from "styled-components";

import Title from "./Title";
import Content from "./Content";

const Info = styled.section`
  padding: 2rem 0.5rem 0rem;

  border-top: solid 1px #c6c6c6;

  @media (min-width: 48rem){
      padding:1.5rem 0rem;
      border: none;

      display: ${props => props.isShipping ? 'none' : 'block' };
  }
`;

export default (props) =>
  <Info isShipping={props.isShipping}>
    <div className="container">
      <Title title={props.titleName} />
      <Content list ={props.list} texts = {props.list}/>
    </div>
  </Info>;
