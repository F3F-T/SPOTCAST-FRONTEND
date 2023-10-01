import { authorizationClient } from ".";
import toastMsg from "../components/common/Toast";
import API from "./config";

export const loadBoard = async (
  boardType: string,
  categoryId: number | null,
  profitStatus: string | null,
  page: number,
  size: number,
) => {
  const { data } = await authorizationClient.get(
    `${API.LOAD_BOARD}${boardType}?categoryId=${categoryId}&profitStatus=${profitStatus}&page=${page}&size=${size}`,
  );
  return data;
};

export const loadBoardDetail = (id: number) => {
  authorizationClient.get(`${API.BOARD}/${id}`);
};

export const postBoard = async (data: object) => {
  try {
    const response = await authorizationClient.post(API.BOARD, data);
    toastMsg("게시 완료", true);
    return response.data.data;
  } catch (error: any) {
    toastMsg("게시 실패", false);
    return error;
  }
};
