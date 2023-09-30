import { useSWRConfig } from "swr";
import { addBookmark, deleteBookmark } from "../api/bookmark";
import swrKeys from "../constants/swrKeys";

export default function useBookmark() {
  const { mutate } = useSWRConfig();
  const onClickDeleteBookmark = async (
    followerId: number,
    followingId: number,
  ) => {
    await deleteBookmark({ followerId, followingId });
    mutate(swrKeys.loadMeKey);
  };

  const onClickAddBookmark = async (
    followerId: number,
    followingId: number,
  ) => {
    await addBookmark({ followerId, followingId });
    mutate(swrKeys.loadMeKey);
  };
  return {
    onClickDeleteBookmark,
    onClickAddBookmark,
  };
}
