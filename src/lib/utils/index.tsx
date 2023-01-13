/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from "react-redux";
import { RootState } from "../../../stores/reducers";

const getUser = () => {
  const { IsUserLoggedIn, me } = useSelector((state: RootState) => state.user);
  return {
    IsUserLoggedIn,
    me,
  };
};

export default getUser;
