/* eslint-disable no-unused-vars */
import React from 'react'
import Right from "../../assets/home/right.svg";
import Left from "../../assets/home/left.svg";
import CategoryCard from "../../components/homepage/CategoryCard";
import Phone from "../../assets/home/phone.svg";

const CategoriesSection = () => {
    const categories = [
        {
          title: "Phones",
          image: Phone,
        },
        {
          title: "Phones",
          image: Phone,
        },
        {
          title: "Phones",
          image: Phone,
        },
        {
          title: "Phones",
          image: Phone,
        },
        {
          title: "Phones",
          image: Phone,
        },
        {
          title: "Phones",
          image: Phone,
        },
      ];
  return (
    <section className="w-4/5 mx-auto mt-20">
              <div className="hidden lg:flex items-center gap-2">
                <div className="w-1 h-6 bg-[#DB4444]"></div>
                <p className="text-[#DB4444] font-semibold">Categories</p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <h2 className="text-sm lg:text-4xl font-semibold">
                  Browse By Category
                </h2>
                <div className="hidden lg:flex gap-2">
                  <button className="rounded-full bg-gray-100 p-2">
                    <img src={Left} alt="Left" />
                  </button>
                  <button className="rounded-full bg-gray-100 p-2">
                    <img src={Right} alt="Right" />
                  </button>
                </div>
              </div>
              <div className="flex flex-row overflow-x-auto lg:grid lg:grid-cols-6 gap-4 mt-4 lg:mt-8">
                {categories.map((category, index) => (
                  <CategoryCard key={index} {...category} />
                ))}
              </div>
            </section>
  )
}

export default CategoriesSection