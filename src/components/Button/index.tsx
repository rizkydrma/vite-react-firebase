import { TailwindColor } from "@/types";
import { cls } from "@/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

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
    primary:
      "inline-flex items-center rounded border border-transparent font-medium text-white shadow-sm justify-center",
    secondary:
      "bg-gray-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white rounded-md",
    danger:
      "bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white rounded-md",
  },
  color: {
    indigo: "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500",
    green: "bg-green-600 hover:bg-green-700 focus:ring-green-500",
    red: "bg-red-600 hover:bg-red-700 focus:ring-red-500",
    orange: "bg-orange-600 hover:bg-orange-700 focus:ring-orange-500",
    yellow: "bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500",
  },
};

interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "danger";
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
  ) => (
    <button
      ref={ref}
      disabled={disabled}
      className={cls(`
                ${classes.base}
                ${classes.size[size]}
                ${classes.variant[variant]}
                ${classes.color[color]}
                ${(pill && classes.pill) || ""}
                ${(disabled && classes.disabled) || ""}
                ${className || ""}
            `)}
      {...rest}
    >
      {children}
    </button>
  )
);

export default index;
