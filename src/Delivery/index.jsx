import React from "react";
import styled from "styled-components";

const Delivery = styled.section`
     display: none;

     @media (min-width: 48rem){
         display: block;

        font-family: 'Raleway', 'Helvetica Neue', 'Arial', sans-serif;
        color: #171717;
     }
`;


const Photo = styled.img.attrs({
    src: process.env.PUBLIC_URL + "images/delivery.png"
})`
      width: 100%;
    height: auto;
    vertical-align: middle;
`;

const Title = styled.h2`
     margin: 0;

    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
`;

const Description = styled.div`
     margin-top:1rem;
`;

const DescriptionItem = styled.div`
     margin-bottom: 1.5rem;
`;

const DescriptionItemTitle = styled.h3`
     margin:0;
    margin-bottom: .25rem;

    font-size: .75rem;
    font-weight: bold;
    line-height: .875rem;
`;

const DescriptionItemText = styled.p`
     margin:0;

    font-size: .75rem;
    line-height: 1rem;
`;

export default () =>
<Delivery>
     <div className="container">
        <div className="row">
            <div className="col-md-7">
                <Photo/>
            </div>
            <div className="col-md-5">
                <Title>Delivery</Title>
                <Description>
                    <DescriptionItem>
                        <DescriptionItemTitle>Free Next Day Delivery</DescriptionItemTitle>
                        <DescriptionItemText>Order before 7pm Monday to Thursday for delivery the next day</DescriptionItemText>
                    </DescriptionItem>
                    <DescriptionItem>
                        <DescriptionItemTitle>Collect-in-Store</DescriptionItemTitle>
                        <DescriptionItemText>Order online today and pick up ypur items in store as early as tomorrow</DescriptionItemText>
                    </DescriptionItem>
                    <DescriptionItem>
                        <DescriptionItemTitle>Free Returns</DescriptionItemTitle>
                        <DescriptionItemText>Enjoy free returns on your order</DescriptionItemText>
                    </DescriptionItem>
                    <DescriptionItem>
                        <DescriptionItemTitle>Free Gift Packaging</DescriptionItemTitle>
                        <DescriptionItemText>Discover our gift packaging, a gold lined box tied with a coloured ribbon</DescriptionItemText>
                    </DescriptionItem>
                </Description>
            </div>
        </div>
     </div>
</Delivery>
