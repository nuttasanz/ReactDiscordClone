const DetailComponents = (props) => {
  const { imgUrl, title, desc, reverse, bgColor } = props;
  return (
    <div className={`${bgColor} w-full`}>
      <div className="w-full max-w-[1260px] mx-auto py-[56px] px-6 md:py-20 md:px-10 lg:py-[120px]">
        <div
          className={
            reverse
              ? `w-full h-full flex flex-col md:flex-row-reverse items-center justify-between`
              : `w-full h-full flex flex-col md:flex-row items-center justify-between`
          }
        >
          <div className="w-full h-full max-w-[678px] max-h-[440px]">
            <img
              //   src="/images/ComponentImages/HomePage/DetailImage1.png"
              src={imgUrl}
              className="w-full h-full"
            />
          </div>
          <div className="w-full md:max-w-[380px]">
            <h1 className="text-[30px] md:text-[48px] font-extrabold">
              {title}
            </h1>
            <p className="text-[16px] md:text-[20px] mt-6">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailComponents;
