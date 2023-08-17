export interface Pagination<T> {
  count: number;
  data: T[];
  limit: number;
  offset: number;
}