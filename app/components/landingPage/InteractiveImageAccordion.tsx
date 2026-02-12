import React, { useState } from 'react';

type AccordionItemData = {
  id: number;
  title: string;
  imageUrl: string;
};

type AccordionItemProps = {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
};

// --- Data ---
const accordionItems: AccordionItemData[] = [
  {
    id: 1,
    title: 'Voice Assistant',
    imageUrl: 'https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'AI Image Generation',
    imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'AI Chatbot + Local RAG',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'AI Agent',
    imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2090&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Visual Understanding',
    imageUrl: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop',
  },
];

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
          font-segoe font-semibold text-[16px] text-white
          ${
            isActive
              ? 'bottom-6 left-1/2 -translate-x-1/2'
              : 'top-1/2 -translate-y-1/2 left-4 md:left-1/2 md:-translate-x-1/2 md:rotate-90'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

// --- Main Component ---
export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(4);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-transparent w-full">
      <section className="w-full">
        <div className="flex flex-col md:flex-row items-center justify-start md:justify-center gap-4 overflow-x-auto p-4">
          {accordionItems.map((item, index) => (
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
