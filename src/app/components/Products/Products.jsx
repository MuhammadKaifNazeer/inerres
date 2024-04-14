import { PlusIcon } from '@radix-ui/react-icons'
import React from 'react'

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
    </div>
    </>
  )
}

export default Products