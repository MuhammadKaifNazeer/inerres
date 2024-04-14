import { ArrowTopRightIcon, PlusIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <>
      <div
        className="hero pt-[4rem] text-[--primary-text-color-white] bg-[--bg-black] px-5"
        id="hero"
      >
        <h1 className="lg:text-[13.3vw] sm:text-[12.9vw] text-[12vw] font-bold text-center">
          SATISFACTION
        </h1>

        <div className="flex flex-wrap lg:justify-between justify-center items-center lg:px-4">
          <div className="w-[100%] lg:w-[50%] flex items-center ">
            <p className="lg:w-[72%] lg:text-xl text-[--secondary-text-color] p-1 sm:p-0">
              We create venues to improve people&apos;s live, we bring the magic
              to life. On the surface, it&apos;s gleaming, but on the inside,
              it&apos;s stunning.
            </p>
          </div>
          <div className="w-[100%] lg:w-[50%] flex justify-center lg:justify-end items-center lg:mt-0 mt-5">
            <div className="flex flex-col justify-center items-center mx-3 sm:mx-10">
              <h1 className="text-[2rem] sm:text-[2.5rem] font-[500] flex justify-center items-center ">
                88k <span className="text-[--primary-color]">+</span>
              </h1>
              <p className="text-[1rem] sm:text-[1.2rem] text-[--secondary-text-color] ">
                Happy Client
              </p>
            </div>

            <div className="flex flex-col justify-center items-center mx-3 sm:mx-10">
              <h1 className="text-[2rem] sm:text-[2.5rem]  font-[500] flex justify-center items-center ">
                98k <span className="text-[--primary-color]">+</span>
              </h1>
              <p className="text-[1rem] sm:text-[1.2rem] text-[--secondary-text-color] ">
                Premium Product
              </p>
            </div>

            <div className="flex flex-col justify-center items-center mx-3 sm:mx-10">
              <h1 className="text-[2rem] sm:text-[2.5rem]  font-[500] flex justify-center items-center ">
                868k <span className="text-[--primary-color]">+</span>
              </h1>
              <p className="text-[1rem] sm:text-[1.2rem] text-[--secondary-text-color] ">
                Project Finished
              </p>
            </div>
          </div>
        </div>

        {/* bento grid layout using flex box */}
        <div className="flex w-full my-10 flex-wrap">

          <div className="lg:w-[75%] w-[100%] ">
            <div className="h-[50%] w-full flex">
              <div
                translateZ="100"
                className="h-full w-[30%] overflow-hidden rounded-lg flex justify-center items-end p-1 sm:p-1.5"
              >
                <Image
                  src={"/r-image-3.jpg"}
                  height="10000"
                  width="10000"
                  className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </div>
              <div className="h-full w-[70%] overflow-hidden rounded-lg flex justify-center items-end p-1 sm:p-1.5">
                <Image
                  src={"/r-image-11.jpg"}
                  height="1000"
                  width="1000"
                  className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </div>
            </div>

            <div
              translateZ="100"
              className="h-[50%] w-full overflow-hidden rounded-lg flex justify-center items-end p-1 sm:p-1.5"
            >
              <Image
                src={"/r-image-9.jpg"}
                height="1000"
                width="1000"
                className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </div>
          </div>

          <div className="lg:w-[25%] w-[100%] hidden lg:block flex flex-col">
            <div
              translateZ="100"
              className="w-full h-[50%] overflow-hidden rounded-lg flex justify-center items-end p-1 sm:p-1.5"
            >
              <Image
                src={"/r-image-10.jpg"}
                height="10000"
                width="10000"
                className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </div>

            <div className="w-full h-[50%] overflow-hidden rounded-lg flex justify-center items-center ">
              <div className="w-[95%] h-[95%] cursor-pointer bg-[--primary-color] rounded-xl flex justify-center items-center">
                <ArrowTopRightIcon
                  color="black"
                  style={{
                    width: "200px",
                    height: "200px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
