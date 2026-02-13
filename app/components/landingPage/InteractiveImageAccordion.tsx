import React, { useState } from 'react';

type AccordionCard = {
  id: number;
  title: string;
  imageUrl: string;
};

type AccordionItemProps = {
  item: AccordionCard;
  isActive: boolean;
  onMouseEnter: () => void;
};

type InteractiveImageAccordionProps = {
  accordionCards: AccordionCard[];
};

// --- Accordion Item ---
const AccordionItem = ({
  item,
  isActive,
  onMouseEnter
}: AccordionItemProps) => {
  return (
    <div
      className={`
        bg-[linear-gradient(180deg,_#301D49_0%,_#101010_100%)] p-4
        relative gap-3 rounded-[12px] border border-[#FFFFFF26] 
        overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-full md:w-[500px] h-[404px]' : 'w-full md:w-[80px] h-[100px] md:h-[404px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {isActive && (
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-[300px] object-cover rounded-[12px]"
        />
      )}

      <span
        className={`
          absolute whitespace-nowrap transition-all duration-300 ease-in-out
          font-segoe font-semibold text-[16px] text-white left-1/2 -translate-x-1/2
          ${
            isActive
              ? 'bottom-6'
              : 'top-1/2 -translate-y-1/2 md:rotate-90'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

// --- Main Component ---
export function InteractiveImageAccordion({ accordionCards }: InteractiveImageAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(4);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-transparent w-full">
      <section className="w-full">
        <div className="flex flex-col md:flex-row items-center justify-start md:justify-center gap-4 overflow-x-auto p-4">
          {accordionCards.map((item, index) => (
            <AccordionItem
              key={item.id}
              item={item}
              isActive={index === activeIndex}
              onMouseEnter={() => handleItemHover(index)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
