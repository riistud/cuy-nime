import authUserSession from "@/services/auth_session";
import Link from "next/link";
import React from "react";

export default async function AuthActionBtn() {
  const user = await authUserSession();
  return (
    <>
      {user ? (
        <Link href={"/api/auth/signout"}>Sign Out</Link>
      ) : (
        <Link href={"/api/auth/signin"}>Sign In</Link>
      )}
    </>
  );
}
