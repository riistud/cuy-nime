"use client";
import AnimeList from "@/components/AnimeList/index";
import Pagination from "@/components/Pagination";
import MainContainer from "@/components/util/MainContainer";
import Title from "@/components/util/Title";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loading from "@/app/(index)/loading";
import { PaginationType } from "@/_types";
import InternalErrorClient from "@/components/Error/ServerErrorClient";

export default function OngoingAndCompletedPage({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_APP + "/api" + url;

  const page = useSearchParams().get("page");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [animes, setAnimes] = useState([]);
  const [pagination, setPagination] = useState<PaginationType | null>(null);

  // unMount
  useEffect(() => {
    setLoading(true);
    axios({
      url: !page ? baseUrl : `${baseUrl}?page=${page}`,
    })
      .then((res) => {
        setAnimes(res.data.animes);
        setPagination(res.data.pagination);
      })
      .catch(() => {
        setError(true);
      })
      .then(() => {
        setLoading(false);
      });
  }, [page, baseUrl]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <InternalErrorClient />;
  }

  return (
    <MainContainer>
      <Title>{title} ANIME LIST</Title>
      <AnimeList animes={animes} />
      <Pagination
        url={url}
        currentPage={pagination?.currentPage}
        pageNumbers={pagination?.pageNumbers}
      />
    </MainContainer>
  );
}
