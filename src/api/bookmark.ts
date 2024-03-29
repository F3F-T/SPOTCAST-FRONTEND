import { authorizationClient } from ".";
import toastMsg from "../components/common/Toast";
import API from "./config";

export const loadFollower = async (page: number) => {
  const response = await authorizationClient.get(
    `${API.LOAD_FOLLOWER}?page=${page}&size=6`,
  );
  return response.data.data;
};

export const loadFollowing = async (page: number) => {
  const response = await authorizationClient.get(
    `${API.LOAD_FOLLWING}?page=${page}&size=6`,
  );
  return response.data.data;
};

export const addBookmark = async (data: object) => {
  try {
    const response = await authorizationClient.post(API.BOOKMARK, data);
    toastMsg("팔로우 완료", true);
    return response.data.data;
  } catch (error: any) {
    toastMsg("팔로우 실패. 다시 시도해주세요", false);
  }
};

export const deleteBookmark = async (data: object) => {
  try {
    const response = await authorizationClient.delete(API.BOOKMARK, {
      data,
    });
    toastMsg("팔로우 취소 완료", true);
    return response.data.data;
  } catch (error: any) {
    toastMsg("팔로우 취소 실패. 다시 시도해주세요", false);
  }
};
