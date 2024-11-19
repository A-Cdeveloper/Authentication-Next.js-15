"use client";

import { login } from "../_actions";

import SubmitButton from "./Button";
import { useActionState } from "react";

export function LoginForm() {
  const [state, loginAction] = useActionState(login, undefined);

  console.log(state);

  return (
    <form action={loginAction} className="flex max-w-[300px] flex-col gap-2">
      <div className="flex flex-col gap-2">
        <input id="email" name="email" placeholder="Email" />
      </div>

      <div className="flex flex-col gap-2">
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
        />{" "}
      </div>

      <SubmitButton />
      {state?.errors?.email && (
        <p className="text-red-500">{state.errors.email}</p>
      )}
      {state?.errors?.password && (
        <p className="text-red-500">{state.errors.password}</p>
      )}
    </form>
  );
}
