export interface IMessage {
  content: string;
  createdDate: string;
  id: number;
  memberEmail: string;
  memberId: number;
  memberName: string;
  title: string;
  size?: number;
  memberProfile?: string;
  readStatus?: boolean;
}

export interface MessageProps {
  item: IMessage;
  selected?: boolean;
  type?: string;
}

export interface MsgSizeProps {
  page: number;
  size: number;
}
