"use client";

import React from "react";
import { ContainerScroll } from "./components/landingPage/ContainerScrollAnimation";
import { SpotlightCard } from "./components/landingPage/SpotlightCard";
import { InteractiveImageAccordion } from "./components/landingPage/InteractiveImageAccordion";
import { Sparkles } from "./components/landingPage/Sparkles";
import { Carousel } from "./components/landingPage/Carousel";
import { VerticalTimeline } from "./components/landingPage/VerticalTimeline";
import { ClientCard } from "./components/landingPage/ClientCard";
import { PurpleGradientButton } from "./components/landingPage/PurpleGradientButton";
import { carouselData, timelineData, accordionData } from "./pageData";
import { SpiralAnimation } from "./components/landingPage/SpiralAnimation"
import { useState, useEffect } from 'react'

// const SpiralDemo = () => {
//   const [startVisible, setStartVisible] = useState(false)
  
//   // Handle navigation to personal site
//   const navigateToPersonalSite = () => {
//     window.location.href = "https://xubh.top/"
//   }
  
//   // Fade in the start button after animation loads
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setStartVisible(true)
//     }, 2000)
    
//     return () => clearTimeout(timer)
//   }, [])
  
//   return (
//     <div className="fixed inset-0 w-full h-full overflow-hidden bg-black">
//       {/* Spiral Animation */}
//       <div className="absolute inset-0">
//         <SpiralAnimation />
//       </div>
      
//       {/* Simple Elegant Text Button with Pulsing Effect */}
//       <div 
//         className={`
//           absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10
//           transition-all duration-1500 ease-out
//           ${startVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
//         `}
//       >
//         <button 
//           onClick={navigateToPersonalSite}
//           className="
//             text-white text-2xl tracking-[0.2em] uppercase font-extralight
//             transition-all duration-700
//             hover:tracking-[0.3em] animate-pulse
//           "
//         >
//           Enter
//         </button>
//       </div>
//     </div>
//   )
// }

// export {SpiralDemo}


export default function Home() {
  return (
  <div className="bg-brand-dark">
    <div className="">
      {/* Sparkles */}
      <div className="pointer-events-none absolute inset-x-0 top-[78px] h-[25vh] md:h-[50vh]">
        <Sparkles
          density={1200}
          color="#ffffff"
          className="
            absolute inset-0 w-full h-full
            [mask-image:linear-gradient(to_bottom,white,transparent)]
          "
        />
      </div>

      {/* Section A + B */}
      <div className="flex flex-col items-center md:pt-[98px] pt-[40px] md:pb-[0px] pb-[0px] max-w-[1440px] mx-auto px-3">

        {/* Hero Text */}
        <h1 className="font-segoe font-normal md:text-[80px] text-[32px] md:leading-[82px] leading-[35px] tracking-[-1px] text-center text-white align-middle md:pb-[50px] pb-[24px]">
          Custom web development, <br /> done with care.
        </h1>

        {/* Buttons */}
        <div className="flex md:flex-row md:items-center md:justify-between flex-col justify-start items-stretch gap-4 pb-[38px]">

          {/* Gradient Button */}
          <PurpleGradientButton maxWidthClass="177px" imageSrc="/icons/north-east-arrow.svg" imageAlt="Arrow Icon" text="View our work" />

          {/* Dark Button */}
          <div className="z-[1]">
            <button className="
                min-h-[39px] h-full
                flex items-center gap-3 justify-center
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
              <img src="/icons/phone.svg" alt="Phone Icon" className="w-3 object-contain" />
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
      <div className="flex flex-col items-center pt-[0px] md:pt-[47px] pb-[40px] md:pb-[58px] max-w-[1440px] mx-auto px-3">
        {/* Hero Text */}
        <h2 className="font-segoe font-normal text-[32px] md:text-[64px] leading-[35px] md:leading-[109px] tracking-[-1px] md:tracking-[-2px] text-center text-white align-middle pb-[50px]">
          Client Work
        </h2>

        <Carousel items={carouselData} />

      </div>

      {/* Section D */}
      <div className="flex flex-col items-center pt-[40px] pb-[40px] md:pt-[98px] md:pb-[98px] max-w-[1440px] mx-auto px-3">
        {/* Hero Text */}
        <h2 className="font-segoe font-normal text-[32px] md:text-[64px] leading-[35px] md:leading-[109px] tracking-[-1px] md:tracking-[-2px] text-center text-white align-middle pb-[50px]">
          Why Choose Us?
        </h2>

        <div className="flex flex-col justify-start items-center md:flex-row gap-6 md:items-stretch md:justify-center">
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
      <div className="flex flex-col items-center justify-start md:flex-row gap-[30px] md:gap-[114px] md:justify-center md:items-top pt-[40px] pb-[40px] md:pt-[84px] md:pb-[49px] max-w-[1440px] mx-auto px-3">
        <div >
          <div className="w-full md:max-w-[501px] flex flex-col items-center md:items-start md:justify-start md:sticky md:top-[10px]">
            {/* Hero Text */}
            <h2 className="font-segoe font-normal text-[32px] md:text-[48px] leading-[35px] md:leading-[56px] tracking-[-1px] md:tracking-[-2px] text-center md:text-left text-white align-middle pb-[16px] md:pb-[16px]">
              Our process for designing <br /> your <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#9747FF] to-[#EBAFFF]">perfect</span> website.
            </h2>

            <p className="font-segoe font-normal text-[16px] leading-[24px] tracking-[0px] text-center md:text-left text-brand-cardText pb-[24px]">
              Our goal is to make the perfect site for your <br className="md:hidden" /> business, well within your deadline.
            </p>

            {/* Gradient Button */}
            <PurpleGradientButton maxWidthClass="152px" imageSrc="/icons/phone.svg" imageAlt="Phone Icon" text="Book a Call" />
          </div>
        </div>

        <VerticalTimeline cards={timelineData} />
      </div>

      {/* Section F */}
      <div className="flex flex-col items-center pt-[40px] md:pt-[105px] pb-[0px] max-w-[1440px] mx-auto px-3">
        {/* Hero Text */}
        <h2 className="font-segoe font-normal text-[32px] md:text-[48px] leading-[35px] md:leading-[56px] tracking-[-1px] md:tracking-[-2px] text-center text-white align-middle pb-[50px] md:pb-[32px]">
          Some of our clients
        </h2>

        <div className="max-w-[662px] w-full flex flex-wrap gap-x-[11px] gap-y-[13px] md:gap-y-[0px] md:gap-x-[7.68px]">
          <ClientCard
            imageSrc="/images/ul.png"
            imageAlt="UL"
            maxWidthClass = "max-w-[50px]"
          />

          <ClientCard
            imageSrc="/images/ford.png"
            imageAlt="Ford"
            maxWidthClass = "max-w-[100px]"
          />

          <ClientCard
            imageSrc="/images/lg.png"
            imageAlt="LG"
            maxWidthClass = "max-w-[83px]"
          />

          <ClientCard
            imageSrc="/images/fc.png"
            imageAlt="FC25"
            maxWidthClass = "max-w-[74px]"
          />

          <ClientCard
            imageSrc="/images/mlb.png"
            imageAlt="MLB"
            maxWidthClass = "max-w-[72px]"
          />

          <ClientCard
            imageSrc="/images/goldline-resources.png"
            imageAlt="Goldline Resources"
            maxWidthClass = "max-w-[50px]"
          />

          <ClientCard
            imageSrc="/images/canada.png"
            imageAlt="Canada"
            maxWidthClass = "max-w-[100px]"
          />

          <ClientCard
            imageSrc="/images/university-of-michigan.png"
            imageAlt="University of Michigan"
            maxWidthClass = "max-w-[83px]"
          />

          <ClientCard
            imageSrc="/images/alberta-government.png"
            imageAlt="Alberta Government"
            maxWidthClass = "max-w-[74px]"
          />

          <ClientCard
            imageSrc="/images/university-of-calgary.png"
            imageAlt="University of Calgary"
            maxWidthClass = "max-w-[72px]"
          />
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
      <div className="flex flex-col justify-start gap-[42px] md:flex-row md:justify-center items-center md:gap-[123px] pt-[40px] pb-[40px] md:pt-[83px] md:pb-[52px] max-w-[1440px] mx-auto px-3">
        <div className="w-full md:max-w-[329px] flex flex-col items-center md:items-start justify-start">
            {/* Hero Text */}
          <h2 className="font-segoe font-normal text-[32px] md:text-[48px] leading-[35px] md:leading-[56px] tracking-[-1px] md:tracking-[-2px] text-center md:text-left text-white align-middle pb-[12px] md:pb-[16px]">
            Our Services
          </h2>

          <p className="font-segoe font-normal text-[16px] leading-[24px] tracking-[0px] text-center md:text-left text-brand-cardText pb-[24px]">
            Practical, end-to-end solutions tailored to your business needs.
          </p>

          {/* Gradient Button */}
          <PurpleGradientButton maxWidthClass="152px" imageSrc="/icons/phone.svg" imageAlt="Phone Icon" text="Book a Call" />
        </div>

        <InteractiveImageAccordion accordionCards = {accordionData} />
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
      <div className="flex flex-col items-center pt-[0px] pb-[40px] md:pb-[76px] max-w-[1440px] mx-auto px-3">
        {/* Hero Text */}
        <h2 className="font-segoe font-normal text-[32px] md:text-[48px] leading-[35px] md:leading-[56px] tracking-[-1px] md:tracking-[-2px] text-center text-white align-middle pb-[12px] md:pb-[16px]">
          Your Next Growth Move Starts Here
        </h2>

        <p className="font-segoe font-normal text-[16px] leading-[24px] tracking-[0px] text-center text-brand-cardText pb-[24px]">
          Book a discovery call to explore the right growth strategy for your business.
        </p>
        
        {/* Gradient Button */}
        <PurpleGradientButton maxWidthClass="152px" imageSrc="/icons/phone.svg" imageAlt="Phone Icon" text="Book a Call" />
      </div>
    </div>
  </div>
  );
}
