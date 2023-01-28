import React from "react";
import dynamic from "next/dynamic";
import {
  Editor as TuiEditor,
  EditorProps as TuiEditorProps,
} from "@toast-ui/react-editor";
import { TuiEditorWrapperProps } from "./TuiEditorWrapper";
import "@toast-ui/editor/dist/toastui-editor.css";

const TuiEditorWrapper = dynamic<TuiEditorWrapperProps>(
  () => import("./TuiEditorWrapper"),
  { ssr: false },
);

const EditorWithForwardedRef = React.forwardRef<
  TuiEditor | undefined,
  TuiEditorPropsWithHandlers
>((props, ref) => (
  /* forwardRef: Child */
  <TuiEditorWrapper
    {...props}
    forwardedRef={ref as React.MutableRefObject<TuiEditor>}
  />
));

interface TuiEditorPropsWithHandlers extends TuiEditorProps {
  onChange(value: string): void;
}

function Editor({
  initialValue,
  previewStyle,
  height,
  initialEditType,
  useCommandShortcut,
  hideModeSwitch,
  onChange,
}: TuiEditorPropsWithHandlers) {
  const editorRef = React.useRef<TuiEditor>();
  /* forwardRef: Parent */

  const handleChange = React.useCallback(() => {
    if (!editorRef.current) {
      return;
    }
    const instance = editorRef.current.getInstance();
    onChange(
      instance.isMarkdownMode() === true
        ? instance.getMarkdown()
        : instance.getHTML(),
    );
  }, [onChange]);

  return (
    <div className="editor">
      <EditorWithForwardedRef
        initialValue={initialValue || "please write here..."}
        previewStyle={previewStyle || "vertical"}
        height={height || "300px"}
        initialEditType={initialEditType}
        useCommandShortcut={useCommandShortcut || true}
        ref={editorRef}
        onChange={handleChange}
        hideModeSwitch={hideModeSwitch || false}
      />
    </div>
  );
}

export default Editor;
