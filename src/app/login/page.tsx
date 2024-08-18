"use client";

import { useRouter, useSearchParams } from "next/navigation";
import styles from "./login.module.css";
import axios from "@/lib/api";
import { Suspense, useEffect } from "react";

enum Providers {
  kakao = "카카오",
  naver = "네이버",
  google = "구글",
}
const providers = Object.keys(Providers);

const Login = () => {
  const route = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const code = params.get("code");
    const provider = params.get("provider");
    if (!code || !provider) return;
    login(code, provider);
  }, []);

  const redirectFromProvider = async (provider: string) => {
    try {
      const response = await axios.get(`/auth/${provider}`);
      route.push(response.data.url);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const login = async (code: string, provider: string) => {
    try {
      await axios.post(`/auth/${provider}`, {
        code,
      });
      route.push("/");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <main className={styles.main}>
      <Suspense>
        {providers.map((provider) => {
          return (
            <button
              key={provider}
              onClick={() => redirectFromProvider(provider)}
            >
              {provider} 로그인
            </button>
          );
        })}
      </Suspense>
    </main>
  );
};

export default Login;
