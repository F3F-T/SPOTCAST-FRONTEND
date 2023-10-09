export interface IBoard {
  id: number;
  title: string;
  content: string;
  viewCount: number;
  commentCount: number;
  categoryName: string;
  likeCount: number;
  supportEmail: string;
  production: string;
  phone: string;
  pay: string;
  participationPeriod: string;
  recruitVolume: string;
  recruitType: string;
  profitStatus: "PROFITABLE" | "NON_PROFITABLE";
  regDate: string;
  boardType:
    | "RECRUIT"
    | "CASTING_AUDITION"
    | "COMMUNITY"
    | "ARTWORK"
    | "PORTFOLIO"
    | "GENERAL";
  category: {
    categoryId: number;
    name: string;
    depth: number;
    parentCategory: string;
    child: string;
  };
  member: {
    id: number;
    email: string;
    name: string;
    nickname: string;
  };
}
