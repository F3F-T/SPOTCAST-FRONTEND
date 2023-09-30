/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from "react-redux";
import { RootState } from "../../../stores/reducers";

export const getMe = () => {
  const { IsUserLoggedIn, me } = useSelector((state: RootState) => state.user);

  return {
    IsUserLoggedIn,
    me,
  };
};

export const getUser = () => {
  const { user } = useSelector((state: RootState) => state.user);

  return { user };
};
