"use client";

type TestimonialCardProps = {
  testimonial: string;
  author: string;
  authorImage?: string;
  numOfStars: number;
};

export function TestimonialCard({
  testimonial,
  author,
  authorImage,
  numOfStars,
}: TestimonialCardProps) {
  const stars = Math.min(Math.max(numOfStars, 0), 5);

  return (
    <div className="w-full h-full p-6 bg-[#191919] rounded-[18px] flex flex-col justify-between transition-all duration-500">
      
      {/* Testimonial Text */}
      <p className="font-segoe font-normal text-[16px] leading-[24px] text-left text-white pb-[32px]">
        {testimonial}
      </p>

      {/* Author + Stars */}
      <div className="flex flex-row items-center justify-between">
        
        <div className="flex flex-row items-center justify-between gap-3">
            <img
                src={authorImage}
                alt={author}
                className={`w-[36px] h-[36px] object-contain rounded-[6px]`}
            />
            <p className="font-segoe font-semibold text-[16px] leading-[24px] text-left text-white">
                {author}
            </p>
        </div>

        <div className="flex flex-row items-center justify-start gap-[3px]">
          {Array.from({ length: 5 }).map((_, i) => (
            <img
              key={i}
              src="/images/star.png"
              alt="Star"
              className={`w-full object-contain max-w-[18px] ${
                i < stars ? "" : "opacity-30"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}