import { LoginForm } from "@/components/login-form";
import React from "react";

export default function Login() {
  return (
    <div className="main-bg bg-cover bg-center h-screen  ">
      <div className="flex flex-col items-center justify-center ">
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-md">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
