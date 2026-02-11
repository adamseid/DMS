"use client";

import React from "react";
import { ContainerScroll } from "./components/landingPage/ContainerScrollAnimation";
import { SpotlightCard } from "./components/landingPage/SpotlightCard";
import { LandingAccordionItem } from "./components/landingPage/InteractiveImageAccordion";
import { Sparkles } from "./components/landingPage/Sparkles";
import { Carousel } from "./components/landingPage/Carousel";
import { VerticalTimeline } from "./components/landingPage/VerticalTimeline";

const carouselData = [
  {
    logo: "/images/ksw-logo.png",
    title: "KSW Lawyers",
    description:
      "KSW Lawyers is a long-established full-service Canadian law firm...",
    bullets: [
      "Increased qualified leads for KSW Lawyers by X% through targeted digital campaigns.",
      "Improved website conversion rate by X% via UX and CTA optimization.",
      "Reduced cost per lead by X% with smarter audience targeting."
    ],
    image: "/images/ksw-website.png"
  },
  {
    logo: "/images/ksw-logo.png",
    title: "KSW",
    description:
      "KSW Lawyers is a long-established full-service Canadian law firm...",
    bullets: [
      "Increased qualified leads for KSW Lawyers by X% through targeted digital campaigns.",
      "Improved website conversion rate by X% via UX and CTA optimization.",
      "Reduced cost per lead by X% with smarter audience targeting."
    ],
    image: "/images/ksw-website.png"
  },
  {
    logo: "/images/ksw-logo.png",
    title: "Lawyers",
    description:
      "KSW Lawyers is a long-established full-service Canadian law firm...",
    bullets: [
      "Increased qualified leads for KSW Lawyers by X% through targeted digital campaigns.",
      "Improved website conversion rate by X% via UX and CTA optimization.",
      "Reduced cost per lead by X% with smarter audience targeting."
    ],
    image: "/images/ksw-website.png"
  },
  {
    logo: "/images/ksw-logo.png",
    title: "KSWLawyers",
    description:
      "KSW Lawyers is a long-established full-service Canadian law firm...",
    bullets: [
      "Increased qualified leads for KSW Lawyers by X% through targeted digital campaigns.",
      "Improved website conversion rate by X% via UX and CTA optimization.",
      "Reduced cost per lead by X% with smarter audience targeting."
    ],
    image: "/images/ksw-website.png"
  },
];


export default function Home() {
  return (
  <div className="bg-brand-dark">
    <div className="">
      {/* Sparkles */}
      <div className="pointer-events-none absolute inset-x-0 top-[78px] h-[50vh]">
        <Sparkles
          density={2400}
          color="#ffffff"
          className="
            absolute inset-0 w-full h-full
            [mask-image:linear-gradient(to_bottom,white,transparent)]
          "
        />
      </div>

      {/* Section A + B */}
      <div className="flex flex-col items-center pt-[98px] max-w-[1440px] mx-auto px-5">

        {/* Hero Text */}
        <h1 className="font-segoe font-normal text-[80px] leading-[82px] tracking-[-1px] text-center text-white align-middle pb-[50px]">
          Custom web development, <br /> done with care.
        </h1>

        {/* Buttons */}
        <div className="flex flex-row items-center justify-between gap-4 pb-[39px]">

          {/* Gradient Button */}
          <div className="
              z-[1]
              rounded-xl
              min-h-[39px] h-full 
              p-[1.5px] 
              bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)]
              shadow-[0_0_14px_0_#FFFFFF4D_inset,0_0_30.3px_0_#9747FF66]
            ">
            <button className="
                flex items-center gap-3 justify-between
                text-white font-semibold
                rounded-xl
                bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)]
                px-[29px] py-[10px]
                w-full h-full
                cursor-pointer
              ">
              View our work
              <img src="/icons/northEastArrow.svg" alt="Arrow Icon" className="w-3 object-contain" />
            </button>
          </div>

          {/* Dark Button */}
          <div className="z-[1]">
            <button className="
                min-h-[39px] h-full
                flex items-center gap-3 justify-between
                shadow-[0_0_14px_0_#8F8F8F4D_inset]
                border-[0.5px] border-[#FFFFFF4D]
                rounded-xl 
                text-white font-semibold
                bg-[#101010]
                px-[29px] py-[10px]
                w-full h-full
                cursor-pointer
              ">
              Book a Call
              <img src="/icons/phone.svg" alt="Arrow Icon" className="w-3 object-contain" />
            </button>
          </div>
        </div>

        {/* ContainerScroll */}
        <ContainerScroll>
          <img
            src="/images/video-placeholder.png"
            alt="hero"
            className="mx-auto rounded-2xl object-cover h-full w-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>

      </div>

      {/* Section C */}
      <div className="flex flex-col items-center pt-[47px] pb-[58px] max-w-[1440px] mx-auto px-5">
        {/* Hero Text */}
        <h2 className="font-segoe font-normal text-[64px] leading-[109px] tracking-[-2px] text-center text-white align-middle pb-[50px]">
          Client Work
        </h2>

        <Carousel items={carouselData} />

      </div>

      {/* Section D */}
      <div className="flex flex-col items-center pt-[98px] pb-[98px] max-w-[1440px] mx-auto px-5">
        {/* Hero Text */}
        <h2 className="font-segoe font-normal text-[64px] leading-[109px] tracking-[-2px] text-center text-white align-middle pb-[50px]">
          Why Choose Us?
        </h2>

        <div className="flex flex-row gap-6 items-stretch justify-center">
          <SpotlightCard 
            spotlightColor="rgba(151, 71, 255, 0.2)" 
            image="/images/super-communicative.png" 
            imageAlt="Super Communicative" 
            header="Super Communicative" 
            paragraph="You can find us via email, phone calls, text messages, WhatsApp, whenever! You will never get a radio silence from us." 
          />

          <SpotlightCard 
            spotlightColor="rgba(151, 71, 255, 0.2)" 
            image="/images/transparent-pricing.png" 
            imageAlt="Transparent Pricing" 
            header="Transparent Pricing" 
            paragraph="We provide clear, upfront pricing so you always know what you're paying for, with no hidden surprises." 
          />

          <SpotlightCard 
            spotlightColor="rgba(151, 71, 255, 0.2)" 
            image="/images/forward-looking.png" 
            imageAlt="Forward Looking" 
            header="Forward Looking" 
            paragraph="We provide forward-looking strategies to ensure you stay ahead, leveraging future trends for sustained growth and success." 
          />
        </div>

      </div>

      {/* Section E */}
      <div className="flex flex-row gap-[114px] justify-center items-top pt-[84px] pb-[49px] max-w-[1440px] mx-auto px-5">
        <div>
          <div className="w-full max-w-[501px] flex flex-col items-start justify-start sticky top-[10px]">
            {/* Hero Text */}
            <h2 className="font-segoe font-normal text-[48px] leading-[56px] tracking-[-2px] text-left text-white align-middle pb-[16px]">
              Our process for designing <br /> your <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#9747FF] to-[#EBAFFF]">perfect</span> website.
            </h2>

            <p className="font-segoe font-normal text-[16px] leading-[24px] tracking-[0px] text-left text-brand-cardText pb-[24px]">
              Our goal is to make the perfect site for your business, well within your deadline.
            </p>

            {/* Gradient Button */}
            <div>
              <div className="
                rounded-xl
                min-h-[39px] h-full 
                p-[1.5px] 
                bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)]
                shadow-[0_0_14px_0_#FFFFFF4D_inset,0_0_30.3px_0_#9747FF66]
              ">
                <button className="
                    flex items-center gap-3 justify-between
                    text-white font-semibold
                    rounded-xl
                    bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)]
                    px-[29px] py-[10px]
                    w-full h-full
                    cursor-pointer
                  ">
                  Book a Call
                  <img src="/icons/phone.svg" alt="Phone Icon" className="w-3 object-contain" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <VerticalTimeline />
      </div>

      {/* Section F */}
      <div className="flex flex-col items-center pt-[105px] pb-[0px] max-w-[1440px] mx-auto px-5">
        {/* Hero Text */}
        <h2 className="font-segoe font-normal text-[48px] leading-[56px] tracking-[-2px] text-center text-white align-middle pb-[32px]">
          Some of our clients
        </h2>

        <div className="max-w-[662px] w-full flex flex-row items-center justify-center flex-wrap">
          <div className="h-[97px] bg-transparent flex-none w-1/5 flex items-center justify-center">
              <img
                src="/images/ul.png"
                alt="UL"
                className="w-full max-w-[50px] object-contain"
              />
          </div>

          <div className="h-[97px] bg-transparent flex-none w-1/5 flex items-center justify-center">
              <img
                src="/images/ford.png"
                alt="ford"
                className="w-full max-w-[100px] object-contain"
              />
          </div>

          <div className="h-[97px] bg-transparent flex-none w-1/5 flex items-center justify-center">
              <img
                src="/images/lg.png"
                alt="lg"
                className="w-full max-w-[83px] object-contain"
              />
          </div>

          <div className="h-[97px] bg-transparent flex-none w-1/5 flex items-center justify-center">
              <img
                src="/images/fc.png"
                alt="fc25"
                className="w-full max-w-[74px] object-contain"
              />
          </div>

          <div className="h-[97px] bg-transparent flex-none w-1/5 flex items-center justify-center">
              <img
                src="/images/mlb.png"
                alt="mlb"
                className="w-full max-w-[72px] object-contain"
              />
          </div>


          <div className="h-[97px] bg-transparent flex-none w-1/5 flex items-center justify-center">
              <img
                src="/images/goldline-resources.png"
                alt="Goldline Resources"
                className="w-full max-w-[50px] object-contain"
              />
          </div>

          <div className="h-[97px] bg-transparent flex-none w-1/5 flex items-center justify-center">
              <img
                src="/images/canada.png"
                alt="Canada"
                className="w-full max-w-[100px] object-contain"
              />
          </div>

          <div className="h-[97px] bg-transparent flex-none w-1/5 flex items-center justify-center">
              <img
                src="/images/university-of-michigan.png"
                alt="University of Michigan"
                className="w-full max-w-[83px] object-contain"
              />
          </div>

          <div className="h-[97px] bg-transparent flex-none w-1/5 flex items-center justify-center">
              <img
                src="/images/alberta-government.png"
                alt="Alberta Government"
                className="w-full max-w-[74px] object-contain"
              />
          </div>

          <div className="h-[97px] bg-transparent flex-none w-1/5 flex items-center justify-center">
              <img
                src="/images/university-of-calgary.png"
                alt="University of Calgary"
                className="w-full max-w-[72px] object-contain"
              />
          </div>
        </div>
      </div>

      {/* Sparkles */}
      <div className="w-full overflow-hidden">
        {/* Container */}
        <div className="mx-auto mt-[50px] w-full max-w-2xl">
        </div>
        {/* Sparkles */}
        <div className="relative -mt-[50px] h-60 w-full overflow-hidden [mask-image:radial-gradient(100%_40%,white,transparent)]">
          <div className="absolute inset-0 
              before:absolute before:inset-0 
              before:bg-[radial-gradient(circle_at_bottom_center,#9747FF_0%,#724EA1_30%,#101010_52.5%)] 
              before:opacity-40 
              before:[backdrop-filter:blur(50px)]" />
          <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] bg-[linear-gradient(180deg,#9747FF_0%,#101010_25.2%)] p-[1px]">
            <div className="bg-black rounded-[100%] w-full h-full" />
          </div>
            <Sparkles
              density={1200}
              className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
              color="#ffffff"
            />
        </div>
      </div>

      {/* Section G */}
      <div className="flex flex-row gap-[123px] justify-center items-center pt-[83px] pb-[52px] max-w-[1440px] mx-auto px-5">
        <div className="w-full max-w-[329px] flex flex-col items-start justify-start">
            {/* Hero Text */}
          <h2 className="font-segoe font-normal text-[48px] leading-[56px] tracking-[-2px] text-left text-white align-middle pb-[16px]">
            Our Services
          </h2>

          <p className="font-segoe font-normal text-[16px] leading-[24px] tracking-[0px] text-left text-brand-cardText pb-[25px]">
            Practical, end-to-end solutions tailored to your business needs.
          </p>

          {/* Gradient Button */}
          <div className="
              rounded-xl
              min-h-[39px] h-full 
              p-[1.5px] 
              bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)]
              shadow-[0_0_14px_0_#FFFFFF4D_inset,0_0_30.3px_0_#9747FF66]
            ">
            <button className="
                flex items-center gap-3 justify-between
                text-white font-semibold
                rounded-xl
                bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)]
                px-[29px] py-[10px]
                w-full h-full
                cursor-pointer
              ">
              Book a Call
              <img src="/icons/phone.svg" alt="Phone Icon" className="w-3 object-contain" />
            </button>
          </div>
        </div>

        <LandingAccordionItem />
      </div>
      

      {/* Sparkles */}
      <div className="w-full overflow-hidden">
        {/* Container */}
        <div className="mx-auto mt-[50px] w-full max-w-2xl">
        </div>
        {/* Sparkles */}
        <div className="relative -mt-[50px] h-60 w-full overflow-hidden [mask-image:radial-gradient(100%_40%,white,transparent)] scale-y-[-1]">
          <div className="absolute inset-0 
              before:absolute before:inset-0 
              before:bg-[radial-gradient(circle_at_bottom_center,#9747FF_0%,#724EA1_30%,#101010_52.5%)] 
              before:opacity-40 
              before:[backdrop-filter:blur(50px)]" />
          <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] bg-[linear-gradient(180deg,#9747FF_0%,#101010_25.2%)] p-[1px]">
            <div className="bg-black rounded-[100%] w-full h-full" />
          </div>
          <Sparkles
            density={1200}
            className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
            color="#ffffff"
          />
        </div>
      </div>


      {/* Section H */}
      <div className="flex flex-col items-center pt-[0px] pb-[76px] max-w-[1440px] mx-auto px-5">
        {/* Hero Text */}
        <h2 className="font-segoe font-normal text-[48px] leading-[56px] tracking-[-2px] text-center text-white align-middle pb-[16px]">
          Your Next Growth Move Starts Here
        </h2>

        <p className="font-segoe font-normal text-[16px] leading-[24px] tracking-[0px] text-center text-brand-cardText pb-[25px]">
          Book a discovery call to explore the right growth strategy for your business.
        </p>
        

        {/* Gradient Button */}
        <div className="
            rounded-xl
            min-h-[39px] h-full 
            p-[1.5px] 
            bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)]
            shadow-[0_0_14px_0_#FFFFFF4D_inset,0_0_30.3px_0_#9747FF66]
          ">
          <button className="
              flex items-center gap-3 justify-between
              text-white font-semibold
              rounded-xl
              bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)]
              px-[29px] py-[10px]
              w-full h-full
              cursor-pointer
            ">
            Book a Call
            <img src="/icons/phone.svg" alt="Phone Icon" className="w-3 object-contain" />
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}
