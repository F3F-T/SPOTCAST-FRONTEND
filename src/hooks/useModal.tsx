import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores/reducers";
import {
  setFollowingModal,
  setMsgModal,
  setFollowerModal,
} from "../../stores/reducers/context";
import { AppDispatch } from "../../stores/store/configureStore";
import { loadFollowing, loadFollower } from "../api/bookmark";
import { sendMessage } from "../api/message";
import { MessageProps } from "../interface/messgae";
import { getDate, getTime } from "../util/date";
import useInput from "./useInput";
import useBodyScrollLock from "./useBodyScrollLock";

export function useMsgModal({ item }: MessageProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { isMsgModalOpen } = useSelector((state: RootState) => state.context);
  const { me } = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const [title, onChangeTitle] = useInput(`RE: ${item?.title}`);
  const date = getDate(item?.createdDate);
  const time = getTime(item?.createdDate);

  const [prevMsg, setPrevMsg] = useState(
    `\n\n-----Original Message-----\n\nFrom: ${item?.memberName} <${item?.memberEmail}>\nTo: ${me.name} <${me?.email}>\nSent: ${date} ${time}
   \n\n${item?.content}`,
  );
  const [content, onChangeContent] = useInput(prevMsg);

  const openMsgModal = () => {
    dispatch(setMsgModal(true));
  };
  const closeMsgModal = () => {
    dispatch(setMsgModal(false));
  };

  const onSubmitMessage = useCallback(async () => {
    await dispatch(
      sendMessage({
        title,
        content,
        sender: { id: me.id },
        recipient: { id: item.memberId },
      }),
    );
    router.refresh();
  }, [title, content]);

  return {
    prevMsg,
    isMsgModalOpen,
    title,
    onChangeTitle,
    content,
    onChangeContent,
    onSubmitMessage,
    openMsgModal,
    closeMsgModal,
    setPrevMsg,
  };
}

export function useFollowingBookmarkModal() {
  const dispatch = useDispatch<AppDispatch>();
  const { isFollowingModalOpen } = useSelector(
    (state: RootState) => state.context,
  );
  const { lockScroll, openScroll } = useBodyScrollLock();
  const { following, hasMoreFollowing, loadFollowingLoading } = useSelector(
    (state: RootState) => state.bookmark,
  );

  const openBookmarkModal = async () => {
    dispatch(setFollowingModal(true));
    lockScroll();
    if (following.length === 0) await dispatch(loadFollowing(0));
  };
  const closeBookmarkModal = () => {
    dispatch(setFollowingModal(false));
    openScroll();
  };

  const loadNext = async (num: number) => {
    if (!loadFollowingLoading && hasMoreFollowing) {
      await setTimeout(() => {
        dispatch(loadFollowing(num));
      }, 3000);
    }
  };

  return {
    isFollowingModalOpen,
    openBookmarkModal,
    closeBookmarkModal,
    loadNext,
    following,
    hasMoreFollowing,
    loadFollowingLoading,
  };
}

export function useFollowerBookmarkModal() {
  const dispatch = useDispatch<AppDispatch>();
  const { isFollowerModalOpen } = useSelector(
    (state: RootState) => state.context,
  );
  const { lockScroll, openScroll } = useBodyScrollLock();
  const { follower, hasMoreFollower, loadFollowerLoading } = useSelector(
    (state: RootState) => state.bookmark,
  );

  const openBookmarkModal = async () => {
    dispatch(setFollowerModal(true));
    lockScroll();
    if (follower.length === 0) await dispatch(loadFollower(0));
  };
  const closeBookmarkModal = () => {
    dispatch(setFollowerModal(false));
    openScroll();
  };

  const loadNext = async (num: number) => {
    if (!loadFollowerLoading && hasMoreFollower) {
      await setTimeout(() => {
        dispatch(loadFollower(num));
      }, 3000);
    }
  };

  return {
    isFollowerModalOpen,
    openBookmarkModal,
    closeBookmarkModal,
    loadNext,
    follower,
    hasMoreFollower,
    loadFollowerLoading,
  };
}
