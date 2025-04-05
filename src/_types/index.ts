export interface PaginationType {
  currentPage: string;
  pageNumbers: PageNumberType[];
}
export interface PageNumberType {
  teks: string | null;
  page: string | null;
}
