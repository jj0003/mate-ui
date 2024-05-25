import React, { ComponentProps } from 'react';
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Button } from "@/components/Button";

const footerStyles = cva([
  "bg-gray-400",
  "text-white",
  "py-4",
  "flex",
  "justify-between",
  "items-center",
  "px-4",
], {
  variants: {
    layout: {
      default: "flex-col",
      horizontal: "flex-row",
    },
  },
  defaultVariants: {
    layout: "horizontal",
  }
});

type FooterProps = ComponentProps<"footer"> & VariantProps<typeof footerStyles>;

export const Footer = ({ layout, className, ...props }: FooterProps) => {
  return (
    <footer className={cn(footerStyles({ layout, className }))} {...props}>
      <div className="">
        <h1 className="text-2xl  font-bold">MateUI</h1>
        <p>© 2024 MateUI. All rights reserved.</p>
      </div>
      <div className="flex flex-col items-start">
            <Button variant={'underline'}>Home</Button>
            <Button variant={'underline'}>About</Button>
            <Button variant={'underline'}>Services</Button>
            <Button variant={'underline'}>Contact</Button>
      </div>

      <div className="mt-4 md:mt-0 flex">
        <a href="#" className="text-[#18181B] mr-4">
          <svg /* SVG for social media icon */></svg>
        </a>
        <a href="#" className="text-[#18181B] mr-4">
          <svg /* SVG for social media icon */></svg>
        </a>
        <a href="#" className="text-[#18181B]">
          <svg /* SVG for social media icon */></svg>
        </a>
      </div>
    </footer>
  );
};
