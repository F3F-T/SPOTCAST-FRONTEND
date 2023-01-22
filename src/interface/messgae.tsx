export interface IMessage {
  id: number;
  name: string;
  date: string;
  content: string;
}

export interface MessageProps {
  item: IMessage;
  selected?: boolean;
}
