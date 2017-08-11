import React from "react";
import styled from "styled-components";

const Buttons = styled.div`
  padding: 1rem 0rem 2rem;
  display: flex;
  justify-content: flex-start;

  border-bottom: solid 1px #c6c6c6;
`;

const Button = styled.button.attrs({
  type: "button"
})`
    height: 40px;
    width: 40px;
    margin-right: 1rem;

    background-color: ${props => props.colour.colour};
    border-radius: 50%;
    border: ${props => props.isActive ? 'solid 1px #232122' : 'solid 1px transparent'};
`;

export default function(props) {
  console.log(props);
  const listButton = props.colours.map(function(colour, key) {
    return (
      <Button key={key} colour={colour}>
        <span hidden>
          Select {colour.name} colour
        </span>
      </Button>
    );
  });
  console.log(listButton);

  return (
    <Buttons>
      {listButton}
    </Buttons>
  );
}
