import React from "react";
import HomeSectionCard from "./HomeSectionCard";
import HomePageData from "../Data/HomePageData";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      {HomePageData.map((item, index) => (
        <HomeSectionCard
          topTitle={item.topTitle}
          title={item.title}
          btnText={item.btnText}
          bg={item.image}
        />
      ))}
    </div>
  );
};

export default HomePage;
