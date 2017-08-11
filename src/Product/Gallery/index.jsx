import React from 'react';
import styled from 'styled-components';
import Photo from './Photo';

const Gallery = styled.section`
    display: flex;
    margin: 0 -0.5rem;
    overflow-x: scroll;

    @media (min-width: 48rem){
      margin:0;
    } 
`;

export default (props) => 
<Gallery>
    {props.photos.map(function(photo, key){
        return <Photo key={key} photo={photo}/>
    })}
</Gallery>