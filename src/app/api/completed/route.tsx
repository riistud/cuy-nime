import { NextRequest, NextResponse } from "next/server";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function GET(request: NextRequest) {
  const sParams = request.nextUrl.searchParams;
  let page = sParams.get("page");
  if (page == "completed-anime") {
    page = "1";
  }
  const fetchUrl = !page
    ? `${baseUrl}/completed`
    : `${baseUrl}/completed/page/${page}`;
  try {
    const result = await fetch(fetchUrl);
    const data = await result.json();
    return NextResponse.json(data.data);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching data", error: "ERROR ASU" },
      { status: 500 }
    );
  }
}
