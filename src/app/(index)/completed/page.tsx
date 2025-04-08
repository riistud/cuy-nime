import OngoingAndCompletedPage from "@/Layout/OngoingAndCompleted";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "KuyNime - Completed",
};
export default function Page() {
  return <OngoingAndCompletedPage url="/completed" title="COMPLETED" />;
}
