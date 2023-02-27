import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { AppDispatch } from "../../stores/store/configureStore";
import {
  loadMsgReceived,
  loadMsgSend,
  deleteMessage,
  readMessage,
} from "../api/message";
import { getMessage } from "../util/lib";

export default function useMessage() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const MESSAGE_SIZE = 4;

  const TabList = ["받은 메시지", "보낸 메시지"];
  const [currentTab, setCurrentTab] = useState("받은 메시지");

  const [currentSendPage, setCurrentSendPage] = useState(1);
  const [currentReceivedPage, setCurrentReceivedPage] = useState(1);

  const { msgSendData, msgReceivedData } = getMessage();

  const msgSendSize = msgSendData.size;
  const msgReceivedSize = msgReceivedData.size;

  const onChangeSendMsg = async (page: number) => {
    await dispatch(loadMsgSend({ page, size: MESSAGE_SIZE }));
  };

  const onChangeReceivedMsg = async (page: number) => {
    await dispatch(loadMsgReceived({ page, size: MESSAGE_SIZE }));
  };

  const onChangeTab = useCallback(
    (item: string) => {
      setCurrentTab(item);
      if (item === TabList[0]) {
        onChangeReceivedMsg(0);
        setCurrentReceivedPage(1);
      }
      if (item === TabList[1]) {
        onChangeSendMsg(0);
        setCurrentSendPage(1);
      }
    },
    [currentTab],
  );

  const setSendPage = useCallback(
    (page: number) => {
      setCurrentSendPage(page);
      onChangeSendMsg(page - 1);
    },
    [currentSendPage],
  );

  const setReceivedPage = useCallback(
    (page: number) => {
      setCurrentReceivedPage(page);
      onChangeReceivedMsg(page - 1);
    },
    [currentReceivedPage],
  );

  const onClickDeleteMessage = useCallback(async (id: number) => {
    await dispatch(deleteMessage(id));
    router.refresh();
  }, []);

  const replaceUserProfile = useCallback((id: number) => {
    router.push(`/user/${id}`);
  }, []);

  const readMsg = useCallback(async (messageId: number) => {
    await dispatch(readMessage(messageId));
  }, []);

  return {
    onChangeSendMsg,
    onChangeReceivedMsg,
    readMsg,
    TabList,
    currentTab,
    onChangeTab,
    msgReceivedData,
    msgReceivedSize,
    currentReceivedPage,
    currentSendPage,
    setSendPage,
    setReceivedPage,
    msgSendData,
    msgSendSize,
    onClickDeleteMessage,
    replaceUserProfile,
  };
}
