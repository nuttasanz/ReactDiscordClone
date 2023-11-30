import React, { useState } from "react";
const ChangeLanguageBox = () => {
  const [language, setLanguage] = useState("th");
  const [languageBox, setLanguageBox] = useState(false);
  const languages = [
    {
      code: "en",
      name: "English, USA",
      flag: "/images/CountryImages/enUS.png",
    },
    { code: "th", name: "ไทย", flag: "/images/CountryImages/thTh.png" },
  ];
  return (
    <>
      <button
        className="relative my-6 flex items-center gap-2"
        onClick={() => setLanguageBox(!languageBox)}
      >
        {languages.map(({ code, name, flag }) => (
          <React.Fragment key={code}>
            {language === code ? (
              <>
                <img src={flag} className="max-w-[24px] max-h-[16px]" />
                <p className="text-white">{name}</p>
              </>
            ) : null}
          </React.Fragment>
        ))}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#fff"
          className="max-w-[15px] max-h-[10px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>

        {languageBox && (
          <div className="absolute inset-x-0 bottom-[100%] bg-white max-w-[150px] rounded-md mb-2">
            {languages.map(({ code, name, flag }) => (
              <div
                key={code}
                className="flex items-center gap-2 p-2 hover:bg-gray-300 rounded"
                onClick={() => setLanguage(code)}
              >
                <img src={flag} className="max-w-[24px] max-h-[16px]" />
                <p className="text-black text-[14px]">{name}</p>
              </div>
            ))}
          </div>
        )}
      </button>
    </>
  );
};

export default ChangeLanguageBox;
