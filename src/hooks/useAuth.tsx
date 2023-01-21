import { usePathname, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../stores/reducers";
import { AppDispatch } from "../../stores/store/configureStore";
import { refreshAuth, getMember } from "../api/auth";

export default function useAuth() {
  const useUser = (loginRequired: boolean) => {
    const router = useRouter();
    const pathname = usePathname();
    const { IsUserLoggedIn } = useSelector((state: RootState) => state.user);

    if (!IsUserLoggedIn && loginRequired && typeof window !== "undefined") {
      alert("로그인이 필요한 기능입니다.");
      router.push("/login");
      sessionStorage.setItem("prevPath", `${pathname}`);
    }

    if (IsUserLoggedIn && typeof window !== "undefined") {
      sessionStorage.setItem("prevPath", ``);
    }
  };

  return { useUser };
}
export const useRedirect = () => {
  const { getMeError } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    switch (getMeError?.code) {
      // 로그인 하지 않은 사용자가 요청
      case 400:
        break;
      // 액세스 토큰 만료
      case 401:
        refreshAuth()
          .then(async () => {
            await dispatch(getMember());
          })
          .catch(async () => {});
        break;
      // 접근 권한 없음(ex. ADMIN페이지에 USER가 접근)
      case 403:
        break;
      default:
        break;
    }
  }, [getMeError]);
  return null;
};
