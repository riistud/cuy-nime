"use client";
import Link from "next/link";
import React from "react";

interface PageNumber {
  teks: string;
  page: string;
}

export default function Pagination({
  url,
  currentPage,
  pageNumbers,
}: {
  url: string;
  currentPage: string;
  pageNumbers: PageNumber[];
}) {
  return (
    <section className="container mx-auto px-5 flex justify-center items-center mb-5 ">
      <div className="gap-4 flex flex-wrap justify-center h-full items-center">
        {pageNumbers?.map((pageNumber, index) => (
          <Link
            key={`${index}-${pageNumber.teks}`}
            href={`${url}?page=${pageNumber.page ?? currentPage}`}
            scroll={true}
            onClick={() =>
              scrollTo({
                behavior: "smooth",
                top: 0,
              })
            }
          >
            <div
              className={`${
                pageNumber.teks == currentPage && "bg-[var(--accent)]"
              } md:text-base text-sm h-8 min-w-8 md:h-10 md:min-w-10 px-2 flex text-center items-center justify-center rounded-md cursor-pointer border border-[var(--accent)]`}
            >
              {pageNumber.teks}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
