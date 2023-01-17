import React from "react";
import dynamic from "next/dynamic";
import {
  Editor as TuiEditor,
  EditorProps as TuiEditorProps,
} from "@toast-ui/react-editor";
import { TuiEditorWrapperProps } from "./TuiEditorWrapper";
import "@toast-ui/editor/dist/toastui-editor.css";

interface TuiEditorPropsWithHandlers extends TuiEditorProps {
  onChange(value: string): void;
}

const TuiEditorWrapper = dynamic<TuiEditorWrapperProps>(
  () => import("./TuiEditorWrapper"),
  { ssr: false },
); /* forwardRef까지 붙은 에디터 다이나믹 임포트 */

const EditorWithForwardedRef = React.forwardRef<
  TuiEditor | undefined,
  TuiEditorPropsWithHandlers
>((props, ref) => (
  <TuiEditorWrapper
    {...props}
    forwardedRef={ref as React.MutableRefObject<TuiEditor>}
  />
)); /* 얘가 child인거네 */

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
  /* 여기서 레프를 처음 만드니까 결국 얘가 parent인거지? */
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
        /*    {...props} */
        initialValue={initialValue || "hello react editor world!"}
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
