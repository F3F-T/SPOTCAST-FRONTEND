import React from "react";
import { Wrapper, ButtonProps } from "./index.styles";

export default function Button({
  size = "medium",
  buttonTheme = "primary",
  title,
  width,
  className,
  disabled = false,
  onClick,
}: ButtonProps) {
  // const [isActive, setIsActive] = useState(false);
  // const handleClick = (e: React.MouseEvent<HTMLElement>) => {
  //   setIsActive(!isActive);
  //   onClick(e);
  // };

  return (
    //   eslint-disable-next-line @typescript-eslint/no-use-before-define
    <Wrapper
      size={size}
      ButtonTheme={buttonTheme}
      onClick={onClick}
      disabled={disabled}
      width={width!}
      className={className}
    >
      {title}
    </Wrapper>
  );
}

// export default React.memo(Button);
