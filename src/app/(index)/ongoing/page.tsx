import OngoingAndCompletedPage from "@/Layout/OngoingAndCompleted";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "KuyNime - Ongoing",
};

export default function Page() {
  return <OngoingAndCompletedPage url="/ongoing" title="ONGOING" />;
}
