"use client";
import { DotsVerticalIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

const Header = () => {
  let Links = [
    { name: "About", link: "#top" },
    { name: "Products", link: "#products" },
    { name: "Projects", link: "#selectedProjects" },
    { name: "Testimonials", link: "#testimonials" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className=" w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7 bg-[--bg-black]">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center 
      text-[--primary-text-color-white]"
        >
          <span className="h-[15px] w-[15px] rounded-full bg-[--primary-color] mr-2"></span>
          INERRES
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute text-[--primary-text-color-white] sm:right-8 right-6 top-5 cursor-pointer md:hidden"
        >
          <HamburgerMenuIcon style={{
            width: "25px",
             height: "25px" 
            }} />
        </div>

        <ul
          className={`bg-[--bg-black] md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-19 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-md md:my-0 my-7">
              <a
                href={link.link}
                className="text-[--secondary-text-color] hover:text-[--primary-text-color-white] duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
