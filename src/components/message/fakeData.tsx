const fakeData: PreviewProps[] = [
  {
    id: 0,
    name: "윤채현",
    date: "2023년 1월 21일",
    content: "안녕하세요! 혹시 아이콘 디자인도 직접 하신걸까요??",
  },
  {
    id: 1,
    name: "김태희",
    date: "2023년 1월 21일",
    content: "테스트입니당~",
  },
  {
    id: 2,
    name: "임민정",
    date: "2023년 1월 21일",
    content: "테스트~",
  },
  {
    id: 3,
    name: "이시원",
    date: "2023년 1월 21일",
    content: "테슷~",
  },
];

export interface PreviewProps {
  id: number;
  name: string;
  date: string;
  content: string;
}

export interface PreviewType {
  item: PreviewProps;
  selected?: boolean;
}
export default fakeData;
