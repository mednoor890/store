import styled, { keyframes } from "styled-components";

export const Nav=styled.nav`
height:201px;
width:100%;
background-color:#1AE216;
left:0;
top:0;
position:relative;
`
export const TopContainer =styled.div`
height:42px;
width:100%;
background-color:#F5F5F5;
position:absolute;
`
export const BottomContainer =styled.div`

height:69px;
width:100%;
background-color:white;
position:absolute;
top:132px;
border: 1px solid #EDEDED;
`
export const ButtonsContainer =styled.div`
display: flex;
  align-items: center;
  gap:25px;
height: 36px;
left: 90px;
top:15px;
border-radius: 18px;
position:absolute;

`
export const TextContainer =styled.div`
width:230px;
height:14px;
position:relative;
top:8px;
left:98px;
font-family: Adamina;
font-size: 14px;
font-weight: 400;
line-height: 14px;
letter-spacing: 0em;
text-align: left;
color:#666666
`
const textAnimation = keyframes`
  0% {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  50% {
    text-shadow: 6px 6px 10px rgba(0, 0, 0, 0.6);
  }
  100% {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  }
`;

export const Promo = styled.h1`
  position: absolute;
  top: 65px;
  left: 150px;
  font-family: PoetsenOne;
  font-size: 24px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  animation: ${textAnimation} 2s infinite;
`;
export const SearchBar=styled.input`
position: absolute;
width: 507px;
height: 48px;
left: 461px;
top: 63px;
border-radius:15px;
background-color:rgb(242,248,251);
border: none;
padding-left: 50px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #666666; 
    font-family: Adamina;
font-size: 14px;
font-weight: 400;
line-height: 18px;
letter-spacing: 0em;

  }
  `
  export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: absolute;
  right: 40px;
  top: 63px;
`;

export const Link = styled.a`
  display: inline-block;
  padding: 0 10px;
  font-family: Actor ;
font-size: 16px;
font-weight: 400;
line-height: 18px;
letter-spacing: 0em;
text-align: left;
cursor:pointer;
  color: #666666;
  text-decoration: none;
`;

export const Separator = styled.div`
  width: 1px;
  height: 24px;
  margin: 0 10px;
  background-color: #333;
`;