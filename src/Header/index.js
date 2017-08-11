import React from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;

  border-bottom: solid 1px #c6c6c6;

  @media (min-width: 48rem) {
    padding: 1.5rem;
  }
`;

export default () =>
  <Header>
    <a href="/">
      <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="" />
    </a>
  </Header>;
