import React, { ComponentProps } from 'react';
import { cn } from "@/utils";
import { Button } from "@/components/Button";

const footerStyles = "bg-white p-10 flex-row"; // Adjust the styles as needed

type FooterProps = ComponentProps<"footer"> & {
  className?: string;
};

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={cn(footerStyles, className)} {...props}>
      <div className="flex lg:flex-row flex-col place-content-evenly">
        <div className="flex flex-col ">
          {/* Title */}
          <h1 className="text-3xl text-black font-bold italic">
            MateUI
          </h1>
          <p className='text-black'>
            Engineered with &lt;3 for Productivity.
          </p>
        </div>
        <div className="flex flex-col items-center lg:mt-0 mt-10">
          {/* Subtitle */}
          <p className="text-gray-600 mb-2 uppercase tracking-widest">
            Get Started
          </p>
          <Button variant={'underline'}>Link</Button>
          <Button variant={'underline'}>Link</Button>
          <Button variant={'underline'}>Link</Button>
        </div>
        <div className="flex flex-col items-center lg:mt-0 mt-10">
          {/* Subtitle */}
          <p className="text-gray-600 mb-2 uppercase tracking-widest">
            Download
          </p>
          <Button variant={'underline'}>Link</Button>
          <Button variant={'underline'}>Link</Button>
          <Button variant={'underline'}>Link</Button>
        </div>
        <div className="flex flex-col items-center lg:mt-0 mt-10">
          {/* Subtitle */}
          <p className="text-gray-600 mb-2 uppercase tracking-widest">
            Our Team
          </p>
          <Button variant={'underline'}>Link</Button>
          <Button variant={'underline'}>Link</Button>
          <Button variant={'underline'}>Link</Button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-gray-600 mt-10 uppercase tracking-widest">
          ©MateUI 2024
        </p>
      </div>
    </footer>
  );
};
