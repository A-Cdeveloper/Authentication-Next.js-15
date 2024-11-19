"use client";
import { useFormStatus } from "react-dom";
const SubmitButton = () => {
  const { pending } = useFormStatus();
  return <button>{pending ? "Loading..." : "Login"}</button>;
};

export default SubmitButton;
