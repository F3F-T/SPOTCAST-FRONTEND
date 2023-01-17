import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";
import getUser from "../lib/utils";
import useInput from "./useInput";
import { AppDispatch } from "../../stores/store/configureStore";
import editMyInfo from "../api/user";
import toastMsg from "../components/common/Toast";

export default function useEditForm() {
  const { me } = getUser();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { name } = me;
  const [information, onChangeInformation] = useInput(me.information);
  const [instagram, onChangeInstagram] = useInput(me.instagram);
  const [twitter, onChangeTwitter] = useInput(me.twitter);
  const [otherSns, onChangeOtherSns] = useInput(me.otherSns);
  const [egName, onChangeEgName] = useInput(me.egName);

  const myField = me.field?.split(",");

  const fields = [
    { id: 0, name: "실용음악" },
    { id: 1, name: "클래식" },
    { id: 2, name: "연기" },
    { id: 3, name: "연출" },
    { id: 4, name: "모델" },
    { id: 5, name: "사진" },
  ];

  const [FieldList, setFieldList] = useState(
    fields.map(item => {
      if (myField.includes(item.name))
        return Object.assign(item, { selected: true });
      return Object.assign(item, { selected: false });
    }),
  );

  const onToggleField = (id: number) => {
    setFieldList(
      FieldList.map(type =>
        // eslint-disable-next-line no-nested-ternary
        type.id === id ? { ...type, selected: !type.selected } : type,
      ),
    );
  };

  const onSubmitEditForm = async () => {
    const field = FieldList.filter(item => {
      return item.selected === true;
    })
      .map(item => {
        return item.name;
      })
      .join();
    const data = {
      id: me.id,
      information,
      twitter,
      instagram,
      otherSns,
      field,
      egName,
    };

    await dispatch(editMyInfo(data));
    toastMsg("수정되었습니다.");
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
  };
}
