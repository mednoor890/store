import React from "react";
import { FormWrapper } from "../Auth.styled";
import Input from "../../common/Input/Input";
import { useForm } from "react-hook-form";

const Register:React.FC = () => {
    const   RegisterInputs=
    [
        {
            name:"firstname",
            type:"text",
            label:"First Name",
            placeholder:"Enter your first name"
        },
        {
            name:"lastname",
            type:"text",
            label:"Last Name",
            placeholder:"Enter your last name"
        },
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
{RegisterInputs.map((RegisterInput)=>
<Input
  name={RegisterInput.name}
  label={RegisterInput.label}
  type={RegisterInput.type}
  register={register}
  required
/>
)}
<button type="submit">Login</button>
</form></FormWrapper>;
};
export default Register;







