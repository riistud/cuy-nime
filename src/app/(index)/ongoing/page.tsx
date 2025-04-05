import AnimeList from "@/components/AnimeList/index";
import Pagination from "@/components/Pagination";
import MainContainer from "@/components/util/MainContainer";
import Title from "@/components/util/Title";
import { getOngoingAnime } from "@/services";
import React from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const { page } = await searchParams;
  const { data } = await getOngoingAnime(page);
  return (
    <MainContainer>
      <Title>List Anime Ongoing</Title>
      <AnimeList animes={data.animes} />
      <Pagination
        url="/ongoing"
        currentPage={data.pagination?.currentPage}
        pageNumbers={data.pagination?.pageNumbers}
      />
    </MainContainer>
  );
}
