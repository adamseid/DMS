import { cn } from "../../../lib/utils";
import React, { useRef, useState, MouseEvent } from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlightColor?: string;
  image?: string;
  imageAlt?: string;
  header?: string;
  paragraph?: string;
}

export const SpotlightCard = ({
  className,
  image,
  imageAlt,
  header,
  paragraph,
  spotlightColor = "rgba(255, 255, 255, 0.15)",
  ...props
}: SpotlightCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "p-6 flex-1 flex flex-col w-full max-w-[341px] relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 text-neutral-200 transition-colors hover:border-neutral-700",
        className
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-10">
        <div className="h-13 w-13 mb-[16.8px] flex items-center justify-center bg-[#251D2F] border border-white/8 rounded-[12px]">
            <img
              src={image}
              alt={imageAlt}
              className="w-full max-w-[24px] object-contain"
            />
          </div>

          <div className="flex-1 flex flex-col">
            <h3 className="font-segoe font-semibold text-[18.9px] leading-[25.2px] tracking-[0px] text-left text-white pb-3">
              {header}
            </h3>
            <p className="font-segoe font-normal text-[16.8px] leading-[25.2px] tracking-[0px] text-left text-brand-cardText flex-1">
              {paragraph}
            </p>
          </div>
      </div>
    </div>
  );
};