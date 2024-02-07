import React from "react";
import { UseFormRegister } from "react-hook-form";

interface InputProps {
  register: UseFormRegister<any>;
  name: string;
  placeholder: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ register, name, placeholder, type }) => (
  <input
    className="form-control p-3 bg-transparent mt-4"
    style={{ border: "1px solid #6b6d6f", color: "white" }}
    {...register(name as string, { required: true })}
    placeholder={placeholder}
    type={type} // Aqui definimos o type do input
  />
);
export default Input;
