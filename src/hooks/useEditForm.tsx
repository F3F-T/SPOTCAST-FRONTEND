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
  const [instagram, onChangeInstagram] = useInput(me.instagram);
  const [twitter, onChangeTwitter] = useInput(me.twitter);
  const [otherSns, onChangeOtherSns] = useInput(me.otherSns);

  const onSubmitEditForm = async () => {
    const data = {
      id: me.id,
      information,
      twitter,
      instagram,
      otherSns,
    };
    await dispatch(editMyInfo(data));
    router.refresh();
  };

  return {
    name,
    information,
    instagram,
    twitter,
    otherSns,
    onChangeName,
    onChangeInformation,
    onChangeInstagram,
    onChangeTwitter,
    onChangeOtherSns,
    onSubmitEditForm,
  };
}
