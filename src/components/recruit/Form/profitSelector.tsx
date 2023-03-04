import React, { useState } from "react";
import * as styles from "./index.styles";
import Icon from "../../common/Icon";

export default function ProfitSelector() {
  const [types, setTypes] = useState([
    {
      id: 0,
      title: "수익성",
      selected: true,
    },
    {
      id: 1,
      title: "비수익성(포트폴리오)",
      selected: false,
    },
  ]);

  return (
    <styles.ProfitWrapper>
      <div>
        <styles.ProfitTypeTitle>
          수익성/비수익성(포트폴리오) 선택<span> *</span>
        </styles.ProfitTypeTitle>
      </div>
      <styles.Form>
        {types.map(item => (
          <styles.ProfitTypeWrapper
            checked={item.selected}
            key={item.id}
            onClick={() => {}}
          >
            {item.selected ? (
              <Icon className="checked" border={0.5} size="2rem" />
            ) : (
              <Icon className="unchecked" border={0.5} size="2rem" />
            )}
            <styles.ProfitType>
              <styles.TypeTitle> {item.title}</styles.TypeTitle>
            </styles.ProfitType>
          </styles.ProfitTypeWrapper>
        ))}
      </styles.Form>
    </styles.ProfitWrapper>
  );
}
