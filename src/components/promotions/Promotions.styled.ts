import styled from "styled-components";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  justify-content: center;
  margin: 0 50px;
  position:relative;
  top:500px;
  left:10px;
`;
export const Sign=styled.h1`
color:#1AE216;
font-size:18px;
font-family:Actor;
position:relative;
left:450px;
top:-75px;
`
export const CardContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: calc(33.33% - 20px);
  }

  @media (min-width: 1200px) {
    width: calc(25% - 20px);
  }

  @media (min-width: 992px) {
    width: calc(33.33% - 20px);
  }

  @media (min-width: 1400px) {
    width: calc(25% - 20px);
  }
`;
