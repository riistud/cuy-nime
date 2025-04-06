const base_url = process.env.NEXT_PUBLIC_BASE_URL_APP; // base url
const baseUrlExt = process.env.NEXT_PUBLIC_BASE_URL;

export async function getAnimeOngoing() {
  const res = await fetch(`${base_url}/api/ongoing`, {
    cache: "force-cache",
    next: { revalidate: 60 * 60 },
  });
  return res.json();
}

export async function getAnimeCompleted() {
  const res = await fetch(`${base_url}/api/completed`, {
    cache: "force-cache",
    next: { revalidate: 60 * 60 },
  });
  return res.json();
}

export async function getAnimeSearch(keyword: string, page?: string) {
  const fetchUrl = !page
    ? `${base_url}/api/search?q=${keyword}`
    : `${base_url}/api/search?q=${keyword}&page=${page}`;
  const res = await fetch(fetchUrl);
  return res.json();
}
