import { useRouter } from "next/navigation";

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
