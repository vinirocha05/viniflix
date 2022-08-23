import { Movie } from './Movie';

export type GetByGenre = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_resultas: number;
};
