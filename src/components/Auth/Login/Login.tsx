import React, { useState } from "react";
import { Form, FormWrapper, HeadTitle, WelcomeMsg } from "../Auth.styled";
import { useForm } from "react-hook-form";
import Input from "../../common/Input/Input";
import { Button } from "../../common/Button/Button";
import { faEye, faEyeSlash, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { loginCustomer } from "../../../api/services/auth.service";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const LoginInputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Email",
      icon: faUser,
    },
    {
      id: 2,
      name: "password",
      type: showPassword ? "text" : "password", 
      label: "Password",
      placeholder: "Password",
      icon: showPassword ? faEye : faEyeSlash,
      
    },
  ];
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  
  const { handleSubmit, register, formState: { errors } ,reset} = useForm();
  const navigate=useNavigate()
  const onSubmit = async (data: any) => {
     try {
     const token = await loginCustomer(data.email,data.password);
     if (token) {
      document.cookie = `authToken=${token}`;
     navigate("/")
     }
     else
     {
      console.log("Invalid credentials");
      reset()
     }
     } catch (error) {
      console.log(error);
     }
  };

  return (
    <FormWrapper>
      <Form top="50px" onSubmit={handleSubmit(onSubmit)}>
        <HeadTitle>LOGIN/ أدخل</HeadTitle>
        <WelcomeMsg>
          Login to discover today's deals/أدخل و أكتشف تخفيضات اليوم
        </WelcomeMsg>
        {LoginInputs.map((LoginInput) => (
          <Input
            key={LoginInput.id}
            name={LoginInput.name}
            label={LoginInput.label}
            type={LoginInput.type}
            placeholder={LoginInput.placeholder}
            icon={LoginInput.icon}
            register={register}
            error={errors[LoginInput.name]?.message}
            togglePasswordVisibility={togglePasswordVisibility} 
            rules={
              LoginInput.name === "email"
                ? {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  }
                : {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                  }
            }
          />
        ))}
        <Button
          backgroundcolor="#1AE216"
          width="430px"
          borderradius="5px"
          position="relative"
          left="-50px"
          color="white"
          fontsize="20px"
          type="submit"
        >
          Login
        </Button>
        <WelcomeMsg>
          You don't have an account ?<Link to="/signup">Register Now</Link>
        </WelcomeMsg>
      </Form>
    </FormWrapper>
  );
};
export default Login;
