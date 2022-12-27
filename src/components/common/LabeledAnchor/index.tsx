import React from "react";
import { AnchorProps, AnchorWrapper } from "./index.styles";
import Icon from "../Icon";

function LabeledAnchor({
  className,
  href,
  size = "medium",
  label,
  icon,
}: AnchorProps) {
  return (
    <AnchorWrapper className={className} href={href} size={size}>
      <span>{label}</span>
      {icon && <Icon className={icon} />}
    </AnchorWrapper>
  );
}

export default LabeledAnchor;
