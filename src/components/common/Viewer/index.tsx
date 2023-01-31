import React from "react";
import dynamic from "next/dynamic";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

const TuiViewer = dynamic(
  () => import("@toast-ui/react-editor").then(m => m.Viewer),
  { ssr: false },
);

interface TuiViewerProps {
  content: string;
}

function Viewer({ content }: TuiViewerProps) {
  return <TuiViewer initialValue={content || ""} />;
}

export default Viewer;
