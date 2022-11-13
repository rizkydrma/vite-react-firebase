import { FC, InputHTMLAttributes } from "react";
import { TailwindColor } from "@/types";

interface InputInterface extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  color?: TailwindColor;
}

const Input: FC<InputInterface> = ({
  label,
  name,
  color = "indigo",
  ...rest
}) => {
  const style = `focus:outline-${color}-600`;

  return (
    <div>
      <label
        htmlFor={name}
        className="text-xs font-medium capitalize text-gray-600"
      >
        {label}
      </label>
      <input
        id={name}
        {...rest}
        className={`block w-full max-w-lg rounded-md border border-gray-300 p-2 text-xs shadow-sm  ${style}`}
      />
    </div>
  );
};

export default Input;
