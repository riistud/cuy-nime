const base_url = process.env.NEXT_PUBLIC_BASE_URL; // base url

export async function getAnimeOngoing() {
  const res = await fetch(`${base_url}/ongoing`, {
    cache: "force-cache",
    next: { revalidate: 60 * 60 },
  });
  return res.json();
}
