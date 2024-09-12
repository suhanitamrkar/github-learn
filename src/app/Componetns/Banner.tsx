import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Button from "./Button/Button";
import Image from 'next/image'


interface MyButtonProps {
  title : string;
  disabled:boolean
}

 function MyButton ({title,disabled}:MyButtonProps ){
  return (
    <button className="inline-flex items-center ml-2 text-[#174D46] hover:bg-[#174D46]  font-medium border-solid border-2 border-[#174D46]  mt-5 py-2 px-6 hover:text-white" disabled = {disabled}>{title} <MdKeyboardArrowRight className="h-5 w-5 items-center"  />  </button>
  )
}
const Banner = () => {
  return (
   <div className="bg-[#F1FCF8]">
     <div className=" w-full sm:h-auto bg-[#F1FCF8] sm:flex-col-1   md:flex justify-around items-start   py-[2rem] ">
      <div className=" sm:my-0  md:my-[5rem]  sm:h-auto pl-10 ">
        <h1 className="text-[3rem] font-semibold  mt-10">Redefining Payroll</h1>
        <h1 className="text-[#174D46] text-[3rem] font-[Nib_pro]   ">& HR Solutions</h1>
        <p className="text-2xl font-semibold py-3">Powerful people technology with the <br/> personalized service you deserve.</p>
        <p className="break-word">With our full suite of Human Resources technology, Netchex <br/>enables thousands of businesses to work better with less <br/> work. Discover why HR, payroll, and benefits have never <br/> been simpler with Netchex.</p>
        <MyButton title="request a que" disabled={true} />
       

       
         
      </div>

      <div className="sm:w-full md:w-1/2    ">
      <Image src={"https://b1948610.smushcdn.com/1948610/wp-content/uploads/2024/07/NetchexHero2.webp?lossy=1&amp;strip=1&amp;webp=1"} alt='' width={10} height={20} />
      
      </div>
    </div>
   </div>  
  );
};

export default Banner;


