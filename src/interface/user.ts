import { IBookmark } from "./bookmark";

export interface IUser {
  authority?: string;
  egName?: string;
  email?: string;
  field?: IBookmark[];
  follower?: number;
  following?: number;
  src: string;
  id: number;
  information?: string;
  instagram?: string;
  loginMemberType?: string;
  loginType?: string;
  name?: string;
  otherSns?: string;
  profile?: string;
  twitter?: string;
  categoryInfo?: string;
}

export interface UserProps {
  user: IUser;
}

export interface FieldProps {
  categoryId: number;
  exist: boolean;
  name: string;
}
