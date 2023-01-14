interface UserProps {
  id: number;
  name: string;
  job: string;
  starCount: number;
}

const users: UserProps[] = [
  {
    id: 0,
    name: "박유빈",
    job: "포토그래퍼",
    starCount: 521,
  },
  {
    id: 1,
    name: "임민정",
    job: "모델",
    starCount: 2018,
  },
  {
    id: 2,
    name: "임채환",
    job: "드러머",
    starCount: 2198,
  },
  {
    id: 3,
    name: "도윤원",
    job: "연기",
    starCount: 287,
  },
  {
    id: 4,
    name: "정은비",
    job: "모델",
    starCount: 188,
  },
  {
    id: 5,
    name: "이송희",
    job: "댄서",
    starCount: 1858,
  },
  {
    id: 6,
    name: "김채은",
    job: "연습생",
    starCount: 7572,
  },
  {
    id: 7,
    name: "김현우",
    job: "연기",
    starCount: 899,
  },
];

export default users;
