import React from "react";
import { AnchorProps, AnchorWrapper } from "./index.styles";
import Icon from "../Icon";

function LabeledAnchor({ href, size = "medium", label, icon }: AnchorProps) {
  return (
    <AnchorWrapper href={href} size={size}>
      <span>{label}</span>
      {icon && <Icon className={icon} />}
    </AnchorWrapper>
  );
}

export default LabeledAnchor;
