/* eslint-disable no-console */
import React from "react";
import dynamic from "next/dynamic";
import {
  Editor as TuiEditor,
  EditorProps as TuiEditorProps,
} from "@toast-ui/react-editor";
import { HookCallback } from "@toast-ui/editor/types/editor";
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
  /* 
  parent 컴포넌트에서 onChange 핸들러를 만들고, value로 값을 가져오시면 됩니다.
  ex. const editorOnChange = (val) => {console.log(val)}
  */
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

  const uploadImage = async (blob: Blob | File) => {
    /* s3에 post 후 응답값에서 url string을 뱉어야 함 */
    const reqUrl = "s3어쩌고/image/upload";
    const formData = new FormData();
    formData.append("data", blob);
    fetch(reqUrl, {
      method: "POST",
      cache: "no-cache",
      body: formData,
    })
      .then(response => console.log(response)) /* 응답값 중 s3 url을 리턴 */
      .catch(error => console.log(error));
  };

  const handleImage = async (blob: Blob | File, callback: HookCallback) => {
    const url = await uploadImage(blob);
    const mockUrl = "www.image.com/s3/somethisng";
    callback(mockUrl, "alt text");
    console.log(blob);
    return false;
  };

  return (
    <EditorWithForwardedRef
      initialValue={initialValue || ""}
      previewStyle={previewStyle || "vertical"}
      height={height || "300px"}
      initialEditType={initialEditType}
      useCommandShortcut={useCommandShortcut || true}
      ref={editorRef}
      onChange={handleChange}
      hideModeSwitch={hideModeSwitch || false}
      hooks={{ addImageBlobHook: handleImage }}
    />
  );
}

export default Editor;
