import { PlusIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials my-[5rem] px-3 sm:px-6" id="testimonials">
        <div className="sectionHead w-full bg-[--secondary-color] p-2 rounded-full flex justify-between items-center">
          <div className="h-[15px] w-[15px] rounded-full bg-[--primary-color] ml-5 hidden sm:block"></div>

          <div>
            <h1 className="sectionHeadTitle sm:text-4xl text-3xl mx-3 sm:mx-0 ">
              TESTIMONIALS
            </h1>
          </div>

          <div className="sectionHeadPlusIcon bg-white w-[4rem] sm:w-[5rem] h-[4rem] sm:h-[5rem] rounded-full flex justify-center items-center cursor-pointer">
            <PlusIcon width={45} height={45} color="var(--primary-color)" />
          </div>
        </div>

        <div className="w-full bg-[--primary-color] rounded-[20px] mt-2 p-[5rem]">
          <p className="text-3xl font-bold leading-relaxed">
            &quot;We are pleased to recommend their services! Their highly
            professional approach, strong attention to detail and refined taste
            translates just beautifully into their interiors&quot;
          </p>
          <div className="flex mt-10 gap-3 justify-start items-center">
            <div className="w-[7rem] h-[7rem] overflow-hidden">
              <div
                translateZ="100"
                className="h-full w-full flex justify-center items-end p-1 sm:p-1.5"
              >
                <Image
                  src={"/testimonials.jpg"}
                  height="10000"
                  width="10000"
                  className="h-full w-full object-cover rounded-full group-hover/card:shadow-xl"
                  alt="image"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">Robert Lewandowski</h1>
              <p className="text-lg mt-1">CEO Robert LLC</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
