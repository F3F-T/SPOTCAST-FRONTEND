import useSWR from "swr";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  loadMsgReceived,
  loadMsgSend,
  deleteMessage,
  readMessage,
} from "../api/message";

export default function useMessage() {
  const router = useRouter();

  const MESSAGE_SIZE = 4;

  const TabList = ["받은 메시지", "보낸 메시지"];
  const [currentTab, setCurrentTab] = useState("받은 메시지");

  const [currentSendPage, setCurrentSendPage] = useState(1);
  const [currentReceivedPage, setCurrentReceivedPage] = useState(1);
  const { data: msgReceivedData, mutate: mutateReceieved } = useSWR(
    "loadMsgReceivedb",
    () =>
      loadMsgReceived({ page: currentReceivedPage - 1, size: MESSAGE_SIZE }),
  );

  const { data: msgSendData, mutate: mutateSend } = useSWR("loadMsgSend", () =>
    loadMsgSend({ page: currentSendPage - 1, size: MESSAGE_SIZE }),
  );

  useEffect(() => {
    mutateReceieved();
  }, [currentReceivedPage]);

  useEffect(() => {
    mutateSend();
  }, [currentSendPage]);

  const onChangeTab = useCallback(
    (item: string) => {
      setCurrentTab(item);
      if (item === TabList[0]) {
        setCurrentReceivedPage(1);
      }
      if (item === TabList[1]) {
        setCurrentSendPage(1);
      }
    },
    [currentTab],
  );

  const setSendPage = (page: number) => {
    setCurrentSendPage(page);
  };

  const setReceivedPage = (page: number) => {
    setCurrentReceivedPage(page);
  };

  const onClickDeleteMessage = useCallback(async (id: number) => {
    await deleteMessage(id);
    router.refresh();
  }, []);

  const replaceUserProfile = useCallback((id: number) => {
    router.push(`/user/${id}`);
  }, []);

  const readMsg = useCallback(async (messageId: number) => {
    await readMessage(messageId);
  }, []);

  return {
    readMsg,
    TabList,
    currentTab,
    onChangeTab,
    msgReceivedData,
    msgSendData,
    currentReceivedPage,
    currentSendPage,
    setSendPage,
    setReceivedPage,
    onClickDeleteMessage,
    replaceUserProfile,
    mutateReceieved,
  };
}
