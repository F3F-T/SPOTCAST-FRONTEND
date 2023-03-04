import { useRouter } from "next/navigation";

export default function useRecruit() {
  const router = useRouter();

  const replacePostPage = () => {
    router.push("/recruit/post");
  };

  const replaceFormPage = () => {
    router.push("/recruit/form");
  };

  return {
    replacePostPage,
    replaceFormPage,
  };
}
