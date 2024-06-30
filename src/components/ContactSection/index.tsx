import React from 'react';
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { Button } from "../Button"; // Import your existing Button component

const contactSectionStyles = cva(
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

type ContactSectionProps = ComponentProps<"div"> & VariantProps<typeof contactSectionStyles>;

export const ContactSection = forwardRef<HTMLDivElement, ContactSectionProps>(
  ({ variant, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(contactSectionStyles({ variant, className }))} {...props}>
        <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border border-gray-200 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-200 rounded-lg"
        />
        <textarea
          placeholder="Message"
          className="w-full p-2 border border-gray-200 rounded-lg h-24"
        />
        <Button size="md" variant="solid" colorscheme="primary">
          Send Message
        </Button>
      </div>
    );
  }
);
