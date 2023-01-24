export interface IMessage {
  content: string;
  createdDate: string;
  id: number;
  memberEmail: string;
  memberId: number;
  memberName: string;
  title: string;
  size?: number;
}

export interface MessageProps {
  item: IMessage;
  selected?: boolean;
}

export interface MsgSizeProps {
  page: number;
  size: number;
}
