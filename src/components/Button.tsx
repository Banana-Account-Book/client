"use client";

import { useRouter } from "next/navigation";

/** 임시버튼 */
export const Button = () => {
  const route = useRouter();
  return (
    <button onClick={() => route.push("/login")}>로그인 페이지로 이동</button>
  );
};
