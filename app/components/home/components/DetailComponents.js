"use client";
import { useEffect } from "react";
import "../styles/homePage.css";
import { setUpAnimation } from "@/libs/setUpAnimation";

const DetailComponents = (props) => {
  const { imgUrl, title, desc, reverse, bgColor } = props;

  useEffect(() => {
    setUpAnimation();
  }, []);

  return (
    <div className={`${bgColor} w-full`}>
      <div className="w-full max-w-[1260px] mx-auto py-[56px] px-6 md:py-20 md:px-10 lg:py-[120px] slide-in">
        <div
          className={
            reverse
              ? `w-full h-full flex flex-col md:flex-row-reverse items-center justify-between`
              : `w-full h-full flex flex-col md:flex-row items-center justify-between`
          }
        >
          <div className="w-full h-full max-w-[678px] max-h-[440px]">
            <img src={imgUrl} className="w-full h-full" />
          </div>
          <div className="w-full md:max-w-[380px] mt-5">
            <h2 className="font-extrabold">{title}</h2>
            <p className="textMedium mt-6">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailComponents;
