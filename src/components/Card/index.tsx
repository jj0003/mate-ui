import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { Button } from "../Button";

const cardStyles = cva(
  [
    "rounded-lg",
    "shadow-lg",
    "overflow-hidden",
    "transition",
    "duration-300",
    "ease-in-out",
    "hover:shadow-xl",
    "cursor-pointer",
  ],
  {
    variants: {
      variant: {
        basic: "",
        withButton: "",
        image: "",
      },
    },
    compoundVariants: [
      {
        variant: "basic",
        className: "bg-white p-6",
      },
      {
        variant: "withButton",
        className: "bg-white p-6",
      },
      {
        variant: "image",
        className: "bg-white p-0",
      },
    ],
    defaultVariants: {
      variant: "basic",
    },
  }
);

type CardProps = ComponentProps<"div"> & VariantProps<typeof cardStyles> & {
  title: string;
  content: string;
  imageSrc?: string;
  buttonText?: string;
  onClick?: () => void;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant, title, content, imageSrc, buttonText, onClick, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(cardStyles({ variant, className }))} {...props} onClick={onClick}>
        {variant === 'image' && imageSrc && (
          <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
        )}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-700 mb-4">{content}</p>
          {variant === 'withButton' && buttonText && (
            <Button size="md" variant="solid" colorscheme="primary" onClick={onClick}>
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    );
  }
);
