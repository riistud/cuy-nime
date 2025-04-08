import { NextRequest, NextResponse } from "next/server";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function GET(request: NextRequest) {
  const sParams = request.nextUrl.searchParams;
  const q = sParams.get("q");
  const page = sParams.get("page");
  const fetchUrl = !page
    ? `${baseUrl}/search/?s=${q}`
    : `${baseUrl}/search/?s=${q}&page=${page}`;
  try {
    const result = await fetch(fetchUrl);
    const { data } = await result.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { message: "Error fetching data", error: "ERROR ASU" },
      { status: 500 }
    );
  }
}
