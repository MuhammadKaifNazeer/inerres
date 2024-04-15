import { PlusIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";

const Products = () => {
  return (
    <>
      <div className="products my-[5rem] px-3 sm:px-6" id="products">
        <div className="sectionHead w-full bg-[--secondary-color] p-2 rounded-full flex justify-between items-center">
          <div className="h-[15px] w-[15px] rounded-full bg-[--primary-color] ml-5 hidden sm:block"></div>

          <div>
            <h1 className="sectionHeadTitle sm:text-4xl text-3xl mx-3 sm:mx-0 ">
              PRODUCTS
            </h1>
          </div>

          <div className="sectionHeadPlusIcon bg-white w-[4rem] sm:w-[5rem] h-[4rem] sm:h-[5rem] rounded-full flex justify-center items-center cursor-pointer">
            <PlusIcon width={45} height={45} color="var(--primary-color)" />
          </div>
        </div>

        <div className="products grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mt-3">

          <div className="product cursor-pointer h-max bg-[--secondary-color] rounded-[1.8rem]">
            <h1 className="text-3xl m-5 mx-7 text-[--secondary-text-color]">
              Luxury Chair
            </h1>
            <div
              translateZ="100"
              className="h-full w-full  overflow-hidden rounded-lg flex justify-center items-end p-1 sm:p-1.5"
            >
              <Image
                src={"/chair-1.png"}
                height="10000"
                width="10000"
                className="h-full w-full object-fit rounded-xl group-hover/card:shadow-xl"
                alt="image"
              />
            </div>
          </div>
          

          <div className="product cursor-pointer h-max bg-[--secondary-color] rounded-[1.8rem]">
            <h1 className="text-3xl m-5 mx-7 text-[--secondary-text-color]">
              Working Chair
            </h1>
            <div
              translateZ="100"
              className="h-full w-full  overflow-hidden rounded-lg flex justify-center items-end p-1 sm:p-1.5"
            >
              <Image
                src={"/chair-2.png"}
                height="10000"
                width="10000"
                className="h-full w-full object-fit rounded-xl group-hover/card:shadow-xl"
                alt="image"
              />
            </div>
          </div>

          <div className="product cursor-pointer h-max bg-[--secondary-color] rounded-[1.8rem]">
            <h1 className="text-3xl m-5 mx-7 text-[--secondary-text-color]">
              Ergonomic Chair
            </h1>
            <div
              translateZ="100"
              className="h-full w-full  overflow-hidden rounded-lg flex justify-center items-end p-1 sm:p-1.5"
            >
              <Image
                src={"/chair-3.png"}
                height="10000"
                width="10000"
                className="h-full w-full object-fit rounded-xl group-hover/card:shadow-xl"
                alt="image"
              />
            </div>
          </div>

          <div className="product cursor-pointer h-max bg-[--secondary-color] rounded-[1.8rem]">
            <h1 className="text-3xl m-5 mx-7 text-[--secondary-text-color]">
              Pegs Chair
            </h1>
            <div
              translateZ="100"
              className="h-full w-full  overflow-hidden rounded-lg flex justify-center items-end p-1 sm:p-1.5"
            >
              <Image
                src={"/chair-4.png"}
                height="10000"
                width="10000"
                className="h-full w-full object-fit rounded-xl group-hover/card:shadow-xl"
                alt="image"
              />
            </div>
          </div>

          <div className="product cursor-pointer h-max bg-[--secondary-color] rounded-[1.8rem]">
            <h1 className="text-3xl m-5 mx-7 text-[--secondary-text-color]">
              Kevlar Chair
            </h1>
            <div
              translateZ="100"
              className="h-full w-full  overflow-hidden rounded-lg flex justify-center items-end p-1 sm:p-1.5"
            >
              <Image
                src={"/chair-5.png"}
                height="10000"
                width="10000"
                className="h-full w-full object-fit rounded-xl group-hover/card:shadow-xl"
                alt="image"
              />
            </div>
          </div>

          <div className="product cursor-pointer h-max bg-[--secondary-color] rounded-[1.8rem]">
            <h1 className="text-3xl m-5 mx-7 text-[--secondary-text-color]">
              Robotic Chair
            </h1>
            <div
              translateZ="100"
              className="h-full w-full  overflow-hidden rounded-lg flex justify-center items-end p-1 sm:p-1.5"
            >
              <Image
                src={"/chair-6.png"}
                height="10000"
                width="10000"
                className="h-full w-full object-fit rounded-xl group-hover/card:shadow-xl"
                alt="image"
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Products;
