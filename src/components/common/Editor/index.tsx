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
    const reqUrl = "/board/boardImage/{boardId}";
    const formData = new FormData();
    formData.append("data", blob);
    fetch(reqUrl, {
      method: "POST",
      cache: "no-cache",
      body: formData,
    })
      .then(response => {
        return response.data;
      }) /* 응답값 중 s3 url을 리턴 */
      .catch(error => console.log(error));
  };

  const handleImage = async (blob: Blob | File, callback: HookCallback) => {
    const url = await uploadImage(blob);
    const mockUrl = "www.image.com/s3/somethisng";
    callback(url, "alt text");
    return false;
  };
  /* https://leego.tistory.com/entry/Toast-UI-Editor-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B2%A8%EB%B6%80%ED%95%98%EA%B8%B0 */
  /* https://dev-swlee.tistory.com/16 */
  /* https://jforj.tistory.com/212 */
  /* https://okky.kr/articles/1025404?note=2473708 */

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
