interface UserProps {
  name: string;
  job: string;
  starCount: number;
}

const users: UserProps[] = [
  {
    name: "박유빈",
    job: "포토그래퍼",
    starCount: 521,
  },
  {
    name: "임민정",
    job: "모델",
    starCount: 2018,
  },
  {
    name: "임채환",
    job: "드러머",
    starCount: 2198,
  },
  {
    name: "도윤원",
    job: "연기",
    starCount: 287,
  },
  {
    name: "정은비",
    job: "모델",
    starCount: 188,
  },
  {
    name: "이송희",
    job: "댄서",
    starCount: 1858,
  },
  {
    name: "김채은",
    job: "연습생",
    starCount: 7572,
  },
  {
    name: "김현우",
    job: "연기",
    starCount: 899,
  },
];

export default users;
