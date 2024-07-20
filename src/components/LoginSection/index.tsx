import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { Button } from "../Button"; // Import your existing Button component

const loginSectionStyles = cva(
  [
    "rounded-lg",
    "shadow-lg",
    "overflow-hidden",
    "p-6",
    "bg-white",
    "flex",
    "flex-col",
    "gap-4",
  ],
  {
    variants: {
      variant: {
        basic: "",
        withBackground: "bg-gray-100",
        withBorder: "border border-gray-300",
      },
    },
    defaultVariants: {
      variant: "basic",
    },
  }
);

type LoginSectionProps = ComponentProps<"div"> & VariantProps<typeof loginSectionStyles>;

export const LoginSection = forwardRef<HTMLDivElement, LoginSectionProps>(
  ({ variant, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(loginSectionStyles({ variant, className }))} {...props}>
        <h3 className="text-2xl font-bold mb-4">Login</h3>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border border-gray-200 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border border-gray-200 rounded-lg"
        />
        <Button size="md" variant="solid" colorscheme="primary">
          Login
        </Button>
      </div>
    );
  }
);
