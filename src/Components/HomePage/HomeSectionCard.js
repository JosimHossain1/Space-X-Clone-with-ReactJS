import React from "react";

const HomeSectionCard = ({bg, topTitle, title, btnText}) => {
  return (
    <>
      <div className="flex justify-start items-end h-screen w-screen text-white relative" >
        <img src={bg} alt="bg" className="absolute h-screen w-screen" />
        <div className="card align-baseline ml-14 mb-32 absolute">
          <h3 className="text-xl">{topTitle}</h3>
          <h1 className="text-[45px] font-bold w-[550px] leading-tight ">{title}</h1>
          <button className="border hover:bg-white hover:text-black font-bold px-4 py-2 my-6">{btnText}</button>
        </div>
      </div>
    </>
  );
};

export default HomeSectionCard;


