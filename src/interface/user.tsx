import { IBookmark } from "./bookmark";

export interface IUser {
  authority?: string | null;
  egName?: string | null;
  email?: string | null;
  field?: IBookmark[] | null;
  follower?: number | null;
  following?: number | null;
  id: number | null;
  information?: string | null;
  instagram?: string | null;
  loginMemberType?: string | null;
  loginType?: string | null;
  name?: string | null;
  otherSns?: string | null;
  profile?: string | null;
  twitter?: string | null;
  categoryInfo?: string | null;
}

export interface UserProps {
  user: IUser;
}

export interface FieldProps {
  categoryId: number;
  exist: boolean;
  name: string;
}
