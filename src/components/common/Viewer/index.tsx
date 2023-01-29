import React from "react";
import dynamic from "next/dynamic";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

const TuiViewer = dynamic(
  () => import("@toast-ui/react-editor").then(m => m.Viewer),
  { ssr: false },
);

interface TuiViewerProps {
  value: string;
}

function Viewer({ value }: TuiViewerProps) {
  return <TuiViewer initialValue={value || ""} />;
}

export default Viewer;
