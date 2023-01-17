/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/function-component-definition */
import React from "react";
import { Editor, EditorProps } from "@toast-ui/react-editor";

export interface TuiEditorWrapperProps extends EditorProps {
  forwardedRef?: React.MutableRefObject<Editor>;
}

export default (props: TuiEditorWrapperProps) => (
  <Editor {...props} ref={props.forwardedRef} />
);
