"use client";

import React from "react";
import { Sparkles } from "./components/landingPage/Sparkles";

export default function NotFound() {
    return (
    <div className="bg-brand-dark">
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
        <div className="relative z-10">

            {/* Wrapper */}
            <div className="relative flex flex-col items-center bg-transparent z-10 md:pt-[108px] pt-[40px] md:pb-[108px] pb-[40px] max-w-[1440px] mx-auto md:px-10 px-3">
                <div className="pb-[32px]">
                    <img
                        src="/images/error-page.png"
                        alt="404 Error"
                        className={`w-full object-contain max-w-[800px]`}
                    />
                </div>

                <p className="font-segoe font-normal text-[16px] leading-[16px] tracking-[0px] md:text-[20px] md:leading-[26px] md:tracking-[0px] text-white pb-[6px] text-center">
                    Oops! Page Not Found!
                </p>

                <p className="font-segoe font-normal text-[16px] leading-[16px] tracking-[0px] md:text-[20px] md:leading-[26px] md:tracking-[0px] text-white pb-[32px] text-center">
                    The page you are looking for doesn't exist or has been moved.
                </p>

                <a href="/" className="font-segoe font-normal text-[14px] leading-[20px] tracking-[0px] text-black py-[7px] px-[25px] bg-white rounded-[377.33px]">
                    Back to Homepage
                </a>

            </div>
        </div>
    </div>
    );
}
