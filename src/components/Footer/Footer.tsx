import React from "react";
import { FooterContainer, ContentContainer, CopyrightText } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
    <ContentContainer>
      <CopyrightText>
        &copy; {new Date().getFullYear()} My Website. All rights reserved.
      </CopyrightText>
    </ContentContainer>
  </FooterContainer>
)};

export default Footer;
