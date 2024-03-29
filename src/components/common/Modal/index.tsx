import React from "react";
import styled from "@emotion/styled";

const ModalBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  display: flex;
  z-index: 999;
`;

const ModalBox = styled.div`
  position: fixed;
  border-radius: 1rem;
  width: 55rem;
  background-color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ModalProps {
  children: React.ReactNode;
  closeModal: () => void;
}
export default function Modal({ children, closeModal }: ModalProps) {
  return (
    <ModalBackground onClick={closeModal}>
      <ModalBox onClick={e => e.stopPropagation()}>{children}</ModalBox>
    </ModalBackground>
  );
}
