export const LoginButton = (props) => {
  return (
    <>
      <button
        type="submit"
        className="text-[14px] px-4 py-[7px] rounded-full bg-[#fff] hover:text-[#5865f2] hover:shadow-lg"
      >
        Login
      </button>
    </>
  );
};

export const FooterRegisterButton = (props) => {
  return (
    <>
      <button
        type="submit"
        className="text-[14px] px-4 py-[7px] rounded-full text-white bg-[#5865f2] hover:bg-[#7289da] hover:shadow-lg"
      >
        ลงทะเบียน
      </button>
    </>
  );
};
