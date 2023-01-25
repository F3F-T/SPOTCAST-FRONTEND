import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { AppDispatch } from "../../stores/store/configureStore";
import { loadMsgReceived, loadMsgSend, deleteMessage } from "../api/message";
import { getMessage } from "../lib/utils";

export default function useMessage() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const MESSAGE_SIZE = 4;

  const TabList = ["받은 메시지", "보낸 메시지"];
  const [currentTab, setCurrentTab] = useState("받은 메시지");
  const [currentPage, setCurrentPage] = useState(0);
  const { msgSendData, msgReceivedData } = getMessage();

  const msgSendSize = [...Array(Math.ceil(msgSendData.size / 4 || 0))].map(
    (v, i) => i,
  );
  const msgReceivedSize = [
    ...Array(Math.ceil(msgReceivedData.size / 4 || 0)),
  ].map((v, i) => i);

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
        setCurrentPage(0);
      }
      if (item === TabList[1]) {
        onChangeSendMsg(0);
        setCurrentPage(0);
      }
    },
    [currentTab],
  );
  const onChangePage = useCallback(
    (type: string, i: number) => {
      if (type === "SEND") {
        onChangeSendMsg(i);
        setCurrentPage(i);
      }
      if (type === "RECEIVED") {
        onChangeReceivedMsg(i);
        setCurrentPage(i);
      }
    },
    [currentPage],
  );

  const onClickDeleteMessage = useCallback(async (id: number) => {
    await dispatch(deleteMessage(id));
    router.refresh();
  }, []);

  const replaceUserProfile = useCallback((id: number) => {
    router.push(`/user/${id}`);
  }, []);
  return {
    onChangeSendMsg,
    onChangeReceivedMsg,
    TabList,
    currentTab,
    onChangeTab,
    msgReceivedData,
    msgReceivedSize,
    currentPage,
    onChangePage,
    msgSendData,
    msgSendSize,
    onClickDeleteMessage,
    replaceUserProfile,
  };
}
