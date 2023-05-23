import React from "react";
import { FormWrapper } from "../Auth.styled";
import { useForm } from "react-hook-form";
import Input from "../../common/Input/Input";
const Login:React.FC = () => {
    const  LoginInputs=
    [
        {
            name:"email",
            type:"email",
            label:"Email",
            placeholder:"Email"

        },
        {
            name:"password",
            type:"password",
            label:"Password",
            placeholder:"Password"
            }
    ]
    const { handleSubmit, register } = useForm();

    const onSubmit = (data) => {
      // Handle register form submission
      console.log(data);
    };
  return <FormWrapper> 
    <form onSubmit={handleSubmit(onSubmit)}>
  {LoginInputs.map((LoginInput)=>
  <Input
    name={LoginInput.name}
    label={LoginInput.label}
    type={LoginInput.type}
    register={register}
    required
  />
  )}
  <button type="submit">Login</button>
</form></FormWrapper>;
};


export default Login;
