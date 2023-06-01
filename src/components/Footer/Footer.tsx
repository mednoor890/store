import React from "react";
import { FooterContainer, ContentContainer, CopyrightText } from "./Footer.styled";
import { Link } from "../common/Navbar/Navbar.styled";

const Footer:React.FC = () => {
  return (
    <FooterContainer>
    <ContentContainer>
      <CopyrightText>
         <Link href="http://www.wi-mobi.com/home">Wimobi</Link>/<Link href="https://github.com/mednoor890">Med Noor</Link>. All rights reserved.&copy; {new Date().getFullYear()}
      </CopyrightText>
    </ContentContainer>
  </FooterContainer>
)};

export default Footer;
