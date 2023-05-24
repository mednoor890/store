import React from "react";
import { Form, FormWrapper, HeadTitle, WelcomeMsg } from "../Auth.styled";
import Input from "../../common/Input/Input";
import { useForm } from "react-hook-form";
import { Button } from "../../common/Button/Button";
import { Link } from "react-router-dom";

const Register:React.FC = () => {
    const   RegisterInputs=
    [
        {   id:11,
            name:"firstname",
            type:"text",
            label:"First Name",
            placeholder:"Enter your first name"
        },
        {   id:12,
            name:"lastname",
            type:"text",
            label:"Last Name",
            placeholder:"Enter your last name"
        },
        {  id:13,
            name:"email",
            type:"email",
            label:"Email",
            placeholder:"Email"

        },
        {   id:14,
            name:"password",
            type:"password",
            label:"Password",
            placeholder:"Password"
            }
    ]
    const { handleSubmit, register } = useForm();

    const onSubmit = (data:any) => {
      // Handle register form submission
      console.log(data);
    };
  return <FormWrapper height="550px"> 
  <Form 
  top="10px"
  height="530px"
  onSubmit={handleSubmit(onSubmit)}>
  <HeadTitle>Register/ أدخل</HeadTitle>
        <WelcomeMsg>Join & Save / انضم و وفر</WelcomeMsg>
{RegisterInputs.map((RegisterInput)=>
<Input
  key={RegisterInput.id}
  name={RegisterInput.name}
  label={RegisterInput.label}
  type={RegisterInput.type}
  placeholder={RegisterInput.placeholder}
/>
)}
<Button 
type="submit"
backgroundcolor="#1AE216"
width="430px"
 borderradius="5px"
 position="relative"
 left="-60px"
 color="white"
 fontsize="20px"
>Register/سجل</Button>
<WelcomeMsg>You  have an account? <Link to='/signin'>Connect Now</Link></WelcomeMsg>

</Form></FormWrapper>;
};
export default Register;







