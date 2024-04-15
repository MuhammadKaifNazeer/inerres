import { PlusIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <>
      <div className="projects my-[5rem] px-3 sm:px-6" id="projects">
        <div className="sectionHead w-full bg-[--secondary-color] p-2 rounded-full flex justify-between items-center">
          <div className="h-[15px] w-[15px] rounded-full bg-[--primary-color] ml-5 hidden sm:block"></div>

          <div>
            <h1 className="sectionHeadTitle sm:text-4xl text-3xl mx-3 sm:mx-0 ">
              PROJECTS
            </h1>
          </div>

          <div className="sectionHeadPlusIcon bg-white w-[4rem] sm:w-[5rem] h-[4rem] sm:h-[5rem] rounded-full flex justify-center items-center cursor-pointer">
            <PlusIcon width={45} height={45} color="var(--primary-color)" />
          </div>
        </div>

        <div className="flex flex-col gpa-3 mt-3">
          <div
            translateZ="100"
            className="lg:h-[60vh] md:h-[50vh] sm:h-[40vh] h-[30vh] w-full overflow-hidden rounded-lg flex justify-center items-end p-1 sm:p-1.5"
          >
            <Image
              src={"/project-1.png"}
              height="1000"
              width="1000"
              className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="image"
            />
          </div>
          <div
            translateZ="100"
            className="lg:h-[60vh] md:h-[50vh] sm:h-[40vh] h-[30vh] w-full overflow-hidden rounded-lg flex justify-center items-end p-1 sm:p-1.5"
          >
            <Image
              src={"/project-2.png"}
              height="1000"
              width="1000"
              className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="image"
            />
          </div>
          <div
            translateZ="100"
            className="lg:h-[60vh] md:h-[50vh] sm:h-[40vh] h-[30vh] w-full overflow-hidden rounded-lg flex justify-center items-end p-1 sm:p-1.5"
          >
            <Image
              src={"/project-3.png"}
              height="1000"
              width="1000"
              className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
