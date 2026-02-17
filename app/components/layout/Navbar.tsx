"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Disable scroll when menu is open
    useEffect(() => {
    if (menuOpen) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }

    return () => {
        document.body.style.overflow = "";
    };
    }, [menuOpen]);


  return (
    <>
        <nav className="bg-brand-dark fancy-border h-[78px] relative z-49">
            <div className="flex h-full flex-row items-center justify-between px-[33px]">
                {/* LEFT SECTION */}
                <div className="w-auto">
                    <div className="p-2.5 w-full">
                        <img
                            src="/images/logo.png"
                            alt="DMS Logo"
                            className="w-full max-w-[48px] object-contain"
                        />
                    </div>
                </div>

                {/* RIGHT SECTION (Desktop) */}
                <div className="hidden md:flex flex-row items-center justify-end gap-8">
                    {/* Links */}
                    <div className="flex flex-row items-center gap-[17]">
                        <a href="#" className="text-white p-2.5 font-segoe font-normal text-[14px] leading-[100%] tracking-[0px]">Home</a>
                        <a href="#" className="text-white p-2.5 font-segoe font-normal text-[14px] leading-[100%] tracking-[0px]">Result</a>
                        <a href="#" className="text-white p-2.5 font-segoe font-normal text-[14px] leading-[100%] tracking-[0px]">Services</a>
                        <a href="#" className="text-white p-2.5 font-segoe font-normal text-[14px] leading-[100%] tracking-[0px]">Reviews</a>
                    </div>

                    {/* Gradient Button */}
                    <div className="
                        z-1
                        rounded-xl
                        h-full 
                        p-[1.5px] 
                        bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)]
                        shadow-[0_0_14px_0_#FFFFFF4D_inset,0_0_30.3px_0_#9747FF66]
                        ">
                        <button className="
                            flex items-center gap-3 justify-center
                            text-white font-semibold
                            rounded-xl
                            bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)]
                            px-[29px] py-[10px]
                            w-full h-full
                            cursor-pointer
                        ">
                        Contact Us
                        <img src="/icons/phone.svg" alt="Phone Icon" className="w-3 object-contain" />
                        </button>
                    </div>
                </div>

                {/* MOBILE BUTTON */}
                <div className="md:hidden">
                    <div className="
                        z-1
                        rounded-xl
                        h-full 
                        p-[1.5px] 
                        bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)]
                        shadow-[0_0_14px_0_#FFFFFF4D_inset,0_0_30.3px_0_#9747FF66]
                    ">
                        <button onClick={() => setMenuOpen(prev => !prev)} className="
                            flex items-center gap-3 justify-center
                            text-white font-semibold
                            rounded-xl
                            bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)]
                            p-[9.91px]
                            w-full h-full
                            cursor-pointer
                        ">
                            {menuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        {/* MOBILE OVERLAY */}
        <div
            className={`fixed pt-[78px] inset-0 w-full h-screen bg-[#101010] z-48
            transition-transform duration-500 ease-in-out
            ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}
        >
            <div className="flex flex-col items-center justify-start gap-8 pt-[55px]">
                {/* Links */}
                <div className="flex flex-col items-center justify-start gap-[17]">
                    <a href="#" className="text-white p-2.5 font-segoe font-normal text-[14px] leading-[100%] tracking-[0px]">Home</a>
                    <a href="#" className="text-white p-2.5 font-segoe font-normal text-[14px] leading-[100%] tracking-[0px]">Result</a>
                    <a href="#" className="text-white p-2.5 font-segoe font-normal text-[14px] leading-[100%] tracking-[0px]">Services</a>
                    <a href="#" className="text-white p-2.5 font-segoe font-normal text-[14px] leading-[100%] tracking-[0px]">Reviews</a>
                </div>

                {/* Contact Button */}
                <div>
                    <div className="rounded-xl p-[1.5px] bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)]">
                        <button className="flex items-center gap-3 text-white rounded-xl px-[29px] py-[10px]">
                            Contact Us
                            
                            <img src="/icons/phone.svg" className="w-3" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>

  );
}
