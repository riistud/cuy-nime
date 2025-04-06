export interface PaginationType {
  currentPage: string;
  pageNumbers: PageNumberType[];
}
export interface PageNumberType {
  teks: string | null;
  page: string | null;
}

//anime detail
export interface AnimeDetailTypes {
  title: string;
  image: string;
  subTitle: string;
  status: string;
  studio: string;
  release_date: string;
  durasi: string;
  season: string;
  type: string;
  posted_by: string;
  created_date: string;
  updated_date: string;
  category: Category[];
  episodes: Episode[];
}
export interface Category {
  categpry_name: string;
  category_link: string;
}
export interface Episode {
  episode_title: string;
  episode_slug: string;
  episode_no: string;
  episode_date: string;
}
