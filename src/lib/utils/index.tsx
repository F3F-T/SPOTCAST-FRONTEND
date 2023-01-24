/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from "react-redux";
import { RootState } from "../../../stores/reducers";

export const getUser = () => {
  const { IsUserLoggedIn, me } = useSelector((state: RootState) => state.user);
  return {
    IsUserLoggedIn,
    me,
  };
};

export const getMessage = () => {
  const { msgSend, msgReceived } = useSelector(
    (state: RootState) => state.message,
  );

  const msgSendData = {
    data: msgSend.content,
    size: msgSend.totalElements,
  };
  const msgReceivedData = {
    data: msgReceived.content,
    size: msgReceived.totalElements,
  };

  return {
    msgSendData,
    msgReceivedData,
  };
};
