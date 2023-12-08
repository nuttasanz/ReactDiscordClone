"use client";
import { useState } from "react";

const FormInput = (props) => {
  const { title, type, name, value, onChange, required, autoComplete } = props;
  const [errorMessage, setErrorMessage] = useState(false);
  const validateForm = (e) => {
    const { name, value } = e.target;
    if (value.length < 1) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
    }
    onChange(e);
  };
  return (
    <>
      <label htmlFor={name}>
        {title}{" "}
        <span className="text-[12px] font-thin text-[#F23F42] italic">
          {required ? (errorMessage ? "- ต้องระบุ" : "*") : null}
        </span>
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={(e) => validateForm(e)}
        required={required}
        autoComplete={autoComplete}
      />
    </>
  );
};

export default FormInput;
