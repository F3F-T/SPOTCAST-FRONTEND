import React from "react";
import { AnchorProps, AnchorWrapper } from "./index.styles";
import Icon from "../Icon";

function LabeledAnchor({
  className,
  href,
  size = "medium",
  label,
  icon,
  border,
}: AnchorProps) {
  return (
    <AnchorWrapper className={className} href={href} size={size}>
      {label}
      {icon && <Icon className={icon} border={border} />}
    </AnchorWrapper>
  );
}

export default LabeledAnchor;
