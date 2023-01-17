import React from "react";
import WysiwygEditor from "../src/components/common/Editor";

function editor() {
  const onChangeHanlder = (value: any) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };
  return (
    <div>
      {/*  <Editor /> */}
      <WysiwygEditor
        onChange={onChangeHanlder}
        initialEditType="wysiwyg"
        hideModeSwitch
      />
    </div>
  );
}

export default editor;
