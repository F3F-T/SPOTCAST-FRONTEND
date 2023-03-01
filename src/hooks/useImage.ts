import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { AppDispatch } from "../../stores/store/configureStore";
import { changeProfile, changeProfileDefault } from "../api/user";
import { getMe } from "../util/lib";

const useImage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { me } = getMe();
  const onChangeImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files) {
      const uploadFile = e.target.files[0];
      const formData = new FormData();

      formData.append("image", uploadFile);

      await dispatch(changeProfile({ image: formData, id: me.id }));
      router.refresh();
    }
  };

  const onChangeImgDefault = async () => {
    await dispatch(changeProfileDefault(me.id));
    router.refresh();
  };
  return { onChangeImg, onChangeImgDefault };
};

export default useImage;
