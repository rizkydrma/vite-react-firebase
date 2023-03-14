import { TailwindColor } from "@/types";
import { cls } from "@/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "white" | "danger";
  size: "small" | "normal" | "large";
  color?: TailwindColor;
  pill?: boolean;
}

const index = forwardRef(
  (
    {
      children,
      className,
      variant = "primary",
      size = "normal",
      pill = false,
      disabled = false,
      color = "indigo",
      ...rest
    }: ButtonInterface,
    ref: React.LegacyRef<HTMLButtonElement>
  ) => {
    const classes = {
      base: "focus:outline-none transition ease-in-out duration-300 focus:ring-2 focus:ring-offset-2",
      disabled: "opacity-50 cursor-not-allowed",
      pill: "rounded-full",
      size: {
        small: "px-2 py-1 text-xs",
        normal: "px-4 py-2 text-sm",
        large: "px-8 py-3 text-lg",
      },
      variant: {
        primary: `inline-flex items-center rounded border border-transparent font-medium text-white shadow-sm justify-center bg-${color}-600 hover:bg-${color}-700 focus:ring-${color}-500`,
        secondary: `inline-flex items-center rounded border border-transparent bg-${color}-100 px-2.5 text-${color}-700 hover:bg-${color}-200 focus:ring-${color}-500 justify-center`,
        white: `inline-flex items-center rounded border border-gray-300 bg-white font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-indigo-500 justify-center`,
        danger:
          "bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white rounded-md",
      },
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cls(`
                  ${classes.base}
                  ${classes.size[size]}
                  ${classes.variant[variant]}
                  ${(pill && classes.pill) || ""}
                  ${(disabled && classes.disabled) || ""}
                  ${className || ""}
              `)}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default index;
