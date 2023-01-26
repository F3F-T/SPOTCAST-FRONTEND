import { useState } from "react";
import useInput from "./useInput";

export default function useInform() {
  const [name, onChangeName] = useInput("");

  const [checkedInputs, setCheckedInputs] = useState<string[]>([]);

  const changeHandler = (checked: boolean, id: string) => {
    if (checked) {
      setCheckedInputs([...checkedInputs, id]);
    } else {
      // 체크 해제
      setCheckedInputs(checkedInputs.filter(el => el !== id));
    }
  };

  return {
    name,
    onChangeName,
    checkedInputs,
    changeHandler,
  };
}