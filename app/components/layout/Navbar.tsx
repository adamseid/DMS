"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-brand-dark fancy-border h-[78px]" >
        <div className="flex h-full flex-row items-center justify-between px-[33px]">

            {/* LEFT SECTION — Logo */}
            <div className="w-auto">
                <div className="p-2.5 w-full">
                    <img
                        src="/images/logo.png"
                        alt="DMS Logo"
                        className="w-full max-w-[48px] object-contain"
                    />
                </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="hidden md:flex flex-row items-center justify-end gap-8">
                {/* Links */}
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

                {/* Contact Us Button */}
                <div>
                    <div 
                        className="
                            rounded-xl 
                            p-[1.5px] 
                            bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)]
                            shadow-[0_0_14px_0_#FFFFFF4D_inset,0_0_30.3px_0_#9747FF66]
                            ">
                        <button
                            className="
                            flex items-center gap-3 justify-between
                            text-white font-semibold
                            rounded-xl
                            bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)]
                            px-[29px] py-[10px]
                            w-full
                            h-full
                            cursor-pointer
                            "
                        >
                            Contact Us
                            <img src="/icons/phone.svg" alt="Arrow Icon" className="w-3 object-contain" />
                        </button>
                    </div>
                </div>
            </div>


            {/* MOBILE MENU BUTTON (placeholder) */}
            <button className="md:hidden text-white">
            ☰
            </button>

        </div>
    </nav>

  );
}
