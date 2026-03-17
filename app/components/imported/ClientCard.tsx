type ClientCardProps = {
  imageSrc: string;
  imageAlt: string;
  maxWidthClass?: string;
};

export function ClientCard({ imageSrc, imageAlt, maxWidthClass = "max-w-none" }: ClientCardProps) {
  return (
    <div className="h-[139px] md:h-[97px]
  bg-[#191919] md:bg-transparent
  flex-none rounded-[12px]
  basis-[calc(50%-5.5px)]
  md:basis-[calc(20%-6.15px)]
  flex items-center justify-center">
      <img
        src={imageSrc}
        alt={imageAlt}
        className={`w-full object-contain ${maxWidthClass}`}
      />
    </div>
  );
}
