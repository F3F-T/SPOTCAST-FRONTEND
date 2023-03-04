import React from "react";
import styled from "@emotion/styled";
import Editor from "../src/components/common/Editor";
import Viewer from "../src/components/common/Viewer";
import AppLayout from "../styles/AppLayout";
import { GREY } from "../src/constants/colors";

const SubmitButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${GREY[700]};
  color: white;
  border: none;
  padding: 1.2rem 2.4rem;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const EditorWrapper = styled.div`
  padding-top: 6rem;
  position: relative;
`;
const Title = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 2rem;
`;
const Bold = styled.div`
  font-weight: 700;
`;

function Index() {
  const onChangeHanlder = (value: any) => {
    console.log(`value : ${value}`);
  };

  return (
    <AppLayout>
      <EditorWrapper>
        <Title>
          <Bold>윤채현</Bold>님의 포트폴리오
        </Title>
        <SubmitButton>저장하기 🤗</SubmitButton>
        <Editor
          onChange={onChangeHanlder}
          placeholder="hi"
          initialValue=""
          initialEditType="wysiwyg"
          hideModeSwitch
        />

        <Viewer content="content" />
      </EditorWrapper>
    </AppLayout>
  );
}

export default Index;
