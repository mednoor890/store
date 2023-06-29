import styled from "styled-components";

export const CarouselContainer=styled.div<{ backgroundColor: string }>`
height: 316px;
width: 80%;
left: 10%;
right:10%;
top: 220px;
border-radius: 16px;
background-color: ${(props) => props.backgroundColor};
position: absolute;
`

export const Text=styled.h1`
height: 30px;
width: 498px;
left: 90px;
top: 40px;
border-radius: nullpx;
font-family: Aksara Bali Galang;
font-size: 30px;
font-weight: 400;
line-height: 30px;
letter-spacing: 0em;
text-align: left;
color:white;
position:relative;
`
export const Container = styled.div`
  position: absolute;
  top: 80px;
  left: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const DiscountText = styled.h1`
  height: 30px;
  width: 498px;
  left: 85px;
  top: 120px;
  border-radius: nullpx;
  font-family: Aksara Bali Galang;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
  position: absolute;
`;
export const Brand=styled.h1`
height: 56px;
width: 574px;
left: 85px;
top: 20px;
border-radius: nullpx;
font-family: Actor;
font-size: 63px;
font-weight: 400;
line-height: 63px;
letter-spacing: 0em;
color: #FFFFFF;
position:relative;
text-align:left;
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 316px;
width: 509px;
right:50px;
top: 0px;
border-radius: [object Object]px;
position:absolute;
margin-right:2px;
`;
export const Image = styled.img`
  height: 266px;
  width: 350px;
`;
