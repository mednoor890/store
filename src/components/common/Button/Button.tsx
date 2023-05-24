import { ButtonProps } from '../../../types/buttonTypes'
import { Btn } from './Button.styled'

export const Button =({color,fontsize,borderleft,borderright,bordertop,borderbottom,top,transform,position,right,left,width,height,onClick,type ,children,backgroundcolor="#5832EB",hovercolor,hoverbackgroundcolor,borderradius}:ButtonProps) => 
{
return (
<Btn 
onClick={onClick}
 type={type} 
 backgroundcolor={backgroundcolor} 
 hovercolor={hovercolor}
 hoverbackgroundcolor={hoverbackgroundcolor}
 borderradius={borderradius}
 width={width}
 height={height}
 left={left}
 right={right}
 position={position}
 transform={transform}
 top={top}
 borderbottom={borderbottom}
 bordertop={bordertop}
 borderleft={borderleft}
 borderright={borderright}
 fontsize={fontsize}
 color={color}
 >
    {children}
    </Btn>)
}