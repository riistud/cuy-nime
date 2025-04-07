// import { Metadata } from "next";
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <section className=" min-h-screen container mx-auto pt-16 px-5">
      <h1>Play Anime {slug}</h1>
    </section>
  );
}
