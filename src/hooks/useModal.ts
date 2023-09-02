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
import { UserProps } from "../interface/user";
import { resetFollower, resetFollowing } from "../../stores/reducers/bookmark";

export function useMsgModal({ user }: UserProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { isMsgModalOpen } = useSelector((state: RootState) => state.context);
  const router = useRouter();
  const [title, onChangeTitle] = useInput("");
  const [content, onChangeContent] = useInput("");

  const openMsgModal = () => {
    dispatch(setMsgModal(true));
  };
  const closeMsgModal = () => {
    dispatch(setMsgModal(false));
  };

  const onSubmitMessage = useCallback(async () => {
    await sendMessage({
      title,
      content,
      sender: { id: Number(localStorage.getItem("id")) || undefined },
      recipient: { id: user.id },
    });
    router.refresh();
  }, [title, content]);

  return {
    isMsgModalOpen,
    title,
    onChangeTitle,
    content,
    onChangeContent,
    onSubmitMessage,
    openMsgModal,
    closeMsgModal,
  };
}
export function useReplyMsgModal({ item }: MessageProps) {
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
    await sendMessage({
      title,
      content,
      sender: { id: me.id },
      recipient: { id: item.memberId },
    });

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
  const {
    following,
    hasMoreFollowing,
    loadFollowingLoading,
    loadFollowingDone,
  } = useSelector((state: RootState) => state.bookmark);

  const openBookmarkModal = async () => {
    dispatch(setFollowingModal(true));
    lockScroll();
    if (following.length === 0) await dispatch(loadFollowing(0));
  };
  const closeBookmarkModal = () => {
    dispatch(setFollowingModal(false));
    dispatch(resetFollowing());
    openScroll();
  };

  const loadNext = async (num: number) => {
    if (!loadFollowingLoading && hasMoreFollowing) {
      dispatch(loadFollowing(num));
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
    loadFollowingDone,
  };
}

export function useFollowerBookmarkModal() {
  const dispatch = useDispatch<AppDispatch>();
  const { isFollowerModalOpen } = useSelector(
    (state: RootState) => state.context,
  );
  const { lockScroll, openScroll } = useBodyScrollLock();
  const { follower, hasMoreFollower, loadFollowerLoading, loadFollowerDone } =
    useSelector((state: RootState) => state.bookmark);

  const openBookmarkModal = async () => {
    dispatch(setFollowerModal(true));
    lockScroll();
    if (follower.length === 0) await dispatch(loadFollower(0));
  };
  const closeBookmarkModal = () => {
    dispatch(setFollowerModal(false));
    dispatch(resetFollower());
    openScroll();
  };

  const loadNext = async (num: number) => {
    if (!loadFollowerLoading && hasMoreFollower) {
      await dispatch(loadFollower(num));
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
    loadFollowerDone,
  };
}
