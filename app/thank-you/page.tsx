"use client";

import React from "react";
import { ContainerScroll } from "../components/landingPage/ContainerScrollAnimation";
import { Sparkles } from "../components/landingPage/Sparkles";
import { VideoWithOverlay } from "../components/landingPage/VideoWithOverlay";

export default function Home() {
  return (
  <div className="bg-brand-dark">
    <div className="">
      {/* Sparkles */}
      <div className="absolute inset-x-0 top-[78px] h-[20vh] md:h-[50vh] z-3">
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
      <div className="relative">

        {/* Wrapper */}
        <div className="relative flex flex-col items-center bg-transparent z-10 md:pt-[98px] pt-[71px] md:pb-[0px] pb-[0px] max-w-[1440px] mx-auto md:px-10 px-3">
          {/* Hero Text */}
          <h1 className="font-segoe font-normal md:text-[80px] text-[32px] md:leading-[82px] leading-[35px] tracking-[-1px] text-center text-white align-middle md:pb-[50px] pb-[24px]">
            Custom web development, <br /> done with care.
          </h1>

          {/* ContainerScroll */}
          <ContainerScroll>
            <VideoWithOverlay src="https://dms-home-video.s3.us-west-1.amazonaws.com/homepage_video.mp4" overlayImage="/images/play_button.png" />
          </ContainerScroll>
        </div>
      </div>
    </div>
  </div>
  );
}
