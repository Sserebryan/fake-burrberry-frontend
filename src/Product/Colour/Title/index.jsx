import React from "react";
import styled from "styled-components";

const Title = styled.p`
    margin: 0;

    line-height: .875rem;
    font-size: .75rem;
    line-height: 1.34;
    text-align: left;
`;

export default (props) =>
    <Title>Colour: {props.name}</Title>
;