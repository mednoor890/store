import styled from "styled-components";
interface StyledFormProps
{
    top?:string;
    height?:string;
}
interface StyledWrapper
{
height?:string;    
}
export const FormWrapper=styled.div<StyledWrapper>`
height: ${props=>props.height?props.height:'471px'};
width: 518px;
left: 461px;
top: 50px;
position:absolute;
border-radius: 10px;
box-shadow: 1px 6px 16px rgba(0, 0, 0, 0.4);

`
export const Form=styled.form<StyledFormProps>`
height:${props=>props.height};
width: 518px;
left: 461px;
top: 50px;
position:relative;
left:100px;
right:118px;
top:${props=>props.top};

`
export const HeadTitle=styled.h1`
height: 29px;
font-family: PoetsenOne;
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 29px;
display: flex;
color: #1AE216;
position:relative;
left:106px;
`
export const WelcomeMsg=styled.h3`
font-family: Public Sans;
font-size: 14px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0em;
text-align: center;
position:relative;
left:-106px;
color: rgba(0, 0, 0, 0.5);
`