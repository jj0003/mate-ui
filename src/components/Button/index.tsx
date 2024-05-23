import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const buttonStyles = cva(
  [
    "rounded-md",
    "font-semibold",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2",
        ghost: "transition-colors duration-300",
        underline: "",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      colorscheme: {
        primary: "text-white",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorscheme: "primary",
        className: "bg-[#18181B] hover:bg-[#3c3c44]",
      },
      {
        variant: "outline",
        colorscheme: "primary",
        className: "text-[#18181B] border-[#18181B] bg-transparent hover:bg-gray-100",
      },
      {
        variant: "ghost",
        colorscheme: "primary",
        className: "text-[#18181B] bg-transparent hover:bg-gray-100",
      },
      {
        variant: "underline",
        colorscheme: "primary",
        className: "text-[#18181B] hover:text-gray-500 bg-transparent hover:underline hover:underline-offset-4",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorscheme: "primary",
    },
  }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, colorscheme, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size, colorscheme, className }))}
        {...props}
      />
    );
  }
);