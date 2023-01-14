import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import getUser from "../lib/utils";
import useInput from "./useInput";
import { AppDispatch } from "../../stores/store/configureStore";
import editMyInfo from "../api/user";

export default function useEditForm() {
  const { me } = getUser();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const [name, onChangeName] = useInput(me.name);
  const [information, onChangeInformation] = useInput(me.information);

  const onSubmitEditForm = async () => {
    const data = {
      id: me.id,
      information,
      twitter: me.twitter,
      instagram: me.instagram,
      otherSns: me.otherSns,
    };
    await dispatch(editMyInfo(data));
    router.refresh();
  };

  return {
    name,
    information,
    onChangeName,
    onChangeInformation,
    onSubmitEditForm,
  };
}
