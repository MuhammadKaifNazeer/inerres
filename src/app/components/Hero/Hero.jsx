import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero" id="hero">
        <div className="max-w-7xl mx-auto overflow-hidden pt-[4rem] sm:pb-[4rem] pb-[3rem] text-[--primary-text-color-white] bg-[--bg-black] px-5">
          <h1 className="lg:text-[13.3vw] sm:text-[12.9vw] text-[12vw] font-bold text-center xl:text-[10.7rem]">
            SATISFACTION
          </h1>

          <div className="flex flex-wrap lg:justify-between justify-center items-center lg:px-4">
            <div className="w-[100%] lg:w-[50%] flex items-center ">
              <p className="lg:w-[73%] lg:text-xl text-center lg:text-start text-[--secondary-text-color] p-1 sm:p-0">
                We create venues to improve people&apos;s live, we bring the
                magic to life. On the surface, it&apos;s gleaming, but on the
                inside, it&apos;s stunning.
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

              <div className="flex flex-col justify-center items-center mx-3 sm:mx-10 lg:mr-0">
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
          <div className="flex w-full mt-10 flex-wrap">
            <div className="lg:w-[75%] w-[100%] h-[100vh] max-h-[40rem]">
              <div className="h-[50%] w-full flex">
                <div className="hidden sm:block h-full w-[30%] overflow-hidden rounded-lg ">
                  <div
                    translateZ="100"
                    className="h-full w-full flex justify-center items-end p-1 sm:p-1.5"
                  >
                    <Image
                      src={"/bentoGrid-1.png"}
                      height="10000"
                      width="10000"
                      className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="h-full w-[100%] sm:w-[70%] overflow-hidden rounded-lg flex justify-center items-end p-1 sm:p-1.5">
                  <Image
                    src={"/project-1.png"}
                    height="1000"
                    width="1000"
                    className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="image"
                  />
                </div>
              </div>

              <div
                translateZ="100"
                className="h-[50%] w-full overflow-hidden rounded-lg flex justify-center items-end p-1 sm:p-1.5"
              >
                <Image
                  src={"/project-2.png"}
                  height="1000"
                  width="1000"
                  className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="image"
                />
              </div>
            </div>

            <div className="lg:w-[25%] w-[100%] h-[100vh] hidden lg:block flex-col max-h-[40rem]">
              <div
                translateZ="100"
                className="w-full h-[50%] overflow-hidden rounded-lg flex justify-center items-end p-1 sm:p-1.5"
              >
                <Image
                  src={"/bentoGrid-3.jpg"}
                  height="10000"
                  width="10000"
                  className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="image"
                />
              </div>

              <div className="w-full h-[50%] overflow-hidden rounded-lg flex justify-center items-center ">
                <div className="w-[96%] h-[96%] cursor-pointer bg-[--primary-color] rounded-xl flex justify-center items-center">
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

        {/* bottom hero text  */}
        <div className="BottomText">
          <div className="py-[4vw] lg:py-[3vw] xl:py-[2rem] bg-[--primary-color] w-full flex justify-center items-center">
            <span className="h-[1rem] sm:h-[1.3rem] md:h-[1.5rem] w-[1rem] sm:w-[1.3rem] md:w-[1.5rem] bg-[--primary-text-color-black] rounded-full mx-[1rem] sm:mx-[3rem]"></span>
            <h1 className=" md:text-5xl sm:text-3xl text-center text-2xl font-[550] text-[--primary-text-color-black]">
              CHECK MORE PRODUCTS{" "}
            </h1>
            <span className="h-[1rem] sm:h-[1.3rem] md:h-[1.5rem] w-[1rem] sm:w-[1.3rem] md:w-[1.5rem] bg-[--primary-text-color-black] rounded-full mx-[1rem] sm:mx-[3rem]"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
