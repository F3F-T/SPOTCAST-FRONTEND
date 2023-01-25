import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getMe } from "../util/lib";
import useInput from "./useInput";
import { AppDispatch } from "../../stores/store/configureStore";
import { editMyInfo } from "../api/user";

export default function useEditForm() {
  const { me } = getMe();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const getFieldList = () => {
    dispatch(loadField());
  };
  const { name } = me;
  const [information, onChangeInformation] = useInput(me.information);
  const [instagram, onChangeInstagram] = useInput(me.instagram);
  const [twitter, onChangeTwitter] = useInput(me.twitter);
  const [otherSns, onChangeOtherSns] = useInput(me.otherSns);
  const [egName, onChangeEgName] = useInput(me.egName);
  const [FieldList, setFieldList] = useState(field);

  const onToggleField = (id: number) => {
    setFieldList(
      FieldList.map((type: FieldProps) =>
        // eslint-disable-next-line no-nested-ternary
        type.categoryId === id ? { ...type, exist: !type.exist } : type,
      ),
    );
  };

  const onSubmitEditForm = async () => {
    const data = {
      id: me.id,
      information,
      twitter,
      instagram,
      otherSns,
      categoryInfo: FieldList,
      egName,
    };

    await dispatch(editMyInfo(data));
    setTimeout(() => router.refresh(), 2000);
  };

  return {
    name,
    information,
    instagram,
    twitter,
    otherSns,
    egName,
    onChangeEgName,
    onChangeInformation,
    onChangeInstagram,
    onChangeTwitter,
    onChangeOtherSns,
    FieldList,
    onSubmitEditForm,
    onToggleField,
    getFieldList,
  };
}
