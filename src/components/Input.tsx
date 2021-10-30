import { ChangeEvent } from "react";

interface InputProps {
  handler: (e: ChangeEvent<HTMLInputElement>, label: string) => void;
  type: string;
  value: string;
  label: string;
}

function Input({ handler, label, type, value }: InputProps) {
  return (
    <>
      <label>{label}</label>
      <input onChange={(e) => handler(e, label)} type={type} value={value} />
    </>
  );
}

export default Input;
