import { toast } from "react-toastify";

const toastMsg = (msg: string, IsSuccessed: boolean) =>
  toast(IsSuccessed ? `${msg} 👌` : `${msg} 🤯`, {
    hideProgressBar: true,
    autoClose: 1000,
    draggable: false,
    theme: "dark",
  });

export default toastMsg;
