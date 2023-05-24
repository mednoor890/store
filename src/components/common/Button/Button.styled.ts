import styled from 'styled-components'
interface StyledButtonProps 
{
  backgroundcolor: string;
  hovercolor:string | undefined;
  hoverbackgroundcolor:string | undefined;
  borderradius?:string;
  width?:string;
  height?:string;
  left?:string;
  right?:string;
  position?:string;
  top?:string;
  transform?: string;
  borderleft?:string;
  borderright?:string;
  bordertop?:string;
  borderbottom?:string;
  fontsize?:string;
  color?:string;
}
export const Btn = styled.button<StyledButtonProps>`
background-color: ${props => props.backgroundcolor ? props.backgroundcolor : '#5832EB'};
padding:9px 14px 9px 14px;
transform: ${props => props.transform};
cursor:pointer;
border-radius: ${props=> props.borderradius ? props.borderradius :'18px'};
position:${props=> props.position };
width:${props=> props.width ? props.width :'111px'};
font-family:Abyssinica SIL;
font-size: ${props=> props.fontsize ? props.fontsize :'14px'};
font-weight: 400;
line-height: 18px;
letter-spacing: 0em;
right:${props=>props.right};
height: ${props=> props.height ? props.height :'36px'};
border-left:${props=>props.borderleft ? props.borderleft :"none"};
border-right:${props=>props.borderright ? props.borderright :"none"};
border-top:${props=>props.bordertop ? props.bordertop :"none"};
border-bottom:${props=>props.borderbottom ? props.borderbottom :"none"};
left: ${props=> props.left ? props.left :"14px"};
top: ${props=> props.top ? props.top :"3px"} ;
color:${props=> props.color };
&:hover {  
background-color:${props=> props.hoverbackgroundcolor ? props.hoverbackgroundcolor : "none"};
color:${props=> props.hovercolor ? props.hovercolor : "black"};
}
`