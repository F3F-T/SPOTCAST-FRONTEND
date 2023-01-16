import React from "react";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then(module => module.Editor),
  { ssr: false },
);

function EditorContainer() {
  return (
    <div>
      <Editor />
    </div>
  );
}

export default EditorContainer;
