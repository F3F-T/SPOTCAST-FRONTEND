import styled from "@emotion/styled";
import { GREY, BLACK, WHITE, MUSTARD } from "../../../../../constants/colors";
import Badge from "../../../../common/Badge";
import Icon from "../../../../common/Icon";

export interface CrewPost {
  id: number;
  category: string;
  profitable: boolean;
  content: string;
  duration: number;
  bookmarked: boolean;
  views: number;
  bookmarks: number;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.2rem 1.15rem;
  background-color: ${GREY[100]};
  border-radius: 0.5rem;
`;
export const Content = styled.p`
  color: ${BLACK};
  font-size: 1.26rem; //p tag 기본 마진 없애기 (css reset)
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  min-height: 7.3rem;
`;
export const ProfitBadge = styled(Badge)`
  font-size: 1.2rem;
  color: ${WHITE};
`;
export const Duration = styled.p`
  color: ${GREY[600]};
  font-size: 1rem;
`;
export const Number = styled.span`
  font-weight: bold;
  margin-left: 0.8rem;
`;
export const Stats = styled.div`
  font-size: 1.2rem;
  color: ${GREY[600]};
  align-self: flex-end;
  margin-top: 0.7rem;
  display: flex;
  gap: 0.8rem;
  margin-right: 1rem;
  i {
    margin-right: 0.4rem;
  }
`;
export const BookmarkIcon = styled(Icon)<{ className: string }>`
  ${({ className }) => `
    color: ${className === "bookmarkFill" ? MUSTARD : GREY[600]}};
`}
`;
