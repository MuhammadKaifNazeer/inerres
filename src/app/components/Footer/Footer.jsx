import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer" id="footer">
        <div className="w-full flex flex-col bg-[--secondary-color] py-10 px-6">
          <div
            className="font-bold text-5xl cursor-pointer flex justify-center items-center mb-10 
      text-[--primary-text-color-black]"
          >
            <span className="h-[35px] w-[35px] rounded-full bg-[--primary-color] mr-2"></span>
            INERRES
          </div>
        <div className="flex justify-between items-center bg-[--secondary-color] flex-wrap text-[--secondary-text-color]">
          <p className="mx-1 hover:text-[--primary-text-color-black] duration-500 hover:underline cursor-pointer">Terms & Agreements</p>
          <p className="mx-1 hover:text-[--primary-text-color-black] duration-500 hover:underline cursor-pointer">@2024 Inerres - Muhammad Kaif Nazeer. All Rights Reserved</p>
          <p className="mx-1 hover:text-[--primary-text-color-black] duration-500 hover:underline cursor-pointer">Privacy Policy</p>
        </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
