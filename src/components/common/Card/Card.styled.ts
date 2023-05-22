import styled from "styled-components";

export const CardContainer = styled.div`
position:relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid #EDEDED;
  border-radius: 16px;
  background-color: #F5F5F5;
  height: 375px;
  width: 227px ;
margin-right:16px;
&:hover
{
    border: 1px solid #1AE216;
    box-shadow: 0px 4px 8px rgba(26, 226, 22, 0.55);

}
`;
export const DiscountBox = styled.div`
  position: absolute;
  top: 0;
  right: -1px;
  color:white;
  align-items:center;
  height:53px;
 width:51px;
  background: #1AE216;
  border-radius: 0px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProductsContainer = styled.div`
position:relative;
margin-right:40px;
width:1130px;
height:495px;
top:40px;
  display: flex;
  justify-content: flex-start;
 
`;
export const DetailsContainer = styled.div`
position:absolute;
  background: #FFFFFF;
  border-radius: 0px 0px 15px 15px;
  height: 196px;
  bottom:0;
  left:0px;
  right:0px;
  display: flex;
  flex-direction: column;
  align-items: center;

`;
export const Image = styled.img`
  
  margin-bottom: 16px;
  height: 258px;
width: 144px;
border-radius: 0px;

`;

export const Name = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #333333;
  margin-bottom: 4px;
`;

export const OldPrice = styled.p`
  font-size: 14px;
  text-decoration: line-through;
  color: #999999;
  margin-bottom: 4px;
`;

export const PriceDifference = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #1AE216;
`;
export const PriceLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #EDEDED;
  margin-top: auto;
  margin-bottom: 4px;
`;
export const Link = styled.a`
  display: block;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.6s ease;
  &:hover {
    box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.15);
  }
`;
export const LoadingIcon = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;