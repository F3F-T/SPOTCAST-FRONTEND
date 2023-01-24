import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores/reducers";
import { setMsgModal } from "../../stores/reducers/context";
import { AppDispatch } from "../../stores/store/configureStore";
import { sendMessage } from "../api/message";
import useInput from "./useInput";

export default function useMsgModal() {
  const dispatch = useDispatch<AppDispatch>();
  const { isMsgModalOpen } = useSelector((state: RootState) => state.context);
  const { me } = useSelector((state: RootState) => state.user);
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
    await dispatch(
      sendMessage({
        title,
        content,
        sender: { id: me.id },
        recipient: { id: 2 },
      }),
    );
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
