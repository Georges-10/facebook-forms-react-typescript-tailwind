import {
  ButtonHTMLAttributes,
  FormEvent,
  PropsWithChildren,
} from "react";

interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  large?: boolean;
  green?: boolean;
  onClick?: (e: FormEvent) => void;
}

export default function Button({
  children,
  disabled,
  large = false,
  green = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`${
        green
          ? "bg-green-500 hover:bg-opacity-80"
          : "bg-blue-facebook hover:bg-blue-500"
      } px-5 py-3 text-white rounded-md disabled:cursor-not-allowed cursor-pointer disabled:opacity-90 duration-150 ${
        large && "text-[21px] w-full"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
