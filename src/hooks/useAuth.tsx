import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/reducers";

const useAuth = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { IsUserLoggedIn } = useSelector((state: RootState) => state.user);
  if (!IsUserLoggedIn) {
    alert("로그인이 필요한 기능입니다.");
    router.push("/login");
    sessionStorage.setItem("prevPath", `${pathname}`);
  }
};

export default useAuth;
