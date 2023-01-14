import { useDispatch } from "react-redux";
import getUser from "../lib/utils";
import useInput from "./useInput";
import { AppDispatch } from "../../stores/store/configureStore";
import editMyInfo from "../api/user";

export default function useEditForm() {
  const { me } = getUser();
  const dispatch = useDispatch<AppDispatch>();

  const [name, onChangeName] = useInput(me.name);
  const [information, onChangeInformation] = useInput(me.information);

  const onSubmitEditForm = () => {
    dispatch(editMyInfo(me));
  };

  return {
    name,
    information,
    onChangeName,
    onChangeInformation,
    onSubmitEditForm,
  };
}
