"use client";
import Link from "next/link";
import React from "react";

interface PageNumber {
  teks: string;
  page: string;
}

export default function Pagination({
  currentPage,
  pageNumbers,
}: {
  currentPage: string;
  pageNumbers: PageNumber[];
}) {
  return (
    <section className="w-full flex justify-center items-center mb-5">
      <div className="gap-4 flex h-full items-center">
        {pageNumbers?.map((pageNumber, index) => (
          <Link
            key={`${index}-${pageNumber.teks}`}
            href={`/ongoing?page=${pageNumber.page ?? currentPage}`}
          >
            <div
              className={`${
                pageNumber.teks == currentPage && "bg-[var(--accent)]"
              } h-10 min-w-10 px-2 flex text-center items-center justify-center rounded-md cursor-pointer border border-[var(--accent)]`}
            >
              {pageNumber.teks}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
