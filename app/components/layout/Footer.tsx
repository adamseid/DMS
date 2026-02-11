"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <footer className="w-full bg-brand-dark">
        <div className="flex flex-col items-stretch justify-start px-[33px] pt-[88px] pb-[6px] gap-8">
            <div className="flex flex-row items-center justify-between">
                <div className="w-auto">
                    <div className="p-2.5 w-full">
                        <img
                            src="/images/logo.png"
                            alt="DMS Logo"
                            className="w-full max-w-[119px] object-contain"
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

            <div className="flex flex-row items-center justify-between">
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

            <div className="text-[#AAAAAA] flex flex-row justify-end items-center gap-4 underline text-[10px] leading-[24px]">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms and Conditions</a>
            </div>
        </div>
    </footer>
  );
}
