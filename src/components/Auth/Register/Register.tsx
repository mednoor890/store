import React from "react";
import { Form, FormWrapper, HeadTitle, WelcomeMsg } from "../Auth.styled";
import Input from "../../common/Input/Input";
import { useForm } from "react-hook-form";
import { Button } from "../../common/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { registerCustomer } from "../../../api/services/auth.service";

const Register: React.FC = () => {
  const RegisterInputs = [
    {
      id: 11,
      name: "firstName",
      type: "text",
      label: "First Name",
      placeholder: "Enter your first name",
      validationRules: {
        required:"First Name is required"
      }
    },
    {
      id: 12,
      name: "lastName",
      type: "text",
      label: "Last Name",
      placeholder: "Enter your last name",
      validationRules: {
        required:"Last Name is required"
      }
    },
    {
      id: 13,
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Email",
      validationRules: {
        required: "Email is required",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Invalid email address",
        },
      },
    },
    {
      id: 14,
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Password",
      validationRules: {
        required: "Password is required",
        minLength: {
          value: 8,
          message: "Password must be at least 8 characters long",
        },
      },
    },
  ];

  const { handleSubmit, register, formState: { errors },reset } = useForm();
  const navigate =useNavigate();
  const onSubmit = async (data: any) => {
    try {
      if (data){
      const response = await registerCustomer(data);
      console.log(response);
      navigate("/")
          console.log(data);}
          else
          {
            reset()
          }
    } catch (error) {
      console.error("Error during registration", error);
       
    }
   
  };

  return (
    <FormWrapper height="550px">
      <Form top="10px" height="530px" onSubmit={handleSubmit(onSubmit)}>
        <HeadTitle>Register/ أدخل</HeadTitle>
        <WelcomeMsg>Join & Save / انضم و وفر</WelcomeMsg>
        {RegisterInputs.map((RegisterInput) => (
          <Input
            key={RegisterInput.id}
            name={RegisterInput.name}
            label={RegisterInput.label}
            type={RegisterInput.type}
            placeholder={RegisterInput.placeholder}
            register={register}
            error={errors[RegisterInput.name]?.message}
            rules={RegisterInput.validationRules}
          />
        ))}
        <Button
          type="submit"
          backgroundcolor="#1AE216"
          width="430px"
          borderradius="5px"
          position="relative"
          left="-60px"
          color="white"
          fontsize="20px"
        >
          Register/سجل
        </Button>
        <WelcomeMsg>
          You have an account? <Link to="/signin">Connect Now</Link>
        </WelcomeMsg>
      </Form>
    </FormWrapper>
  );
};

export default Register;
