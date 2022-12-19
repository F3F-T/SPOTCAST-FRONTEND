import React from "react";

interface Input {
  value: string;
  type: string;
  label: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hiddenLabel?: boolean;
  required?: boolean;
}

function InputField({
  value,
  type,
  label,
  placeholder,
  onChange,
  hiddenLabel,
  required,
}: Input) {
  /*   const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  }; */
  return (
    <div className="input">
      <label
        htmlFor={label}
        /* className={hiddenLabel ? "display-none" : ""} */
        style={hiddenLabel ? { display: "none" } : {}}
      >
        {label}
      </label>
      <input
        type={type}
        id={label}
        value={value}
        required={required && true}
        placeholder={hiddenLabel ? label : placeholder || ""}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;
