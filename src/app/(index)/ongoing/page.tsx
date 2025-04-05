import AnimeList from "@/components/AnimeList/index";
import MainContainer from "@/components/util/MainContainer";
import Title from "@/components/util/Title";
import { getOngoingAnime } from "@/services";
import React from "react";

export default async function Page() {
  const { data } = await getOngoingAnime();
  return (
    <MainContainer>
      <Title>List Anime Ongoing</Title>
      <AnimeList animes={data.animes} />
    </MainContainer>
  );
}
