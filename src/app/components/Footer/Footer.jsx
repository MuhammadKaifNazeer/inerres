import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div
        className="footer w-full bg-[--secondary-color] py-10 px-6"
        id="footer"
      >
        <div className="w-full flex flex-col max-w-7xl mx-auto overflow-hidden">
          <div className="font-bold sm:text-5xl text-3xl cursor-pointer flex justify-center items-center mb-10 text-[--primary-text-color-black]">
            <span className="h-[35px] w-[35px] rounded-full bg-[--primary-color] mr-2"></span>
            INERRES
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center bg-[--secondary-color] flex-wrap text-[--secondary-text-color]">
            <p className="mx-1 hover:text-[--primary-text-color-black] duration-500 hover:underline cursor-pointer">
              Terms & Agreements
            </p>
            <p className="mx-1 hover:text-[--primary-text-color-black] duration-500 cursor-pointer text-center">
              @2024 Inerres -{" "}
              <Link
                href={"https://muhammadkaifnazeer.netlify.app/"}
                target="__blank"
                className="hover:underline"
              >
                Muhammad Kaif Nazeer.
              </Link>{" "}
              All Rights Reserved.
            </p>
            <p className="mx-1 hover:text-[--primary-text-color-black] duration-500 hover:underline cursor-pointer">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
