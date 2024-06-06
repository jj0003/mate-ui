import { forwardRef, ComponentProps } from 'react';
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";

const checkboxStyles = cva([
  "h-4",
  "w-4",
  "rounded-lg",
  "transition",
  "duration-150",
  "ease-in-out",
  "mr-2",
  "focus:border-[#18181B]",
  "focus:border-8"
]);

type CheckboxProps = ComponentProps<"input"> & VariantProps<typeof checkboxStyles> & {
  label: string;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          ref={ref}
          className={cn(checkboxStyles({ className }))}
          {...props}
        />
        <span className="ml-4 text-gray-700">{label}</span>
      </label>
    );
  }
);
