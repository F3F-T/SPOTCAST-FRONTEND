import { useRouter } from "next/navigation";
import { useState } from "react";
import useInput from "./useInput";

export default function useInform() {
  const router = useRouter();
  const [name, onChangeName] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const CategoryList = ["실용음악", "클래식", "연기", "연출", "모델", "사진"];

  const [checkedInputs, setCheckedInputs] = useState<string[]>([]);

  const changeHandler = (checked: boolean, id: string) => {
    if (checked) {
      setCheckedInputs([...checkedInputs, id]);
    } else {
      // 체크 해제
      setCheckedInputs(checkedInputs.filter(el => el !== id));
    }
  };
  const onReplaceBack = () => {
    router.back();
  };

  const onReplaceNext = () => {
    router.push("/signup/email/userType");
  };

  return {
    name,
    onChangeName,
    nickname,
    onChangeNickname,
    CategoryList,
    checkedInputs,
    changeHandler,
    onReplaceBack,
    onReplaceNext,
  };
}
