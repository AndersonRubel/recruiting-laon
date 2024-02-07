"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { getCsrfToken } from "next-auth/react";
import Input from "../../components/input";
import Error from "../../components/error";
import Button from "../../components/button";
import Card from "../../components/card";
import Title from "@/components/title";
import SubTitle from "@/components/sub-title";

const Register = () => {
  const [loading, setLoading] = useState(false);

  const schema = z.object({
    name: z.string().trim().min(2, "Preencha o nome completo"),
    email: z.string().email(),
    password: z.string(),
  });

  type FormValues = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      const csrfToken = await getCsrfToken();

      const response = await fetch("http://127.0.0.1:8000/api/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": csrfToken!,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Success!");
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error to send data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container-sm h-100 d-flex align-items-center"
      style={{ width: "32rem" }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <Title text={"Cadastre-se"} />
          <SubTitle text="Acompanhe os melhores filmes e séries" />
          <Input register={register} name="name" placeholder="Nome Completo" />
          {errors.name && <Error message={errors.name.message!} />}
          <Input register={register} name="email" placeholder="Email" />
          {errors.email && <Error message={errors.email.message!} />}
          <Input
            register={register}
            name="password"
            placeholder="Senha"
            type="password"
          />
          {errors.password && <Error message={errors.password.message!} />}
          <p className="mt-3" style={{ fontSize: "12px" }}>
            Ao clicar em cadastrar, você está aceitando os Termos e Condições e
            a Política de Privacidade da Laon.
          </p>
          <Button
            loading={loading}
            onSubmit={handleSubmit(onSubmit)}
            text="Cadastrar"
          />
        </Card>
      </form>
    </div>
  );
};

export default Register;
