import { forwardRef, ComponentProps } from 'react';
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";

const radioStyles = cva([
  "form-radio",
  "h-4",
  "w-4",
  "text-blue-600",
  "transition",
  "duration-150",
  "ease-in-out",
],);

type RadioButtonProps = ComponentProps<"input"> & VariantProps<typeof radioStyles> & {
  label: string;
};

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <label className="inline-flex items-center">
        <input
          type="radio"
          ref={ref}
          className={cn(radioStyles({ className }))}
          {...props}
        />
        <span className="ml-4 text-gray-700">{label}</span>
      </label>
    );
  }
);
