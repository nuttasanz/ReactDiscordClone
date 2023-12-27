"use client";
import React, { useState } from "react";
import "../styles/homePage.css";
import IndexHeroBanner from "../../utils/svg/IndexHeroBanner";

const IntroduceComponent = () => {
  const [isCheck, setIsCheck] = useState(false);
  return (
    // <div className="relative h-[780px] md:h-[626px] overflow-x-hidden">
    //   <div className="w-full h-full">
    //     <img
    //       src="/images/ComponentImages/HomePage/Banner.png"
    //       className="w-full h-full object-cover hidden md:block"
    //     />
    //     <img
    //       src="/images/ComponentImages/HomePage/LeftBanner.png"
    //       className="absolute bottom-0 left-0 md:left-[-200px] sm:block md:hidden lg:block"
    //     />
    //     <img
    //       src="/images/ComponentImages/HomePage/RightBanner.png"
    //       className="absolute bottom-0 right-[-160px] hidden md:block lg:block"
    //     />
    //   </div>

    <div className="overflow-hidden">
      {/* <div>
        <IndexHeroBanner />
      </div> */}
      <div className="relative z-10 inset-0 w-full max-w-[1260px] max-h-[626px] px-6 py-[56px] md:px-10 md:py-20 lg:py-[200px]  mx-auto">
        <div className="w-full max-w-[780px] mx-auto text-left lg:text-center text-white">
          <h1 className="md:text-[56px] font-extrabold">
            โลกที่เป็นดั่งใจนึก...
          </h1>
          <p className="textMedium mt-6 md:mt-[40px]">
            ...ที่ที่คุณเป็นได้ทั้งสมาชิกชมรมของโรงเรียน กลุ่มเกม
            หรือชุมชนศิลปะระดับโลก ที่ที่คุณและกลุ่มเพื่อนได้มาใช้เวลาร่วมกัน
            ที่ที่ช่วยอำนวยความสะดวกให้คุณได้พูดคุยกันทุกวันและสังสรรค์กันได้บ่อยยิ่งขึ้น
          </p>
        </div>
        {!isCheck ? (
          <div className="w-full flex flex-col lg:flex-row justify-center gap-6 mt-6">
            <a
              href="https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&amp;platform=win&amp;arch=x86"
              className="w-fit bg-white rounded-full text-black text-[16px] md:text-[20px] font-medium py-4 px-8 hover:text-[#5865f2] hover:shadow-lg"
            >
              <div className="flex items-center justify-center gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="icon-2tQ9Jt"
                >
                  <g fill="currentColor">
                    <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
                    <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
                  </g>
                </svg>
                <span>ดาวน์โหลดสำหรับ Windows</span>
              </div>
            </a>
            <button
              onClick={() => setIsCheck(true)}
              className="w-fit bg-[#23272A] text-white rounded-full text-[16px] md:text-[20px] font-medium py-4 px-8 hover:bg-[#2c2f33] hover:shadow-lg"
            >
              <span>เปิด Discord ในเบราว์เซอร์ของคุณ</span>
            </button>
          </div>
        ) : (
          <div className="w-full flex flex-col items-center gap-5 mt-8 lg:mt-6">
            <form className="w-full max-w-[380px] h-[56px] bg-white rounded-full pl-8">
              <div className="w-full h-full flex items-center">
                <input
                  type="text"
                  className="w-full focus:outline-none text-[14px] placeholder:text-base"
                  placeholder="กรอกชื่อที่แสดง"
                />
                <button
                  type="submit"
                  className="bg-[#5865f2] py-[7px] px-[18px] m-[9px] rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
            <p className="text-[14px] text-white">
              การลงทะเบียนแสดงว่าคุณยอมรับ{" "}
              <span className="underline">ข้อตกลงในการให้บริการ</span> และ{" "}
              <span className="underline">นโยบายความเป็นส่วนตัว</span> ของ
              Discord
            </p>
          </div>
        )}
      </div>
    </div>
    // </div>
  );
};

export default IntroduceComponent;
