import React from "react";
import { Form, FormWrapper, HeadTitle, WelcomeMsg } from "../Auth.styled";
import { useForm } from "react-hook-form";
import Input from "../../common/Input/Input";
import { Button } from "../../common/Button/Button";
import { faEye, faEyeSlash, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Login:React.FC = () => {
    const  LoginInputs=
    [
        {   id:1,
            name:"email",
            type:"email",
            label:"Email",
            placeholder:"Email",
            icon:faUser
        },
        {    id:2,
            name:"password",
            type:"password",
            label:"Password",
            placeholder:"Password",
            icon:faEye
            }
    ]
    const { handleSubmit, register } = useForm();

    const onSubmit = (data:any) => {
      // Handle register form submission
      alert("Form submitted!");
      console.log(data);
    };
  return <FormWrapper> 
    <Form 
    top="50px"
    onSubmit={handleSubmit(onSubmit)}>
        <HeadTitle>LOGIN/ أدخل</HeadTitle>
        <WelcomeMsg>Login to discover todays deals/أدخل و أكتشف تخفيضات اليوم</WelcomeMsg>
  {LoginInputs.map((LoginInput)=>
  <Input
  key={LoginInput.id}
    name={LoginInput.name}
    label={LoginInput.label}
    type={LoginInput.type}
    placeholder={LoginInput.placeholder}
    icon={LoginInput.icon}
  />
  )}
  <Button 
  backgroundcolor="#1AE216"
   width="430px"
    borderradius="5px"
    position="relative"
    left="-50px"
    color="white"
    fontsize="20px"
type="submit">Login</Button>
<WelcomeMsg>You don't have an account ?<Link to='/signup'>Register Now</Link></WelcomeMsg>
</Form></FormWrapper>;
};


export default Login;
