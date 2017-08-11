import React from "react";
import styled from "styled-components";

const Price = styled.section`
    padding: 1rem .5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 48rem){
        padding:0rem;
    }
`;

const Value = styled.h2`
    margin: 0;

    font-size: 1rem;
    font-weight: normal;
    line-height: 1.19;
    font-family: 'Raleway', 'Helvetica Neue', 'Arial', sans-serif;
    text-transform: none;
`;

const Article = styled.p`
    margin: 0;
  
    font-family: 'Raleway', 'Helvetica Neue', 'Arial', sans-serif;
    line-height: 1.34;
    font-size: .75rem;
    color: #171717;
`;

export default (props) => 
<Price>
    <Value>{props.value}  руб.</Value>
    <Article>Item {props.article}</Article>
</Price>;
