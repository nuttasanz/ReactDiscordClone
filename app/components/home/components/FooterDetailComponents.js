"use client";
import { setUpAnimation } from "@/libs/setUpAnimation";
import "../styles/homePage.css";
import { DetailImage4 } from "@/public/images/ComponentImages/HomePage/DetailImage4";
import { Sparkles } from "@/public/images/ComponentImages/HomePage/Sparkles";
import { useEffect } from "react";

const FooterDetailComponents = () => {
  useEffect(() => {
    setUpAnimation();
  }, []);
  return (
    <>
      <div className="w-full bg-[#F6F6F6] ">
        <div className="max-w-[1260px] mx-auto pt-[120px] pb-20 px-10 slide-in">
          <div className="flex flex-col">
            <div className="w-full max-w-[980px] mx-auto text-center">
              <h2 className="font-extrabold">
                เทคโนโลยีที่น่าเชื่อถือเพื่อใกล้กันให้มากขึ้น
              </h2>
              <p className="textMedium mt-6">
                เสียงและวิดีโอที่ส่งถึงกันอย่างรวดเร็วเหมือนคุณอยู่ในห้องเดียวกัน
                โบกมือสวัสดีผ่านวิดีโอ ดูเพื่อนสตรีมเกม
                หรือรวมกลุ่มกันวาดรูปด้วยการแบ่งปันหน้าจอ
              </p>
            </div>
            <div className="w-full h-full mt-6 lg:mt-4">{DetailImage4()}</div>
          </div>
        </div>
        <div className="max-w-[1260px] mx-auto px-6 md:px-10 pb-[56px] md:pb-20 lg:pb-[120px]">
          <div className="relative flex flex-col items-center">
            <div className="absolute w-full h-full max-w-[531px] max-h-[49px]">
              {Sparkles()}
            </div>
            <h4 className="text-[32px] font-bold leading-[120%] mt-[30px]">
              พร้อมจะเริ่มการเดินทางของคุณหรือยัง
            </h4>
            <a
              href="https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x86"
              className="w-fit flex items-center justify-center gap-2 text-white bg-[#5865f2] py-4 px-8 rounded-full mt-10 text-[20px] hover:bg-[#7289da] hover:shadow-lg"
            >
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
              <p>ดาวน์โหลดสำหรับ Windows</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterDetailComponents;
