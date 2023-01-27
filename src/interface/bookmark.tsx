export interface IBookmark {
  bookmarkId: number;
  memberId: number;
  name: string;
  email: string;
}

export interface BookmarkProps {
  data: IBookmark;
  type?: string;
}
