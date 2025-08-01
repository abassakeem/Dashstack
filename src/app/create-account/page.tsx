import { CreateAccrountForm } from "@/components/create-account-form";

import React from "react";

export default function CreateAccount() {
  return (
    <div className="main-bg bg-cover bg-center h-screen  ">
      <div className="flex flex-col items-center justify-center ">
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm">
            <CreateAccrountForm />
          </div>
        </div>
      </div>
    </div>
  );
}
