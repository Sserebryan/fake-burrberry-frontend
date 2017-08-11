import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  padding: 2rem 1rem 1.625rem;
  margin-top: 3rem;

  background-color: #f3f3f3;

  @media (min-width: 48rem) {
    padding: 2rem 0 0;
    margin-top: 4rem;
  }
`;

const Menu = styled.section`
  display: none;

  @media (min-width: 48rem) {
    display: block;
    margin-bottom: 2rem;
  }
`;

const MenuTitle = styled.h4`
  margin: 0;
  margin-bottom: 1rem;

  font-family: 'Raleway', 'Helvetica Neue', 'Arial', sans-serif;
  font-size: .75rem;
  font-weight: bold;
  text-transform: uppercase;
  line-height: .875rem;
  color: #171717;
`;

const Nav = styled.nav`list-style: none;`;

const NavLink = styled.a.attrs({ href: "#" })`
    display: block;
    margin-bottom: .75rem;

    text-decoration: none;
    font-family: 'Raleway', 'Helvetica Neue', 'Arial', sans-serif;
    font-size: .75rem;
    font-weight: 600;
    line-height: 1.34;
    color: #999999;
`;

const FooterButtons = styled.div`@media (min-width: 48rem) {display: flex;}`;

const FooterButton = styled.button.attrs({
  type: "button"
})`
    padding: 0;
    display: block;
    margin-bottom: 1rem;

    font-family: 'Raleway', 'Helvetica Neue', 'Arial', sans-serif;
    font-weight: 400;
    font-size: .75rem;
    line-height: 1.34;
    color: #999999;

    border: none;
    background-color: #f3f3f3;

    @media (min-width: 48rem){
        margin-right: 1.5rem;
    }
`;

const HelpInfo = styled.h4`
  margin-top: .5rem;
  margin-bottom: 1rem;

  text-align: center;
  font-family: 'Raleway', 'Helvetica Neue', 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.19;

  @media (min-width: 48rem) {
    display: none;
  }
`;

const ContactInfo = styled.a`
  display: block;
  margin-bottom: 2rem;

  text-decoration: none;
  text-align: center;
  line-height: 1.22;
  font-weight: 400;
  font-family: 'Lora', Helvetica, Arial, serif;
  font-size: .875rem;
  font-style: italic;
  color: #171717;

  @media (min-width: 48rem) {
    display: none;
  }
`;

export default () =>
  <Footer>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Menu>
            <MenuTitle>Customer Service</MenuTitle>
            <Nav>
              <NavLink>Contact Us</NavLink>
              <NavLink>Payment</NavLink>
              <NavLink>Shipping</NavLink>
              <NavLink>Returns</NavLink>
              <NavLink>Faqs</NavLink>
              <NavLink>Live Chat</NavLink>
              <NavLink>The Burberry App</NavLink>
              <NavLink>Store Locator</NavLink>
            </Nav>
          </Menu>
        </div>
        <div className="col-md-3">
          <Menu>
            <MenuTitle>Our Company</MenuTitle>
            <Nav>
              <NavLink>Our History</NavLink>
              <NavLink>Burberry Group Plc</NavLink>
              <NavLink>Careers</NavLink>
              <NavLink>Corporate Responsibility</NavLink>
              <NavLink>Site Map</NavLink>
            </Nav>
          </Menu>
        </div>
        <div className="col-md-3">
          <Menu>
            <MenuTitle>Legal &amp;&nbsp;Cookies</MenuTitle>
            <Nav>
              <NavLink>Terms &amp;&nbsp;Conditions</NavLink>
              <NavLink>Privacy Policy</NavLink>
              <NavLink>Cookie Policy</NavLink>
              <NavLink>Accessibility Statement</NavLink>
              <NavLink>Japan Only - SCTL indications</NavLink>
            </Nav>
          </Menu>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <FooterButtons>
            <FooterButton>Shipping country: Russian Federation</FooterButton>
            <FooterButton>Language: English</FooterButton>
          </FooterButtons>
        </div>
      </div>
    </div>
    <HelpInfo>Need help?</HelpInfo>
    <ContactInfo>Find out more and contact us</ContactInfo>
  </Footer>;
