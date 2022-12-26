import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import icons from "../../constants/icons";

interface iconProps {
  className: string;
  size?: string;
  color?: string;
}

const Icon = ({ className, size = "", color }: iconProps) => {
  return (
    <i
      className={icons[className]}
      style={{ fontSize: size, color: color }}
    ></i>
  );
};

export default Icon;
