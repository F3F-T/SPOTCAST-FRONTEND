import React, { useState } from "react";
import Editor from "../src/components/common/Editor";
import Viewer from "../src/components/common/Viewer";

function Index() {
  const onChangeHanlder = (value: any) => {
    console.log(`value : ${value}`);
  };
  return (
    <div>
      <Editor
        onChange={onChangeHanlder}
        placeholder="hi"
        initialValue=""
        initialEditType="wysiwyg"
        hideModeSwitch
      />

      <Viewer content="content" />
    </div>
  );
}

export default Index;
