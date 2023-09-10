import { addBookmark, deleteBookmark } from "../api/bookmark";

export default function useBookmark() {
  const onClickDeleteBookmark = async (
    followerId: number,
    followingId: number,
  ) => {
    await deleteBookmark({ followerId, followingId });
  };

  const onClickAddBookmark = async (
    followerId: number,
    followingId: number,
  ) => {
    await addBookmark({ followerId, followingId });
  };
  return {
    onClickDeleteBookmark,
    onClickAddBookmark,
  };
}
