import React from "react";
import heroimg1 from "../assets/heroimg1.png";


const HeroBanner = () => {
  return (
    <>
      <div className="w-full h-screen py-14 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 sm:grid-cols-1 ">
          <div className="flex flex-col justify-center gap-10">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Manage Data Analytics Centrally
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum molestiae delectus culpa hic assumenda, voluptate
              reprehenderit dolore autem cum ullam sed odit perspiciatis.
              
            </p>
            <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
              Sign Up Now
            </button>
          </div>
        
          <img src={heroimg1} className="w-[500px] mx-auto my-4" alt="heroimg1" />
          
          
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
