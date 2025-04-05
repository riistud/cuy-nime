"use client";
import InternalError from "@/components/Error/InternalError";
import React from "react";

export default function error({ reset }: { reset: () => void }) {
  return <InternalError reset={reset} />;
}
