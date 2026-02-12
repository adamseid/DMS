import { useState } from "react";

type CarouselItem = {
  logo?: string;
  title?: string;
  description?: string;
  bullets?: string[];
  image?: string;
};

type CarouselProps = {
  items: CarouselItem[];
};

export function Carousel({ items = [] }: CarouselProps) {
  const [index, setIndex] = useState(0);

  if (!items.length) return null;

  const current = items[index];

  return (
    <div className="w-full">

      {/* CARD */}
      <div className="bg-[#191919] px-[14px] md:px-[19px] py-[20px] md:py-[20.5px] rounded-xl flex flex-col justify-start items-stretch md:flex-row md:justify-center md:items-center gap-4 border border-[#FFFFFF14]">

        {/* LEFT SIDE */}
        <div className="px-4 md:w-[30%] w-full">

          {/* Logo */}
          {current.logo && (
            <img
              src={current.logo}
              alt="logo"
              className="w-full max-w-[47px] object-contain pb-6"
            />
          )}

          {/* Title */}
          {current.title && (
            <h3 className="font-segoe font-semibold text-[36px] leading-[36px] text-left pb-6 text-white">
              {current.title}
            </h3>
          )}

          {/* Description */}
          {current.description && (
            <p className="font-segoe text-[16px] leading-[24px] text-brand-cardText pb-8">
              {current.description}
            </p>
          )}

          {/* Bullets */}
          {(current.bullets ?? []).length > 0 && (
            <ul className="pl-5 space-y-3 text-white list-disc">
              {(current.bullets ?? []).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

        </div>

        {/* RIGHT SIDE IMAGE */}
        {current.image && (
          <div className="md:w-[70%] w-full font-segoe text-[14px] leading-[20px] text-white">
            <img
              src={current.image}
              alt="case"
              className="w-full object-cover"
            />
          </div>
        )}
      </div>

      {/* PAGINATION DOTS */}
      <div className="flex justify-center mt-8">
        {items.map((_, i) => (
            <div 
                key={i} 
                onClick={() => setIndex(i)} 
                className={`p-[1.5px] cursor-pointer rounded-xl transition-all ${
                    i === index ? "bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)] shadow-[0_0_14px_0_#FFFFFF4D_inset,0_0_30.3px_0_#9747FF66]" : "bg-transparent"
                }`}>
                <div 
                    className={`px-[14px] py-[10px] w-full h-full max-w-[35px] max-h-[38px] rounded-lg
                    font-segoe font-semibold text-[16px] leading-[16px] text-center
                    flex items-center justify-center transition-all ${
                        i === index ? "[background:radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)] [box-shadow:0_0_14px_0_#FFFFFF4D_inset,0_0_30.3px_0_#9747FF66] text-white" : "bg-transparent text-[#565656]"
                    }`} 
                >
                    {i + 1}
                </div>
            </div>
        ))}
      </div>

    </div>
  );
}
