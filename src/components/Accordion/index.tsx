import React, { useState, ReactNode } from 'react';
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";

interface AccordionItem {
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  variant?: 'basic' | 'withBackground' | 'withBorder' | 'withCustomColor';
}

const accordionStyles = cva(
  [
    "space-y-4",
  ],
  {
    variants: {
      variant: {
        basic: "",
        withBackground: "bg-gray-100",
        withBorder: "",
        withCustomColor: "",
      },
    },
    defaultVariants: {
      variant: "basic",
    },
  }
);

const Accordion: React.FC<AccordionProps & VariantProps<typeof accordionStyles>> = ({ items, variant }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn(accordionStyles({ variant }))}>
      {items.map((item, index) => (
        <div key={index} className={`rounded-lg overflow-hidden ${variant === 'withBorder' ? 'border border-[#18181B]' : ''} ${variant === 'withCustomColor' ? 'border border-[#18181B] bg-gray-100' : ''}`}>
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left ml-4 py-4 text-lg font-semibold text-[#18181B]"
          >
            {item.title}
          </button>
          <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
            <div className="p-4 text-gray-500">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
