/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { Editor as EditorType, EditorProps } from "@toast-ui/react-editor";
import { TuiEditorWithForwardedProps } from "../Editor";
/* 
import Editor from "../Editor";
 */
interface EditorPropsWithHandlers extends EditorProps {
  onChange?(value: string): void;
}

const Editor = dynamic<TuiEditorWithForwardedProps>(() => import("../Editor"), {
  ssr: false,
});

const EditorWithForwardedRef = React.forwardRef<
  EditorType | undefined,
  EditorPropsWithHandlers
>((props, ref) => (
  <Editor {...props} forwardedRef={ref as React.MutableRefObject<EditorType>} />
));

function WrappedEditor() {
  const editorRef = useRef<React.MutableRefObject<EditorType>>();
  return (
    <div>
      <Editor ref={editorRef} />
    </div>
  );
}

export default WrappedEditor;
