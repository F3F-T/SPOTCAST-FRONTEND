import React, { useCallback, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../stores/reducers";
import Icon from "../../../common/Icon";
import { GREY, INDIGO } from "../../../../constants/colors";
import ProfileModal from "./ProfileModal";
import MessageModal from "./MessageModal";
import {
  Hover,
  ModalWrapper,
  IconButton,
  Login,
  LoggedIn,
  StyledButton,
  Img,
} from "../index.styles";
import { getMessage } from "../../../../util/lib";
import { AppDispatch } from "../../../../../stores/store/configureStore";
import { loadMsgReceived } from "../../../../api/message";

export default function HeaderModal() {
  const aside = [
    { name: "로그인", href: "/login" },
    { name: "회원가입", href: "/signup" },
  ];
  const { me, IsUserLoggedIn } = useSelector((state: RootState) => state.user);
  const { msgReceivedData } = getMessage();

  const dispatch = useDispatch<AppDispatch>();

  const [modalOpen, setModalOpen] = useState([
    {
      name: "ALARM",
      selected: false,
    },
    {
      name: "MESSAGE",
      selected: false,
    },
    {
      name: "MYPAGE",
      selected: false,
    },
  ]);
  const showModal = useCallback(
    (name: string) => {
      setModalOpen(
        modalOpen.map(modal =>
          // eslint-disable-next-line no-nested-ternary
          modal.name === name
            ? { ...modal, selected: !modal.selected }
            : modal.name !== name && modal.selected === true
            ? { ...modal, selected: !modal.selected }
            : modal,
        ),
      );
    },
    [modalOpen],
  );

  return (
    <aside>
      {IsUserLoggedIn ? (
        <LoggedIn>
          <ModalWrapper>
            <IconButton onClick={() => showModal("ALARM")}>
              <Icon
                className={modalOpen[0].selected ? "bellFill" : "bell"}
                border={0.4}
                size="2rem"
                color={modalOpen[0].selected ? INDIGO : GREY[700]}
              />
            </IconButton>
            {/* {modalOpen[1].selected && <AlarmModal />} */}
          </ModalWrapper>
          <ModalWrapper>
            <IconButton
              onClick={async () => {
                await dispatch(loadMsgReceived({ page: 0, size: 4 }));
                showModal("MESSAGE");
              }}
            >
              <Icon
                className={modalOpen[1].selected ? "msgFill" : "msg"}
                border={0.4}
                size="2rem"
                color={modalOpen[1].selected ? INDIGO : GREY[700]}
              />
            </IconButton>
            {modalOpen[1].selected && (
              <MessageModal data={msgReceivedData.data} showModal={showModal} />
            )}
          </ModalWrapper>
          <ModalWrapper>
            <IconButton
              onClick={() => {
                showModal("MYPAGE");
              }}
            >
              <Img src={me.profile} selected={!!modalOpen[2].selected} />
            </IconButton>
            {modalOpen[2].selected && <ProfileModal />}
          </ModalWrapper>
          <StyledButton size="large" title="내 포트폴리오 관리" />
        </LoggedIn>
      ) : (
        <Login>
          {aside.map(({ name, href }) => (
            <Link key={name} href={href}>
              <Hover>{name}</Hover>
            </Link>
          ))}
          <StyledButton size="large" title="내 포트폴리오 등록" />
        </Login>
      )}
    </aside>
  );
}
