import React, { useState } from "react";

type Props = {
  className?: string;
  options: Array<{ value: any; label: string }>;
  onChange: (value: any) => void;
};

export default function SelectBox({ className, options, onChange }: Props) {
  const [selectedValue, setSelectedValue] = useState(options[0].value);

  return (
    <select
      className={className}
      value={selectedValue}
      onChange={e => {
        setSelectedValue(e.target.value);
        onChange(e.target.value);
      }}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
