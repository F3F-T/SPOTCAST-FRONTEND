import axios from "axios";
import { authorizationClient } from ".";
import toastMsg from "../components/common/Toast";
import API from "./config";
import { MsgSizeProps } from "../interface/messgae";

axios.defaults.baseURL = API.BASE_URL;
axios.defaults.withCredentials = true;

export const loadMsgSend = async (data: MsgSizeProps) => {
  const { page, size } = data;
  const response = await authorizationClient.get(
    `${API.LOAD_MSG_SEND}?page=${page}&size=${size}`,
  );
  return response.data.data;
};
export const loadMsgReceived = async (data: MsgSizeProps) => {
  const { page, size } = data;
  const response = await authorizationClient.get(
    `${API.LOAD_MSG_RECEIVE}?page=${page}&size=${size}`,
  );
  return response.data.data;
};

export const loadMsgUnread = async (data: MsgSizeProps) => {
  const { page, size } = data;
  const response = await authorizationClient.get(
    `${API.LOAD_MSG_UNREAD}?page=${page}&size=${size}`,
  );
  return response.data.data;
};
export const sendMessage = async (data: object) => {
  try {
    const response = await authorizationClient.post(API.MESSAGE_SEND, data);
    toastMsg("메시지 전송 완료", true);
    return response.data.data;
  } catch (error: any) {
    toastMsg("메시지 전송 실패", false);
    return null;
  }
};

export const deleteMessage = async (id: number) => {
  try {
    const response = await authorizationClient.patch(`${API.MESSAGE}${id}`);
    toastMsg("메시지 삭제 완료", true);
    return response.data.data;
  } catch (error: any) {
    toastMsg("메시지 삭제 실패", false);
    return null;
  }
};

export const readMessage = async (messageId: number) => {
  await authorizationClient.patch(`${API.MESSAGE}${messageId}/read`);
  return messageId;
};
