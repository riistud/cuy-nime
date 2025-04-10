import MainContainer from "@/components/util/MainContainer";
import authUserSession from "@/services/auth_session";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export async function generateMetadata() {
  const user = await authUserSession();
  return {
    title: "KuyNime - " + user?.name,
  };
}

export default async function Page() {
  const user = await authUserSession();

  return (
    <MainContainer>
      <section className=" w-full  my-auto md:w-6/12 xl:w-4/12 mx-auto">
        {/* card profile  */}
        <div className=" w-full bg-secondary p-5 rounded-lg mb-5">
          <h1 className="text-center mb-5 text-xl md:text-2xl font-extrabold">
            PROFILE
          </h1>
          <img
            src={user?.image ?? "/images/noProfile.png"}
            alt="..."
            className="w-4/12 aspect-square mx-auto rounded-full mb-5"
          />
          <div className=" text-sm md:text-base mb-5">
            <h3 className="text-center">{user?.name ?? "anonim"}</h3>
            <h3 className="text-center">
              {user?.email ?? "anonim@example.com"}
            </h3>
          </div>
          <div className="w-full flex justify-center">
            <Link
              href={"/api/auth/signout"}
              className="bg-red-500 text-white font-bold px-5 py-1 rounded-md active:scale-95 active:bg-red-700 transition-all hover:scale-105"
            >
              SignOut
            </Link>
          </div>
        </div>
        {/* end card profile  */}
        <div className="w-full p-5 bg-secondary rounded-lg mb-5 grid grid-cols-2 gap-5">
          <Link
            href={"/profile/collections"}
            className="columns-1 bg-accent text-dark text-center py-1 rounded-md font-bold"
          >
            Collections
          </Link>
          <Link
            href={"/profile/comments"}
            className="columns-1 bg-accent text-dark text-center py-1 rounded-md font-bold"
          >
            Comments
          </Link>
        </div>
      </section>
    </MainContainer>
  );
}
