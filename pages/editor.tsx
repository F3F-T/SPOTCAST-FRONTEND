import React from "react";
import Editor from "../src/components/common/Editor";

function editor() {
  const onChangeHanlder = (value: any) => {
    // eslint-disable-next-line no-console
    console.log(value);
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
    </div>
  );
}

export default editor;
