"use client";
import useLogin from "./utils/useLogin";
export default function Home() {
  const { login, guestLogin } = useLogin();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>BLIND_CODING_TEST</h1>
      <p>from 42gg</p>
      <button onClick={login}>Login</button>
      <button onClick={guestLogin}>enter as a guest</button>
    </div>
  );
}
