import React, { useState } from "react";
import Editor from "../src/components/common/Editor";
import Viewer from "../src/components/common/Viewer";

function Index() {
  const [viewerText, setViewerText] = useState("dkdkdkdk");

  const onChangeHanlder = (value: any) => {
    console.log(`value : ${value}`);
    setViewerText(value);
    console.log(`viewerText : ${viewerText}`);
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
      <Viewer value={viewerText} />
    </div>
  );
}

export default Index;
