import React from "react";
import useSWR from "swr";
import CastingCard from "./CastingCard";
import { CardGrid } from "./index.styles";
import CastingNav from "./Nav";
import swrKeys from "../../constants/swrKeys";
import { loadBoard } from "../../api/board";
import BOARD_TYPE from "../../constants/boardType";
import { CastingProps } from "../../interface/borad";

export default function Casting() {
  const { data } = useSWR(swrKeys.loadCastingKey, () =>
    loadBoard(BOARD_TYPE.CASTING_AUDITION, 0, null, 0, 4),
  );
  console.log(data);

  if (!data) return null;

  return (
    <>
      <CastingNav />
      <CardGrid>
        {data.data.content.map((info: CastingProps) => (
          <CastingCard info={info} />
        ))}
      </CardGrid>
    </>
  );
}
