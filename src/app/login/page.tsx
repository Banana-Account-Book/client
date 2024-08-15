"use client";

import { useRouter, useSearchParams } from "next/navigation";
import styles from "./login.module.css";
import axios from "@/lib/axios";
import { useEffect } from "react";

const Login = () => {
  const route = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const code = params.get("code");
    if (!code) return;
    login(code);
  }, []);

  const login = async (code: string) => {
    try {
      await axios.post("/auth/kakao", {
        code: code,
      });
      route.push("/");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <main className={styles.main}>
      <button
        onClick={async () => {
          try {
            const response = await axios.get("/auth/kakao");
            route.push(response.data.url);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }}
      >
        카카오 로그인
      </button>
    </main>
  );
};

export default Login;
