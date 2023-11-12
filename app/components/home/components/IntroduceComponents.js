const IntroduceComponent = () => {
  return (
    <div className="relative h-[780px] md:h-[626px]">
      <div className="absolute w-full h-full">
        <img
          src="/images/ComponentImages/HomePage/Banner.png"
          className="w-full h-full object-cover"
        />
        <img
          src="/images/ComponentImages/HomePage/LeftBanner.png"
          className="absolute bottom-0 left-0 md:left-[-200px] sm:block md:hidden lg:block"
        />
        <img
          src="/images/ComponentImages/HomePage/RightBanner.png"
          className="absolute bottom-0 right-[-150px] hidden md:block lg:block"
        />
      </div>
      <div className="relative w-full max-w-[1260px] px-6 py-[56px] md:px-10 md:py-20 lg:py-[120px] mx-auto">
        <div className="w-full max-w-[780px] mx-auto text-left lg:text-center text-white">
          <h1 className="text-[24px] md:text-[54px] font-extrabold ">
            โลกที่เป็นดั่งใจนึก...
          </h1>
          <p className="text-[20px] mt-10">
            ...ที่ที่คุณเป็นได้ทั้งสมาชิกชมรมของโรงเรียน กลุ่มเกม
            หรือชุมชนศิลปะระดับโลก ที่ที่คุณและกลุ่มเพื่อนได้มาใช้เวลาร่วมกัน
            ที่ที่ช่วยอำนวยความสะดวกให้คุณได้พูดคุยกันทุกวันและสังสรรค์กันได้บ่อยยิ่งขึ้น
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-center gap-6 mt-6">
          <button className="w-fit bg-white rounded-full text-black text-[16px] md:text-[20px] font-medium py-4 px-8 hover:text-[#5865f2] hover:shadow-lg">
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
          </button>
          <button className="w-fit bg-[#23272A] text-white rounded-full text-[16px] md:text-[20px] font-medium py-4 px-8 hover:bg-[#2c2f33] hover:shadow-lg">
            <span>เปิด Discord ในเบราว์เซอร์ของคุณ</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroduceComponent;
