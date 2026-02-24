"use client";

import React from "react";
import { ContainerScroll } from "../components/landingPage/ContainerScrollAnimation";
import { Sparkles } from "../components/landingPage/Sparkles";
import { VideoWithOverlay } from "../components/landingPage/VideoWithOverlay";
import { TestimonialCard } from "../components/landingPage/TestimonialCard";

export default function ThankYou() {
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

      {/* Hero */}
      <div className="relative">

        {/* Wrapper */}
        <div className="relative flex flex-col items-center bg-transparent z-10 md:pt-[60px] pt-[40px] md:pb-[55px] pb-[40px] max-w-[1440px] mx-auto md:px-10 px-3">
          {/* Hero Text */}
          <h1 className="font-segoe font-normal md:text-[64px] text-[32px] md:leading-[71px] leading-[35px] tracking-[-1px] text-center text-white align-middle pb-[16px]">
            Thanks for reaching out
          </h1>

          <p className="font-segoe font-normal text-[14px] leading-[20px] tracking-[0px] text-center text-white align-middle pb-[40px]">
            Watch this video before your call.
          </p>

          {/* ContainerScroll */}
          <ContainerScroll>
            <VideoWithOverlay src="https://dms-home-video.s3.us-west-1.amazonaws.com/homepage_video.mp4" overlayImage="/images/play_button.png" />
          </ContainerScroll>
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative">

        {/* Wrapper */}
        <div className="relative flex flex-col items-center bg-transparent z-10 md:pt-[60px] pt-[55px] md:pb-[55px] pb-[77px] max-w-[1440px] mx-auto md:px-10 px-3">
          <h1 className="font-segoe font-normal md:text-[48px] text-[32px] md:leading-[48px] leading-[35px] tracking-[0px] text-center text-white align-middle pb-[16px]">
            What our clients are saying
          </h1>

          <p className="font-segoe font-normal text-[14px] leading-[20px] tracking-[0px] text-center text-white align-middle pb-[54px]">
            Real customers achieving unbelievable results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <div className="w-full">
              <TestimonialCard
                testimonial="Rohit is very respectful and knowledgeable young gentleman. Professional with capital letter with lots of passion. Always available and ready to answer all related questions about website development and ongoing process. Thanks."
                author="Josh Rainbow"
                authorImage="/images/josh-rainbow.png"
                numOfStars={5}
              />
            </div>
            <div className="w-full">
              <TestimonialCard
                testimonial="The thorough and caring attention Distinctive Marketing provided our consulting firm has significantly helped us to define our brand in ways we couldn't imagine. Then their marketing strategy, combined with their technology resources and leading-edge support services have enabled us to establish and gain prominence in our niche market. Truly grateful to the whole team!   Michel Berdnikoff, Legal Councel"
                author="Michel Berdnikoff"
                authorImage="/images/michel-berdnikoff.png"
                numOfStars={5}
              />
            </div>
            <div className="w-full">
              <TestimonialCard
                testimonial="I've had the opportunity to work with Distinctive Marketing for numerous projects and have had an amazing experience. They are extremely professional and their SEO and lead gen tactics have steadily increased our sales. Would definitely recommend!"
                author="A Dhillon"
                authorImage="/images/a-dhillon.png"
                numOfStars={5}
              />
            </div>
            <div className="w-full">
              <TestimonialCard
                testimonial="Rohit has figured out how to bring SEO into your marketing/online strategy and produce amazing ROI. As soon as our website was up and running, he basically pays for himself in a short time frame."
                author="Depinder Singh"
                authorImage="/images/depinder-singh.png"
                numOfStars={5}
              />
            </div>
            <div className="w-full">
              <TestimonialCard
                testimonial="If you need a website for your business, I highly recommend Distinctive Marketing Solutions. From day 1 I felt like I had a true partnership with them. Very happy I found them."
                author="Brendan Anderson"
                authorImage="/images/brendan-anderson.png"
                numOfStars={5}
              />
            </div>
            <div className="w-full">
              <TestimonialCard
                testimonial="Roy and his team at Distinctive MS have been a reliable marketing partner agency. Great practices behind the web development and SEO processes.An A+ from the Westbridge Media Group Team."
                author="Charlie Sun"
                authorImage="/images/charlie-sun.png"
                numOfStars={5}
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  );
}
