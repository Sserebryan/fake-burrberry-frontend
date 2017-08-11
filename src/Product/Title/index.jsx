import React from 'react';
import styled from 'styled-components';

// <h1 class="product-title">Long Cotton Gabardine Car Coat</h1>

const Title = styled.h1`
    margin: 1rem .5rem;

    font-size: 1.25rem;
    line-height: 1.2;
    font-weight: 400;
    font-family: 'Lora', Helvetica, Arial, serif;
    color: #111;

    @media (min-width: 48rem){
    margin: 1.5rem 0;

    font-size: 1.5rem;
    line-height: 1.17;
    }
    
`;

export default (props) => 
<Title>
    {props.title}
</Title>

