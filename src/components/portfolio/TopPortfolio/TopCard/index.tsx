import styled from "@emotion/styled";
import React from "react";
import { GREY } from "../../../../constants/colors";
import StarIcon from "../../../common/StarIcon";

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 0.1rem solid ${GREY[300]};
  border-radius: 0.5rem;
  flex-wrap: wrap;
  object-fit: cover;
  &:hover {
    cursor: pointer;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Images = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  img {
    width: 15.7rem;
  }
`;
const Image = styled.div`
  img {
    width: 31.5rem;
  }
`;
const Img = styled.img`
  height: 17rem;
  border: 0.1rem solid white;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  object-fit: cover;
`;

const Contents = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  margin: 1rem 0;
`;

const Name = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  padding-bottom: 1rem;
`;

const Role = styled.div`
  font-size: 1.2rem;
  color: ${GREY[500]};
`;
const Star = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: 2rem;
`;
export const StarButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

type ItemType = {
  name: string;
  role: string;
  src: string[];
};
type ItemProps = {
  item: ItemType;
};

export default function TopCard({ item }: ItemProps) {
  return (
    <Container>
      {item.src.length === 2 ? (
        <Images>
          <Img src={item.src[0]} />
          <Img src={item.src[1]} />
        </Images>
      ) : (
        <Image>
          <Img src={item.src[0]} />
        </Image>
      )}
      <Contents>
        <Name>{item.name}</Name>
        <Role>{item.role}</Role>
        <Star>
          <StarIcon border={0.2} size="2rem" />
        </Star>
      </Contents>
    </Container>
  );
}
