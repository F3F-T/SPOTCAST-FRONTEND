import { useDispatch } from "react-redux";
import { AppDispatch } from "../../stores/store/configureStore";
import { addBookmark, deleteBookmark } from "../api/bookmark";

export default function useBookmark() {
  const dispatch = useDispatch<AppDispatch>();

  const onClickDeleteBookmark = (followerId: number, followingId: number) => {
    dispatch(deleteBookmark({ followerId, followingId }));
  };

  const onClickAddBookmark = (followerId: number, followingId: number) => {
    dispatch(addBookmark({ followerId, followingId }));
  };
  return {
    onClickDeleteBookmark,
    onClickAddBookmark,
  };
}
