import React, { useState } from "react";
import { Form, FormWrapper, HeadTitle, WelcomeMsg } from "../Auth.styled";
import Input from "../../common/Input/Input";
import { useForm } from "react-hook-form";
import { Button } from "../../common/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { registerCustomer } from "../../../api/services/auth.service";
import ImageUploader from "../../common/ImageUploader/ImageUploader";

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
    {
      id: 15,
      name: "image",
      type: "file",
      label: "Image",
      accept: "image/*", // Specify accepted file types, e.g., "image/png,image/jpeg"
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
          // Read the file and convert it to a base64 string
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64String = reader.result as string;
            setImage(base64String);
          };
          reader.readAsDataURL(file);
        }
      },
      validationRules: {
        required: "Image is required",
      },
    },
  ];
  const [image, setImage] = useState<string | null>(null);

  const { handleSubmit, register, formState: { errors },reset } = useForm();
  const navigate =useNavigate();
  const onSubmit = async (data: any) => {
    try {
      if (data){
      const response = await registerCustomer(data);
      console.log(response);
      navigate("/signin")
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
    <FormWrapper height="600px">
      <Form top="5px" height="530px" onSubmit={handleSubmit(onSubmit)}>
        <HeadTitle>Register/ أدخل</HeadTitle>
        <WelcomeMsg>Join & Save / انضم و وفر</WelcomeMsg>
        {RegisterInputs.map((RegisterInput) => {
      if (RegisterInput.name === "image") {
        return (
          <ImageUploader
            key={RegisterInput.id}
            label={RegisterInput.label}
            accept={RegisterInput.accept}
            onChange={RegisterInput.onChange}
            error={errors[RegisterInput.name]?.message}
          />
        );
      }
      return (
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
      );
    })}
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
