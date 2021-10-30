import { ChangeEvent, FormEvent } from "react";

interface DropdownProps {
  handler: (e: ChangeEvent<HTMLSelectElement>, label: string) => void;
  type: string;
  value: string;
  label: string;
  options: string[];
}

function Dropdown({ handler, label, type, options }: DropdownProps) {
  return (
    <>
      <label>{label}</label>
      <select name={`${type}-${label}`} onChange={(e) => handler(e, label)}>
        {options.map((opt) => (
          <option key={`option-${opt}`}>{opt}</option>
        ))}
      </select>
    </>
  );
}

export default Dropdown;
