import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores/reducers";
import { setMsgModal } from "../../stores/reducers/context";
import { AppDispatch } from "../../stores/store/configureStore";
import { sendMessage } from "../api/message";
import { MessageProps } from "../interface/messgae";
import useInput from "./useInput";

export default function useMsgModal({ item }: MessageProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { isMsgModalOpen } = useSelector((state: RootState) => state.context);
  const { me } = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const [title, onChangeTitle] = useInput(`RE: ${item?.title}`);

  const [prevMsg, setPrevMsg] = useState(
    `\n\n-----Original Message-----\n\nFrom: ${item?.memberName}\nTo: ${me.name}\nSent: ${item?.createdDate}
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
