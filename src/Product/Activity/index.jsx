import React from "react";
import styled from "styled-components";

const Activity = styled.section`
  padding: 1rem .5rem;
  display: flex;
  flex-direction: column;
  flex-basis: 2.75rem;
  margin-top: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 48rem) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const Button = styled.button.attrs({ type: "button" })`
    padding: .9375rem .9375rem;
    display: block;
    margin-bottom: 1rem;

    font-size: .75rem;
    line-height: 1rem;
    font-family: 'Raleway', 'Helvetica Neue', 'Arial', sans-serif;
    text-transform: uppercase;

    border-radius: 2px;
`;

const SizeButton = Button.extend`
  color: #ffffff;

  border: solid 1px #171717;
  background-color: #171717;
`;

const StoreButton = Button.extend`
  margin-bottom: 1.5rem;

  border: solid 1px #999999;
  background-color: #ffffff;
`;

const HelpButton = Button.extend`
  padding: 0;
  flex-basis: 0;

  line-height: 1.34;
  text-align: left;

  border: none;
  background: none;
`;


export default () =>
  <Activity>
    <SizeButton>Select a size</SizeButton>
    <StoreButton>Find in store</StoreButton>
    <HelpButton>Need size help?</HelpButton>
  </Activity>;
