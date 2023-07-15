export interface ButtonProps {
    onClick?: ()=> void;
    type?: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
    backgroundcolor?:string;
    hovercolor?:string | undefined;
    hoverbackgroundcolor?:string | undefined;
    borderradius?:string ;
    height?:string;
    width?:string;
    left?:string;
    right?:string;
    top?:string;
    position?:string;
    transform?:string;
    bottom?:string;
    borderleft?:string;
    borderright?:string;
    bordertop?:string;
    borderbottom?:string;
    fontsize?:string;
    color?:string;
}