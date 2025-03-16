"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function loginIsRequiredClient() {
  const { data: session } = useSession();
  const router = useRouter();
  
  if (!session) {
    router.push("/");
    return false;
  }
  
  return true;
}