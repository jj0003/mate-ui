import React, { useState, ReactNode } from 'react';

interface AccordionItem {
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-[#18181B]	hover:bg-gray-100 rounded-lg">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left ml-4 py-4 text-lg font-semibold text-[#18181B]"
          >
            {item.title}
          </button>
          <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
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
