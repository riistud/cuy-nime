import authUserSession from "@/services/auth_session";
import Link from "next/link";
import React from "react";

export default async function AuthActionBtn() {
  const user = await authUserSession();
  return (
    <>
      {user ? (
        <Link
          className="bg-secondary text-accent font-bold text-sm md:text-base px-5 py-1 rounded-md"
          href={"/profile"}
        >
          Profile
        </Link>
      ) : (
        <Link
          href={"/api/auth/signin"}
          className=" border border-dark text-dark font-bold text-sm md:text-base px-5 py-1 rounded-md"
        >
          SignIn
        </Link>
      )}
    </>
  );
}
