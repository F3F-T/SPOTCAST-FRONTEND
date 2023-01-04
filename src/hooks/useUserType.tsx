import { useState } from "react";

export default function useUserType() {
  const [types, setTypes] = useState([
    {
      id: 1,
      title: "🎨 아티스트",
      subTitle: `캐스팅/오디션 정보를 확인하고\n
            여러가지 영감을 받아가고 싶다면, 아티스트로 시작하세요!`,
      selected: true,
    },
    {
      id: 2,
      title: "🧑‍💻 회사",
      subTitle: `캐스팅/오디션 정보를 등록하고, 당신의 뮤즈를 찾아보세요!`,
      selected: false,
    },
  ]);
  const onToggleCheck = (id: number) => {
    setTypes(
      types.map(type =>
        // eslint-disable-next-line no-nested-ternary
        type.id === id
          ? { ...type, selected: !type.selected }
          : type.id !== id && type.selected === true
          ? { ...type, selected: !type.selected }
          : type,
      ),
    );
  };
  return { types, onToggleCheck };
}
