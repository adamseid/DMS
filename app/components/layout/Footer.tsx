"use client";

import Link from "next/link";



export default function Navbar() {
  return (
    <footer className="w-full bg-brand-dark">
        <div className="flex flex-col items-stretch justify-start px-[31px] pt-[66px] pb-[23px] md:px-[33px] md:pt-[88px] md:pb-[6px] gap-8">
            <div className="flex flex-col items-center justify-start md:flex-row md:justify-between gap-[47px] md:gap-[0px]">
                <div className="w-auto">
                    <div className="md:p-2.5 w-full">
                        <img
                            src="/images/logo.png"
                            alt="DMS Logo"
                            className="w-full max-w-[159px] md: max-w-[119px] object-contain"
                        />
                    </div>
                </div>

                <div className="flex flex-row items-center justify-between gap-2.5">
                    <a href="#" className="flex flex-row justify-center items-center w-[39px] h-[40px] rounded-[10px] border border-brand-secondary/25 bg-brand-secondary/8 flex-grow-0 flex-shrink">
                        <img src="/icons/instagram.svg" alt="Instagram" className="w-full max-w-[16.38px] object-contain" />
                    </a>

                    <a href="#" className="flex flex-row justify-center items-center w-[39px] h-[40px] rounded-[10px] border border-brand-secondary/25 bg-brand-secondary/8 flex-grow-0 flex-shrink">
                        <img src="/icons/facebook.svg" alt="Facebook" className="w-full max-w-[8.4px] object-contain" />
                    </a>

                    <a href="#" className="flex flex-row justify-center items-center w-[39px] h-[40px] rounded-[10px] border border-brand-secondary/25 bg-brand-secondary/8 flex-grow-0 flex-shrink">
                        <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-full max-w-[16.38px] object-contain" />
                    </a>
                </div>
            </div>

            <div className="h-px w-full opacity-20 bg-[#999999]"></div>
    
            <div className="md:hidden flex flex-col items-center justify-start gap-[9px] md:flex-row md:justify-between md:gap-[9px]">
                <div className="flex flex-row items-center justify-between gap-[17]">
                    <a href="#" className="text-white hover:text-brand-highlight transition p-2.5">
                        Home
                    </a>

                    <a href="#" className="text-white hover:text-brand-highlight transition p-2.5">
                        Result
                    </a>

                    <a href="#" className="text-white hover:text-brand-highlight transition p-2.5">
                        Services
                    </a>

                    <a href="#" className="text-white hover:text-brand-highlight transition p-2.5">
                        Reviews
                    </a>
                </div>

                <div className="text-[#AAAAAA] p-2.5 text-xs leading-[21px]">
                    <span> 
                        ©2026 Distinctive Marketing Solutions All Rights Reserved 
                    </span>
                </div>
            </div>

            <div className="hidden md:flex flex-row items-center justify-between">
                <div className="text-[#AAAAAA] p-2.5 text-xs leading-[21px]">
                    <span> 
                        ©2026 Distinctive Marketing Solutions All Rights Reserved 
                    </span>
                </div>

                <div className="flex flex-row items-center justify-between gap-[17]">
                    <a href="#" className="text-white hover:text-brand-highlight transition p-2.5">
                        Home
                    </a>

                    <a href="#" className="text-white hover:text-brand-highlight transition p-2.5">
                        Result
                    </a>

                    <a href="#" className="text-white hover:text-brand-highlight transition p-2.5">
                        Services
                    </a>

                    <a href="#" className="text-white hover:text-brand-highlight transition p-2.5">
                        Reviews
                    </a>
                </div>
            </div>

            <div className="text-[#AAAAAA] flex flex-row justify-center md:justify-end items-center gap-4 underline text-[10px] leading-[24px]">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms and Conditions</a>
            </div>
        </div>
    </footer>
  );
}
