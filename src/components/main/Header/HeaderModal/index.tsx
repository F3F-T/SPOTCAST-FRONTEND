import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../stores/reducers";
import Icon from "../../../common/Icon";
import { GREY, INDIGO } from "../../../../constants/colors";
import ProfileModal from "./ProfileModal";
import MessageModal from "./MessageModal";
import {
  ModalWrapper,
  IconButton,
  LoggedIn,
  StyledButton,
  Img,
} from "../index.styles";
import { getMessage } from "../../../../util/lib";
import { AppDispatch } from "../../../../../stores/store/configureStore";
import { loadMsgUnread } from "../../../../api/message";

export default function HeaderModal() {
  const { me, IsUserLoggedIn } = useSelector((state: RootState) => state.user);
  const { msgUnreadData } = getMessage();

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
              await dispatch(loadMsgUnread({ page: 0, size: 4 }));
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
            <MessageModal data={msgUnreadData.data} showModal={showModal} />
          )}
        </ModalWrapper>
        <ModalWrapper>
          <IconButton
            onClick={() => {
              showModal("MYPAGE");
            }}
          >
            {IsUserLoggedIn ? (
              <Img src={me.profile} selected={!!modalOpen[2].selected} />
            ) : (
              <Img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhIVFRUVFxUXFRUXFRcVFxcVFRUXFxUXFRcYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0NFQ8NFSsZFRkrLTcrKystLTcrNys3LSs3NzcrNysrNzc3LSstLS0tNysrNzctKy0rKzctNy0tNystK//AABEIAOEA4QMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIDB//EACMQAQEBAAEBCQEBAAAAAAAAAAABEQISITFBUXGBkbHwwWH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8A9IEG2RaWM9ILq6mEAtTGkBU1YAipVBBQFQKCasIoJFqUALaLoJxoEBZFNSguCGoJl8xoUZKJAWBQEFSApKQAoRbEEqKKAGAE7hQQiXyUFiY0mAmFOSdQLIrMXAWLgagYmKgGqz7CgBABagGnHxSKCoiguJgQAXFoM4YtIAYsNQTBYVQSxUA4wsJAAhFgAUQWsqmgnXPOfMVQEsRqxL2AnIWooi2rgCYsJFwDDAtFWoQQTFKmKimJaugWoRAUIQCFIuAkW1DAaARUNEEa0ZFVaIYiFqRbDFAhAFKJoLCGoCpFAEtUBBagAKCIoAQoAqAKGqgzoWEqidPoLoCmoIKSpCqKIUAVNA0AFAALUlKAFACItAgSGAFIAuJgAYuJKtoFpENQBnt/wFjSVYuKiGmKCQsTWgQKAAAYAAaVAIUUEjQgCooJIYqUAKkvkChpQIqALgAJioAtIJECRQ1QiUUBnktUEwwigYli3UwBU0gFCqCKVKCCgCSLUkAgWAGrKiA11DltAdFRQATAaSgCyoACoaCymoAaIgNEIUDSAAmraAlVCQCkFBDWomAlRqs4AKAYjWEBUsFBmVYigEEBQKCpUlOoCiauAKkXQMNFgCKlAAwCEgQFQIBhQAwTf2CClEUXTQBRMADA0EwWFBExrQGZGkigFIaBpoAKkqgi0ATChQLQwBKLiQDRQCqzYoCoAJVOUBnjGqigioAC2JgCkLACCghhSgIoABoLiYqAKhgKiRUE9wFFMAGqgmoCgoItqYAYuIAKmAiiwDDAwBCmgEUATCoDQmkoGqzaoJhYsSwGe0a+PgBcAADCQFi1CIAlXAQBRYIoIsQoKGkQDBLQVKaSgJiqDJK1iYBYRUtADiAdguCgigIQAFUQL4erICrEoKi1QQEAF596ACM8+6goTwJ/ABf320CCHIAOLPHvvt90Aai8VBVAB//Z"
                selected={!!modalOpen[2].selected}
              />
            )}
          </IconButton>
          {modalOpen[2].selected && <ProfileModal />}
        </ModalWrapper>
        <StyledButton size="large" title="내 포트폴리오 관리" />
      </LoggedIn>
    </aside>
  );
}
