"use client";
import { useEffect, useRef, useState } from "react";
import { SpotlightCard } from "./SpotlightCard";

const defaultSteps = [
  {
    title: "Discovery & Strategy",
    description: "Learn about your business, goals, and audience, and plan the website structure.",
    image: "/images/super-communicative.png",
    imageAlt: "Super Communicative",
    header: "Super Communicative",
    paragraph: "You can find us via email, phone calls, text messages, WhatsApp, whenever! You will never get a radio silence from us."
  },
  {
    title: "Website Design",
    description: "Create a modern design that reflects brand and ensures a great user experience.",
    spotlightColor: "rgba(151, 71, 255, 0.2)",
    image: "/images/transparent-pricing.png",
    imageAlt: "Transparent Pricing",
    header: "Transparent Pricing",
    paragraph: "We provide clear, upfront pricing so you always know what you're paying for, with no hidden surprises." 
  },
  {
    title: "Website Development",
    description: "Build the site in a responsive, fast, and CMS-ready way.",
    image: "/images/forward-looking.png",
    imageAlt: "Forward Looking",
    header: "Forward Looking",
    paragraph: "We provide forward-looking strategies to ensure you stay ahead, leveraging future trends for sustained growth and success." 
  }
];

export function VerticalTimeline({ steps = defaultSteps }) {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<HTMLDivElement[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [highlightProgress, setHighlightProgress] = useState(0); // 0 -> 1

  // Scroll effect for vertical line
useEffect(() => {
  if (!sectionRef.current) return;

  let targetProgress = 0;   // where we want progress to go
  let currentProgress = 0;  // current displayed progress
  let animationFrameId: number;

  const updateProgress = () => {
    // Smoothly move currentProgress toward targetProgress
    currentProgress += (targetProgress - currentProgress) * 0.1; // 0.1 = easing factor

    // Snap if very close
    if (Math.abs(currentProgress - targetProgress) < 0.001) {
      currentProgress = targetProgress;
    }

    setHighlightProgress(currentProgress);

    // Continue updating until current reaches target
    if (currentProgress !== targetProgress) {
      animationFrameId = requestAnimationFrame(updateProgress);
    }
  };

  const handleScroll = () => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const sectionHeight = rect.height;
    const windowHeight = window.innerHeight;

    // How much of the section is visible from top of viewport
    const visible = windowHeight - rect.top;

    // Completion relative to section height (can exceed 100%)
    const completion = (visible / sectionHeight) * 100;

    // Map completion 10% -> 150% to progress 0 -> 1
    targetProgress = (completion - 10) / (150 - 10);
    targetProgress = Math.max(0, Math.min(1, targetProgress)); // clamp 0-1

    // Start smooth animation
    cancelAnimationFrame(animationFrameId);
    animationFrameId = requestAnimationFrame(updateProgress);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // run once on mount

  return () => {
    window.removeEventListener("scroll", handleScroll);
    cancelAnimationFrame(animationFrameId);
  };
}, []);


  return (
    <div ref={sectionRef} className="relative flex flex-row gap-[83px]">
      {/* Vertical timeline line */}
      <div className="relative w-[3px]">
        {/* Full gray line */}
        <div className="absolute top-0 left-0 w-1 h-full bg-[#2F2F2F]"></div>

        {/* Glowing highlight growing as you scroll */}
        <div
          className="absolute top-0 left-0 w-[3px] bg-white"
          style={{
            height: `${highlightProgress * 100}%`,
            transition: "height 0.1s linear"
          }}
        />
      </div>

      {/* Cards container (unchanged) */}
      <div className="flex-1 flex flex-col justify-start items-start gap-[13px]">
        {steps.map((step, i) => (
          <div
            key={i}
            ref={(el) => (stepRefs.current[i] = el!)}
            data-index={i}
          >

            <SpotlightCard 
                spotlightColor="rgba(151, 71, 255, 0.2)" 
                image= {step.image}
                imageAlt= {step.imageAlt}
                header= {step.header}
                paragraph= {step.paragraph}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
