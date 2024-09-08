import { useRouter } from "next/navigation";

// 로그인 관련 함수 정의
// 예정: 로그아웃 추가, 로그인 상태 확인 추가
const useLogin = () => {
  const router = useRouter();
  const login = () => {
    console.log("login");
    router.push("/game/1");
  };

  const guestLogin = () => {
    // router.push("/auth/guest");
    router.push("/game/1");
  };
  return { login, guestLogin };
};

export default useLogin;
