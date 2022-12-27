import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Icons from "../../constants/icons";

interface IconProps {
  className: string;
  size?: string;
  color?: string;
}

function Icon({ className, size = "", color }: IconProps) {
  return <i className={Icons[className]} style={{ fontSize: size, color }} />;
}

export default Icon;
