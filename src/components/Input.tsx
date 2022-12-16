import React from "react";
import styles from "../styles/Input.module.css"

// 부모 컴포넌트 = 클라이언트 컴포넌트

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
    <div className={styles.container}>
      <label
        htmlFor={label}
        className={hiddenLabel ? styles.hidden : styles.label}
      >
        {label}
      </label>
      <input
      className={styles.input}
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
