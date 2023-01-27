import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores/reducers";
import { setBookmarkModal, setMsgModal } from "../../stores/reducers/context";
import { AppDispatch } from "../../stores/store/configureStore";
import { loadFollowing } from "../api/bookmark";
import { sendMessage } from "../api/message";
import { MessageProps } from "../interface/messgae";
import { getDate, getTime } from "../util/date";
import useInput from "./useInput";

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

export function useBookmarkModal() {
  const dispatch = useDispatch<AppDispatch>();
  const { isBookmarkModalOpen } = useSelector(
    (state: RootState) => state.context,
  );

  const { lastPage } = useSelector((state: RootState) => state.bookmark);

  const openBookmarkModal = async () => {
    dispatch(setBookmarkModal(true));
    await dispatch(loadFollowing(0));
  };
  const closeBookmarkModal = () => {
    dispatch(setBookmarkModal(false));
  };

  const loadNext = async () => {
    console.log("시발");
    await dispatch(loadFollowing(lastPage));
  };

  return {
    isBookmarkModalOpen,
    openBookmarkModal,
    closeBookmarkModal,
    loadNext,
  };
}
